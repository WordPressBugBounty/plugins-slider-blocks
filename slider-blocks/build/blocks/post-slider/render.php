<?php
/**
 * Render the post slider block.
 *
 * @param array $attributes The block attributes.
 * @return string The rendered block content.
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! function_exists( 'gutslider_post_slider_terms' ) ) {
    /**
     * Terms to print above a slide title.
     *
     * The taxonomies the slider is filtered by double as the ones it labels slides with;
     * with no filter it falls back to core categories, which is what the block has always
     * shown. Term ids sit on the stored REST record under each taxonomy's rest_base.
     *
     * @param array $post       A record from the `queryPosts` attribute.
     * @param array $taxonomies Taxonomy slugs to read.
     * @return WP_Term[] Terms, in taxonomy order.
     */
    function gutslider_post_slider_terms( $post, $taxonomies ) {
        $terms = [];

        foreach ( $taxonomies as $taxonomy ) {
            $taxonomy_object = get_taxonomy( $taxonomy );
            if ( ! $taxonomy_object ) {
                continue;
            }

            $rest_base = ! empty( $taxonomy_object->rest_base ) ? $taxonomy_object->rest_base : $taxonomy;
            $term_ids  = isset( $post[ $rest_base ] ) && is_array( $post[ $rest_base ] ) ? $post[ $rest_base ] : [];

            foreach ( $term_ids as $term_id ) {
                $term = get_term( absint( $term_id ), $taxonomy );
                if ( $term && ! is_wp_error( $term ) ) {
                    $terms[] = $term;
                }
            }
        }

        return $terms;
    }
}

