/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-undef */
/**
 * WordPress dependencies
 */
import { BlockControls, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { cloneDeep } from 'lodash';
const { Fragment, RawHTML, useEffect, useRef } = wp.element;

const { ToolbarGroup, ToolbarButton } = wp.components;
const { dispatch } = wp.data;
const { __ } = wp.i18n;

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import * as Constants from './constants';
import DynamicStyle from './dynamic-style';
import Inspector from './inspector';

const { DisplayIcon, generateRangeStyles, SidebarOpener } = window.gutSliderModules;
const { CE_STYLES } = window.gutSliderModules.GlobalConstants;

const { COLUMNS, COLUMNS_GAP } = Constants;

/**
 * Edit function
 */

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        uniqueID,
        preview,
        sliderType,
        slideItems,
        addNewSlide,
        infiniteLoop,
        autoplay,
        autoplayDelay,
        stopOnLastSlide,
        reverseDirection,
        pauseOnHover,
        speed,
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
        pagColor,
        activePagColor,
        keyboardControl,
        mousewheelControl,
        slideEffect,
        creativeEffectStyle,
        videoPlayer,
        // custom poster
        enableCustomPoster,
        enablePosterOverlay,
        enableRemoteNav,
        remotePrevSelector,
        remoteNextSelector
    } = attributes;

    // Unique ID
    useEffect(() => {
        setAttributes({
            uniqueID: 'gutslider-' + clientId.slice(0, 8)
        });

        if (slideItems.length === 0) {
            setAttributes({
                slideItems: [
                    {
                        id: 1,
                        panelTitle: 'Video #1',
                        videoID: 'SeVxI3p5hmE',
                        videoType: 'youtube',
                        thumbnail: {},
                        thumbFocalPoint: { x: 0.5, y: 0.5 }
                    },
                    {
                        id: 2,
                        panelTitle: 'Video #2',
                        videoID: 'Kg_jTWskdbc',
                        videoType: 'youtube',
                        thumbnail: {},
                        thumbFocalPoint: { x: 0.5, y: 0.5 }
                    },
                    {
                        id: 3,
                        panelTitle: 'Video #3',
                        videoID: 'W9P0CbWsCPM',
                        videoType: 'youtube',
                        thumbnail: {},
                        thumbFocalPoint: { x: 0.5, y: 0.5 }
                    },
                    {
                        id: 4,
                        panelTitle: 'Video #4',
                        videoID: 'ZqCh5G-FMSU',
                        videoType: 'youtube',
                        thumbnail: {},
                        thumbFocalPoint: { x: 0.5, y: 0.5 }
                    }
                ]
            });
        }
    }, []);

    // preview
    if (preview) {
        return (
            <div className="gutslider-preview">
                <img src={gutslider_preview.photo_carousel} alt="video carousel" />
            </div>
        );
    }

    // Block Props
    const blockProps = useBlockProps({
        className: classnames(uniqueID, navContainerPosition, navPosition)
    });

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

    // swiper initialize
    const swiperRef = useRef(null);

    if (swiperRef.current) {
        swiperRef.current.addEventListener('click', function () {
            dispatch('core/block-editor').selectBlock(clientId);
            dispatch('core/edit-post')?.openGeneralSidebar('edit-post/block');
        });
    }

    const gutSliderInit = function (sliderE, options) {
        if (sliderE.swiper) {
            sliderE.swiper.destroy();
        }

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
            slidesPerView: deskSlideColumns || 3,
            spaceBetween: deskColumnsGap || 15,
            loop: infiniteLoop,
            autoplay: autoplay
                ? {
                      delay: autoplayDelay * 100 || 10 * 100,
                      pauseOnMouseEnter: pauseOnHover,
                      stopOnLastSlide,
                      reverseDirection
                  }
                : false,
            speed: speed * 100 || 8 * 100,
            effect: slideEffect,
            creativeEffect: CE_STYLES[creativeEffectStyle],
            keyboard: {
                enabled: keyboardControl
            },
            mousewheel: mousewheelControl,
            ...breakPoints
        };

        const setOption = {
            ...options,
            navigation:
                showNavigation && !enableRemoteNav
                    ? {
                          nextEl: customNavIcon ? `.${uniqueID} .gutslider-next` : `.${uniqueID} .swiper-button-next`,
                          prevEl: customNavIcon ? `.${uniqueID} .gutslider-prev` : `.${uniqueID} .swiper-button-prev`
                      }
                    : false,
            pagination: showPagination
                ? { el: `.${uniqueID} .swiper-pagination`, type: paginationType, dynamicBullets, clickable: true }
                : false
        };

        setAttributes({ sliderOptions: setOption });

        // pagination
        const pagination = swiperRef.current?.parentNode?.querySelector('.swiper-pagination');

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
        showNavigation,
        showPagination,
        navContainerPosition,
        navPosition,
        paginationType,
        dynamicBullets,
        pagColor,
        activePagColor,
        slideEffect,
        creativeEffectStyle,
        sliderType,
        keyboardControl,
        mousewheelControl,
        customNavIcon,
        addNewSlide,
        deskSlideColumns,
        tabSlideColumns,
        mobSlideColumns,
        deskColumnsGap,
        tabColumnsGap,
        mobColumnsGap,
        swiperRef.current,
        slideItems,
        enableCustomPoster,
        videoPlayer,
        enablePosterOverlay,
        enableRemoteNav,
        remotePrevSelector,
        remoteNextSelector
    ]);

    // slider items deep copy
    const sliderItems = cloneDeep(slideItems);

    return (
        <Fragment>
            <DynamicStyle attributes={attributes} setAttributes={setAttributes} />
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <BlockControls>
                <ToolbarGroup className="gutslider-toolbar-group">
                    <ToolbarButton
                        className="gutslider-toolbar-button"
                        name={__('Add Slide', 'slider-blocks')}
                        onClick={() => {
                            setAttributes({
                                slideItems: [
                                    ...slideItems,
                                    {
                                        id: slideItems.length + 1,
                                        panelTitle: 'Video #' + (slideItems.length + 1),
                                        videoID: 'SeVxI3p5hmE',
                                        videoType: 'youtube',
                                        thumbnail: {},
                                        thumbFocalPoint: { x: 0.5, y: 0.5 }
                                    }
                                ]
                            });
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
                    <div className="swiper-wrapper">
                        {sliderItems &&
                            sliderItems.map((slide, index) => {
                                return (
                                    <div className={classnames('swiper-slide')} key={index}>
                                        <div className="gutslider-slide">
                                            {enableCustomPoster && slide.thumbnail && slide.thumbnail?.url && (
                                                <div className="custom-thumbnail">
                                                    <img
                                                        src={slide.thumbnail.url}
                                                        alt={slide.thumbnail.alt || 'Custom Thumbnail'}
                                                        style={
                                                            slide.thumbFocalPoint
                                                                ? {
                                                                      objectPosition: `${slide.thumbFocalPoint?.x * 100}% ${
                                                                          slide.thumbFocalPoint?.y * 100
                                                                      }%`
                                                                  }
                                                                : { objectPosition: '50% 50%' }
                                                        }
                                                    />
                                                    {enablePosterOverlay && <div className="thumb-overlay"></div>}
                                                    <button className="play-btn">
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM17.5 12L9.5 8V16L17.5 12Z"
                                                                fill="#141B34"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            )}
                                            {slide.videoType === 'youtube' && (
                                                <iframe
                                                    className="video-carousel-slide"
                                                    title="video-carousel-slide"
                                                    width="100%"
                                                    height="100%"
                                                    src={`https://www.youtube.com/embed/${slide.videoID}?${
                                                        videoPlayer?.hideControls ? 'controls=0' : ''
                                                    }&${videoPlayer?.autoplay ? 'autoplay=1' : 'autoplay=0'}&${
                                                        videoPlayer?.rel ? 'rel=0' : ''
                                                    }&${videoPlayer?.mute ? 'mute=1' : 'mute=0'}`}
                                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                ></iframe>
                                            )}
                                            {slide.videoType === 'vimeo' && (
                                                <iframe
                                                    className="video-carousel-slide"
                                                    title="video-carousel-slide"
                                                    width="100%"
                                                    height="100%"
                                                    src={`https://player.vimeo.com/video/${slide.videoID}?dnt=1`}
                                                    allow="autoplay; fullscreen; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
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
                {showPagination && <div className="swiper-pagination"></div>}
            </div>
        </Fragment>
    );
}
