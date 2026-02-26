/* eslint-disable camelcase */
/* eslint-disable no-undef */
/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Fragment, RawHTML, useEffect, useRef } from '@wordpress/element';

import { Spinner } from '@wordpress/components';
import { dispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector';

import * as Constants from './constants';

const { generateRangeStyles, DisplayIcon, SidebarOpener } = window.gutSliderModules;
const { COLUMNS, COLUMNS_GAP } = Constants;

const { CE_STYLES } = window.gutSliderModules.GlobalConstants;

// import Style
import Style from './style';

/**
 * Edit function
 */

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        uniqueId,
        resMode,
        preview,
        queryPosts,
        queryType,
        totalPosts,
        postOrderBy,
        postOrder,
        sliderType,
        addNewSlide,
        showCat,
        showTitle,
        linkTitle,
        showExcerpt,
        excerptLength,
        showBtn,
        titleTag,
        btnLabel,
        titleAnimation,
        catAnimation,
        exptAnimation,
        btnAnimation,
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
        focusPoints,
        // content
        detachContent,
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
    }, []);

    // preview
    if (preview) {
        return (
            <div className="gutslider-preview">
                <img src={gutslider_preview.content} alt="post slider" />
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
                spaceBetween: mobColumnsGap || 0
            },
            768: {
                slidesPerView: tabSlideColumns || 2,
                spaceBetween: tabColumnsGap || 15
            },
            1025: {
                slidesPerView: deskSlideColumns || 2,
                spaceBetween: deskColumnsGap || 15
            }
        }
    };

    const sliderBreakPoints = sliderType === 'carousel' ? breakPoints : {};

    // swiper initialize
    const swiperRef = useRef(null);

    if (swiperRef.current) {
        swiperRef.current.addEventListener('click', function () {
            dispatch('core/block-editor').selectBlock(clientId);
            dispatch('core/edit-post').openGeneralSidebar('edit-post/block');
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
        queryType,
        totalPosts,
        postOrderBy,
        postOrder,
        swiperRef.current,
        enableRemoteNav,
        remotePrevSelector,
        remoteNextSelector,
        resMode
    ]);

    // all categories list
    const allCategories = useSelect(select => {
        const { getEntityRecords } = select('core');
        const query = {
            per_page: -1,
            orderby: 'name',
            order: 'asc',
            _embed: true,
            hide_empty: true,
            parent: 0
        };
        return getEntityRecords('taxonomy', 'category', query);
    }, []);

    return (
        <Fragment>
            <Style attributes={attributes} setAttributes={setAttributes} />
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <div {...blockProps}>
                <SidebarOpener />
                <div className="swiper" ref={swiperRef}>
                    <div className="swiper-wrapper">
                        {queryPosts && queryPosts.length > 0 ? (
                            queryPosts.map((post, index) => {
                                // post categories
                                const catIDs = post.categories || [];
                                const postCategories = [];
                                if (allCategories) {
                                    catIDs.forEach(catID => {
                                        const cat = allCategories.find(category => category.id === catID);
                                        if (cat) {
                                            postCategories.push(cat);
                                        }
                                    });
                                }

                                // featured image
                                const featuredImage = post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0] : false;

                                // excerpt
                                const excerpt = post && post.excerpt.rendered;
                                const words = excerpt && excerpt.split(' ');
                                const trimmedExcerpt = words && words.splice(0, excerptLength).join(' ');

                                return (
                                    <div
                                        className={classnames('swiper-slide', `${sliderType === 'slider' ? 'slide-mode' : ''}`, {
                                            'detach-content': detachContent
                                        })}
                                        key={index}
                                    >
                                        <div
                                            className="swiper-container-outer"
                                            {...(featuredImage &&
                                                !detachContent && {
                                                    style: {
                                                        backgroundImage: `url(${featuredImage.source_url})`,
                                                        backgroundPosition:
                                                            focusPoints[index] &&
                                                            focusPoints[index] !== null &&
                                                            focusPoints[index].x !== null &&
                                                            focusPoints[index].y !== null
                                                                ? `${focusPoints[index].x * 100}% ${focusPoints[index].y * 100}%`
                                                                : 'center center'
                                                    }
                                                })}
                                        >
                                            <div className="gutslider-overlay"></div>
                                            {detachContent && (
                                                <a className="detached-featured-image">
                                                    <img
                                                        src={featuredImage.source_url}
                                                        alt={(post && post.title.rendered) || post?.title.rendered}
                                                        style={
                                                            focusPoints[index] &&
                                                            focusPoints[index] !== null &&
                                                            focusPoints[index].x !== null &&
                                                            focusPoints[index].y !== null
                                                                ? {
                                                                      objectPosition: `${focusPoints[index].x * 100}% ${
                                                                          focusPoints[index].y * 100
                                                                      }%`
                                                                  }
                                                                : {}
                                                        }
                                                    />
                                                </a>
                                            )}
                                            <div
                                                className={classnames('gutslider-content-wrapper', {
                                                    'detach-content': detachContent
                                                })}
                                            >
                                                <div className="gutslider-content-inner">
                                                    {showCat && (
                                                        <>
                                                            {postCategories && postCategories.length > 0 && (
                                                                <div className={`post-categories ${catAnimation && catAnimation}`}>
                                                                    {postCategories.map((cat, i) => {
                                                                        return (
                                                                            <span className="post-category" key={i}>
                                                                                {cat.name}
                                                                            </span>
                                                                        );
                                                                    })}
                                                                </div>
                                                            )}
                                                        </>
                                                    )}
                                                    {showTitle && (
                                                        <>
                                                            {linkTitle ? (
                                                                <a className="post-title">
                                                                    <RichText.Content
                                                                        tagName={titleTag}
                                                                        className={`post-title ${titleAnimation && titleAnimation}`}
                                                                        value={post && post.title.rendered}
                                                                    />
                                                                </a>
                                                            ) : (
                                                                <RichText.Content
                                                                    tagName={titleTag}
                                                                    className={`post-title ${titleAnimation && titleAnimation}`}
                                                                    value={post && post.title.rendered}
                                                                />
                                                            )}
                                                        </>
                                                    )}
                                                    {showExcerpt && (
                                                        <div className={`post-excerpt ${exptAnimation && exptAnimation}`}>
                                                            <RawHTML>{trimmedExcerpt}</RawHTML>
                                                        </div>
                                                    )}
                                                    {showBtn && (
                                                        <div className={`post-cta-wrapper ${btnAnimation && btnAnimation}`}>
                                                            <a className="post-cta">{btnLabel}</a>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <Fragment>
                                {queryPosts === null ? (
                                    <>
                                        <Spinner />
                                    </>
                                ) : (
                                    <p>{__('No Posts Found', 'slider-blocks')}</p>
                                )}
                            </Fragment>
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
