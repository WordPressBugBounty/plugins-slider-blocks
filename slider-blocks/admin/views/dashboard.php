<?php
/**
 * Dashboard (overview) screen.
 *
 * @package GutSliderBlocks
 *
 * @var GutSlider_Admin $admin   Admin controller.
 * @var array           $blocks  Decorated block definitions.
 * @var int             $total   Total block count.
 * @var int             $enabled Enabled block count.
 * @var string          $current Current page slug.
 * @var bool            $has_pro Whether the Pro plugin is active.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$gs_free_total = 0;
$gs_pro_total  = 0;

foreach ( $blocks as $gs_block ) {
	if ( ! empty( $gs_block['is_pro'] ) ) {
		++$gs_pro_total;
	} else {
		++$gs_free_total;
	}
}

require GUTSLIDER_DIR . '/admin/views/header.php';
?>

<section class="gs-hero">
	<div class="gs-shell">
		<div class="gs-hero__grid">
			<div class="gs-hero__copy">
				<span class="gs-eyebrow"><?php esc_html_e( 'GutSlider Blocks', 'slider-blocks' ); ?></span>
				<h1 class="gs-hero__title"><?php esc_html_e( 'Sliders that feel effortless.', 'slider-blocks' ); ?></h1>
				<p class="gs-hero__lead">
					<?php esc_html_e( 'Every slider, carousel and marquee you need — built natively for the block editor. Turn on what you use, switch off the rest, keep your site light.', 'slider-blocks' ); ?>
				</p>
				<div class="gs-hero__actions">
					<a class="gs-btn gs-btn--primary" href="<?php echo esc_url( admin_url( 'admin.php?page=gutslider-blocks-settings' ) ); ?>">
						<?php esc_html_e( 'Manage blocks', 'slider-blocks' ); ?>
						<svg class="gs-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
					</a>
					<a class="gs-btn gs-btn--quiet" href="<?php echo esc_url( admin_url( 'post-new.php?post_type=page' ) ); ?>">
						<?php esc_html_e( 'Create a page', 'slider-blocks' ); ?>
					</a>
				</div>
			</div>

			<div class="gs-hero__stats">
				<div class="gs-stat">
					<span class="gs-stat__value" data-gs-count="<?php echo esc_attr( (string) $enabled ); ?>"><?php echo esc_html( (string) $enabled ); ?></span>
					<span class="gs-stat__label"><?php esc_html_e( 'Blocks active', 'slider-blocks' ); ?></span>
					<span class="gs-stat__meta">
						<?php
						printf(
							/* translators: %d: total number of blocks. */
							esc_html__( 'of %d available', 'slider-blocks' ),
							(int) $total
						);
						?>
					</span>
					<div class="gs-meter" role="img" aria-label="<?php echo esc_attr( sprintf( /* translators: 1: enabled count, 2: total count. */ __( '%1$d of %2$d blocks enabled', 'slider-blocks' ), (int) $enabled, (int) $total ) ); ?>">
						<span class="gs-meter__fill" style="--gs-meter:<?php echo esc_attr( (string) ( $total > 0 ? round( ( $enabled / $total ) * 100 ) : 0 ) ); ?>%"></span>
					</div>
				</div>

				<div class="gs-stat gs-stat--split">
					<div>
						<span class="gs-stat__value"><?php echo esc_html( (string) $gs_free_total ); ?></span>
						<span class="gs-stat__label"><?php esc_html_e( 'Free blocks', 'slider-blocks' ); ?></span>
					</div>
					<div>
						<span class="gs-stat__value"><?php echo esc_html( (string) $gs_pro_total ); ?></span>
						<span class="gs-stat__label"><?php esc_html_e( 'Pro blocks', 'slider-blocks' ); ?></span>
					</div>
				</div>

				<div class="gs-stat gs-stat--status <?php echo $has_pro ? 'is-pro' : ''; ?>">
					<span class="gs-stat__label"><?php esc_html_e( 'Your plan', 'slider-blocks' ); ?></span>
					<span class="gs-stat__value gs-stat__value--sm">
						<?php echo $has_pro ? esc_html__( 'GutSlider Pro', 'slider-blocks' ) : esc_html__( 'GutSlider Free', 'slider-blocks' ); ?>
					</span>
					<?php if ( $has_pro ) : ?>
						<a class="gs-link" href="<?php echo esc_url( admin_url( 'admin.php?page=gutslider-license' ) ); ?>"><?php esc_html_e( 'Manage license', 'slider-blocks' ); ?></a>
					<?php else : ?>
						<a class="gs-link" href="https://gutslider.com/pricing" target="_blank" rel="noopener noreferrer">
							<?php
							printf(
								/* translators: %d: number of Pro blocks. */
								esc_html__( 'Unlock %d Pro blocks', 'slider-blocks' ),
								(int) $gs_pro_total
							);
							?>
						</a>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>
