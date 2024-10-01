<?php
/**
 * Plugin Admin Page 
 * 
 */	

 if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

 if( ! class_exists( 'GutSlider_Admin' ) ) {

    class GutSlider_Admin {

        /**
         * Constructor
         * return void
         */
        public function __construct() {
            add_action( 'admin_menu', [ $this, 'admin_menu' ] );
            add_action( 'admin_enqueue_scripts', [ $this, 'admin_assests' ] );

            // register settings
            add_action('admin_init', [ $this, 'custom_register_settings' ]);
            add_action( 'rest_api_init', [ $this, 'custom_register_settings' ] );

            // include admin data SDk 
            add_action( 'admin_init', [ $this, 'dci_plugin_gutslider' ] );
        }
        
        /**
         * Enqueue admin scripts
         */
        public function admin_assests( $screen ) {

            if( $screen === 'toplevel_page_gutslider-blocks' ){

                $dependencyFile = trailingslashit( GUTSLIDER_DIR ) . '/build/admin/admin.asset.php';
                $dependencies   = file_exists( $dependencyFile ) ? require_once $dependencyFile : [];
            
                wp_enqueue_style( 'gutslider-admin-style', trailingslashit( GUTSLIDER_URL ) . 'build/admin/style-admin.css', [], GUTSLIDER_VERSION );
                wp_enqueue_script( 'gutslider-admin-script', trailingslashit( GUTSLIDER_URL ) . 'build/admin/admin.js', $dependencies[ 'dependencies' ] , GUTSLIDER_VERSION, true );

                // enqueue wp-style
                wp_enqueue_style( 'wp-components' );

                // localize script
                wp_localize_script(
                    'gutslider-admin-script',
                    'gutslider',
                    [
                        'version' => GUTSLIDER_VERSION,
                        'changeLogs' => $this->get_change_logs()
                    ]
                );

            }
        }
    
        /**
         * Add admin menu
         */
        public function admin_menu() {
            add_menu_page( __( 'GutSlider', 'slider-blocks' ), __( 'GutSlider', 'slider-blocks' ), 'manage_options', 'gutslider-blocks', [ $this, 'gutslider_admin_page' ], 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iMTIiIGZpbGw9IiNEOUQ5RDkiLz4KPHBhdGggZD0iTTE1IDdIMTEuODIzNUg5VjE3SDE1VjEyLjQxNjdIMTIuODgyNEgxMS44MjM1IiBzdHJva2U9IiMxRDIzMjciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=', 100 );
        }
    
        /**
         * Admin page
         */
        public function gutslider_admin_page() {
            ?>
                <div id="gutslider"></div>
            <?php
        }

        /**
         * Register settings
         * return void
         */
        public function custom_register_settings() {

            // fixed content slider 
            register_setting('rest-api-settings', 'gut_fixed_content_slider', array(
                'type'              => 'boolean', 
                'default'           => true,     
                'show_in_rest'      => true,     
                'sanitize_callback' => 'rest_sanitize_boolean',
            ));

            // any content 
            register_setting('rest-api-settings', 'gut_any_content_slider', array(
                'type'              => 'boolean', 
                'default'           => true,     
                'show_in_rest'      => true,     
                'sanitize_callback' => 'rest_sanitize_boolean',
            ));

            // testimonial slider 
            register_setting('rest-api-settings', 'gut_testimonial_slider', array(
                'type'              => 'boolean', 
                'default'           => true,     
                'show_in_rest'      => true,     
                'sanitize_callback' => 'rest_sanitize_boolean',
            ));

            // post slider
            register_setting('rest-api-settings', 'gut_post_slider', array(
                'type'              => 'boolean', 
                'default'           => true,     
                'show_in_rest'      => true,     
                'sanitize_callback' => 'rest_sanitize_boolean',
            ));

            // photo carousel
            register_setting('rest-api-settings', 'gut_photo_carousel', array(
                'type'              => 'boolean', 
                'default'           => true,     
                'show_in_rest'      => true,     
                'sanitize_callback' => 'rest_sanitize_boolean',
            ));

            // logo carousel
            register_setting('rest-api-settings', 'gut_logo_carousel', array(
                'type'              => 'boolean', 
                'default'           => true,     
                'show_in_rest'      => true,     
                'sanitize_callback' => 'rest_sanitize_boolean',
            ));

            // before after 
            register_setting('rest-api-settings', 'gut_before_after_slider', array(
                'type'              => 'boolean', 
                'default'           => true,     
                'show_in_rest'      => true,     
                'sanitize_callback' => 'rest_sanitize_boolean',
            ));

            // before after 
            register_setting('rest-api-settings', 'gut_videos_carousel', array(
                'type'              => 'boolean', 
                'default'           => true,     
                'show_in_rest'      => true,     
                'sanitize_callback' => 'rest_sanitize_boolean',
            ));
        }


        /**
         * Include data SDK 
         */
        public function dci_plugin_gutslider() {
            // Include DCI SDK.
            require_once dirname( __FILE__ ) . '/dci/start.php';
            dci_dynamic_init( array(
                'sdk_version'          => '1.2.1',
                'product_id'           => 3,
                'plugin_name'          => 'GutSlider',                                                     // make simple, must not empty
                'plugin_title'         => 'GutSlider',                                                     // You can describe your plugin title here
                'api_endpoint'         => 'https://dashboard.codedivo.com/wp-json/dci/v1/data-insights',
                'slug'                 => 'gutslider-blocks',
                'core_file'            => false,
                'plugin_deactivate_id' => false,
                'menu'                 => array(
                    'slug' => 'gutslider-blocks',
                ),
                'public_key'          => 'pk_KxU4qcYXPyqvBDwsyyBkbCfY9Gulc1z5',
                'is_premium'          => false,
                'popup_notice'        => false,
                'deactivate_feedback' => true,
                'delay_time'          => [ 
                    'time' => 3 * DAY_IN_SECONDS,
                ],
                'text_domain' => 'slider-blocks',
                'plugin_msg'  => '
                    <p>Thank you for using GutSlider! 🎉</p>
                    <p>
                        We collect some non-sensitive data to improve our product and decide which features to build next.
                    </p>',
            ) );
        }

        /**
         * GutSlider Changelogs 
         */
        public function get_change_logs() {
            $changelog_file = GUTSLIDER_DIR . '/changelogs.json';
            
            // Initialize WP_Filesystem
            global $wp_filesystem;
            if ( empty( $wp_filesystem ) ) {
                require_once ( ABSPATH . '/wp-admin/includes/file.php' );
                WP_Filesystem();
            }
            
            // Check if file exists
            if ( ! $wp_filesystem->exists( $changelog_file ) ) {
                return false; // Or handle the error as appropriate for your use case
            }
            
            // Get contents of the file
            $changelogs = $wp_filesystem->get_contents( $changelog_file );
            
            // Decode JSON
            $changelogs = json_decode( $changelogs, true );
            
            return $changelogs;
        }
    }
 }


new GutSlider_Admin(); // initialize the class