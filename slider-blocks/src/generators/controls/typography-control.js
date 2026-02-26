import { PREFIX } from '../../constants';
const generateTypographyAttributes = ({ controlName }) => {
    return {
        [`${PREFIX}${controlName}FontFamily`]: {
            type: 'string'
        },
        [`${controlName}FontWeight`]: {
            type: 'object'
        },
        [`${controlName}FontStyle`]: {
            type: 'string'
        },
        [`${controlName}TextTransform`]: {
            type: 'string'
        },
        [`${controlName}TextDecoration`]: {
            type: 'object'
        },
        [`${controlName}FontSizes`]: {
            type: 'object',
            default: {
                desk: '',
                tab: '',
                mob: ''
            }
        },
        [`${controlName}LineHeights`]: {
            type: 'object',
            default: {
                desk: '',
                tab: '',
                mob: ''
            }
        },
        [`${controlName}LetterSpacings`]: {
            type: 'object',
            default: {
                desk: '',
                tab: '',
                mob: ''
            }
        },
        [`${controlName}FontSizeUnits`]: {
            type: 'object',
            default: {
                desk: 'px',
                tab: 'px',
                mob: 'px'
            }
        },
        [`${controlName}LineHeightUnits`]: {
            type: 'object',
            default: {
                desk: 'px',
                tab: 'px',
                mob: 'px'
            }
        },
        [`${controlName}LetterSpacingUnits`]: {
            type: 'object',
            default: {
                desk: 'px',
                tab: 'px',
                mob: 'px'
            }
        }
    };
};

export default generateTypographyAttributes;