</section>

<div class="gs-shell gs-stack">

	<section class="gs-section">
		<div class="gs-section__head">
			<h2 class="gs-section__title"><?php esc_html_e( 'Get started', 'slider-blocks' ); ?></h2>
			<p class="gs-section__sub"><?php esc_html_e( 'Three minutes from install to your first slider.', 'slider-blocks' ); ?></p>
		</div>

		<div class="gs-grid gs-grid--feature">
			<div class="gs-card gs-card--media">
				<div class="gs-embed">
					<iframe
						src="https://www.youtube-nocookie.com/embed/P9Zj4bSVq4I"
						title="<?php esc_attr_e( 'GutSlider walkthrough', 'slider-blocks' ); ?>"
						loading="lazy"
						allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
				<div class="gs-card__body">
					<span class="gs-card__kicker">
						<svg class="gs-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M8 5.5v13l11-6.5z" /></svg>
						<?php esc_html_e( 'Watch the walkthrough', 'slider-blocks' ); ?>
					</span>
					<h3 class="gs-card__title gs-card__title--lg"><?php esc_html_e( 'Build your first slider in three minutes', 'slider-blocks' ); ?></h3>
					<p class="gs-card__text"><?php esc_html_e( 'A short tour of the blocks, the controls and the responsive settings.', 'slider-blocks' ); ?></p>
				</div>
			</div>

			<div class="gs-stack gs-stack--sm">
				<?php
				$gs_steps = array(
					array(
						'n'    => '01',
						'title' => __( 'Pick your blocks', 'slider-blocks' ),
						'text'  => __( 'Disable anything you will not use so the editor stays fast and tidy.', 'slider-blocks' ),
						'link'  => admin_url( 'admin.php?page=gutslider-blocks-settings' ),
						'label' => __( 'Open blocks', 'slider-blocks' ),
					),
					array(
						'n'    => '02',
						'title' => __( 'Insert & style', 'slider-blocks' ),
						'text'  => __( 'Search "GutSlider" in the block inserter, then style it from the sidebar.', 'slider-blocks' ),
						'link'  => 'https://gutslider.com/docs',
						'label' => __( 'Read the docs', 'slider-blocks' ),
						'ext'   => true,
					),
					array(
						'n'    => '03',
						'title' => __( 'Tune performance', 'slider-blocks' ),
						'text'  => __( 'Choose how CSS is delivered and whether Google Fonts load on the front end.', 'slider-blocks' ),
						'link'  => admin_url( 'admin.php?page=gutslider-settings' ),
						'label' => __( 'Open settings', 'slider-blocks' ),
					),
				);
				?>
				<?php foreach ( $gs_steps as $gs_step ) : ?>
					<div class="gs-card gs-card--step">
						<span class="gs-step__n"><?php echo esc_html( $gs_step['n'] ); ?></span>
						<div class="gs-card__body">
							<h3 class="gs-card__title"><?php echo esc_html( $gs_step['title'] ); ?></h3>
							<p class="gs-card__text"><?php echo esc_html( $gs_step['text'] ); ?></p>
							<a class="gs-link" href="<?php echo esc_url( $gs_step['link'] ); ?>" <?php echo empty( $gs_step['ext'] ) ? '' : 'target="_blank" rel="noopener noreferrer"'; ?>>
								<?php echo esc_html( $gs_step['label'] ); ?>
							</a>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>

		<div class="gs-grid gs-grid--3">
			<?php
				$gs_support = array(
					array(
						'title' => __( 'Documentation', 'slider-blocks' ),
						'text'  => __( 'Guides, block references and troubleshooting.', 'slider-blocks' ),
						'label' => __( 'Browse docs', 'slider-blocks' ),
						'link'  => 'https://gutslider.com/docs',
						'icon'  => '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
					),
					array(
						'title' => __( 'Support', 'slider-blocks' ),
						'text'  => __( 'Stuck on something? Send us the details and we will dig in.', 'slider-blocks' ),
						'label' => __( 'Open a ticket', 'slider-blocks' ),
						'link'  => 'https://gutslider.com/support',
						'icon'  => '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
					),
					array(
						'title' => __( 'Leave a review', 'slider-blocks' ),
						'text'  => __( 'Reviews keep the plugin free and moving forward.', 'slider-blocks' ),
						'label' => __( 'Rate on WordPress.org', 'slider-blocks' ),
						'link'  => 'https://wordpress.org/support/plugin/slider-blocks/reviews/',
						'icon'  => '<path d="m12 3 2.6 5.7 6.4.7-4.7 4.3 1.3 6.3L12 17l-5.6 3 1.3-6.3L3 9.4l6.4-.7z"/>',
					),
				);
				?>
				<?php foreach ( $gs_support as $gs_item ) : ?>
					<a class="gs-card gs-card--link" href="<?php echo esc_url( $gs_item['link'] ); ?>" target="_blank" rel="noopener noreferrer">
						<span class="gs-card__icon">
							<svg class="gs-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
								<?php echo $gs_item['icon']; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Static inline SVG path data. ?>
							</svg>
						</span>
						<div class="gs-card__body">
							<h3 class="gs-card__title"><?php echo esc_html( $gs_item['title'] ); ?></h3>
							<p class="gs-card__text"><?php echo esc_html( $gs_item['text'] ); ?></p>
							<span class="gs-link"><?php echo esc_html( $gs_item['label'] ); ?></span>
						</div>
					</a>
				<?php endforeach; ?>
		</div>
	</section>

	<?php if ( ! $has_pro ) : ?>
		<section class="gs-promo">
			<div class="gs-promo__copy">
				<span class="gs-eyebrow gs-eyebrow--light"><?php esc_html_e( 'GutSlider Pro', 'slider-blocks' ); ?></span>
				<h2 class="gs-promo__title">
					<?php
					printf(
						/* translators: %d: number of Pro blocks. */
						esc_html__( '%d more ways to move.', 'slider-blocks' ),
						(int) $gs_pro_total
					);
					?>
				</h2>
				<p class="gs-promo__text"><?php esc_html_e( 'Shader, shutters, slicer, tinder, 3D, panorama and WooCommerce carousels — plus priority support and one year of updates.', 'slider-blocks' ); ?></p>
				<a class="gs-btn gs-btn--invert" href="https://gutslider.com/pricing" target="_blank" rel="noopener noreferrer">
					<?php esc_html_e( 'See pricing', 'slider-blocks' ); ?>
					<svg class="gs-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
				</a>
			</div>
			<ul class="gs-promo__list">
				<?php
				$gs_pro_points = array(
					sprintf(
						/* translators: %d: number of Pro blocks. */
						__( '%d premium slider & carousel blocks', 'slider-blocks' ),
						(int) $gs_pro_total
					),
					__( 'WebGL shader and 3D transitions', 'slider-blocks' ),
					__( 'WooCommerce product carousels', 'slider-blocks' ),
					__( 'Priority support & updates', 'slider-blocks' ),
				);
				?>
				<?php foreach ( $gs_pro_points as $gs_point ) : ?>
					<li>
						<svg class="gs-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m5 13 4 4L19 7" /></svg>
						<?php echo esc_html( $gs_point ); ?>
					</li>
				<?php endforeach; ?>
			</ul>
		</section>
	<?php endif; ?>

	<section class="gs-section">
		<div class="gs-section__head">
			<h2 class="gs-section__title"><?php esc_html_e( 'More from the workshop', 'slider-blocks' ); ?></h2>
			<p class="gs-section__sub"><?php esc_html_e( 'Other block plugins built with the same care.', 'slider-blocks' ); ?></p>
		</div>

		<div class="gs-grid gs-grid--3">
			<?php
			$gs_products = array(
				array(
					'title' => __( 'GutenLayouts', 'slider-blocks' ),
					'text'  => __( 'Ready-made layouts and patterns built entirely from core blocks.', 'slider-blocks' ),
					'link'  => 'https://gutenlayouts.com',
				),
				array(
					'title' => __( 'Easy Accordion', 'slider-blocks' ),
					'text'  => __( 'Accessible, responsive accordions with a block-native editing flow.', 'slider-blocks' ),
					'link'  => 'https://accordion.gutenbergkits.com',
				),
				array(
					'title' => __( 'Gmap Block', 'slider-blocks' ),
					'text'  => __( 'Interactive Google Maps with markers, styles and zero fuss.', 'slider-blocks' ),
					'link'  => 'https://gmap.gutenbergkits.com',
				),
			);
			?>
			<?php foreach ( $gs_products as $gs_product ) : ?>
				<a class="gs-card gs-card--link" href="<?php echo esc_url( $gs_product['link'] ); ?>" target="_blank" rel="noopener noreferrer">
					<div class="gs-card__body">
						<h3 class="gs-card__title"><?php echo esc_html( $gs_product['title'] ); ?></h3>
						<p class="gs-card__text"><?php echo esc_html( $gs_product['text'] ); ?></p>
						<span class="gs-link"><?php esc_html_e( 'Take a look', 'slider-blocks' ); ?></span>
					</div>
				</a>
			<?php endforeach; ?>
		</div>
	</section>
</div>

<?php
require GUTSLIDER_DIR . '/admin/views/footer.php';
