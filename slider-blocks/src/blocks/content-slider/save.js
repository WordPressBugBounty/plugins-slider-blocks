/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Fragment, RawHTML } from '@wordpress/element';
import classnames from 'classnames';

const { DisplayIcon, DynamicTag } = window?.gutSliderModules;

/**
 * Save function
 */

export default function save({ attributes }) {
    const {
        uniqueId,
        //visible elements
        showImage,
        showSubTitle,
        showTitle,
        showDescription,
        showButton,
        sliderType,
        slideItems,
        sliderOptions,
        titleTag,
        subtitleTag,
        descriptionTag,
        titleAnimation,
        subtitleAnimation,
        descAnimation,
        btnAnimation,
        sbtnAnimation,
        showPagination,
        showNavigation,
        navContainerPosition,
        navPosition,
        customNavIcon,
        navIconSource,
        navPrevIcon,
        navNextIcon,
        customPrevSVG,
        customNextSVG,
        // global link
        enableGlobalLink,
        // remote navigation
        enableRemoteNav,
        remotePrevSelector,
        remoteNextSelector
    } = attributes;

    // Block Props
    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, navContainerPosition, navPosition)
    });

    return (
        <div
            {...blockProps}
            data-swiper-options={JSON.stringify(sliderOptions)}
            {...(enableRemoteNav && {
                'data-rprev': remotePrevSelector,
                'data-rnext': remoteNextSelector
            })}
        >
            <div className="swiper">
                <div className="swiper-wrapper">
                    {slideItems &&
                        slideItems.map((slide, index) => {
                            const bgStyles = {
                                backgroundColor: slide.bgColor ? slide.bgColor : '',
                                ...(slide.bgType !== 'video' &&
                                    !slide.enableResponsiveBg && {
                                        backgroundImage: slide.bgType === 'classic' ? `url(${slide.image.url})` : slide.bgGradient
                                    }),
                                ...(slide.bgType !== 'video' &&
                                    slide.enableResponsiveBg &&
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
                                    key={index}
                                >
                                    <DynamicTag
                                        tagName={enableGlobalLink ? 'a' : 'div'}
                                        {...(enableGlobalLink && {
                                            ...(slide.globalLink?.url && {
                                                href: slide.globalLink.url
                                            }),
                                            ...(slide.globalLink?.openInNewTab && {
                                                target: '_blank',
                                                rel: [
                                                    slide.globalLink.addNoFollow && 'nofollow',
                                                    slide.globalLink.addSponsored && 'sponsored',
                                                    slide.globalLink.openInNewTab && 'noopener noreferrer'
                                                ]
                                                    .filter(Boolean)
                                                    .join(' ')
                                            })
                                        })}
                                        className={classnames('swiper-container-outer', {
                                            'responsive-image': slide.enableResponsiveBg
                                        })}
                                        style={bgStyles}
                                    >
                                        {slide.bgType === 'video' && slide.bgVideo?.url && (
                                            <div className="gutslider-video-wrapper">
                                                <video className="gutslider-video" autoPlay loop muted playsInline preload="metadata">
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
                                                                    className={classnames(`wp-image-${slide.photo.id}`)}
                                                                />
                                                            </div>
                                                        ) : null}
                                                        <div className="guslider-content">
                                                            {showSubTitle && slide.subtitle && (
                                                                <RichText.Content
                                                                    tagName={subtitleTag}
                                                                    value={slide.subtitle}
                                                                    className={`gutslider-subtitle ${
                                                                        subtitleAnimation && subtitleAnimation
                                                                    }`}
                                                                />
                                                            )}
                                                            {showTitle && slide.title && (
                                                                <RichText.Content
                                                                    tagName={titleTag}
                                                                    value={slide.title}
                                                                    className={`gutslider-title ${titleAnimation && titleAnimation}`}
                                                                />
                                                            )}
                                                            {showDescription && slide.description && (
                                                                <RichText.Content
                                                                    tagName={descriptionTag}
                                                                    value={slide.description}
                                                                    className={`gutslider-description ${descAnimation && descAnimation}`}
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                    {slide.btnLabel && slide.btnLinks && slide.btnLinks.url && (
                                                        <DynamicTag
                                                            tagName={enableGlobalLink ? 'span' : 'a'}
                                                            className={classnames(`gutslider-cta ${btnAnimation && btnAnimation}`)}
                                                            {...(!enableGlobalLink && {
                                                                href: slide.btnLinks && slide.btnLinks.url,
                                                                target: slide.btnLinks.openInNewTab && '_blank'
                                                            })}
                                                            {...(slide.btnLinks &&
                                                                !enableGlobalLink &&
                                                                (slide.btnLinks.openInNewTab ||
                                                                    slide.btnLinks.addNoFollow ||
                                                                    slide.btnLinks.addSponsored) && {
                                                                    rel: [
                                                                        slide.btnLinks.openInNewTab && 'noopener noreferrer',
                                                                        slide.btnLinks.addNoFollow && 'nofollow',
                                                                        slide.btnLinks.addSponsored && 'sponsored'
                                                                    ]
                                                                        .filter(Boolean)
                                                                        .join(' ')
                                                                })}
                                                        >
                                                            {slide.btnLabel}
                                                        </DynamicTag>
                                                    )}
                                                    {showButton && slide?.showSbtnLinks ? (
                                                        <div className="gutslider-btn-flex">
                                                            {slide.sbtnLabel && slide.sbtnLinks && slide.sbtnLinks.url && (
                                                                <DynamicTag
                                                                    tagName={enableGlobalLink ? 'span' : 'a'}
                                                                    className={classnames(
                                                                        `gutslider-cta-secondary ${sbtnAnimation && sbtnAnimation}`
                                                                    )}
                                                                    {...(!enableGlobalLink && {
                                                                        href: slide.sbtnLinks && slide.sbtnLinks.url,
                                                                        target: slide.sbtnLinks.openInNewTab && '_blank'
                                                                    })}
                                                                    {...(slide.sbtnLinks &&
                                                                        !enableGlobalLink &&
                                                                        (slide.sbtnLinks.openInNewTab ||
                                                                            slide.sbtnLinks.addNoFollow ||
                                                                            slide.sbtnLinks.addSponsored) && {
                                                                            rel: [
                                                                                slide.sbtnLinks.openInNewTab && 'noopener noreferrer',
                                                                                slide.sbtnLinks.addNoFollow && 'nofollow',
                                                                                slide.sbtnLinks.addSponsored && 'sponsored'
                                                                            ]
                                                                                .filter(Boolean)
                                                                                .join(' ')
                                                                        })}
                                                                >
                                                                    {slide.sbtnLabel}
                                                                </DynamicTag>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        slide.btnLabel &&
                                                        slide.btnLinks &&
                                                        slide.btnLinks.url && (
                                                            <DynamicTag
                                                                tagName={enableGlobalLink ? 'span' : 'a'}
                                                                className={classnames(`gutslider-cta ${btnAnimation && btnAnimation}`)}
                                                                {...(!enableGlobalLink && {
                                                                    href: slide.btnLinks && slide.btnLinks.url,
                                                                    target: slide.btnLinks && slide.btnLinks.openInNewTab && '_blank'
                                                                })}
                                                                {...(slide.btnLinks &&
                                                                    !enableGlobalLink &&
                                                                    (slide.btnLinks.openInNewTab ||
                                                                        slide.btnLinks.addNoFollow ||
                                                                        slide.btnLinks.addSponsored) && {
                                                                        rel: [
                                                                            slide.btnLinks.openInNewTab && 'noopener noreferrer',
                                                                            slide.btnLinks.addNoFollow && 'nofollow',
                                                                            slide.btnLinks.addSponsored && 'sponsored'
                                                                        ]
                                                                            .filter(Boolean)
                                                                            .join(' ')
                                                                    })}
                                                            >
                                                                {slide.btnLabel}
                                                            </DynamicTag>
                                                        )
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="gutslider-content-inner">
                                                    {showSubTitle && slide.subtitle && (
                                                        <RichText.Content
                                                            tagName={subtitleTag}
                                                            value={slide.subtitle}
                                                            className={`gutslider-subtitle ${subtitleAnimation && subtitleAnimation}`}
                                                        />
                                                    )}
                                                    {showTitle && slide.title && (
                                                        <RichText.Content
                                                            tagName={titleTag}
                                                            value={slide.title}
                                                            className={`gutslider-title ${titleAnimation && titleAnimation}`}
                                                        />
                                                    )}
                                                    {showDescription && slide.description && (
                                                        <RichText.Content
                                                            tagName={descriptionTag}
                                                            value={slide.description}
                                                            className={`gutslider-description ${descAnimation && descAnimation}`}
                                                        />
                                                    )}
                                                    {showButton && slide?.showSbtnLinks ? (
                                                        <div className="gutslider-btn-flex">
                                                            {slide.btnLabel && slide.btnLinks && slide.btnLinks.url && (
                                                                <DynamicTag
                                                                    tagName={enableGlobalLink ? 'span' : 'a'}
                                                                    className={classnames(`gutslider-cta ${btnAnimation && btnAnimation}`)}
                                                                    {...(!enableGlobalLink && {
                                                                        href: slide.btnLinks && slide.btnLinks.url,
                                                                        target: slide.btnLinks.openInNewTab && '_blank'
                                                                    })}
                                                                    {...(slide.btnLinks &&
                                                                        (slide.btnLinks.openInNewTab ||
                                                                            slide.btnLinks.addNoFollow ||
                                                                            slide.btnLinks.addSponsored) && {
                                                                            rel: [
                                                                                slide.btnLinks.openInNewTab && 'noopener noreferrer',
                                                                                slide.btnLinks.addNoFollow && 'nofollow',
                                                                                slide.btnLinks.addSponsored && 'sponsored'
                                                                            ]
                                                                                .filter(Boolean)
                                                                                .join(' ')
                                                                        })}
                                                                >
                                                                    {slide.btnLabel}
                                                                </DynamicTag>
                                                            )}
                                                            {slide.sbtnLabel && slide.sbtnLinks && slide.sbtnLinks.url && (
                                                                <DynamicTag
                                                                    tagName={enableGlobalLink ? 'span' : 'a'}
                                                                    className={classnames(
                                                                        `gutslider-cta-secondary ${sbtnAnimation && sbtnAnimation}`
                                                                    )}
                                                                    {...(!enableGlobalLink && {
                                                                        href: slide.sbtnLinks && slide.sbtnLinks.url,
                                                                        target: slide.sbtnLinks.openInNewTab && '_blank'
                                                                    })}
                                                                    {...(slide.sbtnLinks &&
                                                                        (slide.sbtnLinks.openInNewTab ||
                                                                            slide.sbtnLinks.addNoFollow ||
                                                                            slide.sbtnLinks.addSponsored) && {
                                                                            rel: [
                                                                                slide.sbtnLinks.openInNewTab && 'noopener noreferrer',
                                                                                slide.sbtnLinks.addNoFollow && 'nofollow',
                                                                                slide.sbtnLinks.addSponsored && 'sponsored'
                                                                            ]
                                                                                .filter(Boolean)
                                                                                .join(' ')
                                                                        })}
                                                                >
                                                                    {slide.sbtnLabel}
                                                                </DynamicTag>
                                                            )}
                                                        </div>
                                                    ) : (
                                                        showButton &&
                                                        slide.btnLabel &&
                                                        slide.btnLinks &&
                                                        slide.btnLinks.url && (
                                                            <DynamicTag
                                                                tagName={enableGlobalLink ? 'span' : 'a'}
                                                                className={classnames(`gutslider-cta ${btnAnimation && btnAnimation}`)}
                                                                {...(!enableGlobalLink && {
                                                                    href: slide.btnLinks && slide.btnLinks.url,
                                                                    target: slide.btnLinks.openInNewTab && '_blank'
                                                                })}
                                                                {...(slide.btnLinks &&
                                                                    (slide.btnLinks.openInNewTab ||
                                                                        slide.btnLinks.addNoFollow ||
                                                                        slide.btnLinks.addSponsored) && {
                                                                        rel: [
                                                                            slide.btnLinks.openInNewTab && 'noopener noreferrer',
                                                                            slide.btnLinks.addNoFollow && 'nofollow',
                                                                            slide.btnLinks.addSponsored && 'sponsored'
                                                                        ]
                                                                            .filter(Boolean)
                                                                            .join(' ')
                                                                    })}
                                                            >
                                                                {slide.btnLabel}
                                                            </DynamicTag>
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
    );
}
