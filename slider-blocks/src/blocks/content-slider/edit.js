/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
/**
 * WordPress dependencies
 */
import { BlockControls, RichText, useBlockProps } from '@wordpress/block-editor';
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
import Inspector from './inspector';

const { DisplayIcon, generateRangeStyles, SidebarOpener, DynamicTag } = window?.gutSliderModules;
const { COLUMNS, COLUMNS_GAP } = Constants;
const { CE_STYLES } = window.gutSliderModules.GlobalConstants;

// import style
import Style from './style';

/**
 * Edit function
 */

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        uniqueId,
        preview,
        //visible elements
        showImage,
        showSubTitle,
        showTitle,
        showDescription,
        showButton,
        sliderType,
        slideItems,
        addNewSlide,
        subtitleTag,
        titleTag,
        descriptionTag,
        titleAnimation,
        subtitleAnimation,
        descAnimation,
        btnAnimation,
        sbtnAnimation,
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
        pagColor,
        activePagColor,
        keyboardControl,
        mousewheelControl,
        slideEffect,
        carouselEffect,
        creativeEffectStyle,
        enableGlobalLink,
        // custom navigation
        enableRemoteNav,
        remotePrevSelector,
        remoteNextSelector
    } = attributes;

    // Unique ID
    useEffect(() => {
        setAttributes({
            uniqueId: 'gutslider-' + clientId.slice(0, 8)
        });

        // add default slide items
        if (slideItems.length === 0) {
            setAttributes({
                slideItems: [
                    {
                        id: 0,
                        panelTitle: 'Gutslider Item',
                        subtitle: 'Gutslider Block',
                        title: '#1 Best Gutenberg Slider Block',
                        description:
                            'Gutslider is a Gutenberg Slider Block that is easy to use and has many features. It is a great alternative to other slider blocks that are not as easy to use and have less features.',
                        bgType: 'classic',
                        bgColor: '#efefef',
                        bgGradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                        bgVideo: {},
                        enableOverlay: false,
                        overlayType: 'classic',
                        overlayColor: '#000000',
                        overlayGradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                        overlayOpacity: 0.5,
                        image: {
                            id: '',
                            url: '',
                            alt: 'Gutslider Logo'
                        },

                        photo: {},
                        photoSize: 'thumbnail',
                        focusPoint: { x: 0.5, y: 0.5 },
                        btnLabel: 'Get Gutslider',
                        btnLinks: {
                            url: 'https://gutenbergkits.com',
                            openInNewTab: true,
                            addNoFollow: false,
                            addSponsored: false
                        },
                        showSbtnLinks: false,
                        sbtnLabel: '',
                        sbtnLinks: {
                            url: '',
                            openInNewTab: true,
                            addNoFollow: false,
                            addSponsored: false
                        },
                        // Global link
                        globalLink: {
                            url: '',
                            openInNewTab: false,
                            addNoFollow: false,
                            addSponsored: false
                        },
                        enableResponsiveBg: false,
                        DesktopBg: {
                            url: '',
                            id: '',
                            alt: ''
                        },
                        TabletBg: {
                            url: '',
                            id: '',
                            alt: ''
                        },
                        MobileBg: {
                            url: '',
                            id: '',
                            alt: ''
                        },
                        DesktopFocalPoint: { x: 0.5, y: 0.5 },
                        TabletFocalPoint: { x: 0.5, y: 0.5 },
                        MobileFocalPoint: { x: 0.5, y: 0.5 }
                    },
                    {
                        id: 1,
                        panelTitle: 'Gutslider Item #2',
                        subtitle: 'Custom Content Slider',
                        title: '#2 Easily Build Custom Slider',
                        description:
                            'Gutslider is a Gutenberg Slider Block that is easy to use and has many features. It is a great alternative to other slider blocks that are not as easy to use and have less features.',
                        bgType: 'classic',
                        bgColor: '#efefef',
                        bgGradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                        bgVideo: {},
                        enableOverlay: false,
                        overlayType: 'classic',
                        overlayColor: '#000000',
                        overlayGradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                        overlayOpacity: 0.5,
                        image: {
                            id: '',
                            url: '',
                            alt: 'Gutslider Logo'
                        },

                        photo: {},
                        photoSize: 'thumbnail',
                        focusPoint: { x: 0.5, y: 0.5 },
                        btnLabel: 'Get Gutslider',
                        btnLinks: {
                            url: 'https://gutenbergkits.com',
                            openInNewTab: true,
                            addNoFollow: false,
                            addSponsored: false
                        },
                        showSbtnLinks: false,
                        sbtnLabel: '',
                        sbtnLinks: {
                            url: '',
                            openInNewTab: true,
                            addNoFollow: false,
                            addSponsored: false
                        },
                        // Global link
                        globalLink: {
                            url: '',
                            openInNewTab: false,
                            addNoFollow: false,
                            addSponsored: false
                        },
                        enableResponsiveBg: false,
                        DesktopBg: {
                            url: '',
                            id: '',
                            alt: ''
                        },
                        TabletBg: {
                            url: '',
                            id: '',
                            alt: ''
                        },
                        MobileBg: {
                            url: '',
                            id: '',
                            alt: ''
                        },
                        DesktopFocalPoint: { x: 0.5, y: 0.5 },
                        TabletFocalPoint: { x: 0.5, y: 0.5 },
                        MobileFocalPoint: { x: 0.5, y: 0.5 }
                    },
                    {
                        id: 2,
                        panelTitle: 'Gutslider Item #3',
                        subtitle: 'Custom Content Slider',
                        title: '#3 Easily Build Custom Slider',
                        description:
                            'Gutslider is a Gutenberg Slider Block that is easy to use and has many features. It is a great alternative to other slider blocks that are not as easy to use and have less features.',
                        bgType: 'classic',
                        bgColor: '#efefef',
                        bgGradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                        bgVideo: {},
                        enableOverlay: false,
                        overlayType: 'classic',
                        overlayColor: '#000000',
                        overlayGradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                        overlayOpacity: 0.5,
                        image: {
                            id: '',
                            url: '',
                            alt: 'Gutslider Logo'
                        },

                        photo: {},
                        photoSize: 'thumbnail',
                        focusPoint: { x: 0.5, y: 0.5 },
                        btnLabel: 'Get Gutslider',
                        btnLinks: {
                            url: 'https://gutenbergkits.com',
                            openInNewTab: true,
                            addNoFollow: false,
                            addSponsored: false
                        },
                        showSbtnLinks: false,
                        sbtnLabel: '',
                        sbtnLinks: {
                            url: '',
                            openInNewTab: true,
                            addNoFollow: false,
                            addSponsored: false
                        },
                        // Global link
                        globalLink: {
                            url: '',
                            openInNewTab: false,
                            addNoFollow: false,
                            addSponsored: false
                        },
                        enableResponsiveBg: false,
                        DesktopBg: {
                            url: '',
                            id: '',
                            alt: ''
                        },
                        TabletBg: {
                            url: '',
                            id: '',
                            alt: ''
                        },
                        MobileBg: {
                            url: '',
                            id: '',
                            alt: ''
                        },
                        DesktopFocalPoint: { x: 0.5, y: 0.5 },
                        TabletFocalPoint: { x: 0.5, y: 0.5 },
                        MobileFocalPoint: { x: 0.5, y: 0.5 }
                    }
                ]
            });
        }
    }, []);

    // block preview
    if (preview) {
        return (
            <div className="gutslider-preview">
                <img src={gutslider_preview.content} alt="content slider preview" />
            </div>
        );
    }

    // Block Props
    const blockProps = useBlockProps({
        className: classnames(uniqueId, navContainerPosition, navPosition)
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

    const sliderBreakPoints = sliderType === 'carousel' ? breakPoints : {};

    // swiper initialize
    const swiperRef = useRef(null);

    if (swiperRef.current) {
        swiperRef.current.addEventListener('click', function () {
            dispatch('core/block-editor').selectBlock(clientId);
            dispatch('core/edit-post')?.openGeneralSidebar('edit-post/block');
        });
    }

    // swiper init function
    const gutSliderInit = function (sliderE, options) {
        if (sliderE?.swiper) {
            sliderE?.swiper.destroy();
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
            slidesPerView: 1,
            spaceBetween: 0,
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

        // set options
        const setOptions = {
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

        setAttributes({
            sliderOptions: setOptions
        });

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
        pagColor,
        activePagColor,
        slideEffect,
        carouselEffect,
        creativeEffectStyle,
        addNewSlide,
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
        navContainerPosition,
        enableGlobalLink,
        slideItems,
        enableRemoteNav,
        remotePrevSelector,
        remoteNextSelector,
        uniqueId
    ]);

    // slider items deep copy
    const sliderItems = cloneDeep(slideItems);

    return (
        <Fragment>
            <Style attributes={attributes} setAttributes={setAttributes} />
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <BlockControls>
                <ToolbarGroup className="gutslider-toolbar-group">
                    <ToolbarButton
                        className="gutslider-toolbar-button"
                        title={__('Add Slide', 'slider-blocks')}
                        onClick={() => {
                            setAttributes({
                                addNewSlide: !addNewSlide
                            });
                            setAttributes({
                                slideItems: [
                                    ...slideItems,
                                    {
                                        id: slideItems.length + 1,
                                        panelTitle: 'Gutslider Item',
                                        subtitle: 'Gutslider Block',
                                        title: '#1 Best Gutenberg Slider Block',
                                        description:
                                            'Gutslider is a Gutenberg Slider Block that is easy to use and has many features. It is a great alternative to other slider blocks that are not as easy to use and have less features.',
                                        bgType: 'classic',
                                        bgColor: '#efefef',
                                        enableOverlay: false,
                                        overlayType: 'classic',
                                        overlayColor: '#000000',
                                        overlayGradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                                        overlayOpacity: 0.5,
                                        bgGradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                                        bgVideo: {},
                                        image: {
                                            id: slideItems.length + 1,
                                            url: '',
                                            alt: 'Gutslider Logo'
                                        },

                                        photo: {},
                                        photoSize: 'thumbnail',
                                        btnLabel: 'Get Gutslider',
                                        btnLinks: {
                                            url: 'https://gutenbergkits.com',
                                            openInNewTab: true,
                                            addNoFollow: false,
                                            addSponsored: false
                                        },
                                        showSbtnLinks: false,
                                        sbtnLabel: '',
                                        sbtnLinks: {
                                            url: '',
                                            openInNewTab: true,
                                            addNoFollow: false,
                                            addSponsored: false
                                        },
                                        focusPoint: { x: 0.5, y: 0.5 },
                                        // Global link
                                        globalLink: {
                                            url: '',
                                            openInNewTab: false,
                                            addNoFollow: false,
                                            addSponsored: false
                                        },
                                        enableResponsiveBg: false,
                                        DesktopBg: {
                                            url: '',
                                            id: '',
                                            alt: ''
                                        },
                                        TabletBg: {
                                            url: '',
                                            id: '',
                                            alt: ''
                                        },
                                        MobileBg: {
                                            url: '',
                                            id: '',
                                            alt: ''
                                        },
                                        DesktopFocalPoint: { x: 0.5, y: 0.5 },
                                        TabletFocalPoint: { x: 0.5, y: 0.5 },
                                        MobileFocalPoint: { x: 0.5, y: 0.5 }
                                    }
                                ]
                            });
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
                                const bgStyles = {
                                    backgroundColor: slide.bgColor ? slide.bgColor : '',
                                    ...(slide.bgType === 'classic' &&
                                        !slide.enableResponsiveBg &&
                                        slide.image?.url && {
                                            backgroundImage: `url(${slide.image.url})`
                                        }),
                                    ...(slide.bgType === 'gradient' &&
                                        slide.bgGradient && {
                                            backgroundImage: slide.bgGradient ? slide.bgGradient : ''
                                        }),
                                    ...(slide.enableResponsiveBg &&
                                        slide.bgType === 'classic' && {
                                            [`--gut-desktop-bg-image`]: `url(${slide.DesktopBg?.url})`,
                                            [`--gut-tablet-bg-image`]: `url(${slide.TabletBg?.url})`,
                                            [`--gut-mobile-bg-image`]: `url(${slide.MobileBg?.url})`
                                        }),

                                    ...(slide.enableResponsiveBg &&
                                        slide.bgType === 'classic' &&
                                        slide?.DesktopBg?.url &&
                                        slide?.DesktopFocalPoint && {
                                            [`--gut-desktop-focal-point`]: `${slide?.DesktopFocalPoint?.x * 100}% ${slide?.DesktopFocalPoint?.y * 100}%`
                                        }),

                                    ...(slide.enableResponsiveBg &&
                                        slide.bgType === 'classic' &&
                                        slide?.TabletBg?.url &&
                                        slide?.TabletFocalPoint && {
                                            [`--gut-tablet-focal-point`]: `${slide?.TabletFocalPoint?.x * 100}% ${slide?.TabletFocalPoint?.y * 100}%`
                                        }),

                                    ...(slide.enableResponsiveBg &&
                                        slide.bgType === 'classic' &&
                                        slide?.MobileBg?.url &&
                                        slide?.MobileFocalPoint && {
                                            [`--gut-mobile-focal-point`]: `${slide?.MobileFocalPoint?.x * 100}% ${slide?.MobileFocalPoint?.y * 100}%`
                                        }),

                                    ...(slide?.focusPoint &&
                                        slide.bgType !== 'video' &&
                                        !slide.enableResponsiveBg && {
                                            backgroundPosition: `${slide?.focusPoint?.x * 100}% ${slide?.focusPoint?.y * 100}%`
                                        })
                                };
                                const overlayStyles = {
                                    background: slide.overlayType === 'classic' ? slide.overlayColor : slide.overlayGradient,
                                    opacity: slide.overlayOpacity ? slide.overlayOpacity : ''
                                };
                                return (
                                    <div
                                        className={classnames('swiper-slide', {
                                            'slide-mode': sliderType === 'slider'
                                        })}
                                        key={`${uniqueId}-${index}`}
                                    >
                                        <DynamicTag
                                            tagName={enableGlobalLink ? 'a' : 'div'}
                                            className={classnames('swiper-container-outer', {
                                                'responsive-image': slide.enableResponsiveBg
                                            })}
                                            style={bgStyles}
                                        >
                                            {slide.bgType === 'video' && slide.bgVideo?.url && (
                                                <div className="gutslider-video-wrapper">
                                                    <video className="gutslider-video" autoPlay muted playsInline loop preload="metadata">
                                                        <source src={slide.bgVideo?.url} type="video/mp4" />
                                                    </video>
                                                </div>
                                            )}
                                            {slide.enableOverlay && (slide.bgType === 'classic' || slide.bgType === 'video') && (
                                                <div className="gutslider-overlay" style={overlayStyles}></div>
                                            )}
                                            <div className="gutslider-content-wrapper">
                                                {showImage ? (
                                                    <div className="gutslider-content-inner">
                                                        <div className="gutslider-content-position">
                                                            {slide.photo && slide.photo.url ? (
                                                                <div className="gutslider-content-image">
                                                                    <img
                                                                        src={slide.photo.sizes[slide.photoSize].url}
                                                                        alt={slide.photo.alt}
                                                                    />
                                                                </div>
                                                            ) : null}
                                                            <div className="gutslider-content">
                                                                {showSubTitle && (
                                                                    <RichText
                                                                        tagName={subtitleTag}
                                                                        className={`gutslider-subtitle ${
                                                                            subtitleAnimation && subtitleAnimation
                                                                        }`}
                                                                        value={slide.subtitle && slide.subtitle}
                                                                        placeholder={__('subtitle…', 'slider-blocks')}
                                                                        onChange={value => {
                                                                            const newItems = [...sliderItems];
                                                                            newItems[index].subtitle = value;
                                                                            setAttributes({ slideItems: newItems });
                                                                        }}
                                                                    />
                                                                )}
                                                                {showTitle && (
                                                                    <RichText
                                                                        tagName={titleTag}
                                                                        className={`gutslider-title ${titleAnimation && titleAnimation}`}
                                                                        value={slide.title && slide.title}
                                                                        placeholder={__('title…', 'slider-blocks')}
                                                                        onChange={value => {
                                                                            const newItems = [...sliderItems];
                                                                            newItems[index].title = value;
                                                                            setAttributes({ slideItems: newItems });
                                                                        }}
                                                                    />
                                                                )}

                                                                {showDescription && (
                                                                    <RichText
                                                                        tagName={descriptionTag}
                                                                        className={`gutslider-description ${
                                                                            descAnimation && descAnimation
                                                                        }`}
                                                                        value={slide.description && slide.description}
                                                                        placeholder={__('description…', 'slider-blocks')}
                                                                        onChange={value => {
                                                                            const newItems = [...sliderItems];
                                                                            newItems[index].description = value;
                                                                            setAttributes({ slideItems: newItems });
                                                                        }}
                                                                    />
                                                                )}
                                                            </div>
                                                        </div>
                                                        {showButton && slide?.showSbtnLinks ? (
                                                            <div className="gutslider-btn-flex">
                                                                <div
                                                                    className={classnames(`gutslider-cta ${btnAnimation && btnAnimation}`)}
                                                                >
                                                                    <RichText
                                                                        tagName="span"
                                                                        value={slide.btnLabel && slide.btnLabel}
                                                                        placeholder={__('Button Label', 'slider-blocks')}
                                                                        onChange={value => {
                                                                            const newItems = [...sliderItems];
                                                                            newItems[index].btnLabel = value;
                                                                            setAttributes({ slideItems: newItems });
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    className={classnames(
                                                                        `gutslider-cta-secondary  ${sbtnAnimation && sbtnAnimation}`
                                                                    )}
                                                                >
                                                                    <RichText
                                                                        tagName="span"
                                                                        value={slide.sbtnLabel && slide.sbtnLabel}
                                                                        placeholder={__('Button Label', 'slider-blocks')}
                                                                        onChange={value => {
                                                                            const newItems = [...sliderItems];
                                                                            newItems[index].sbtnLabel = value;
                                                                            setAttributes({ slideItems: newItems });
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            showButton && (
                                                                <div
                                                                    className={classnames(`gutslider-cta ${btnAnimation && btnAnimation}`)}
                                                                >
                                                                    <RichText
                                                                        tagName="span"
                                                                        value={slide.btnLabel && slide.btnLabel}
                                                                        placeholder={__('Button Label', 'slider-blocks')}
                                                                        onChange={value => {
                                                                            const newItems = [...sliderItems];
                                                                            newItems[index].btnLabel = value;
                                                                            setAttributes({ slideItems: newItems });
                                                                        }}
                                                                    />
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                ) : (
                                                    <div className="gutslider-content-inner">
                                                        {showSubTitle && (
                                                            <RichText
                                                                tagName={subtitleTag}
                                                                className={`gutslider-subtitle ${subtitleAnimation && subtitleAnimation}`}
                                                                value={slide.subtitle && slide.subtitle}
                                                                placeholder={__('subtitle…', 'slider-blocks')}
                                                                onChange={value => {
                                                                    const newItems = [...sliderItems];
                                                                    newItems[index].subtitle = value;
                                                                    setAttributes({ slideItems: newItems });
                                                                }}
                                                            />
                                                        )}

                                                        {showTitle && (
                                                            <RichText
                                                                tagName={titleTag}
                                                                className={`gutslider-title ${titleAnimation && titleAnimation}`}
                                                                value={slide.title && slide.title}
                                                                placeholder={__('title…', 'slider-blocks')}
                                                                onChange={value => {
                                                                    const newItems = [...sliderItems];
                                                                    newItems[index].title = value;
                                                                    setAttributes({ slideItems: newItems });
                                                                }}
                                                            />
                                                        )}
                                                        {showDescription && (
                                                            <RichText
                                                                tagName={descriptionTag}
                                                                className={`gutslider-description ${descAnimation && descAnimation}`}
                                                                value={slide.description && slide.description}
                                                                placeholder={__('description…', 'slider-blocks')}
                                                                onChange={value => {
                                                                    const newItems = [...sliderItems];
                                                                    newItems[index].description = value;
                                                                    setAttributes({ slideItems: newItems });
                                                                }}
                                                            />
                                                        )}

                                                        {showButton && slide?.showSbtnLinks ? (
                                                            <div className="gutslider-btn-flex">
                                                                <div
                                                                    className={classnames(`gutslider-cta ${btnAnimation && btnAnimation}`)}
                                                                >
                                                                    <RichText
                                                                        tagName="span"
                                                                        value={slide.btnLabel && slide.btnLabel}
                                                                        placeholder={__('Button Label', 'slider-blocks')}
                                                                        onChange={value => {
                                                                            const newItems = [...sliderItems];
                                                                            newItems[index].btnLabel = value;
                                                                            setAttributes({ slideItems: newItems });
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div
                                                                    className={classnames(
                                                                        `gutslider-cta-secondary  ${sbtnAnimation && sbtnAnimation}`
                                                                    )}
                                                                >
                                                                    <RichText
                                                                        tagName="span"
                                                                        value={slide.sbtnLabel && slide.sbtnLabel}
                                                                        placeholder={__('Button Label', 'slider-blocks')}
                                                                        onChange={value => {
                                                                            const newItems = [...sliderItems];
                                                                            newItems[index].sbtnLabel = value;
                                                                            setAttributes({ slideItems: newItems });
                                                                        }}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            showButton && (
                                                                <div
                                                                    className={classnames(`gutslider-cta ${btnAnimation && btnAnimation}`)}
                                                                >
                                                                    <RichText
                                                                        tagName="span"
                                                                        value={slide.btnLabel && slide.btnLabel}
                                                                        placeholder={__('Button Label', 'slider-blocks')}
                                                                        onChange={value => {
                                                                            const newItems = [...sliderItems];
                                                                            newItems[index].btnLabel = value;
                                                                            setAttributes({ slideItems: newItems });
                                                                        }}
                                                                    />
                                                                </div>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </DynamicTag>
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
