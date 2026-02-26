const { generateResBoxControlAttributes, generateBorderAttributes, generateTypographyAttributes, generateResRangeAttributes } =
    window.gutSliderModules;

import * as Constants from './constants';

const {
    COLUMNS,
    COLUMNS_GAP,
    SLIDE_HEIGHT,
    SLIDE_PADDING,
    SLIDE_MARGIN,
    TITLE_SPACING,
    TITLE_MARGIN,
    TITLE_TYPO,
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
    OVERLAY_ICON_SIZE,
    OVERLAY_ICON_CONTAINER,
    PHOTO_BORDER,
    PHOTO_BRADIUS,
    PHOTO_PADDING,
    LOGO_MAX_WIDTH
} = Constants;

const attributes = {
    preset: {
        type: 'string',
        default: ''
    },
    uniqueId: {
        type: 'string'
    },
    preview: {
        type: 'boolean',
        default: false
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
    // slider settings
    slideItems: {
        type: 'array',
        default: []
    },
    addNewSlide: {
        type: 'boolean',
        default: false
    },
    showCaption: {
        type: 'boolean',
        default: false
    },
    titleTag: {
        type: 'string',
        default: 'h2'
    },
    titleColor: {
        type: 'string'
    },
    titleBgColor: {
        type: 'string'
    },
    titleWidthType: {
        type: 'string',
        default: 'full__width'
    },
    titlePosition: {
        type: 'string',
        default: 'bottom__left'
    },
    linkedLogos: {
        type: 'boolean',
        default: false
    },
    objectFit: {
        type: 'string',
        default: 'contain'
    },
    openLinkInNewTab: {
        type: 'boolean',
        default: true
    },
    overlayColor: {
        type: 'string'
    },
    overlayIconColor: {
        type: 'string'
    },
    overlayIconBgColor: {
        type: 'string'
    },
    overlayIconHoverColor: {
        type: 'string'
    },
    overlayIconHoverBgColor: {
        type: 'string'
    },
    // photo
    photoBgType: {
        type: 'string',
        default: 'classic'
    },
    photoBgColor: {
        type: 'string'
    },
    photoBgGradient: {
        type: 'string'
    },
    photoHoverEffect: {
        type: 'string',
        default: 'none'
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
    ...generateResBoxControlAttributes({
        controlName: TITLE_SPACING
    }),
    ...generateResBoxControlAttributes({
        controlName: TITLE_MARGIN
    }),
    ...generateTypographyAttributes({
        controlName: TITLE_TYPO
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
    // overlay icon size
    ...generateResRangeAttributes({
        controlName: OVERLAY_ICON_SIZE
    }),
    ...generateResRangeAttributes({
        controlName: OVERLAY_ICON_CONTAINER
    }),
    ...generateResRangeAttributes({
        controlName: LOGO_MAX_WIDTH
    }),
    // phtoo
    ...generateBorderAttributes({
        controlName: PHOTO_BORDER
    }),
    ...generateResBoxControlAttributes({
        controlName: PHOTO_BRADIUS
    }),
    ...generateResBoxControlAttributes({
        controlName: PHOTO_PADDING
    })
};

export default attributes;
