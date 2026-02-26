/* eslint-disable no-shadow */
/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';
import { Fragment, RawHTML } from '@wordpress/element';
import attributes from './attributes';
const { DisplayIcon } = window.gutSliderModules;

import * as Constants from './constants';
const {
    generateResBoxControlAttributes,
    generateBorderAttributes,
    generateTypographyAttributes,
    generateResRangeAttributes,
    generateAlignmentAttributes
} = window.gutSliderModules;

const {
    COLUMNS,
    COLUMNS_GAP,
    SLIDE_HEIGHT,
    SLIDE_PADDING,
    SLIDE_MARGIN,
    CONTENT_WIDTH,
    CONTENT_VPOSITION,
    CONTENT_ALIGN,
    BTN_BORDER,
    BTN_RADIUS,
    BTN_MARGIN,
    BTN_PADDING,
    BTN_TYPO,
    TITLE_SPACING,
    TITLE_TYPO,
    SUBTITLE_SPACING,
    SUBTITLE_TYPO,
    DESC_SPACING,
    DESC_TYPO,
    NAV_BORDER,
    NAV_BRADIUS,
    NAV_WIDTH,
    NAV_HEIGHT,
    NAV_ICON_SIZE,
    PAG_BORDER,
    PAG_BRADIUS,
    PAG_WIDTH,
    PAG_HEIGHT,
    APAG_BORDER,
    APAG_BRADIUS,
    APAG_WIDTH,
    APAG_HEIGHT,
    FRAC_SIZE,
    PROG_SIZE
} = Constants;

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
    },
    {
        attributes: {
            uniqueId: {
                type: 'string'
            },
            blockStyle: {
                type: 'object'
            },
            sliderType: {
                type: 'string',
                default: 'slider'
            },
            // carousel settings
            infiniteLoop: {
                type: 'boolean',
                default: true
            },
            autoplay: {
                type: 'boolean',
                default: false
            },
            autoplayDelay: {
                type: 'number'
            },
            pauseOnHover: {
                type: 'boolean',
                default: true
            },
            reverseDirection: {
                type: 'boolean',
                default: false
            },
            stopOnLastSlide: {
                type: 'boolean',
                default: false
            },
            speed: {
                type: 'number'
            },
            showNavigation: {
                type: 'boolean',
                default: true
            },
            showPagination: {
                type: 'boolean',
                default: true
            },
            paginationType: {
                type: 'string',
                default: 'bullets'
            },
            dynamicBullets: {
                type: 'boolean',
                default: false
            },
            keyboardControl: {
                type: 'boolean',
                default: false
            },
            mousewheelControl: {
                type: 'boolean',
                default: false
            },
            slideEffect: {
                type: 'string',
                default: 'creative'
            },
            carouselEffect: {
                type: 'string',
                default: 'slide'
            },
            creativeEffectStyle: {
                type: 'string',
                default: 'style-3'
            },
            sliderOptions: {
                type: 'object',
                default: {}
            },
            // navigation style
            navColor: {
                type: 'string'
            },
            navBgColor: {
                type: 'string'
            },
            navHoverColor: {
                type: 'string'
            },
            navHoverBgColor: {
                type: 'string'
            },
            navContainerPosition: {
                type: 'string',
                default: 'nav_inside'
            },
            navPosition: {
                type: 'string',
                default: 'nav_cc'
            },
            customNavIcon: {
                type: 'boolean',
                default: false
            },
            navIconSource: {
                type: 'string',
                default: 'library'
            },
            navPrevIcon: {
                type: 'string',
                default: 'arrowLeft'
            },
            navNextIcon: {
                type: 'string',
                default: 'arrowRight'
            },
            customPrevSVG: {
                type: 'string'
            },
            customNextSVG: {
                type: 'string'
            },
            // pagination style
            pagColor: {
                type: 'string'
            },
            activePagColor: {
                type: 'string'
            },
            // fraction pagination
            pagFracColor: {
                type: 'string'
            },
            pagFracCurrentColor: {
                type: 'string'
            },
            fracDividerColor: {
                type: 'string'
            },
            progressColor: {
                type: 'string'
            },
            activeProgressColor: {
                type: 'string'
            },
            // slider settings
            slideItems: {
                type: 'array',
                default: [
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
                        btnLabel: 'Get Gutslider',
                        btnLinks: {
                            url: 'https://gutenbergkits.com',
                            openInNewTab: true,
                            addNoFollow: false,
                            addSponsored: false
                        }
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
                        btnLabel: 'Get Gutslider',
                        btnLinks: {
                            url: 'https://gutenbergkits.com',
                            openInNewTab: true,
                            addNoFollow: false,
                            addSponsored: false
                        }
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
                        btnLabel: 'Get Gutslider',
                        btnLinks: {
                            url: 'https://gutenbergkits.com',
                            openInNewTab: true,
                            addNoFollow: false,
                            addSponsored: false
                        }
                    }
                ]
            },
            addNewSlide: {
                type: 'boolean',
                default: false
            },
            subtitleTag: {
                type: 'string',
                default: 'h3'
            },
            subtitleColor: {
                type: 'string'
            },
            titleTag: {
                type: 'string',
                default: 'h2'
            },
            titleColor: {
                type: 'string'
            },
            descriptionTag: {
                type: 'string',
                default: 'p'
            },
            descriptionColor: {
                type: 'string'
            },
            btnColors: {
                type: 'object',
                default: {
                    btnTextColor: '',
                    btnBgColor: '',
                    btnHoverTextColor: '',
                    btnHoverBgColor: ''
                }
            },
            // animations
            titleAnimation: {
                type: 'string',
                default: ''
            },
            subtitleAnimation: {
                type: 'string',
                default: ''
            },
            descAnimation: {
                type: 'string',
                default: ''
            },
            btnAnimation: {
                type: 'string',
                default: ''
            },
            // generators
            ...generateResRangeAttributes({
                controlName: COLUMNS
            }),
            ...generateResRangeAttributes({
                controlName: COLUMNS_GAP
            }),
            ...generateResRangeAttributes({
                controlName: SLIDE_HEIGHT
            }),
            ...generateResBoxControlAttributes({
                controlName: SLIDE_PADDING
            }),
            ...generateResBoxControlAttributes({
                controlName: SLIDE_MARGIN
            }),
            // content
            ...generateResRangeAttributes({
                controlName: CONTENT_WIDTH
            }),
            ...generateAlignmentAttributes({
                controlName: CONTENT_VPOSITION
            }),
            ...generateAlignmentAttributes({
                controlName: CONTENT_ALIGN
            }),
            // button
            ...generateResBoxControlAttributes({
                controlName: BTN_RADIUS
            }),
            ...generateResBoxControlAttributes({
                controlName: BTN_MARGIN
            }),
            ...generateResBoxControlAttributes({
                controlName: BTN_PADDING
            }),
            ...generateBorderAttributes({
                controlName: BTN_BORDER
            }),
            ...generateTypographyAttributes({
                controlName: BTN_TYPO
            }),
            ...generateResBoxControlAttributes({
                controlName: TITLE_SPACING
            }),
            ...generateTypographyAttributes({
                controlName: TITLE_TYPO
            }),
            ...generateResBoxControlAttributes({
                controlName: SUBTITLE_SPACING
            }),
            ...generateTypographyAttributes({
                controlName: SUBTITLE_TYPO
            }),
            ...generateResBoxControlAttributes({
                controlName: DESC_SPACING
            }),
            ...generateTypographyAttributes({
                controlName: DESC_TYPO
            }),
            // Navigation Style
            ...generateBorderAttributes({
                controlName: NAV_BORDER
            }),
            ...generateResBoxControlAttributes({
                controlName: NAV_BRADIUS
            }),
            ...generateResRangeAttributes({
                controlName: NAV_WIDTH
            }),
            ...generateResRangeAttributes({
                controlName: NAV_HEIGHT
            }),
            ...generateResRangeAttributes({
                controlName: NAV_ICON_SIZE
            }),
            // Pagination Style
            ...generateBorderAttributes({
                controlName: PAG_BORDER
            }),
            ...generateResBoxControlAttributes({
                controlName: PAG_BRADIUS
            }),
            ...generateResRangeAttributes({
                controlName: PAG_WIDTH
            }),
            ...generateResRangeAttributes({
                controlName: PAG_HEIGHT
            }),
            // Active Pagination Style
            ...generateBorderAttributes({
                controlName: APAG_BORDER
            }),
            ...generateResBoxControlAttributes({
                controlName: APAG_BRADIUS
            }),
            ...generateResRangeAttributes({
                controlName: APAG_WIDTH
            }),
            ...generateResRangeAttributes({
                controlName: APAG_HEIGHT
            }),
            // Fraction pagination
            ...generateResRangeAttributes({
                controlName: FRAC_SIZE
            }),
            // Progress pagination
            ...generateResRangeAttributes({
                controlName: PROG_SIZE
            })
        },
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
                                                {slide.enableOverlay && slide.bgType === 'classic' && (
                                                    <div className="gutslider-overlay" style={overlayStyles}></div>
                                                )}
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
