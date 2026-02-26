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
    COLUMNS,
    COLUMNS_GAP,
    SLIDE_HEIGHT,
    SLIDE_PADDING,
    SLIDE_MARGIN,
    CONTENT_WIDTH,
    CONTENT_VPOSITION,
    CONTENT_ALIGN,
    CONTENT_HALIGN,
    CONTENT_PADDING,
    BTN_BORDER,
    BTN_RADIUS,
    BTN_MARGIN,
    BTN_PADDING,
    BTN_TYPO,
    TITLE_SPACING,
    TITLE_TYPO,
    CAT_SPACING,
    CAT_TYPO,
    EXPT_SPACING,
    EXPT_TYPO,
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
    FI_HEIGHT
} = Constants;

const attributes = {
    uniqueId: {
        type: 'string'
    },
    preview: {
        type: 'boolean',
        default: false
    },
    focusPoints: {
        type: 'array',
        default: []
    },
    blockStyle: {
        type: 'object'
    },
    sliderType: {
        type: 'string',
        default: 'slider'
    },
    // content type
    detachContent: {
        type: 'boolean',
        default: false
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
    addNewSlide: {
        type: 'boolean',
        default: false
    },
    postQuery: {
        type: 'object'
    },
    queryType: {
        type: 'string',
        default: 'latest_posts'
    },
    specificCategories: {
        type: 'array',
        default: []
    },
    specificPosts: {
        type: 'array',
        default: []
    },
    totalPosts: {
        type: 'number',
        default: 3
    },
    postOrderBy: {
        type: 'string',
        default: 'date'
    },
    postOrder: {
        type: 'string',
        default: 'desc'
    },
    queryPosts: {
        type: 'array',
        default: []
    },
    showCat: {
        type: 'boolean',
        default: true
    },
    showTitle: {
        type: 'boolean',
        default: true
    },
    showExcerpt: {
        type: 'boolean',
        default: true
    },
    excerptLength: {
        type: 'number',
        default: 25
    },
    showBtn: {
        type: 'boolean',
        default: true
    },
    linkTitle: {
        type: 'boolean',
        default: true
    },
    catColor: {
        type: 'string'
    },
    titleTag: {
        type: 'string',
        default: 'h2'
    },
    titleColor: {
        type: 'string'
    },
    excerptColor: {
        type: 'string'
    },
    btnLabel: {
        type: 'string',
        default: 'Read More'
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
    catAnimation: {
        type: 'string',
        default: ''
    },
    exptAnimation: {
        type: 'string',
        default: ''
    },
    btnAnimation: {
        type: 'string',
        default: ''
    },
    // slider container
    bgType: {
        type: 'string',
        default: 'classic'
    },
    bgColor: {
        type: 'string',
        default: '#efefef'
    },
    bgGradient: {
        type: 'string'
    },
    bgImage: {
        type: 'object'
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
        type: 'string'
    },
    overlayGradient: {
        type: 'string'
    },
    overlayOpacity: {
        type: 'number',
        default: 0.5
    },
    // animation delay
    titleDelay: {
        type: 'number'
    },
    catDelay: {
        type: 'number'
    },
    exptDelay: {
        type: 'number'
    },
    btnDelay: {
        type: 'number'
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
    ...generateResBoxControlAttributes({
        controlName: CONTENT_PADDING
    }),
    ...generateResBtnsAttributes({
        controlName: CONTENT_HALIGN
    }),
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
    // title
    ...generateResBoxControlAttributes({
        controlName: TITLE_SPACING
    }),
    ...generateTypographyAttributes({
        controlName: TITLE_TYPO
    }),
    // category
    ...generateResBoxControlAttributes({
        controlName: CAT_SPACING
    }),
    ...generateTypographyAttributes({
        controlName: CAT_TYPO
    }),
    // excerpt
    ...generateResBoxControlAttributes({
        controlName: EXPT_SPACING
    }),
    ...generateTypographyAttributes({
        controlName: EXPT_TYPO
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
    // featured image
    ...generateResRangeAttributes({
        controlName: FI_HEIGHT
    })
};

export default attributes;
