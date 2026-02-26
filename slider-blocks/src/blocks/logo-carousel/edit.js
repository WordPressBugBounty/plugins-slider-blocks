/* eslint-disable camelcase */
/* eslint-disable no-undef */
/**
 * WordPress dependencies
 */
import { BlockControls, MediaPlaceholder, MediaUpload, useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
const { Fragment, RawHTML, useEffect, useRef } = wp.element;

const { ToolbarGroup, ToolbarButton } = wp.components;
const { dispatch } = wp.data;
const { __ } = wp.i18n;

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector';

import * as Constants from './constants';

const { generateRangeStyles, DisplayIcon, SidebarOpener } = window.gutSliderModules;
const { COLUMNS, COLUMNS_GAP } = Constants;

// import style
import Style from './style';

/**
 * Edit function
 */

export default function Edit(props) {
    const { attributes, setAttributes, clientId } = props;
    const {
        preset,
        uniqueId,
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
        carouselEffect,
        creativeEffectStyle,
        showCaption,
        titlePosition,
        titleWidthType,
        linkedLogos,
        openLinkInNewTab,
        photoHoverEffect,
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

    // block preview
    if (preview) {
        return (
            <div className="gutslider-preview">
                <img src={gutslider_preview.photo_carousel} alt="logo carousel" />
            </div>
        );
    }

    // Block Props
    const blockProps = useBlockProps({
        className: classnames(uniqueId, navContainerPosition, navPosition, showPagination ? 'has__pagination' : '')
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
            dispatch('core/edit-photo')?.openGeneralSidebar('edit-photo/block');
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
            slidesPerView: 4,
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
            effect: carouselEffect,
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
                          nextEl: customNavIcon ? `.${uniqueId} .gutslider-next` : `.${uniqueId} .swiper-button-next`,
                          prevEl: customNavIcon ? `.${uniqueId} .gutslider-prev` : `.${uniqueId} .swiper-button-prev`
                      }
                    : false,
            pagination: showPagination
                ? { el: `.${uniqueId} .swiper-pagination`, type: paginationType, dynamicBullets, clickable: true }
                : false
        };

        setAttributes({ sliderOptions: setOption });

        if (!swiperRef.current) return;

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
        swiperRef.current,
        navContainerPosition,
        enableRemoteNav,
        remotePrevSelector,
        remoteNextSelector
    ]);

    return (
        <Fragment>
            <Style props={props} />
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <BlockControls>
                <ToolbarGroup className="gutslider-toolbar-group">
                    <MediaUpload
                        onSelect={media => {
                            setAttributes({
                                slideItems: media,
                                addNewSlide: !addNewSlide
                            });
                        }}
                        allowedTypes={['image']}
                        multiple={true}
                        gallery={true}
                        value={slideItems.map(item => item.id)}
                        render={({ open }) => (
                            <ToolbarButton className="gutslider-toolbar-button" title={__('Edit Photos', 'slider-blocks')} onClick={open}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                    />
                                </svg>
                            </ToolbarButton>
                        )}
                    />
                </ToolbarGroup>
            </BlockControls>
            <div {...blockProps}>
                <SidebarOpener />
                <div className={`swiper ${preset}`} ref={swiperRef}>
                    <div className="swiper-wrapper">
                        {slideItems && slideItems.length > 0 ? (
                            slideItems.map((slide, index) => {
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <div className={`swiper-container-outer ${photoHoverEffect}`}>
                                            {linkedLogos && (
                                                <div className="gutslider-overlay">
                                                    {linkedLogos ? (
                                                        <a
                                                            className="overlay-icon"
                                                            href={slide.link ? slide.link : '#'}
                                                            target={openLinkInNewTab && '_blank'}
                                                            rel={openLinkInNewTab && 'noopener noreferrer'}
                                                        >
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="16"
                                                                height="16"
                                                                fill="currentColor"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                                            </svg>
                                                        </a>
                                                    ) : (
                                                        <div className="overlay-icon">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="16"
                                                                height="16"
                                                                fill="currentColor"
                                                                viewBox="0 0 16 16"
                                                            >
                                                                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                                            </svg>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                            {slide.url && <img src={slide.url} alt={slide.alt} />}
                                            {showCaption && (
                                                <div className={`gutslider-caption ${titlePosition} ${titleWidthType}`}>
                                                    {slide.caption ? slide.caption : __('No Caption', 'slider-blocks')}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <MediaPlaceholder
                                onSelect={media => {
                                    setAttributes({
                                        slideItems: media,
                                        addNewSlide: !addNewSlide
                                    });
                                }}
                                icon="format-gallery"
                                allowedTypes={['image']}
                                multiple={true}
                                labels={{
                                    title: __('Upload Clients Logos', 'slider-blocks'),
                                    instructions: __('Upload multiple logos directly or from your media library', 'slider-blocks')
                                }}
                            />
                        )}
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
                {showPagination && <div className="swiper-pagination"></div>}
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
