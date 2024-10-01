<?php
/**
 * Enqueue Assets 
 * @package GutSliderBlocks
 */
 
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly.

if( ! class_exists( 'GutSlider_Assets' ) ) {

    class GutSlider_Assets {
        
        /**
         * Constructor
         * return void 
         */
        public function __construct() {
            add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_editor_assets' ], 2 );
            add_action( 'enqueue_block_assets', [ $this, 'enqueue_assets' ] );
        }

        /**
         * Enqueue Block Assets [ Editor Only ]
         * return void
         */
        public function enqueue_editor_assets(){
            // Enqueue global assets
            $global_asset_path = trailingslashit( GUTSLIDER_DIR_PATH ) . 'build/global/global.asset.php';
            if ( file_exists( $global_asset_path ) ) {
                $dependency_file = include_once $global_asset_path;
                if ( is_array( $dependency_file ) && ! empty( $dependency_file ) ) {
                    wp_enqueue_script(
                        'gutslider-blocks-global-script',
                        trailingslashit( GUTSLIDER_URL ) . 'build/global/global.js',
                        $dependency_file['dependencies'] ?? [],
                        $dependency_file['version'] ?? GUTSLIDER_VERSION,
                        true
                    );
                }
            }

            wp_enqueue_style(
                'gutslider-blocks-global-style',
                trailingslashit( GUTSLIDER_URL ) . 'build/global/global.css',
                [],
                GUTSLIDER_VERSION
            );

            // Enqueue modules assets
            $modules_asset_path = trailingslashit( GUTSLIDER_DIR_PATH ) . 'build/modules/modules.asset.php';
            if ( file_exists( $modules_asset_path ) ) {
                $modules_dependency_file = include_once $modules_asset_path;
                if ( is_array( $modules_dependency_file ) && ! empty( $modules_dependency_file ) ) {
                    wp_enqueue_script(
                        'gutslider-blocks-modules-script',
                        trailingslashit( GUTSLIDER_URL ) . 'build/modules/modules.js',
                        $modules_dependency_file['dependencies'] ?? [],
                        $modules_dependency_file['version'] ?? GUTSLIDER_VERSION,
                        false
                    );
                }
            }

            // Localize script for preview images
            wp_localize_script(
                'gutslider-blocks-modules-script',
                'gutslider_preview',
                [
                    'content'            => trailingslashit( GUTSLIDER_URL ) . 'assets/images/content.svg',
                    'photo_carousel'     => trailingslashit( GUTSLIDER_URL ) . 'assets/images/photo.svg',
                    'testimonial_slider' => trailingslashit( GUTSLIDER_URL ) . 'assets/images/testimonial.svg',
                    'before_after'       => trailingslashit( GUTSLIDER_URL ) . 'assets/images/ba.svg',
                ]
            );
        }

        /**
         * Enqueue Block Assets [ Editor + Frontend ]
         * return void 
         */
        public function enqueue_assets() {
            if( is_admin() ) {
                $this->enqueue_swiper_assets();
            }

            // enqueue frontend scripts 
            if( ! is_admin() && $this->should_enqueue_frontend_assets() ) {
                $this->enqueue_swiper_assets();
            }

            if( ! is_admin() && has_block( 'gutsliders/photo-carousel' ) ) {
                // lightbox 
                wp_enqueue_script(
                    'gutslider-fslightbox',
                    trailingslashit( GUTSLIDER_URL ) . 'assets/js/fslightbox.js',
                    [],
                    GUTSLIDER_VERSION,
                    true
                );
            }
        }

        /**
         * Enqueue Swiper assets
         * return void
         */
        private function enqueue_swiper_assets() {
            // swiper style
            wp_enqueue_style(
                'gutslider-swiper-style',
                trailingslashit( GUTSLIDER_URL ) . 'assets/css/swiper-bundle.min.css',
                [],
                GUTSLIDER_VERSION
            );

            // swiper script
            wp_enqueue_script(
                'gutslider-swiper-script',
                trailingslashit( GUTSLIDER_URL ) . 'assets/js/swiper-bundle.min.js',
                [],
                GUTSLIDER_VERSION,
                true
            );
        }

        /**
         * Check if frontend assets should be enqueued
         * return bool
         */
        private function should_enqueue_frontend_assets() {
            $blocks = [
                'gutsliders/content-slider',
                'gutsliders/any-content',
                'gutsliders/testimonial-slider',
                'gutsliders/post-slider',
                'gutsliders/photo-carousel',
                'gutsliders/logo-carousel',
                'gutsliders/videos-carousel'
            ];

            foreach ( $blocks as $block ) {
                if ( has_block( $block ) ) {
                    return true;
                }
            }

            return false;
        }
    }
}

new GutSlider_Assets();    // Initialize the class