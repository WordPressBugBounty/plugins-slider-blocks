/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Fragment, RawHTML } from '@wordpress/element';
import socialIcons from '../../helper/social-icons';
const { DisplayIcon, DynamicTag } = window.gutSliderModules;

/**
 * External dependencies
 */

import classnames from 'classnames';

/**
 * Save function
 */

export default function save({ attributes }) {
    const {
        preset,
        imageStyle,
        imagePosition,
        photoDirection,
        uniqueID,
        slideItems,
        sliderOptions,
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
        testimonialTag,
        nameTag,
        designationTag,
        photoAnimation,
        testimonialAnimation,
        nameAnimation,
        designationAnimation,
        socialIconAnimation,
        photoVPosition,
        // global link
        enableGlobalLink,
        // remote navigation
        enableRemoteNav,
        remotePrevSelector,
        remoteNextSelector
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueID, navContainerPosition, navPosition)
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
            <div
                className={classnames('swiper', {
                    [photoDirection]: preset === 'gutslider-preset-2',
                    [preset]: preset !== ''
                })}
            >
                <div className="swiper-wrapper">
                    {slideItems &&
                        slideItems.map((slide, index) => {
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
                                            {slide.testimonial && (
                                                <RichText.Content
                                                    tagName={testimonialTag}
                                                    className={classnames('gutslider-testimonial', {
                                                        [testimonialAnimation]: testimonialAnimation !== ''
                                                    })}
                                                    value={slide.testimonial && slide.testimonial}
                                                />
                                            )}
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
                                                        {slide.authorPhoto && slide.authorPhoto.url && (
                                                            <img
                                                                src={slide.authorPhoto.url}
                                                                alt={slide.authorPhoto.alt || slide.name}
                                                                {...(slide?.authorPhotoFocusPoint &&
                                                                    slide?.authorPhotoFocusPoint?.x &&
                                                                    slide?.authorPhotoFocusPoint?.y && {
                                                                        style: {
                                                                            objectPosition: `${slide?.authorPhotoFocusPoint?.x * 100}% ${
                                                                                slide?.authorPhotoFocusPoint?.y * 100
                                                                            }%`
                                                                        }
                                                                    })}
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                                <div className={classnames('gutsider-cta', imagePosition)}>
                                                    <div className="author-rating" data-rating={slide.rating && slide.rating}></div>
                                                    {slide.name && (
                                                        <RichText.Content
                                                            tagName={nameTag}
                                                            className={`gutslider-name ${nameAnimation && nameAnimation}`}
                                                            value={slide.name && slide.name}
                                                        />
                                                    )}
                                                    {slide.designation && (
                                                        <RichText.Content
                                                            tagName={designationTag}
                                                            className={`gutslider-designation ${
                                                                designationAnimation && designationAnimation
                                                            }`}
                                                            value={slide.designation && slide.designation}
                                                        />
                                                    )}
                                                    {slide.showSocialIcons && (
                                                        <div className={`social-profiles ${socialIconAnimation && socialIconAnimation}`}>
                                                            {slide.socialIconLinks.map((social, socialKey) => {
                                                                return (
                                                                    <Fragment key={socialKey}>
                                                                        {social.link.url && (
                                                                            <a
                                                                                href={social.link.url && social.link.url}
                                                                                target={social.link.openInNewTab && '_blank'}
                                                                                rel={social.link.openInNewTab && 'noopener noreferrer'}
                                                                                className="social-profile"
                                                                            >
                                                                                <DisplayIcon icon={social.label} iconsList={socialIcons} />
                                                                            </a>
                                                                        )}
                                                                    </Fragment>
                                                                );
                                                            })}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {slide.testimonial && (
                                                <RichText.Content
                                                    tagName={testimonialTag}
                                                    className={`gutslider-testimonial ${testimonialAnimation && testimonialAnimation}`}
                                                    value={slide.testimonial && slide.testimonial}
                                                />
                                            )}
                                            <div className="author-rating" data-rating={slide.rating && slide.rating}></div>
                                            {slide.name && (
                                                <RichText.Content
                                                    tagName={nameTag}
                                                    className={`gutslider-name ${nameAnimation && nameAnimation}`}
                                                    value={slide.name && slide.name}
                                                />
                                            )}
                                            {slide.designation && (
                                                <RichText.Content
                                                    tagName={designationTag}
                                                    className={`gutslider-designation ${designationAnimation && designationAnimation}`}
                                                    value={slide.designation && slide.designation}
                                                />
                                            )}
                                            {slide.showSocialIcons && (
                                                <div className={`social-profiles ${socialIconAnimation && socialIconAnimation}`}>
                                                    {slide.socialIconLinks.map((social, socialKey) => {
                                                        return (
                                                            <Fragment key={socialKey}>
                                                                {social.link.url && (
                                                                    <a
                                                                        href={social.link.url && social.link.url}
                                                                        target={social.link.openInNewTab && '_blank'}
                                                                        rel={social.link.openInNewTab && 'noopener noreferrer'}
                                                                        className="social-profile"
                                                                    >
                                                                        <DisplayIcon icon={social.label} iconsList={socialIcons} />
                                                                    </a>
                                                                )}
                                                            </Fragment>
                                                        );
                                                    })}
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
                                                <video className="gutslider-video" autoPlay loop muted playsInline preload="metadata">
                                                    <source src={slide.bgVideo?.url} type="video/mp4" />
                                                </video>
                                            </div>
                                        )}
                                        {slide.enableOverlay && (slide.bgType === 'classic' || slide.bgType === 'video') && (
                                            <div className="gutslider-overlay" style={overlayStyles}></div>
                                        )}
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
                                            className="gutslider-testimonial-wrapper"
                                        >
                                            <div className="gutslider-testimonial-inner">
                                                {(preset === 'gutslider-preset-2' || (preset === '' && imageStyle !== 'inline')) && (
                                                    <div className="author-photo-outer">
                                                        <div className={`author-photo ${photoAnimation && photoAnimation}`}>
                                                            {slide.authorPhoto && slide.authorPhoto.url && (
                                                                <img
                                                                    src={slide.authorPhoto && slide.authorPhoto.url}
                                                                    alt={(slide.authorPhoto && slide.authorPhoto.alt) || slide.name}
                                                                    {...(slide?.authorPhotoFocusPoint &&
                                                                        slide?.authorPhotoFocusPoint?.x &&
                                                                        slide?.authorPhotoFocusPoint?.y && {
                                                                            style: {
                                                                                objectPosition: `${
                                                                                    slide?.authorPhotoFocusPoint?.x * 100
                                                                                }% ${slide?.authorPhotoFocusPoint?.y * 100}%`
                                                                            }
                                                                        })}
                                                                />
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
    );
}
