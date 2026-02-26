const generateBorderAttributes = ({ controlName }) => {
    return {
        [`${controlName}Style`]: {
            type: 'string',
            default: ''
        },
        [`${controlName}Colors`]: {
            type: 'object',
            default: {
                normal: '',
                hover: ''
            }
        },
        [`${controlName}LinkStatus`]: {
            type: 'boolean',
            default: true
        },
        [`${controlName}LinkedWidth`]: {
            type: 'string'
        },
        [`${controlName}Widths`]: {
            type: 'object',
            default: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            }
        },
        [`${controlName}TabLinkStatus`]: {
            type: 'boolean',
            default: true
        },
        [`${controlName}TabLinkedWidth`]: {
            type: 'string'
        },
        [`${controlName}TabWidths`]: {
            type: 'object',
            default: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            }
        },
        [`${controlName}MobLinkStatus`]: {
            type: 'boolean',
            default: true
        },
        [`${controlName}MobLinkedWidth`]: {
            type: 'string'
        },
        [`${controlName}MobWidths`]: {
            type: 'object',
            default: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            }
        },

        [`${controlName}Unit`]: {
            type: 'string',
            default: 'px'
        }
    };
};

export default generateBorderAttributes;
