/* eslint-disable no-shadow */
/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
import { Fragment, RawHTML } from '@wordpress/element';
import attributes from './attributes';
const { DisplayIcon } = window.gutSliderModules;

const deprecated = [
    {
        attributes,
        save({ attributes }) {
            const {
                uniqueId,
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
                showPagination,
                showNavigation
            } = attributes;

            // Block Props
            const blockProps = useBlockProps.save({
                className: classnames(uniqueId, 'swiper')
            });

            return (
                <div {...blockProps} data-swiper-options={JSON.stringify(sliderOptions)}>
                    <div className="swiper-wrapper">
                        {slideItems &&
                            slideItems.map((slide, index) => {
                                const bgStyles = {
                                    backgroundColor: slide.bgColor ? slide.bgColor : '',
                                    backgroundImage: slide.bgType === 'classic' ? `url(${slide.image.url})` : slide.bgGradient,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat'
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
                                        <div className="swiper-container-outer" style={bgStyles}>
                                            {slide.enableOverlay && <div className="gutslider-overlay" style={overlayStyles}></div>}
                                            <div className="gutslider-content-wrapper">
                                                <div className="gutslider-content-inner">
                                                    {slide.subtitle && (
                                                        <RichText.Content
                                                            tagName={subtitleTag}
                                                            value={slide.subtitle}
                                                            className={`gutslider-subtitle ${subtitleAnimation && subtitleAnimation}`}
                                                        />
                                                    )}
                                                    {slide.title && (
                                                        <RichText.Content
                                                            tagName={titleTag}
                                                            value={slide.title}
                                                            className={`gutslider-title ${titleAnimation && titleAnimation}`}
                                                        />
                                                    )}
                                                    {slide.description && (
                                                        <RichText.Content
                                                            tagName={descriptionTag}
                                                            value={slide.description}
                                                            className={`gutslider-description ${descAnimation && descAnimation}`}
                                                        />
                                                    )}
                                                    {slide.btnLabel && slide.btnLinks && slide.btnLinks.url && (
                                                        <a
                                                            className={`gutslider-cta ${btnAnimation && btnAnimation}`}
                                                            href={slide.btnLinks && slide.btnLinks.url}
                                                            target={slide.btnLinks && slide.btnLinks.openInNewTab && '_blank'}
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
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    {showNavigation && (
                        <Fragment>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </Fragment>
                    )}
                    {showPagination && <div className="swiper-pagination"></div>}
                </div>
            );
        }
    },
    {
        attributes,
        save: ({ attributes }) => {
            const {
                uniqueId,
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
                showPagination,
                showNavigation,
                navContainerPosition,
                navPosition,
                customNavIcon,
                navIconSource,
                navPrevIcon,
                navNextIcon,
                customPrevSVG,
                customNextSVG
            } = attributes;

            // Block Props
            const blockProps = useBlockProps.save({
                className: classnames(uniqueId, navContainerPosition, navPosition)
            });
            return (
                <div {...blockProps} data-swiper-options={JSON.stringify(sliderOptions)}>
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            {slideItems &&
                                slideItems.map((slide, index) => {
                                    const bgStyles = {
                                        backgroundColor: slide.bgColor ? slide.bgColor : '',
                                        backgroundImage: slide.bgType === 'classic' ? `url(${slide.image.url})` : slide.bgGradient,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center center',
                                        backgroundRepeat: 'no-repeat'
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
                                            <div className="swiper-container-outer" style={bgStyles}>
                                                {slide.enableOverlay && <div className="gutslider-overlay" style={overlayStyles}></div>}
                                                <div className="gutslider-content-wrapper">
                                                    <div className="gutslider-content-inner">
                                                        {slide.subtitle && (
                                                            <RichText.Content
                                                                tagName={subtitleTag}
                                                                value={slide.subtitle}
                                                                className={`gutslider-subtitle ${subtitleAnimation && subtitleAnimation}`}
                                                            />
                                                        )}
                                                        {slide.title && (
                                                            <RichText.Content
                                                                tagName={titleTag}
                                                                value={slide.title}
                                                                className={`gutslider-title ${titleAnimation && titleAnimation}`}
                                                            />
                                                        )}
                                                        {slide.description && (
                                                            <RichText.Content
                                                                tagName={descriptionTag}
                                                                value={slide.description}
                                                                className={`gutslider-description ${descAnimation && descAnimation}`}
                                                            />
                                                        )}
                                                        {slide.btnLabel && slide.btnLinks && slide.btnLinks.url && (
                                                            <a
                                                                className={`gutslider-cta ${btnAnimation && btnAnimation}`}
                                                                href={slide.btnLinks && slide.btnLinks.url}
                                                                target={slide.btnLinks && slide.btnLinks.openInNewTab && '_blank'}
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
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                        {showNavigation && navContainerPosition === 'nav_inside' && (
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
                    {showNavigation && navContainerPosition === 'nav_outside' && (
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
    }
];

export default deprecated;
