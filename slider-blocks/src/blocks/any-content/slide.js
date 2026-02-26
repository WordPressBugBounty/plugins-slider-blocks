/* eslint-disable react-hooks/rules-of-hooks */
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { registerBlockType } from '@wordpress/blocks';
import { GradientPicker, PanelBody, RangeControl, ToggleControl } from '@wordpress/components';
import { dispatch } from '@wordpress/data';
import { Fragment, useRef } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { BACKGROUND_TYPES } from './constants';

const { ButtonsGroupControl, ColorControl, Preview, UploadBtn, LinkControl, ProLock, DynamicTag, ResponsiveControl } =
    window?.gutSliderModules;
const { OVERLAY_TYPES, GRADIENT_PALETTES } = window.gutSliderModules.GlobalConstants;

import classnames from 'classnames';

// Deprecated Support
import slideDeprecated from './slide-deprecated';
/**
 * Register: Slide Block
 */
registerBlockType('gutsliders/slide', {
    title: __('Slide', 'slider-blocks'),
    description: __('Acts as child for any content slider', 'slider-blocks'),
    category: 'slider-blocks',
    parent: ['gutsliders/any-content'],
    deprecated: slideDeprecated,
    icon: {
        src: (
            <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                style={{
                    fill: '#fff'
                }}
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect x="0.75" y="9.75" width="22.5" height="3.5" rx="1.25" stroke="#007CBA" strokeWidth="1.5" />
            </svg>
        )
    },
    supports: {
        html: false,
        align: false,
        customClassName: false
    },
    attributes: {
        // global link
        enableGlobalLink: {
            type: 'boolean',
            default: false
        },
        // Global link
        globalLink: {
            url: '',
            openInNewTab: false,
            addNoFollow: false,
            addSponsored: false
        },
        bgType: {
            type: 'string',
            default: 'classic'
        },
        bgColor: {
            type: 'string',
            default: '#efefef'
        },
        bgGradient: {
            type: 'string',
            default: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)'
        },
        enableOverlay: {
            type: 'boolean',
            default: false
        },
        overlayType: {
            type: 'string',
            default: 'classic'
        },
        overlayColor: {
            type: 'string',
            default: '#000000'
        },
        overlayGradient: {
            type: 'string',
            default: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)'
        },
        overlayOpacity: {
            type: 'number',
            default: 0.5
        },
        image: {
            type: 'object',
            default: {
                id: '',
                url: '',
                alt: ''
            }
        },
        focusPoint: {
            type: 'object',
            default: {
                x: 0.5,
                y: 0.5
            }
        },
        bgVideo: {},
        enableResponsiveBg: {
            type: 'boolean',
            default: false
        },
        DesktopBg: {
            type: 'object',
            default: {
                url: '',
                id: '',
                alt: ''
            }
        },
        TabletBg: {
            type: 'object',
            default: {
                url: '',
                id: '',
                alt: ''
            }
        },
        MobileBg: {
            type: 'object',
            default: {
                url: '',
                id: '',
                alt: ''
            }
        },
        DesktopFocalPoint: {
            type: 'object',
            default: {
                x: 0.5,
                y: 0.5
            }
        },
        TabletFocalPoint: {
            type: 'object',
            default: {
                x: 0.5,
                y: 0.5
            }
        },
        MobileFocalPoint: {
            type: 'object',
            default: {
                x: 0.5,
                y: 0.5
            }
        }
    },
    edit: ({ attributes, setAttributes, clientId }) => {
        const {
            resMode,
            bgType,
            bgColor,
            bgGradient,
            enableOverlay,
            overlayType,
            overlayColor,
            overlayGradient,
            overlayOpacity,
            image,
            focusPoint,
            bgVideo,
            enableGlobalLink,
            globalLink,
            enableResponsiveBg,
            DesktopBg,
            TabletBg,
            MobileBg,
            DesktopFocalPoint,
            TabletFocalPoint,
            MobileFocalPoint
        } = attributes;

        // style
        const bgStyles = {
            backgroundColor: bgColor ? bgColor : '',
            ...(bgType !== 'video' &&
                !enableResponsiveBg && {
                    backgroundImage: bgType === 'classic' ? `url(${image.url})` : bgGradient,
                    ...(bgType === 'classic' &&
                        image.url && {
                            backgroundSize: 'cover',
                            backgroundPosition:
                                focusPoint && focusPoint?.x !== null && focusPoint?.y !== null
                                    ? `${focusPoint.x * 100}% ${focusPoint.y * 100}%`
                                    : '50% 50%',
                            backgroundRepeat: 'no-repeat'
                        })
                }),
            ...(bgType === 'classic' &&
                enableResponsiveBg &&
                DesktopBg?.url && {
                    '--gut-desktop-bg-image': `url(${DesktopBg.url})`,
                    ...(DesktopFocalPoint && {
                        '--gut-desktop-focal-point': `${DesktopFocalPoint.x * 100}% ${DesktopFocalPoint.y * 100}%`
                    })
                }),
            ...(bgType === 'classic' &&
                enableResponsiveBg &&
                TabletBg?.url && {
                    '--gut-tablet-bg-image': `url(${TabletBg.url})`,
                    ...(TabletFocalPoint && {
                        '--gut-tablet-focal-point': `${TabletFocalPoint.x * 100}% ${TabletFocalPoint.y * 100}%`
                    })
                }),
            ...(bgType === 'classic' &&
                enableResponsiveBg &&
                MobileBg?.url && {
                    '--gut-mobile-bg-image': `url(${MobileBg.url})`,
                    ...(MobileFocalPoint && {
                        '--gut-mobile-focal-point': `${MobileFocalPoint.x * 100}% ${MobileFocalPoint.y * 100}%`
                    })
                })
        };
        const overlayStyles = {
            background: overlayType === 'classic' ? overlayColor : overlayGradient,
            opacity: overlayOpacity ? overlayOpacity : ''
        };

        // swiper click event
        const swiperRef = useRef(null);
        if (swiperRef.current) {
            swiperRef.current.addEventListener('click', function () {
                dispatch('core/block-editor').selectBlock(clientId);
                dispatch('core/edit-post').openGeneralSidebar('edit-post/block');
            });
        }

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody>
                        <ProLock>
                            <ToggleControl
                                label={__('Enable Wrapper Link', 'slider-blocks')}
                                checked={enableGlobalLink}
                                onChange={() => setAttributes({ enableGlobalLink: !enableGlobalLink })}
                            />
                        </ProLock>
                        {enableGlobalLink && (
                            <>
                                <p className="gutslider-note">
                                    {__(
                                        "Enable this option to add a global link to all slides.Don't use link for any inner content.",
                                        'slider-blocks'
                                    )}
                                </p>
                                <LinkControl
                                    label={__('Wrapper Link', 'slider-blocks')}
                                    value={globalLink}
                                    onChange={value => {
                                        setAttributes({
                                            globalLink: value
                                        });
                                    }}
                                />
                            </>
                        )}
                        <ButtonsGroupControl
                            label={__('Background Type', 'slider-blocks')}
                            value={bgType}
                            options={applyFilters('gutslider.slideBgTypes', BACKGROUND_TYPES)}
                            onChange={value => {
                                setAttributes({
                                    bgType: value
                                });
                            }}
                        />
                        {bgType === 'classic' && (
                            <Fragment>
                                <ColorControl
                                    label={__('Background Color', 'slider-blocks')}
                                    color={bgColor}
                                    onChange={value => {
                                        setAttributes({
                                            bgColor: value
                                        });
                                    }}
                                />
                                <ProLock>
                                    <ToggleControl
                                        label={__('Responsive Background Image', 'slider-blocks')}
                                        checked={enableResponsiveBg}
                                        onChange={() => {
                                            setAttributes({
                                                enableResponsiveBg: !enableResponsiveBg
                                            });
                                        }}
                                    />
                                </ProLock>
                                {enableResponsiveBg && (
                                    <ResponsiveControl label={__('Background', 'slider-blocks')} setAttributes={setAttributes}>
                                        {attributes[`${resMode}Bg`]?.url ? (
                                            <Preview
                                                url={attributes[`${resMode}Bg`]?.url}
                                                id={attributes[`${resMode}Bg`]?.id}
                                                alt={attributes[`${resMode}Bg`]?.alt}
                                                onSelect={media => {
                                                    setAttributes({
                                                        [`${resMode}Bg`]: {
                                                            id: media.id,
                                                            url: media.url,
                                                            alt: media.alt
                                                        }
                                                    });
                                                }}
                                                onClick={() => {
                                                    setAttributes({
                                                        [`${resMode}Bg`]: {
                                                            id: '',
                                                            url: '',
                                                            alt: ''
                                                        }
                                                    });
                                                }}
                                                focalPoint={true}
                                                focalValue={attributes[`${resMode}FocalPoint`]}
                                                onFocalPointChange={value => {
                                                    setAttributes({
                                                        [`${resMode}FocalPoint`]: value
                                                    });
                                                }}
                                            />
                                        ) : (
                                            <UploadBtn
                                                title={__('Upload Image', 'slider-blocks')}
                                                onSelect={media => {
                                                    setAttributes({
                                                        [`${resMode}Bg`]: {
                                                            id: media.id,
                                                            url: media.url,
                                                            alt: media.alt || 'GutSlider Block'
                                                        }
                                                    });
                                                    console.log('media', media);
                                                }}
                                                id={attributes[`${resMode}Bg`]?.id}
                                            />
                                        )}
                                    </ResponsiveControl>
                                )}
                                {!enableResponsiveBg && (
                                    <>
                                        {image && image.url ? (
                                            <Fragment>
                                                <Preview
                                                    url={image?.url}
                                                    id={image?.id}
                                                    alt={image?.alt}
                                                    onSelect={media =>
                                                        setAttributes({
                                                            image: {
                                                                id: media.id,
                                                                url: media.url,
                                                                alt: media.alt || 'GutSlider Block'
                                                            }
                                                        })
                                                    }
                                                    onClick={() =>
                                                        setAttributes({
                                                            image: {
                                                                id: '',
                                                                url: '',
                                                                alt: ''
                                                            }
                                                        })
                                                    }
                                                    focalPoint={true}
                                                    focalValue={focusPoint}
                                                    onFocalPointChange={value => {
                                                        setAttributes({
                                                            focusPoint: value
                                                        });
                                                    }}
                                                />
                                            </Fragment>
                                        ) : (
                                            <UploadBtn
                                                title={__('Upload Image', 'slider-blocks')}
                                                onSelect={media =>
                                                    setAttributes({
                                                        image: {
                                                            id: media.id,
                                                            url: media.url,
                                                            alt: media.alt || 'GutSlider Block'
                                                        }
                                                    })
                                                }
                                                id={image && image.id}
                                            />
                                        )}
                                    </>
                                )}
                            </Fragment>
                        )}
                        {bgType === 'gradient' && (
                            <GradientPicker
                                __nextHasNoMargin={true}
                                value={bgGradient && bgGradient}
                                onChange={currentGradient =>
                                    setAttributes({
                                        bgGradient: currentGradient
                                    })
                                }
                                gradients={GRADIENT_PALETTES}
                            />
                        )}
                        {bgType === 'video' && (
                            <Fragment>
                                {bgVideo && bgVideo.url ? (
                                    <Preview
                                        url={bgVideo.url}
                                        id={bgVideo.id}
                                        onSelect={media => {
                                            setAttributes({
                                                bgVideo: {
                                                    id: media.id,
                                                    url: media.url
                                                }
                                            });
                                        }}
                                        onClick={() => {
                                            setAttributes({
                                                bgVideo: {
                                                    id: '',
                                                    url: ''
                                                }
                                            });
                                        }}
                                        videoType={true}
                                    />
                                ) : (
                                    <UploadBtn
                                        title={__('Upload Video', 'slider-blocks')}
                                        onSelect={media => {
                                            setAttributes({
                                                bgVideo: {
                                                    id: media.id,
                                                    url: media.url
                                                }
                                            });
                                        }}
                                        id={bgVideo && bgVideo.id}
                                        videoType={true}
                                    />
                                )}
                            </Fragment>
                        )}
                        {((bgType === 'classic' && image && image.url) || bgType === 'video') && (
                            <ToggleControl
                                label={__('Enable Overlay', 'slider-blocks')}
                                checked={enableOverlay && enableOverlay}
                                onChange={() =>
                                    setAttributes({
                                        enableOverlay: !enableOverlay
                                    })
                                }
                            />
                        )}

                        {enableOverlay && (bgType === 'classic' || bgType === 'video') && (
                            <Fragment>
                                <ButtonsGroupControl
                                    label={__('Overlay Type', 'slider-blocks')}
                                    value={overlayType && overlayType}
                                    options={OVERLAY_TYPES}
                                    onChange={value =>
                                        setAttributes({
                                            overlayType: value
                                        })
                                    }
                                />
                                {overlayType === 'classic' && (
                                    <ColorControl
                                        label={__('Overlay Color', 'slider-blocks')}
                                        color={overlayColor && overlayColor}
                                        onChange={value =>
                                            setAttributes({
                                                overlayColor: value
                                            })
                                        }
                                    />
                                )}
                                {overlayType === 'gradient' && (
                                    <GradientPicker
                                        __nextHasNoMargin={true}
                                        value={overlayGradient && overlayGradient}
                                        onChange={currentGradient =>
                                            setAttributes({
                                                overlayGradient: currentGradient
                                            })
                                        }
                                        gradients={GRADIENT_PALETTES}
                                    />
                                )}
                                <RangeControl
                                    label={__('Overlay Opacity', 'slider-blocks')}
                                    value={overlayOpacity && overlayOpacity}
                                    onChange={v =>
                                        setAttributes({
                                            overlayOpacity: v
                                        })
                                    }
                                    min={0.01}
                                    max={1}
                                    step={0.01}
                                />
                            </Fragment>
                        )}
                    </PanelBody>
                </InspectorControls>
                <div {...useBlockProps()} rel={swiperRef}>
                    <DynamicTag
                        tagName={enableGlobalLink ? 'a' : 'div'}
                        className={classnames('swiper-container-outer', {
                            'responsive-image': enableResponsiveBg
                        })}
                        style={bgStyles}
                    >
                        {bgType === 'video' && bgVideo?.url && (
                            <div className="gutslider-video-wrapper">
                                <video className="gutslider-video" autoPlay muted playsInline loop preload="metadata">
                                    <source src={bgVideo?.url} type="video/mp4" />
                                </video>
                            </div>
                        )}
                        {enableOverlay && (bgType === 'classic' || bgType === 'video') && (
                            <div className="gutslider-overlay" style={overlayStyles}></div>
                        )}

                        <div className="gutslider-content-inner">
                            <InnerBlocks
                                template={[
                                    [
                                        'core/paragraph',
                                        {
                                            align: 'center'
                                        }
                                    ]
                                ]}
                            />
                        </div>
                    </DynamicTag>
                </div>
            </Fragment>
        );
    },
    save: ({ attributes }) => {
        const {
            bgType,
            bgColor,
            bgGradient,
            enableOverlay,
            overlayType,
            overlayColor,
            overlayGradient,
            overlayOpacity,
            image,
            focusPoint,
            bgVideo,
            enableGlobalLink,
            globalLink,
            enableResponsiveBg,
            DesktopBg,
            TabletBg,
            MobileBg,
            DesktopFocalPoint,
            TabletFocalPoint,
            MobileFocalPoint
        } = attributes;

        // style
        const bgStyles = {
            backgroundColor: bgColor ? bgColor : '',
            ...(bgType !== 'video' &&
                !enableResponsiveBg && {
                    backgroundImage: bgType === 'classic' ? `url(${image.url})` : bgGradient,
                    backgroundSize: 'cover',
                    backgroundPosition:
                        focusPoint && focusPoint?.x !== null && focusPoint?.y !== null
                            ? `${focusPoint.x * 100}% ${focusPoint.y * 100}%`
                            : '50% 50%',
                    backgroundRepeat: 'no-repeat'
                }),
            ...(bgType === 'classic' &&
                enableResponsiveBg &&
                DesktopBg?.url && {
                    '--gut-desktop-bg-image': `url(${DesktopBg.url})`,
                    ...(DesktopFocalPoint && {
                        '--gut-desktop-focal-point': `${DesktopFocalPoint.x * 100}% ${DesktopFocalPoint.y * 100}%`
                    })
                }),
            ...(bgType === 'classic' &&
                enableResponsiveBg &&
                TabletBg?.url && {
                    '--gut-tablet-bg-image': `url(${TabletBg.url})`,
                    ...(TabletFocalPoint && {
                        '--gut-tablet-focal-point': `${TabletFocalPoint.x * 100}% ${TabletFocalPoint.y * 100}%`
                    })
                }),
            ...(bgType === 'classic' &&
                enableResponsiveBg &&
                MobileBg?.url && {
                    '--gut-mobile-bg-image': `url(${MobileBg.url})`,
                    ...(MobileFocalPoint && {
                        '--gut-mobile-focal-point': `${MobileFocalPoint.x * 100}% ${MobileFocalPoint.y * 100}%`
                    })
                })
        };
        const overlayStyles = {
            background: overlayType === 'classic' ? overlayColor : overlayGradient,
            opacity: overlayOpacity ? overlayOpacity : ''
        };
        return (
            <div
                {...useBlockProps.save({
                    className: 'swiper-slide'
                })}
            >
                <DynamicTag
                    tagName={enableGlobalLink ? 'a' : 'div'}
                    {...(enableGlobalLink && {
                        href: globalLink.url,
                        ...(globalLink.openInNewTab && {
                            target: '_blank',
                            rel: [
                                globalLink.addNoFollow && 'nofollow',
                                globalLink.addSponsored && 'sponsored',
                                globalLink.openInNewTab && 'noopener noreferrer'
                            ]
                                .filter(Boolean)
                                .join(' ')
                        })
                    })}
                    className={classnames('swiper-container-outer', {
                        'responsive-image': enableResponsiveBg
                    })}
                    style={bgStyles}
                >
                    {bgType === 'video' && bgVideo?.url && (
                        <div className="gutslider-video-wrapper">
                            <video className="gutslider-video" autoPlay muted playsInline loop preload="metadata">
                                <source src={bgVideo?.url} type="video/mp4" />
                            </video>
                        </div>
                    )}
                    {enableOverlay && (bgType === 'classic' || bgType === 'video') && (
                        <div className="gutslider-overlay" style={overlayStyles}></div>
                    )}
                    <div className="gutslider-content-inner">
                        <InnerBlocks.Content />
                    </div>
                </DynamicTag>
            </div>
        );
    }
});
