const generateResBoxControlAttributes = ({ controlName }) => {
    return {
        [`${controlName}LinkedStatus`]: {
            type: 'boolean',
            default: true
        },
        [`${controlName}LinkedValue`]: {
            type: 'string'
        },
        [`${controlName}Values`]: {
            type: 'object',
            default: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            }
        },
        [`${controlName}TabLinkedStatus`]: {
            type: 'boolean',
            default: true
        },
        [`${controlName}TabLinkedValue`]: {
            type: 'string'
        },
        [`${controlName}TabValues`]: {
            type: 'object',
            default: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            }
        },

        [`${controlName}MobLinkedStatus`]: {
            type: 'boolean',
            default: true
        },
        [`${controlName}MobLinkedValue`]: {
            type: 'string'
        },
        [`${controlName}MobValues`]: {
            type: 'object',
            default: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            }
        },
        [`${controlName}Units`]: {
            type: 'object',
            default: {
                desk: 'px',
                tab: 'px',
                mob: 'px'
            }
        }
    };
};
export default generateResBoxControlAttributes;
