/* eslint-disable no-undef */
/* eslint-disable camelcase */
/**
 * WordPress dependencies
 */
import { BlockControls, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { Fragment, useEffect, useRef, RawHTML } from '@wordpress/element';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { dispatch, select } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';

import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */

import DynamicStyle from './dynamic-style';

import Inspector from './inspector';

import * as Constants from './constants';

const { CE_STYLES } = window.gutSliderModules.GlobalConstants;
const { generateRangeStyles, DisplayIcon, SidebarOpener } = window.gutSliderModules;
const { COLUMNS, COLUMNS_GAP } = Constants;

// include child block
import './slide';

/**
 * Apply SwiperSlie to single slide
 */
const gutsliderAnyContentSlider = createHigherOrderComponent(BlockListBlock => {
    return props => {
        if ('gutsliders/slide' === props.name) {
            return (
                <div className="swiper-slide">
                    <BlockListBlock {...props} />
                </div>
            );
        }
        return <BlockListBlock {...props} />;
    };
}, 'gutslidersHeroSlider');
addFilter('editor.BlockListBlock', 'gutsliders/any-any-content', gutsliderAnyContentSlider);

/**
 * Edit function
 */

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        uniqueId,
        preview,
        sliderType,
        addNewSlide,
        infiniteLoop,
        autoplay,
        autoplayDelay,
        stopOnLastSlide,
        reverseDirection,
        pauseOnHover,
        speed,
        centerMode,
        showNavigation,
        navContainerPosition,
        navPosition,
        customNavIcon,
        navIconSource,
        navPrevIcon,
        navNextIcon,
        customPrevSVG,
        customNextSVG,
        showPagination,
        paginationType,
        dynamicBullets,
        keyboardControl,
        mousewheelControl,
        slideEffect,
        carouselEffect,
        creativeEffectStyle,
        // remote navigation
        enableRemoteNav,
        remotePrevSelector,
        remoteNextSelector
    } = attributes;

    // Unique ID
    useEffect(() => {
        setAttributes({
            uniqueId: 'gutslider-' + clientId.slice(0, 8)
        });
    }, []);

    // Block Props
    const blockProps = useBlockProps({
        className: classnames(uniqueId, navContainerPosition, navPosition)
    });

    // preview
    if (preview) {
        return (
            <div className="gutslider-preview">
                <img src={gutslider_preview.content} alt="any content slider" />
            </div>
        );
    }

    // Slider Columns
    const {
        deskStyle: deskSlideColumns,
        tabStyle: tabSlideColumns,
        mobStyle: mobSlideColumns
    } = generateRangeStyles({
        controlName: COLUMNS,
        attributes,
        noProperty: true,
        noUnits: true
    });

    const {
        deskStyle: deskColumnsGap,
        tabStyle: tabColumnsGap,
        mobStyle: mobColumnsGap
    } = generateRangeStyles({
        controlName: COLUMNS_GAP,
        attributes,
        noProperty: true,
        noUnits: true
    });

    const innerBlocksProps = useInnerBlocksProps(
        {
            className: `swiper-wrapper`,
            slot: 'container-start'
        },
        {
            allowedBlocks: ['gutsliders/slide'],
            template: [['gutsliders/slide'], ['gutsliders/slide'], ['gutsliders/slide']],
            renderAppender: false,
            orientation: 'horizontal'
        }
    );

    // Slider breakpoints
    const breakPoints = {
        breakpoints: {
            320: {
                slidesPerView: mobSlideColumns || 1,
                spaceBetween: parseInt(mobColumnsGap) || 0
            },
            768: {
                slidesPerView: tabSlideColumns || 2,
                spaceBetween: parseInt(tabColumnsGap) || 15
            },
            1025: {
                slidesPerView: deskSlideColumns || 2,
                spaceBetween: parseInt(deskColumnsGap) || 15
            }
        }
    };

    const sliderBreakPoints = sliderType === 'carousel' ? breakPoints : {};

    // swiper initialize
    const swiperRef = useRef(null);
    const gutSliderInit = function (sliderE, options) {
        if (sliderE.swiper) {
            sliderE.swiper.destroy();
        }
        // eslint-disable-next-line no-undef
        new Swiper(sliderE, options);

        if (enableRemoteNav && remotePrevSelector && remoteNextSelector) {
            const remotePrev = document.querySelector(`.${remotePrevSelector}`);
            const remoteNext = document.querySelector(`.${remoteNextSelector}`);

            if (remotePrev) {
                remotePrev.addEventListener('click', () => {
                    sliderE.swiper.slidePrev();
                });
            }

            if (remoteNext) {
                remoteNext.addEventListener('click', () => {
                    sliderE.swiper.slideNext();
                });
            }
        }
    };

    //slider options
    useEffect(() => {
        const options = {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: infiniteLoop,
            autoplay: autoplay
                ? {
                      delay: autoplayDelay * 100 || 2000,
                      pauseOnMouseEnter: pauseOnHover,
                      stopOnLastSlide,
                      reverseDirection
                  }
                : false,
            speed: speed * 100 || 1000,
            effect: sliderType === 'carousel' ? carouselEffect : slideEffect,
            creativeEffect: CE_STYLES[creativeEffectStyle],
            keyboard: {
                enabled: keyboardControl
            },
            mousewheel: mousewheelControl,
            ...(centerMode && {
                centeredSlides: true
            }),
            ...sliderBreakPoints
        };

        const setOption = {
            ...options,
            navigation:
                showNavigation && !enableRemoteNav
                    ? {
                          nextEl: customNavIcon ? `.${uniqueId} .gutslider-next` : `.${uniqueId} .swiper-button-next`,
                          prevEl: customNavIcon ? `.${uniqueId} .gutslider-prev` : `.${uniqueId} .swiper-button-prev`
                      }
                    : false,
            pagination: showPagination
                ? { el: `.${uniqueId} .swiper-pagination`, type: paginationType, dynamicBullets, clickable: true }
                : false
        };

        setAttributes({ sliderOptions: setOption });

        if (!swiperRef.current) {
            return;
        }

        // pagination
        const pagination = swiperRef.current?.querySelector('.swiper-pagination');

        const refPath = navContainerPosition === 'nav_outside' ? swiperRef.current?.parentNode : swiperRef.current;

        // navigation
        const prevNav = customNavIcon ? refPath?.querySelector('.gutslider-prev') : refPath?.querySelector('.swiper-button-prev');
        const nextNav = customNavIcon ? refPath?.querySelector('.gutslider-next') : refPath?.querySelector('.swiper-button-next');

        gutSliderInit(swiperRef.current, {
            ...options,
            navigation:
                showNavigation && !enableRemoteNav
                    ? {
                          nextEl: nextNav,
                          prevEl: prevNav
                      }
                    : false,
            pagination: showPagination ? { el: pagination, type: paginationType, dynamicBullets, clickable: true } : false
        });
    }, [
        infiniteLoop,
        autoplay,
        autoplayDelay,
        pauseOnHover,
        stopOnLastSlide,
        reverseDirection,
        speed,
        centerMode,
        showNavigation,
        showPagination,
        paginationType,
        dynamicBullets,
        slideEffect,
        carouselEffect,
        creativeEffectStyle,
        sliderType,
        deskSlideColumns,
        tabSlideColumns,
        mobSlideColumns,
        deskColumnsGap,
        tabColumnsGap,
        mobColumnsGap,
        keyboardControl,
        mousewheelControl,
        customNavIcon,
        addNewSlide,
        swiperRef.current,
        navContainerPosition,
        enableRemoteNav,
        remotePrevSelector,
        remoteNextSelector,
        uniqueId
    ]);
    return (
        <Fragment>
            <DynamicStyle attributes={attributes} setAttributes={setAttributes} />
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <BlockControls>
                <ToolbarGroup className="gutslider-toolbar-group">
                    <ToolbarButton
                        className="gutslider-toolbar-button"
                        title={__('Add Slide', 'slider-blocks')}
                        onClick={() => {
                            const childBlocks = select('core/block-editor').getBlocks(clientId);
                            const newBlock = createBlock('gutsliders/slide', {});
                            dispatch('core/block-editor').insertBlock(newBlock, childBlocks.length, clientId);
                            const newBlockClientId = select('core/block-editor').getBlockOrder(clientId)[childBlocks.length];
                            dispatch('core/block-editor').selectBlock(newBlockClientId);

                            // update addNewSlide attribute
                            setAttributes({ addNewSlide: !addNewSlide });
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path
                                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"
                                fill="rgba(0,124,186,1)"
                            ></path>
                        </svg>
                    </ToolbarButton>
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <SidebarOpener />
                <div className="swiper" ref={swiperRef}>
                    <div {...innerBlocksProps} />
                    {showNavigation && navContainerPosition === 'nav_inside' && !enableRemoteNav && (
                        <Fragment>
                            <div className={`gutslider-nav nav_inside ${navPosition}`}>
                                {customNavIcon ? (
                                    <Fragment>
                                        <div className="gutslider-prev">
                                            {navIconSource === 'library' && <DisplayIcon icon={navPrevIcon} />}
                                            {navIconSource === 'custom' && <RawHTML>{customPrevSVG}</RawHTML>}
                                        </div>
                                        <div className="gutslider-next">
                                            {navIconSource === 'library' && <DisplayIcon icon={navNextIcon} />}
                                            {navIconSource === 'custom' && <RawHTML>{customNextSVG}</RawHTML>}
                                        </div>
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <div className="swiper-button-prev"></div>
                                        <div className="swiper-button-next"></div>
                                    </Fragment>
                                )}
                            </div>
                        </Fragment>
                    )}
                    {showPagination && <div className="swiper-pagination"></div>}
                </div>
                {showNavigation && navContainerPosition === 'nav_outside' && !enableRemoteNav && (
                    <Fragment>
                        <div className={`gutslider-nav nav_outside ${navPosition}`}>
                            {customNavIcon ? (
                                <Fragment>
                                    <div className="gutslider-prev">
                                        {navIconSource === 'library' && <DisplayIcon icon={navPrevIcon} />}
                                        {navIconSource === 'custom' && <RawHTML>{customPrevSVG}</RawHTML>}
                                    </div>
                                    <div className="gutslider-next">
                                        {navIconSource === 'library' && <DisplayIcon icon={navNextIcon} />}
                                        {navIconSource === 'custom' && <RawHTML>{customNextSVG}</RawHTML>}
                                    </div>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <div className="swiper-button-prev"></div>
                                    <div className="swiper-button-next"></div>
                                </Fragment>
                            )}
                        </div>
                    </Fragment>
                )}
            </div>
        </Fragment>
    );
}
