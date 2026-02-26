/* eslint-disable import/no-extraneous-dependencies */
const {
    generateResBoxControlAttributes,
    generateBorderAttributes,
    generateTypographyAttributes,
    generateResRangeAttributes,
    generateAlignmentAttributes,
    generateResBtnsAttributes
} = window.gutSliderModules;

import {
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
    CONTENT_BORDER,
    CONTENT_BRADIUS,
    CONTENT_MARGIN,
    BTN_BORDER,
    BTN_RADIUS,
    BTN_MARGIN,
    BTN_PADDING,
    BTN_TYPO,
    SECONDARY_BTN_BORDER,
    SECONDARY_BTN_RADIUS,
    SECONDARY_BTN_MARGIN,
    SECONDARY_BTN_PADDING,
    SECONDARY_BTN_TYPO,
    TITLE_SPACING,
    TITLE_TYPO,
    PHOTO_SIZE,
    PHOTO_BORDER,
    PHOTO_RADIUS,
    PHOTO_PADDING,
    PHOTO_MARGIN,
    SUBTITLE_SPACING,
    SUBTITLE_TYPO,
    DESC_SPACING,
    DESC_TYPO,
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
    PROG_SIZE
} from './constants';

const attributes = {
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
    //visible elements
    showImage: {
        type: 'boolean',
        default: false
    },
    showSubTitle: {
        type: 'boolean',
        default: true
    },
    showTitle: {
        type: 'boolean',
        default: true
    },
    showDescription: {
        type: 'boolean',
        default: true
    },
    showButton: {
        type: 'boolean',
        default: true
    },
    // global link
    enableGlobalLink: {
        type: 'boolean',
        default: false
    },
    // image Positon
    imgPosition: {
        type: 'string',
        default: 'column'
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
    centerMode: {
        type: 'boolean',
        default: false
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
    slideItems: {
        type: 'array',
        default: []
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
    sbtnColors: {
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
    sbtnAnimation: {
        type: 'string',
        default: ''
    },
    // transition delay
    titleDelay: {
        type: 'number'
    },
    subtitleDelay: {
        type: 'number'
    },
    descDelay: {
        type: 'number'
    },
    btnDelay: {
        type: 'number'
    },
    sbtnDelay: {
        type: 'number'
    },

    // content bg
    contentBgColor: {
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
    // content
    ...generateResBoxControlAttributes({
        controlName: CONTENT_PADDING
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
    ...generateResBtnsAttributes({
        controlName: CONTENT_HALIGN
    }),
    ...generateBorderAttributes({
        controlName: CONTENT_BORDER
    }),
    ...generateResBoxControlAttributes({
        controlName: CONTENT_BRADIUS
    }),
    ...generateResBoxControlAttributes({
        controlName: CONTENT_MARGIN
    }),
    // photo
    ...generateResRangeAttributes({
        controlName: PHOTO_SIZE
    }),
    ...generateResBoxControlAttributes({
        controlName: PHOTO_PADDING
    }),
    ...generateBorderAttributes({
        controlName: PHOTO_BORDER
    }),
    ...generateResBoxControlAttributes({
        controlName: PHOTO_RADIUS
    }),
    ...generateResBoxControlAttributes({
        controlName: PHOTO_MARGIN
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
    // secondary button
    ...generateResBoxControlAttributes({
        controlName: SECONDARY_BTN_RADIUS
    }),
    ...generateResBoxControlAttributes({
        controlName: SECONDARY_BTN_MARGIN
    }),
    ...generateResBoxControlAttributes({
        controlName: SECONDARY_BTN_PADDING
    }),
    ...generateBorderAttributes({
        controlName: SECONDARY_BTN_BORDER
    }),
    ...generateTypographyAttributes({
        controlName: SECONDARY_BTN_TYPO
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
    })
};

export default attributes;
