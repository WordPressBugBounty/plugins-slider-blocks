/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Fragment, RawHTML } from '@wordpress/element';
const { DisplayIcon } = window.gutSliderModules;
import socialIcons from '../../helper/social-icons';

/**
 * External dependencies
 */
import classnames from 'classnames';

import * as Constants from './constants';

const {
    generateResBoxControlAttributes,
    generateBorderAttributes,
    generateTypographyAttributes,
    generateResRangeAttributes,
    generateAlignmentAttributes
} = window.gutSliderModules;
const {
    SLIDE_HEIGHT,
    SLIDE_PADDING,
    SLIDE_MARGIN,
    CONTENT_WIDTH,
    CONTENT_ALIGN,
    IMAGE_BORDER,
    IMAGE_RADIUS,
    IMAGE_MARGIN,
    IMAGE_PADDING,
    IMAGE_SIZE,
    IMAGE_POSITION,
    ICON_BORDER,
    ICON_RADIUS,
    ICON_MARGIN,
    ICON_PADDING,
    ICON_SIZE,
    ICON_SPACING,
    NAME_SPACING,
    NAME_TYPO,
    DESIGNATION_SPACING,
    DESIGNATION_TYPO,
    TESTIMONIAL_SPACING,
    TESTIMONIAL_TYPO,
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
    PROG_SIZE,
    STAR_SIZE,
    STAR_SPACING
} = Constants;

const deprecated = [
    {
        attributes: {
            uniqueID: {
                type: 'string'
            },
            blockStyle: {
                type: 'object'
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
                default: 'nav_outside'
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
                        ]
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
                        ]
                    }
                ]
            },
            addNewSlide: {
                type: 'boolean',
                default: false
            },
            nameTag: {
                type: 'string',
                default: 'h5'
            },
            nameColor: {
                type: 'string'
            },
            designationTag: {
                type: 'string',
                default: 'p'
            },
            designationColor: {
                type: 'string'
            },
            testimonialTag: {
                type: 'string',
                default: 'p'
            },
            testimonialColor: {
                type: 'string'
            },
            showRating: {
                type: 'boolean',
                default: true
            },
            ratingColor: {
                type: 'string'
            },
            socialIconColors: {
                type: 'object',
                default: {
                    color: '',
                    bgColor: '',
                    hoverColor: '',
                    hoverBgColor: ''
                }
            },
            // animations
            photoAnimation: {
                type: 'string',
                default: ''
            },
            nameAnimation: {
                type: 'string',
                default: ''
            },
            designationAnimation: {
                type: 'string',
                default: ''
            },
            testimonialAnimation: {
                type: 'string',
                default: ''
            },
            socialIconAnimation: {
                type: 'string',
                default: ''
            },
            // generators
            ...generateResRangeAttributes({
                controlName: SLIDE_HEIGHT
            }),
            ...generateResBoxControlAttributes({
                controlName: SLIDE_PADDING
            }),
            ...generateResBoxControlAttributes({
                controlName: SLIDE_MARGIN
            }),
            // image
            ...generateBorderAttributes({
                controlName: IMAGE_BORDER
            }),
            ...generateResBoxControlAttributes({
                controlName: IMAGE_RADIUS
            }),
            ...generateResBoxControlAttributes({
                controlName: IMAGE_MARGIN
            }),
            ...generateResBoxControlAttributes({
                controlName: IMAGE_PADDING
            }),
            ...generateResRangeAttributes({
                controlName: IMAGE_SIZE
            }),
            ...generateAlignmentAttributes({
                controlName: IMAGE_POSITION
            }),
            // content
            ...generateResRangeAttributes({
                controlName: CONTENT_WIDTH
            }),
            ...generateAlignmentAttributes({
                controlName: CONTENT_ALIGN
            }),
            // social icons
            ...generateResBoxControlAttributes({
                controlName: ICON_RADIUS
            }),
            ...generateResBoxControlAttributes({
                controlName: ICON_MARGIN
            }),
            ...generateResBoxControlAttributes({
                controlName: ICON_PADDING
            }),
            ...generateBorderAttributes({
                controlName: ICON_BORDER
            }),
            ...generateResRangeAttributes({
                controlName: ICON_SIZE
            }),
            ...generateResRangeAttributes({
                controlName: ICON_SPACING
            }),
            // name
            ...generateResBoxControlAttributes({
                controlName: NAME_SPACING
            }),
            ...generateTypographyAttributes({
                controlName: NAME_TYPO
            }),
            // designation
            ...generateResBoxControlAttributes({
                controlName: DESIGNATION_SPACING
            }),
            ...generateTypographyAttributes({
                controlName: DESIGNATION_TYPO
            }),
            // testimonial
            ...generateResBoxControlAttributes({
                controlName: TESTIMONIAL_SPACING
            }),
            ...generateTypographyAttributes({
                controlName: TESTIMONIAL_TYPO
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
            }),
            // Star rating
            ...generateResRangeAttributes({
                controlName: STAR_SIZE
            }),
            ...generateResRangeAttributes({
                controlName: STAR_SPACING
            })
        },
        save({ attributes }) {
            const {
                uniqueID,
                slideItems,
                sliderOptions,
                sliderType,
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
                socialIconAnimation
            } = attributes;

            // Block Props
            const blockProps = useBlockProps.save({
                className: classnames(uniqueID, navContainerPosition, navPosition)
            });

            return (
                <div {...blockProps} data-swiper-options={JSON.stringify(sliderOptions)}>
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            {slideItems &&
                                slideItems.map((slide, index) => {
                                    const bgStyles = {
                                        backgroundColor: slide.bgColor ? slide.bgColor : '',
                                        backgroundImage: slide.bgType === 'classic' ? `url(${slide.image.url})` : slide.bgGradient
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
                                            <div className="swiper-testimonial-outer" style={bgStyles}>
                                                {slide.enableOverlay && slide.bgType === 'classic' && (
                                                    <div className="gutslider-overlay" style={overlayStyles}></div>
                                                )}
                                                <div className="gutslider-testimonial-wrapper">
                                                    <div className="gutslider-testimonial-inner">
                                                        <div className="author-photo-outer">
                                                            <div className={`author-photo ${photoAnimation && photoAnimation}`}>
                                                                {slide.authorPhoto && slide.authorPhoto.url && (
                                                                    <img
                                                                        src={slide.authorPhoto && slide.authorPhoto.url}
                                                                        alt={(slide.authorPhoto && slide.authorPhoto.alt) || slide.name}
                                                                    />
                                                                )}
                                                            </div>
                                                        </div>
                                                        {slide.testimonial && (
                                                            <RichText.Content
                                                                tagName={testimonialTag}
                                                                className={`gutslider-testimonial ${
                                                                    testimonialAnimation && testimonialAnimation
                                                                }`}
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
                                                                className={`gutslider-designation ${
                                                                    designationAnimation && designationAnimation
                                                                }`}
                                                                value={slide.designation && slide.designation}
                                                            />
                                                        )}
                                                        {slide.showSocialIcons && (
                                                            <div
                                                                className={`social-profiles ${socialIconAnimation && socialIconAnimation}`}
                                                            >
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
                                                                                    <DisplayIcon
                                                                                        icon={social.label}
                                                                                        iconsList={socialIcons}
                                                                                    />
                                                                                </a>
                                                                            )}
                                                                        </Fragment>
                                                                    );
                                                                })}
                                                            </div>
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
