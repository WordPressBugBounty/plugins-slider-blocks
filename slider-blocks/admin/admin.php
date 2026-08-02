<?php
/**
 * GutSlider admin dashboard bootstrap.
 *
 * Registers the admin menu, loads dashboard assets, and exposes the REST
 * endpoints used by the dashboard UI to persist changes.
 *
 * @package GutSliderBlocks
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'GutSlider_Admin' ) ) {

	/**
	 * Admin dashboard controller.
	 */
	class GutSlider_Admin {

		/**
		 * Option key holding the general settings array.
		 *
		 * @var string
		 */
		const SETTINGS_OPTION = 'gutslider_settings';

		/**
		 * Top level menu slug.
		 *
		 * @var string
		 */
		const MENU_SLUG = 'gutslider-blocks';

		/**
		 * Page slug for the blocks manager.
		 *
		 * @var string
		 */
		const BLOCKS_SLUG = 'gutslider-blocks-settings';

		/**
		 * Page slug for the settings screen.
		 *
		 * @var string
		 */
		const SETTINGS_SLUG = 'gutslider-settings';

		/**
		 * Default values for the general settings.
		 *
		 * @var array<string, mixed>
		 */
		private static $settings_defaults = array(
			'css_delivery'    => 'file',
			'google_fonts'    => true,
			'pattern_library' => true,
			'remove_data'     => false,
		);

		/**
		 * Constructor.
		 */
		public function __construct() {
			add_action( 'admin_menu', array( $this, 'admin_menu' ), 20 );
			add_action( 'admin_enqueue_scripts', array( $this, 'admin_assets' ) );
			add_action( 'rest_api_init', array( $this, 'register_routes' ) );
			add_filter( 'admin_body_class', array( $this, 'admin_body_class' ) );
			add_filter( 'admin_footer_text', array( $this, 'admin_footer_text' ) );
		}

		/* ---------------------------------------------------------------
		 * Settings helpers
		 * ------------------------------------------------------------- */

		/**
		 * Get the general settings, merged over the defaults.
		 *
		 * @return array<string, mixed> Settings array.
		 */
		public static function get_settings() {
			$stored = get_option( self::SETTINGS_OPTION, array() );

			if ( ! is_array( $stored ) ) {
				$stored = array();
			}

			return wp_parse_args( $stored, self::$settings_defaults );
		}

		/**
		 * Get a single setting value.
		 *
		 * @param string $key     Setting key.
		 * @param mixed  $default Fallback when the key is unknown.
		 * @return mixed Setting value.
		 */
		public static function get_setting( $key, $default = null ) {
			$settings = self::get_settings();

			return array_key_exists( $key, $settings ) ? $settings[ $key ] : $default;
		}

		/**
		 * Build the option key that stores a block's enabled state.
		 *
		 * @param string $block_name Block directory name.
		 * @return string Option key.
		 */
		public static function block_option_key( $block_name ) {
			return 'gut_' . str_replace( '-', '_', $block_name );
		}

		/**
		 * Read the block definitions from the shared data file.
		 *
		 * @return array<int, array<string, mixed>> Block definitions.
		 */
		public function get_blocks() {
			$blocks_file = GUTSLIDER_DIR . '/includes/Api/blocks.php';

			if ( ! file_exists( $blocks_file ) ) {
				return array();
			}

			$blocks = include $blocks_file;

			return is_array( $blocks ) ? $blocks : array();
		}

		/**
		 * Decorate the block definitions with their current state.
		 *
		 * @return array<int, array<string, mixed>> Block definitions.
		 */
		public function get_blocks_with_state() {
			$has_pro = defined( 'GUTSLIDER_PRO_VERSION' );
			$blocks  = array();

			foreach ( $this->get_blocks() as $block ) {
				$is_pro = ! empty( $block['is_pro'] );

				$block['is_pro']     = $is_pro;
				$block['locked']     = $is_pro && ! $has_pro;
				$block['option_key'] = self::block_option_key( $block['name'] );
				$block['enabled']    = $block['locked']
					? false
					: (bool) get_option( $block['option_key'], true );

				$blocks[] = $block;
			}

			return $blocks;
		}

		/**
		 * Count how many blocks are currently enabled.
		 *
		 * @param array<int, array<string, mixed>> $blocks Decorated blocks.
		 * @return int Enabled block count.
		 */
		public static function count_enabled( array $blocks ) {
			$count = 0;

			foreach ( $blocks as $block ) {
				if ( ! empty( $block['enabled'] ) ) {
					++$count;
				}
			}

			return $count;
		}

		/* ---------------------------------------------------------------
		 * Menu + assets
		 * ------------------------------------------------------------- */

		/**
		 * Register the admin menu and its sub pages.
		 *
		 * @return void
		 */
		public function admin_menu() {
			$icon = 'data:image/svg+xml;base64,' . base64_encode( '<svg width="20" height="20" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg"><path fill="black" d="M5 45C3.625 45 2.44833 44.5108 1.47 43.5325C0.491667 42.5542 0.00166667 41.3767 0 40V5C0 3.625 0.49 2.44833 1.47 1.47C2.45 0.491667 3.62667 0.00166667 5 0H40C41.375 0 42.5525 0.49 43.5325 1.47C44.5125 2.45 45.0017 3.62667 45 5V40C45 41.375 44.5108 42.5525 43.5325 43.5325C42.5542 44.5125 41.3767 45.0017 40 45H5ZM17.5 35H27.5C28.875 35 30.0525 34.5108 31.0325 33.5325C32.0125 32.5542 32.5017 31.3767 32.5 30V20H22.5V25H27.5V30H17.5V15H32.5C32.5 13.625 32.0108 12.4483 31.0325 11.47C30.0542 10.4917 28.8767 10.0017 27.5 10H17.5C16.125 10 14.9483 10.49 13.97 11.47C12.9917 12.45 12.5017 13.6267 12.5 15V30C12.5 31.375 12.99 32.5525 13.97 33.5325C14.95 34.5125 16.1267 35.0017 17.5 35Z"/></svg>' ); // phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_encode -- Inline menu icon.

			add_menu_page(
				__( 'GutSlider', 'slider-blocks' ),
				__( 'GutSlider', 'slider-blocks' ),
				'manage_options',
				self::MENU_SLUG,
				array( $this, 'render_dashboard_page' ),
				$icon,
				100
			);

			add_submenu_page(
				self::MENU_SLUG,
				__( 'Dashboard', 'slider-blocks' ),
				__( 'Dashboard', 'slider-blocks' ),
				'manage_options',
				self::MENU_SLUG,
				array( $this, 'render_dashboard_page' )
			);

			add_submenu_page(
				self::MENU_SLUG,
				__( 'Blocks', 'slider-blocks' ),
				__( 'Blocks', 'slider-blocks' ),
				'manage_options',
				self::BLOCKS_SLUG,
				array( $this, 'render_blocks_page' )
			);

			add_submenu_page(
				self::MENU_SLUG,
				__( 'Settings', 'slider-blocks' ),
				__( 'Settings', 'slider-blocks' ),
				'manage_options',
				self::SETTINGS_SLUG,
				array( $this, 'render_settings_page' )
			);
		}

		/**
		 * Screen IDs that should receive the dashboard assets.
		 *
		 * @return array<int, string> Screen IDs.
		 */
		public static function screen_ids() {
			return array(
				'toplevel_page_' . self::MENU_SLUG,
				'gutslider_page_' . self::BLOCKS_SLUG,
				'gutslider_page_' . self::SETTINGS_SLUG,
				'gutslider_page_gutslider-license',
			);
		}

		/**
		 * Whether the current request is a GutSlider dashboard screen.
		 *
		 * @param string $screen Current screen ID.
		 * @return bool True on a dashboard screen.
		 */
		public static function is_dashboard_screen( $screen = '' ) {
			if ( '' === $screen ) {
				$current = function_exists( 'get_current_screen' ) ? get_current_screen() : null;
				$screen  = $current ? $current->id : '';
			}

			return in_array( $screen, self::screen_ids(), true );
		}

		/**
		 * Enqueue the dashboard stylesheet and script.
		 *
		 * @param string $screen Current screen ID.
		 * @return void
		 */
		public function admin_assets( $screen ) {
			if ( ! self::is_dashboard_screen( $screen ) ) {
				return;
			}

			wp_enqueue_style(
				'gutslider-admin',
				GUTSLIDER_URL . 'admin/css/admin.css',
				array(),
				GUTSLIDER_VERSION
			);

			wp_enqueue_script(
				'gutslider-admin',
				GUTSLIDER_URL . 'admin/js/admin.js',
				array( 'wp-i18n' ),
				GUTSLIDER_VERSION,
				true
			);

			wp_localize_script(
				'gutslider-admin',
				'gutslider',
				array(
					'version'    => GUTSLIDER_VERSION,
					'isPro'      => defined( 'GUTSLIDER_PRO_VERSION' ),
					'proVersion' => defined( 'GUTSLIDER_PRO_VERSION' ) ? GUTSLIDER_PRO_VERSION : '',
					'restUrl'    => esc_url_raw( rest_url( 'gutslider/v1/' ) ),
					'nonce'      => wp_create_nonce( 'wp_rest' ),
					'pricingUrl' => 'https://gutslider.com/pricing',
					'i18n'       => array(
						'saved'         => __( 'Changes saved', 'slider-blocks' ),
						'saveFailed'    => __( 'Could not save. Please try again.', 'slider-blocks' ),
						'discarded'     => __( 'Changes discarded', 'slider-blocks' ),
						'cacheCleared'  => __( 'Style cache cleared', 'slider-blocks' ),
						/* translators: %d: number of unsaved changes. */
						'changeSingle'  => __( '%d unsaved change', 'slider-blocks' ),
						/* translators: %d: number of unsaved changes. */
						'changePlural'  => __( '%d unsaved changes', 'slider-blocks' ),
						'leaveWarning'  => __( 'You have unsaved changes.', 'slider-blocks' ),
						/* translators: 1: enabled block count, 2: total block count. */
						'enabledCount'  => __( '%1$d of %2$d enabled', 'slider-blocks' ),
					),
				)
			);
		}

		/**
		 * Add a marker class so the stylesheet can reset the admin chrome.
		 *
		 * @param string $classes Existing body classes.
		 * @return string Filtered body classes.
		 */
		public function admin_body_class( $classes ) {
			if ( self::is_dashboard_screen() ) {
				$classes .= ' gutslider-admin-page ';
			}

			return $classes;
		}

		/**
		 * Replace the admin footer credit on dashboard screens.
		 *
		 * @param string $text Default footer text.
		 * @return string Filtered footer text.
		 */
		public function admin_footer_text( $text ) {
			if ( ! self::is_dashboard_screen() ) {
				return $text;
			}

			return sprintf(
				/* translators: %s: link to the review page. */
				esc_html__( 'Enjoying GutSlider? %s on WordPress.org.', 'slider-blocks' ),
				'<a href="https://wordpress.org/support/plugin/slider-blocks/reviews/" target="_blank" rel="noopener noreferrer">' . esc_html__( 'Leave a review', 'slider-blocks' ) . '</a>'
			);
		}

		/* ---------------------------------------------------------------
		 * Views
		 * ------------------------------------------------------------- */

		/**
		 * Load a dashboard view.
		 *
		 * @param string               $view View file name without extension.
		 * @param array<string, mixed> $args Variables exposed to the view.
		 * @return void
		 */
		private function view( $view, array $args = array() ) {
			$file = GUTSLIDER_DIR . '/admin/views/' . $view . '.php';

			if ( ! file_exists( $file ) ) {
				return;
			}

			$admin   = $this;
			$has_pro = defined( 'GUTSLIDER_PRO_VERSION' );

			// phpcs:ignore WordPress.PHP.DontExtract.extract_extract -- Controlled, internal view data.
			extract( $args, EXTR_SKIP );

			include $file;
		}

		/**
		 * Render the dashboard (overview) screen.
		 *
		 * @return void
		 */
		public function render_dashboard_page() {
			$blocks = $this->get_blocks_with_state();

			$this->view(
				'dashboard',
				array(
					'blocks'      => $blocks,
					'total'       => count( $blocks ),
					'enabled'     => self::count_enabled( $blocks ),
					'current'     => self::MENU_SLUG,
				)
			);
		}

		/**
		 * Render the blocks manager screen.
		 *
		 * @return void
		 */
		public function render_blocks_page() {
			$blocks = $this->get_blocks_with_state();

			$this->view(
				'blocks',
				array(
					'blocks'  => $blocks,
					'total'   => count( $blocks ),
					'enabled' => self::count_enabled( $blocks ),
					'current' => self::BLOCKS_SLUG,
				)
			);
		}

		/**
		 * Render the settings screen.
		 *
		 * @return void
		 */
		public function render_settings_page() {
			$this->view(
				'settings',
				array(
					'settings' => self::get_settings(),
					'current'  => self::SETTINGS_SLUG,
				)
			);
		}

		/* ---------------------------------------------------------------
		 * REST endpoints
		 * ------------------------------------------------------------- */

		/**
		 * Register the dashboard REST routes.
		 *
		 * @return void
		 */
		public function register_routes() {
			register_rest_route(
				'gutslider/v1',
				'/dashboard/blocks',
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'rest_save_blocks' ),
					'permission_callback' => array( $this, 'can_manage' ),
					'args'                => array(
						'blocks' => array(
							'required' => true,
							'type'     => 'object',
						),
					),
				)
			);

			register_rest_route(
				'gutslider/v1',
				'/dashboard/settings',
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'rest_save_settings' ),
					'permission_callback' => array( $this, 'can_manage' ),
					'args'                => array(
						'settings' => array(
							'required' => true,
							'type'     => 'object',
						),
					),
				)
			);

			register_rest_route(
				'gutslider/v1',
				'/dashboard/clear-cache',
				array(
					'methods'             => WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'rest_clear_cache' ),
					'permission_callback' => array( $this, 'can_manage' ),
				)
			);
		}

		/**
		 * Permission callback for the dashboard routes.
		 *
		 * @return bool True when the user may manage options.
		 */
		public function can_manage() {
			return current_user_can( 'manage_options' );
		}

		/**
		 * Persist the enabled state of one or more blocks.
		 *
		 * Writes both the per-block option consumed by the block registrar
		 * and the `active` flag on the cached block list, keeping the two
		 * storage formats in sync.
		 *
		 * @param WP_REST_Request $request Incoming request.
		 * @return WP_REST_Response|WP_Error Response payload.
		 */
		public function rest_save_blocks( WP_REST_Request $request ) {
			$requested = $request->get_param( 'blocks' );

			if ( ! is_array( $requested ) || empty( $requested ) ) {
				return new WP_Error(
					'gutslider_invalid_payload',
					__( 'No block changes were supplied.', 'slider-blocks' ),
					array( 'status' => 400 )
				);
			}

			$has_pro = defined( 'GUTSLIDER_PRO_VERSION' );
			$known   = array();

			foreach ( $this->get_blocks() as $block ) {
				$known[ $block['name'] ] = ! empty( $block['is_pro'] );
			}

			$saved = array();

			foreach ( $requested as $name => $enabled ) {
				$name = sanitize_text_field( (string) $name );

				if ( ! isset( $known[ $name ] ) ) {
					continue;
				}

				// Pro blocks cannot be enabled without the Pro plugin.
				if ( $known[ $name ] && ! $has_pro ) {
					continue;
				}

				$enabled = rest_sanitize_boolean( $enabled );

				/*
				 * Store '1'/'0' rather than a boolean: update_option() treats a
				 * `false` value as identical to a missing option and skips the
				 * write, which would silently drop the first "disable" of a
				 * block that has never been toggled before.
				 */
				update_option( self::block_option_key( $name ), $enabled ? '1' : '0' );
				$saved[ $name ] = $enabled;
			}

			$this->sync_block_list( $saved );

			return rest_ensure_response(
				array(
					'success' => true,
					'blocks'  => $saved,
				)
			);
		}

		/**
		 * Mirror enabled states onto the cached `gutslider_blocks` option.
		 *
		 * @param array<string, bool> $saved Map of block name to enabled state.
		 * @return void
		 */
		private function sync_block_list( array $saved ) {
			if ( empty( $saved ) ) {
				return;
			}

			$blocks = get_option( 'gutslider_blocks' );

			if ( ! is_array( $blocks ) || empty( $blocks ) ) {
				return;
			}

			$changed = false;

			foreach ( $blocks as $index => $block ) {
				if ( isset( $block['name'], $saved[ $block['name'] ] ) ) {
					$blocks[ $index ]['active'] = $saved[ $block['name'] ];
					$changed                    = true;
				}
			}

			if ( $changed ) {
				update_option( 'gutslider_blocks', $blocks );
			}
		}

		/**
		 * Persist the general settings.
		 *
		 * @param WP_REST_Request $request Incoming request.
		 * @return WP_REST_Response|WP_Error Response payload.
		 */
		public function rest_save_settings( WP_REST_Request $request ) {
			$incoming = $request->get_param( 'settings' );

			if ( ! is_array( $incoming ) ) {
				return new WP_Error(
					'gutslider_invalid_payload',
					__( 'No settings were supplied.', 'slider-blocks' ),
					array( 'status' => 400 )
				);
			}

			$settings          = self::get_settings();
			$previous_delivery = $settings['css_delivery'];

			if ( isset( $incoming['css_delivery'] ) ) {
				$settings['css_delivery'] = in_array( $incoming['css_delivery'], array( 'file', 'inline' ), true )
					? $incoming['css_delivery']
					: 'file';
			}

			if ( isset( $incoming['google_fonts'] ) ) {
				$settings['google_fonts'] = rest_sanitize_boolean( $incoming['google_fonts'] );
			}

			if ( isset( $incoming['pattern_library'] ) ) {
				$settings['pattern_library'] = rest_sanitize_boolean( $incoming['pattern_library'] );
			}

			if ( isset( $incoming['remove_data'] ) ) {
				$settings['remove_data'] = rest_sanitize_boolean( $incoming['remove_data'] );
			}

			update_option( self::SETTINGS_OPTION, $settings );

			/*
			 * Switching to inline delivery leaves the previously generated
			 * stylesheets orphaned in the uploads directory, so clear them out.
			 */
			if ( 'inline' === $settings['css_delivery'] && 'inline' !== $previous_delivery ) {
				self::delete_generated_css();
			}

			return rest_ensure_response(
				array(
					'success'  => true,
					'settings' => $settings,
				)
			);
		}

		/**
		 * Delete every generated stylesheet in the uploads directory.
		 *
		 * @return WP_REST_Response Response payload.
		 */
		public function rest_clear_cache() {
			return rest_ensure_response(
				array(
					'success' => true,
					'deleted' => self::delete_generated_css(),
				)
			);
		}

		/**
		 * Remove all generated stylesheets from the uploads directory.
		 *
		 * @return int Number of files deleted.
		 */
		private static function delete_generated_css() {
			$upload_dir = wp_upload_dir();
			$css_dir    = trailingslashit( $upload_dir['basedir'] ) . 'gutslider-styles';
			$deleted    = 0;

			if ( is_dir( $css_dir ) ) {
				$files = glob( $css_dir . '/*.css' );

				if ( is_array( $files ) ) {
					foreach ( $files as $file ) {
						if ( is_file( $file ) && wp_delete_file_from_directory( $file, $css_dir ) ) {
							++$deleted;
						}
					}
				}
			}

			return $deleted;
		}
	}
}

new GutSlider_Admin();
