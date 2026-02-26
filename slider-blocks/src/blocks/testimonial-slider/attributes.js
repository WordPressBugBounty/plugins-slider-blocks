import * as Constants from './constants';
const {
    generateResBoxControlAttributes,
    generateBorderAttributes,
    generateTypographyAttributes,
    generateResRangeAttributes,
    generateAlignmentAttributes,
    generateResBtnsAttributes
} = window.gutSliderModules;
const {
    SLIDE_HEIGHT,
    SLIDE_PADDING,
    SLIDE_MARGIN,
    CONTENT_WIDTH,
    CONTENT_ALIGN,
    CONTENT_HALIGN,
    CONTENT_PADDING,
    IMAGE_BORDER,
    IMAGE_RADIUS,
    IMAGE_MARGIN,
    IMAGE_PADDING,
    IMAGE_SIZE,
    IMAGE_HEIGHT,
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
    NAV_MARGIN,
    NAV_GAP,
    PAG_BORDER,
    PAG_BRADIUS,
    PAG_WIDTH,
    PAG_HEIGHT,
    PAG_MARGIN,
    APAG_BORDER,
    APAG_BRADIUS,
    APAG_WIDTH,
    APAG_HEIGHT,
    FRAC_SIZE,
    PROG_SIZE,
    STAR_SIZE,
    STAR_SPACING,
    COLUMNS,
    COLUMNS_GAP,
    IMAGE_GAP
} = Constants;

const attributes = {
    preset: {
        type: 'string',
        default: ''
    },
    imagePosition: {
        type: 'string',
        default: 'left'
    },
    imageStyle: {
        type: 'string',
        default: ''
    },
    // slider layout
    photoDirection: {
        type: 'string',
        default: 'gutslider-photo-left'
    },
    uniqueID: {
        type: 'string'
    },
    preview: {
        type: 'boolean',
        default: false
    },
    blockStyle: {
        type: 'object'
    },
    // global link
    enableGlobalLink: {
        type: 'boolean',
        default: false
    },
    // carousel settings
    sliderType: {
        type: 'string',
        default: ''
    },
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
    // remote navigation
    enableRemoteNav: {
        type: 'boolean',
        default: false
    },
    remotePrevSelector: {
        type: 'string'
    },
    remoteNextSelector: {
        type: 'string'
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
        default: []
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
    // transition delay
    photoDelay: {
        type: 'number'
    },
    nameDelay: {
        type: 'number'
    },
    designationDelay: {
        type: 'number'
    },
    testimonialDelay: {
        type: 'number'
    },
    socialDelay: {
        type: 'number'
    },
    photoVPosition: {
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
    ...generateResRangeAttributes({
        controlName: IMAGE_HEIGHT
    }),
    ...generateAlignmentAttributes({
        controlName: IMAGE_POSITION
    }),
    ...generateResRangeAttributes({
        controlName: IMAGE_GAP
    }),
    // content
    ...generateResBoxControlAttributes({
        controlName: CONTENT_PADDING
    }),
    ...generateResRangeAttributes({
        controlName: CONTENT_WIDTH
    }),
    ...generateAlignmentAttributes({
        controlName: CONTENT_ALIGN
    }),
    ...generateResBtnsAttributes({
        controlName: CONTENT_HALIGN
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
    ...generateResBoxControlAttributes({
        controlName: NAV_MARGIN
    }),
    ...generateResRangeAttributes({
        controlName: NAV_GAP
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
    ...generateResBoxControlAttributes({
        controlName: PAG_MARGIN
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
    }),
    // cloums
    ...generateResRangeAttributes({
        controlName: COLUMNS
    }),
    ...generateResRangeAttributes({
        controlName: COLUMNS_GAP
    })
};

export default attributes;
