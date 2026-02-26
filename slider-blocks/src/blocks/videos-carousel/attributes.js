import * as Constants from './constants';
const { generateResBoxControlAttributes, generateBorderAttributes, generateResRangeAttributes } = window.gutSliderModules;
const {
    COLUMNS,
    COLUMNS_GAP,
    SLIDE_HEIGHT,
    SLIDE_PADDING,
    SLIDE_MARGIN,
    ICON_BORDER,
    ICON_RADIUS,
    ICON_MARGIN,
    ICON_PADDING,
    ICON_SIZE,
    ICON_SPACING,
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
    IFRAME_BORDER,
    IFRAME_BRADIUS,
    IFRAME_PADDING
} = Constants;

const attributes = {
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
    // custom poster
    enableCustomPoster: {
        type: 'boolean',
        default: false
    },
    enablePosterOverlay: {
        type: 'boolean',
        default: false
    },
    posterOverlayColor: {
        type: 'string'
    },
    playIconColor: {
        type: 'string'
    },
    playIconSize: {
        type: 'number',
        default: 2.5
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
    videoPlayer: {
        type: 'object',
        default: {
            hideControls: false,
            mute: false,
            rel: false,
            autoplay: false
        }
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
    iframeBg: {
        type: 'string'
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
    // Iframe
    ...generateBorderAttributes({
        controlName: IFRAME_BORDER
    }),
    ...generateResBoxControlAttributes({
        controlName: IFRAME_BRADIUS
    }),
    ...generateResBoxControlAttributes({
        controlName: IFRAME_PADDING
    })
};

export default attributes;
