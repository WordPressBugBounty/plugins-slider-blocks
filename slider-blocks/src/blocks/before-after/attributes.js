const {
    generateResBoxControlAttributes,
    generateBorderAttributes,
    generateTypographyAttributes,
    generateResRangeAttributes,
    generateAlignmentAttributes,
    generateBackgroundAttributes,
    generateBoxShadowAttributes
} = window.gutSliderModules;

import {
    AL_BG,
    AL_BORDER,
    AL_BRADIUS,
    AL_BSHADOW,
    AL_MARGIN,
    AL_PADDING,
    AL_TYPO,
    BL_BG,
    BL_BORDER,
    BL_BRADIUS,
    BL_BSHADOW,
    BL_MARGIN,
    BL_PADDING,
    BL_TYPO,
    CAP_ALIGN,
    CAP_MARGIN,
    CAP_TYPO,
    CB_BG,
    CB_BORDER,
    CB_BRADIUS,
    CB_BSHADOW,
    CB_HEIGHT,
    CB_WIDTH,
    HANDLE_BG,
    HANDLE_BSHADOW,
    HANDLE_WIDTH,
    HEIGHT
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
    beforeImage: {
        type: 'object',
        default: {
            id: '',
            url: '',
            alt: ''
        }
    },
    afterImage: {
        type: 'object',
        default: {
            id: '',
            url: '',
            alt: ''
        }
    },
    sliderOptions: {
        type: 'object',
        default: {
            showLabels: true,
            labelsVisibility: 'always',
            hoverAnimation: 'icgb__fade',
            labelVPosition: 'icgbv__center',
            labelHPosition: 'icgbh__center',
            beforeLabel: 'Before',
            afterLabel: 'After'
        }
    },
    comparisonOptions: {
        type: 'object',
        default: {
            disableSliding: false,
            onlyHandleDraggable: false,
            slideMode: 'horizontal',
            swipeMode: 'drag',
            initialPosition: 50
        }
    },
    showCaption: {
        type: 'boolean',
        default: false
    },
    sliderCaption: {
        type: 'string'
    },
    captionTag: {
        type: 'string',
        default: 'span'
    },
    blColor: {
        type: 'string'
    },
    blBg: {
        type: 'string'
    },
    afColor: {
        type: 'string'
    },
    alBg: {
        type: 'string'
    },
    capColor: {
        type: 'string'
    },
    cbBlur: {
        type: 'number'
    },
    handleBg: {
        type: 'string'
    },
    arrowColor: {
        type: 'string'
    },
    cbBg: {
        type: 'string'
    },
    // Height
    ...generateResRangeAttributes({
        controlName: HEIGHT
    }),
    // Before Label
    ...generateTypographyAttributes({
        controlName: BL_TYPO
    }),
    ...generateBorderAttributes({
        controlName: BL_BORDER
    }),
    ...generateResBoxControlAttributes({
        controlName: BL_BRADIUS
    }),
    ...generateBackgroundAttributes({
        controlName: BL_BG
    }),
    ...generateBoxShadowAttributes({
        controlName: BL_BSHADOW
    }),
    ...generateResBoxControlAttributes({
        controlName: BL_MARGIN
    }),
    ...generateResBoxControlAttributes({
        controlName: BL_PADDING
    }),

    // After Label
    ...generateTypographyAttributes({
        controlName: AL_TYPO
    }),
    ...generateBorderAttributes({
        controlName: AL_BORDER
    }),
    ...generateResBoxControlAttributes({
        controlName: AL_BRADIUS
    }),
    ...generateBackgroundAttributes({
        controlName: AL_BG
    }),
    ...generateBoxShadowAttributes({
        controlName: AL_BSHADOW
    }),
    ...generateResBoxControlAttributes({
        controlName: AL_MARGIN
    }),
    ...generateResBoxControlAttributes({
        controlName: AL_PADDING
    }),

    // Caption
    ...generateAlignmentAttributes({
        controlName: CAP_ALIGN
    }),
    ...generateTypographyAttributes({
        controlName: CAP_TYPO
    }),
    ...generateResBoxControlAttributes({
        controlName: CAP_MARGIN
    }),

    // Control line
    ...generateResRangeAttributes({
        controlName: HANDLE_WIDTH
    }),
    ...generateBackgroundAttributes({
        controlName: HANDLE_BG
    }),
    ...generateBoxShadowAttributes({
        controlName: HANDLE_BSHADOW
    }),

    // Control Button
    ...generateBorderAttributes({
        controlName: CB_BORDER
    }),
    ...generateResBoxControlAttributes({
        controlName: CB_BRADIUS
    }),
    ...generateBackgroundAttributes({
        controlName: CB_BG
    }),
    ...generateBoxShadowAttributes({
        controlName: CB_BSHADOW
    }),
    ...generateResRangeAttributes({
        controlName: CB_WIDTH
    }),
    ...generateResRangeAttributes({
        controlName: CB_HEIGHT
    })
};

export default attributes;