if ( ! function_exists( 'gutslider_post_slider' ) ) {
    function gutslider_post_slider( $attributes ) {
        // Extract attributes with default values
        $defaults = [
            'queryPosts'           => [],
            'showTitle'            => true,
            'showCat'              => true,
            'showExcerpt'          => true,
            'showBtn'              => true,
            'linkTitle'            => true,
            'titleTag'             => 'h2',
            'btnLabel'             => __( 'Read More', 'slider-blocks' ),
            'enableOverlay'        => true,
            'sliderType'           => 'slider',
            'uniqueId'             => '',
            'navContainerPosition' => 'nav_inside',
            'navPosition'          => 'nav_cc',
            'catAnimation'         => '',
            'titleAnimation'       => '',
            'exptAnimation'        => '',
            'btnAnimation'         => '',
            'sliderOptions'        => [],
            'showNavigation'       => true,
            'showPagination'       => true,
            'customNavIcon'        => false,
            'navIconSource'        => 'library',
            'navPrevIcon'          => 'arrowLeft',
            'navNextIcon'          => 'arrowRight',
            'customPrevSVG'        => '',
            'customNextSVG'        => '',
            'excerptLength'        => 20,
            'enableRemoteNav'      => false,
            'remotePrevSelector'   => '',
            'remoteNextSelector'   => '',
            'detachContent'       => false, // New attribute for detaching content
            'showThumbs'           => false,
            'thumbContent'         => 'image',
            'thumbTitlePosition'   => 'below',
            'thumbsOptions'        => [],
        ];

        $atts = wp_parse_args( $attributes, $defaults );

        // Sanitize attributes
        $atts                  = array_map( 'sanitize_text_field', $atts );
        $atts['queryPosts']    = isset( $attributes['queryPosts'] ) ? $attributes['queryPosts'] : [];
        $atts['sliderOptions'] = isset( $attributes['sliderOptions'] ) ? $attributes['sliderOptions'] : [];
        $atts['thumbsOptions'] = isset( $attributes['thumbsOptions'] ) ? $attributes['thumbsOptions'] : [];
        $atts['focusPoints']   = isset( $attributes['focusPoints'] ) ? $attributes['focusPoints'] : [];

        // Taxonomies the slider is filtered by. `taxQuery` covers every taxonomy;
        // `specificCategories` is the legacy, core-category-only attribute kept for blocks
        // saved before that. The editor empties it as soon as a filter is changed, so only
        // one of the two is ever in play.
        $tax_query  = isset( $attributes['taxQuery'] ) && is_array( $attributes['taxQuery'] ) ? $attributes['taxQuery'] : [];
        $query_type = isset( $attributes['queryType'] ) ? sanitize_key( $attributes['queryType'] ) : 'latest_posts';

        $term_taxonomies = [ 'category' ];
        if ( 'specific_categories' === $query_type && ! empty( $tax_query ) ) {
            $term_taxonomies = array_map( 'sanitize_key', array_keys( $tax_query ) );
        }

        // Block classes
        $block_classes = [
            esc_attr( $atts['uniqueId'] ),
            esc_attr( $atts['navContainerPosition'] ),
            esc_attr( $atts['navPosition'] ),
        ];

        // Block wrapper attributes
        $block_props = get_block_wrapper_attributes( [
            'class' => implode( ' ', array_filter( $block_classes ) )
        ] );

        // Single block classes
        $swiper_classes = [
            'swiper-slide',
            $atts['sliderType'] === 'slider' ? 'slide-mode' : ''
        ];

        if ( ! empty( $atts['detachContent'] ) ) {
            $swiper_classes[] = 'detach-content';
        }

        ?>
        <div <?php echo wp_kses_data( $block_props ); ?> data-swiper-options="<?php echo esc_attr( wp_json_encode( $atts['sliderOptions'] ) ); ?>"
            <?php
                if ( '1' === $atts['showThumbs'] ) {
                    echo 'data-thumbs-options="' . esc_attr( wp_json_encode( $atts['thumbsOptions'] ) ) . '" ';
                }
            ?>
            <?php
                if ( $atts['enableRemoteNav'] ) {
                    echo 'data-rprev="' . esc_attr( $atts['remotePrevSelector'] ) . '" ';
                    echo 'data-rnext="' . esc_attr( $atts['remoteNextSelector'] ) . '" ';
                }
            ?>
        >
                <div class="swiper">
                    <div class="swiper-wrapper">
                    <?php
                        if ( is_array( $atts['queryPosts'] ) && ! empty( $atts['queryPosts'] ) ) {
                            $index = 0;
                            foreach ( $atts['queryPosts'] as $post ) {
                                $index++;
                                $post_title      = isset( $post['title']['rendered'] ) ? $post['title']['rendered'] : '';
                                $post_excerpt    = isset( $post['excerpt']['rendered'] ) ? $post['excerpt']['rendered'] : '';
                                $post_link       = isset( $post['link'] ) ? $post['link'] : '';
                                $post_image_id   = isset( $post['featured_media'] ) ? $post['featured_media'] : '';
                                $post_image      = wp_get_attachment_image_url( $post_image_id, 'full' );
                                // Check if focusPoints is set and not empty
                                $focusPoints = isset( $atts['focusPoints'] ) && is_array( $atts['focusPoints'] ) ? $atts['focusPoints'] : [];
                                $bg_position = isset( $focusPoints[$index - 1] ) && isset( $focusPoints[$index - 1]['x'] ) && isset( $focusPoints[$index - 1]['y'] )
                                ? sprintf( 'background-position: %d%% %d%%;', round( $focusPoints[$index - 1]['x'] * 100 ), round( $focusPoints[$index - 1]['y'] * 100 ) )
                                : 'background-position: center center;';
                                $bg_style = $post_image ? sprintf( 'background-image: url(%s); %s', esc_url( $post_image ), $bg_position ) : $bg_position;
                                $post_terms      = gutslider_post_slider_terms( $post, $term_taxonomies );

                                // create object-position style
                                $object_position = isset( $focusPoints[$index - 1] ) && isset( $focusPoints[$index - 1]['x'] ) && isset( $focusPoints[$index - 1]['y'] )
                                ? sprintf( 'object-position: %d%% %d%%;', round( $focusPoints[$index - 1]['x'] * 100 ), round( $focusPoints[$index - 1]['y'] * 100 ) )
                                : 'object-position: center center;';

                                ?>
                                <div class="<?php echo esc_attr( implode( ' ', $swiper_classes ) ); ?>">
                                    <div class="swiper-container-outer"
                                        <?php if ( ! $atts['detachContent'] ) : ?>
                                            style="<?php echo esc_attr( $bg_style ); ?>"
                                        <?php endif; ?>
                                    >
                                        <?php if ( $atts['enableOverlay'] ) : ?>
                                            <div class="gutslider-overlay"></div>
                                        <?php endif; ?>
                                        <?php 
                                            if ( $atts['detachContent'] && $post_image ) {
                                                ?>
                                                    <a class="detached-featured-image" href="<?php echo esc_url( $post_link ); ?>">
                                                        <img src="<?php echo esc_url( $post_image ); ?>" alt="<?php echo esc_attr( $post_title ); ?>" 
                                                        style="<?php echo esc_attr( $object_position ); ?>"
                                                        />
                                                    </a>
                                                <?php
                                            }
                                        ?>
                                        <div class="gutslider-content-wrapper<?php echo $atts['detachContent'] ? ' detach-content' : ''; ?>">
                                            <div class="gutslider-content-inner">
                                                <?php if ( $atts['showCat'] && ! empty( $post_terms ) ) : ?>
                                                    <div class="post-categories <?php echo esc_attr( $atts['catAnimation'] ); ?>">
                                                        <?php
                                                            foreach ( $post_terms as $post_term ) {
                                                                printf( '<span class="post-category">%s</span>', esc_html( $post_term->name ) );
                                                            }
                                                        ?>
                                                    </div>
                                                <?php endif; ?>

                                                <?php if ( $atts['showTitle'] ) : ?>
                                                    <?php
                                                        $title_tag = tag_escape( $atts['titleTag'] );
                                                        $title_content = sprintf(
                                                            '<%1$s class="post-title %2$s">%3$s</%1$s>',
                                                            $title_tag,
                                                            esc_attr( $atts['titleAnimation'] ),
                                                            esc_html( $post_title )
                                                        );

                                                        if ( $atts['linkTitle'] ) {
                                                            printf(
                                                                '<a href="%s" class="post-title">%s</a>',
                                                                esc_url( $post_link ),
                                                                $title_content // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
                                                            );
                                                        } else {
                                                            echo wp_kses_post( $title_content );
                                                        }
                                                    ?>
                                                <?php endif; ?>

                                                <?php if ( $atts['showExcerpt'] ) : ?>
                                                    <div class="post-excerpt <?php echo esc_attr( $atts['exptAnimation'] ); ?>">
                                                        <?php
                                                            if ( $atts['excerptLength'] > 0 ) {
                                                                $post_excerpt = wp_trim_words( $post_excerpt, $atts['excerptLength'], '...' );
                                                            }
                                                            echo wp_kses_post( $post_excerpt );
                                                        ?>
                                                    </div>
                                                <?php endif; ?>

                                                <?php if ( $atts['showBtn'] ) : ?>
                                                    <div class="post-cta-wrapper <?php echo esc_attr( $atts['btnAnimation'] ); ?>">
                                                        <a href="<?php echo esc_url( $post_link ); ?>" class="post-cta">
                                                            <?php echo esc_html( $atts['btnLabel'] ); ?>
                                                        </a>
                                                    </div>
                                                <?php endif; ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <?php
                            }
                        }
                    ?>
                    </div>
                    <?php 
                        if( $atts['showNavigation'] === '1' && $atts['navContainerPosition'] === 'nav_inside' && $atts['enableRemoteNav'] !== '1' ) {
                            ?>
                                <div class="gutslider-nav nav_inside <?php echo esc_attr( $atts['navPosition'] ); ?>">
                                    <?php if ( $atts['customNavIcon'] ) : ?>
                                        <div class="gutslider-prev">
                                            <!-- <div class="gutslider-prev-icon"> -->
                                                <?php
                                                    if ( $atts['navIconSource'] === 'library' ) {
                                                        echo wp_kses( gutslider_display_icon( $atts['navPrevIcon'] ), gutslider_allowed_svg_tags() ); // Ensure this function properly escapes output
                                                    } else {
                                                        echo wp_kses( $atts['customPrevSVG'], gutslider_allowed_svg_tags() );
                                                    }
                                                ?>
                                            <!-- </div> -->
                                        </div>
                                        <div class="gutslider-next">
                                            <!-- <div class="gutslider-next-icon"> -->
                                                <?php
                                                    if ( $atts['navIconSource'] === 'library' ) {
                                                        echo wp_kses( gutslider_display_icon( $atts['navNextIcon'] ), gutslider_allowed_svg_tags() ); // Ensure this function properly escapes output
                                                    } else {
                                                        echo wp_kses( $atts['customNextSVG'], gutslider_allowed_svg_tags() );
                                                    }
                                                ?>
                                            <!-- </div> -->
                                        </div>
                                    <?php else : ?>
                                        <div class="swiper-button-prev"></div>
                                        <div class="swiper-button-next"></div>
                                    <?php endif; ?>
                                </div>
                            <?php 
                        }
                    ?>
                    <?php 
                        if( $atts['showPagination'] === '1' ) {
                            ?>
                                <div class="swiper-pagination"></div>
                            <?php 
                        }
                    ?>
                </div>
                <?php 
                    if ( $atts['showNavigation'] === '1' && $atts['navContainerPosition'] === 'nav_outside' && $atts['enableRemoteNav'] !== '1' ) : ?>
                        <div class="gutslider-nav nav_outside <?php echo esc_attr( $atts['navPosition'] ); ?>">
                            <?php if ( $atts['customNavIcon'] ) : ?>
                                <div class="gutslider-prev">
                                    <!-- <div class="gutslider-prev-icon"> -->
                                        <?php
                                            if ( $atts['navIconSource'] === 'library' ) {
                                                echo wp_kses( gutslider_display_icon( esc_attr( $atts['navPrevIcon'] ) ), gutslider_allowed_svg_tags() ); // Ensure this function properly escapes output
                                            } else {
                                                echo wp_kses( $atts['customPrevSVG'], gutslider_allowed_svg_tags() );
                                            }
                                        ?>
                                    <!-- </div> -->
                                </div>
                                <div class="gutslider-next">
                                    <!-- <div class="gutslider-next-icon"> -->
                                        <?php
                                            if ( $atts['navIconSource'] === 'library' ) {
                                                echo wp_kses( gutslider_display_icon( esc_attr( $atts['navNextIcon'] ) ), gutslider_allowed_svg_tags() ); // Ensure this function properly escapes output
                                            } else {
                                                echo wp_kses( $atts['customNextSVG'], gutslider_allowed_svg_tags() );
                                            }
                                        ?>
                                    <!-- </div> -->
                                </div>
                            <?php else : ?>
                                <div class="swiper-button-prev"></div>
                                <div class="swiper-button-next"></div>
                            <?php endif; ?>
                        </div>
                <?php endif; ?>
                <?php
                    if ( '1' === $atts['showThumbs'] && is_array( $atts['queryPosts'] ) && ! empty( $atts['queryPosts'] ) ) {
                        $thumb_classes = [ 'swiper', 'gutslider-thumbs', 'thumb-content-' . $atts['thumbContent'] ];
                        if ( 'both' === $atts['thumbContent'] ) {
                            $thumb_classes[] = 'thumb-title-' . $atts['thumbTitlePosition'];
                        }
                        $placeholder = GUTSLIDER_URL . 'assets/images/placeholder.svg';
                        ?>
                        <div class="<?php echo esc_attr( implode( ' ', $thumb_classes ) ); ?>">
                            <div class="swiper-wrapper">
                                <?php
                                    foreach ( $atts['queryPosts'] as $thumb_post ) {
                                        $thumb_media_id = isset( $thumb_post['featured_media'] ) ? $thumb_post['featured_media'] : '';
                                        $thumb_url      = $thumb_media_id ? wp_get_attachment_image_url( $thumb_media_id, 'medium' ) : '';
                                        $thumb_alt      = $thumb_media_id ? get_post_meta( $thumb_media_id, '_wp_attachment_image_alt', true ) : '';
                                        $thumb_title    = isset( $thumb_post['title']['rendered'] ) ? $thumb_post['title']['rendered'] : '';
                                        ?>
                                        <div class="swiper-slide">
                                            <?php if ( 'title' !== $atts['thumbContent'] ) : ?>
                                                <img src="<?php echo esc_url( $thumb_url ? $thumb_url : $placeholder ); ?>" alt="<?php echo esc_attr( $thumb_alt ); ?>" />
                                            <?php endif; ?>
                                            <?php if ( 'image' !== $atts['thumbContent'] && $thumb_title ) : ?>
                                                <span class="gutslider-thumb-title"><?php echo wp_kses_post( $thumb_title ); ?></span>
                                            <?php endif; ?>
                                        </div>
                                        <?php
                                    }
                                ?>
                            </div>
                        </div>
                        <?php
                    }
                ?>
            </div>  
        <?php 
    }

 }

 // call the render callback function
 gutslider_post_slider( $attributes );

