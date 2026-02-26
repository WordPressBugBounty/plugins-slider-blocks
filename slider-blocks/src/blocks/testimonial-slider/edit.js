/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-undef */
/**
 * WordPress dependencies
 */
import { BlockControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { Fragment, RawHTML, useEffect, useRef } from '@wordpress/element';
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

import * as Constants from './constants';
const { COLUMNS, COLUMNS_GAP } = Constants;
const { generateRangeStyles } = window.gutSliderModules;

const { ToolbarGroup, ToolbarButton } = wp.components;
const { dispatch } = wp.data;
const { __ } = wp.i18n;

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import DynamicStyle from './dynamic-style';
import Inspector from './inspector';

const { DisplayIcon, StarRating, SidebarOpener, DynamicTag } = window.gutSliderModules;
const { CE_STYLES } = window.gutSliderModules.GlobalConstants;

import socialIcons from '../../helper/social-icons';

/**
 * Edit function
 */

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        preset,
        queryType,
        uniqueID,
        totalPosts,
        postOrderBy,
        postOrder,
        imageStyle,
        photoDirection,
        preview,
        sliderType,
        slideItems,
        addNewSlide,
        photoAnimation,
        designationTag,
        nameTag,
        testimonialTag,
        nameAnimation,
        designationAnimation,
        testimonialAnimation,
        socialIconAnimation,
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
        // image
        imagePosition,
        photoVPosition,

        // global link
        enableGlobalLink,
        // custom navigation
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
                        id: 0,
                        panelTitle: 'Testimonial #1',
                        designation: 'CEO, Gutslider',
                        name: 'Mr. Gutslider',
                        testimonial:
                            'Gutslider is a Gutenberg Slider Block that is easy to use and has many features. It is a great alternative to other slider blocks that are not as easy to use and have less features.',
                        authorPhoto: {
                            id: '',
                            url: '',
                            alt: 'Author Profile'
                        },
                        authorPhotoFocusPoint: {},
                        bgType: 'classic',
                        bgColor: '#efefef',
                        bgGradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
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
                        focusPoint: {
                            x: 0.5,
                            y: 0.5
                        },
                        rating: 5,
                        showSocialIcons: false,
                        socialIconLinks: [
                            {
                                label: 'Facebook',
                                link: {
                                    url: 'https://facebook.com',
                                    openInNewTab: true
                                }
                            },
                            {
                                label: 'Twitter',
                                link: {
                                    url: 'https://twitter.com',
                                    openInNewTab: true
                                }
                            },
                            {
                                label: 'Instagram',
                                link: {
                                    url: 'https://instagram.com',
                                    openInNewTab: true
                                }
                            },
                            {
                                label: 'Pinterest',
                                link: {
                                    url: 'https://pinterest.com',
                                    openInNewTab: true
                                }
                            },
                            {
                                label: 'Linkedin',
                                link: {
                                    url: 'https://linkedin.com',
                                    openInNewTab: true
                                }
                            }
                        ],
                        // Global link
                        globalLink: {
                            url: '',
                            openInNewTab: false,
                            addNoFollow: false,
                            addSponsored: false
                        }
                    },
                    {
                        id: 1,
                        panelTitle: 'Testimonial #2',
                        designation: 'CEO, gutenbergkits.com',
                        name: 'Mr. GutenbergKits',
                        testimonial:
                            'Gutslider is a Gutenberg Slider Block that is easy to use and has many features. It is a great alternative to other slider blocks that are not as easy to use and have less features.',
                        authorPhoto: {
                            id: '',
                            url: '',
                            alt: 'Author Profile'
                        },
                        authorPhotoFocusPoint: {},
                        bgType: 'classic',
                        bgColor: '#efefef',
                        bgGradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
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
                        focusPoint: {
                            x: 0.5,
                            y: 0.5
                        },

                        showSocialIcons: false,
                        rating: 5,
                        socialIconLinks: [
                            {
                                label: 'Facebook',
                                link: {
                                    url: 'https://facebook.com',
                                    openInNewTab: true
                                }
                            },
                            {
                                label: 'Twitter',
                                link: {
                                    url: 'https://twitter.com',
                                    openInNewTab: true
                                }
                            },
                            {
                                label: 'Instagram',
                                link: {
                                    url: 'https://instagram.com',
                                    openInNewTab: true
                                }
                            },
                            {
                                label: 'Pinterest',
                                link: {
                                    url: 'https://pinterest.com',
                                    openInNewTab: true
                                }
                            },
                            {
                                label: 'Linkedin',
                                link: {
                                    url: 'https://linkedin.com',
                                    openInNewTab: true
                                }
                            }
                        ],
                        // Global link
                        globalLink: {
                            url: '',
                            openInNewTab: false,
                            addNoFollow: false,
                            addSponsored: false
                        }
                    }
                ]
            });
        }
    }, []);

    // preview
    if (preview) {
        return (
            <div className="gutslider-preview">
                <img src={gutslider_preview.testimonial_slider} alt="testimonial slider" />
            </div>
        );
    }

    // Block Props
    const blockProps = useBlockProps({
        className: classnames(uniqueID, navContainerPosition, navPosition)
    });
    // Slider breakpoints

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
        enableGlobalLink,
        slideItems,
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
                                        panelTitle: 'New Testimonial Item',
                                        designation: 'CEO, Gutslider',
                                        name: 'Mr. Gutslider',
                                        testimonial:
                                            'Gutslider is a Gutenberg Slider Block that is easy to use and has many features. It is a great alternative to other slider blocks that are not as easy to use and have less features.',
                                        authorPhoto: {
                                            id: '',
                                            url: '',
                                            alt: 'Author Profile'
                                        },
                                        bgType: 'classic',
                                        bgColor: '#efefef',
                                        bgGradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
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

                                        showSocialIcons: false,
                                        rating: 5,
                                        socialIconLinks: [
                                            {
                                                label: 'Facebook',
                                                link: {
                                                    url: 'https://facebook.com',
                                                    openInNewTab: true
                                                }
                                            },
                                            {
                                                label: 'Twitter',
                                                link: {
                                                    url: 'https://twitter.com',
                                                    openInNewTab: true
                                                }
                                            },
                                            {
                                                label: 'Instagram',
                                                link: {
                                                    url: 'https://instagram.com',
                                                    openInNewTab: true
                                                }
                                            },
                                            {
                                                label: 'Pinterest',
                                                link: {
                                                    url: 'https://pinterest.com',
                                                    openInNewTab: true
                                                }
                                            },
                                            {
                                                label: 'Linkedin',
                                                link: {
                                                    url: 'https://linkedin.com',
                                                    openInNewTab: true
                                                }
                                            }
                                        ],
                                        // Global link
                                        globalLink: {
                                            url: '',
                                            openInNewTab: false,
                                            addNoFollow: false,
                                            addSponsored: false
                                        }
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
                <div
                    className={classnames('swiper', {
                        [photoDirection]: preset === 'gutslider-preset-2',
                        [preset]: preset !== ''
                    })}
                    ref={swiperRef}
                >
                    <div className="swiper-wrapper">
                        {sliderItems &&
                            sliderItems.map((slide, index) => {
                                const bgStyles = {
                                    backgroundColor: slide.bgColor ? slide.bgColor : '',
                                    ...(slide.bgType !== 'video' && {
                                        backgroundImage: slide.bgType === 'classic' ? `url(${slide.image.url})` : slide.bgGradient,
                                        ...(slide?.focusPoint && {
                                            backgroundPosition: `${slide?.focusPoint?.x * 100}% ${slide?.focusPoint?.y * 100}%`
                                        })
                                    })
                                };
                                const overlayStyles = {
                                    background: slide.overlayType === 'classic' ? slide.overlayColor : slide.overlayGradient,
                                    opacity: slide.overlayOpacity ? slide.overlayOpacity : ''
                                };

                                const contentElement = (
                                    <>
                                        {preset === '' && imageStyle === 'inline' ? (
                                            <>
                                                <RichText
                                                    tagName={testimonialTag}
                                                    className={classnames('gutslider-testimonial', {
                                                        [testimonialAnimation]: testimonialAnimation !== ''
                                                    })}
                                                    value={slide.testimonial}
                                                    placeholder={__('testimonial…', 'slider-blocks')}
                                                    onChange={testimonial => {
                                                        const newItems = [...sliderItems];
                                                        newItems[index].testimonial = testimonial;
                                                        setAttributes({ slideItems: newItems });
                                                    }}
                                                />
                                                <div
                                                    className={classnames('main-content', imagePosition, {
                                                        [photoVPosition]: photoVPosition !== ''
                                                    })}
                                                >
                                                    <div className={classnames('author-photo-outer', imagePosition)}>
                                                        <div
                                                            className={classnames('author-photo', imagePosition, {
                                                                [photoAnimation]: photoAnimation !== ''
                                                            })}
                                                        >
                                                            {slide.authorPhoto && slide.authorPhoto.url ? (
                                                                <img
                                                                    src={slide.authorPhoto.url}
                                                                    alt={slide.authorPhoto.alt || slide.name}
                                                                    {...(slide?.authorPhotoFocusPoint && {
                                                                        style: {
                                                                            objectPosition: `${slide?.authorPhotoFocusPoint?.x * 100}% ${
                                                                                slide?.authorPhotoFocusPoint?.y * 100
                                                                            }%`
                                                                        }
                                                                    })}
                                                                />
                                                            ) : (
                                                                <img src={gutslider_preview?.placeholder} alt="placeholder" />
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className={classnames('gutsider-cta', imagePosition)}>
                                                        <div className="author-rating">
                                                            <StarRating rating={slide.rating} />
                                                        </div>
                                                        <RichText
                                                            tagName={nameTag}
                                                            className={classnames('gutslider-name', {
                                                                [nameAnimation]: nameAnimation !== ''
                                                            })}
                                                            value={slide.name}
                                                            placeholder={__('name…', 'slider-blocks')}
                                                            onChange={name => {
                                                                const newItems = [...sliderItems];
                                                                newItems[index].name = name;
                                                                setAttributes({ slideItems: newItems });
                                                            }}
                                                        />
                                                        <RichText
                                                            tagName={designationTag}
                                                            className={classnames('gutslider-designation', {
                                                                [designationAnimation]: designationAnimation !== ''
                                                            })}
                                                            value={slide.designation}
                                                            placeholder={__('designation…', 'slider-blocks')}
                                                            onChange={designation => {
                                                                const newItems = [...sliderItems];
                                                                newItems[index].designation = designation;
                                                                setAttributes({ slideItems: newItems });
                                                            }}
                                                        />
                                                        <div
                                                            className={classnames(
                                                                'social-profiles',
                                                                socialIconAnimation && socialIconAnimation
                                                            )}
                                                        >
                                                            {slide.socialIconLinks.map((social, socialKey) => (
                                                                <Fragment key={socialKey}>
                                                                    {social.link.url && (
                                                                        <a
                                                                            href={social.link.url}
                                                                            target={social.link.openInNewTab ? '_blank' : '_self'}
                                                                            rel={social.link.openInNewTab ? 'noopener noreferrer' : ''}
                                                                            className="social-profile"
                                                                        >
                                                                            <DisplayIcon icon={social.label} iconsList={socialIcons} />
                                                                        </a>
                                                                    )}
                                                                </Fragment>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <RichText
                                                    tagName={testimonialTag}
                                                    className={classnames('gutslider-testimonial', {
                                                        [testimonialAnimation]: testimonialAnimation !== ''
                                                    })}
                                                    value={slide.testimonial}
                                                    placeholder={__('testimonial…', 'slider-blocks')}
                                                    onChange={testimonial => {
                                                        const newItems = [...sliderItems];
                                                        newItems[index].testimonial = testimonial;
                                                        setAttributes({ slideItems: newItems });
                                                    }}
                                                />
                                                <div
                                                    className={classnames('gutsider-cta', {
                                                        [imagePosition]: imageStyle === 'inline' && preset === ''
                                                    })}
                                                >
                                                    <div className="author-rating">
                                                        <StarRating rating={slide.rating} />
                                                    </div>
                                                    <RichText
                                                        tagName={nameTag}
                                                        className={`gutslider-name ${nameAnimation && nameAnimation}`}
                                                        value={slide.name}
                                                        placeholder={__('name…', 'slider-blocks')}
                                                        onChange={name => {
                                                            const newItems = [...sliderItems];
                                                            newItems[index].name = name;
                                                            setAttributes({ slideItems: newItems });
                                                        }}
                                                    />
                                                    <RichText
                                                        tagName={designationTag}
                                                        className={`gutslider-designation ${designationAnimation && designationAnimation}`}
                                                        value={slide.designation}
                                                        placeholder={__('designation…', 'slider-blocks')}
                                                        onChange={designation => {
                                                            const newItems = [...sliderItems];
                                                            newItems[index].designation = designation;
                                                            setAttributes({ slideItems: newItems });
                                                        }}
                                                    />
                                                    {preset === '' && imageStyle === 'inline' && slide.showSocialIcons && (
                                                        <div
                                                            className={classnames(
                                                                'social-profiles',
                                                                socialIconAnimation && socialIconAnimation
                                                            )}
                                                        >
                                                            {slide.socialIconLinks.map((social, socialKey) => (
                                                                <Fragment key={socialKey}>
                                                                    {social.link.url && (
                                                                        <a
                                                                            href={social.link.url}
                                                                            target={social.link.openInNewTab ? '_blank' : '_self'}
                                                                            rel={social.link.openInNewTab ? 'noopener noreferrer' : ''}
                                                                            className="social-profile"
                                                                        >
                                                                            <DisplayIcon icon={social.label} iconsList={socialIcons} />
                                                                        </a>
                                                                    )}
                                                                </Fragment>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                                {slide.showSocialIcons && imageStyle !== 'inline' && (
                                                    <div className={`social-profiles ${socialIconAnimation && socialIconAnimation}`}>
                                                        {slide.socialIconLinks.map((social, socialKey) => (
                                                            <Fragment key={socialKey}>
                                                                {social.link.url && (
                                                                    <a
                                                                        href={social.link.url}
                                                                        target={social.link.openInNewTab ? '_blank' : '_self'}
                                                                        rel={social.link.openInNewTab ? 'noopener noreferrer' : ''}
                                                                        className="social-profile"
                                                                    >
                                                                        <DisplayIcon icon={social.label} iconsList={socialIcons} />
                                                                    </a>
                                                                )}
                                                            </Fragment>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </>
                                );

                                return (
                                    <div className={classnames('swiper-slide')} key={index}>
                                        <div className="swiper-testimonial-outer" style={bgStyles}>
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
                                            <DynamicTag tagName={enableGlobalLink ? 'a' : 'div'} className="gutslider-testimonial-wrapper">
                                                <div className="gutslider-testimonial-inner">
                                                    {(preset === 'gutslider-preset-2' || (preset === '' && imageStyle !== 'inline')) && (
                                                        <div className="author-photo-outer">
                                                            <div className={`author-photo ${photoAnimation && photoAnimation}`}>
                                                                {slide.authorPhoto && slide.authorPhoto.url ? (
                                                                    <img
                                                                        src={slide.authorPhoto.url}
                                                                        alt={slide.authorPhoto.alt || slide.name}
                                                                        {...(slide?.authorPhotoFocusPoint && {
                                                                            style: {
                                                                                objectPosition: `${
                                                                                    slide?.authorPhotoFocusPoint?.x * 100
                                                                                }% ${slide?.authorPhotoFocusPoint?.y * 100}%`
                                                                            }
                                                                        })}
                                                                    />
                                                                ) : (
                                                                    <img src={gutslider_preview?.placeholder} alt="placeholder" />
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                    {preset === 'gutslider-preset-2' && (
                                                        <div className="gutslider-content-wrap">{contentElement}</div>
                                                    )}

                                                    {preset !== 'gutslider-preset-2' && <>{contentElement}</>}
                                                </div>
                                            </DynamicTag>
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
