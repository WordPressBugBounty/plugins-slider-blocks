const generateResRangeAttributes = ({ controlName }) => {
    return {
        [`${controlName}Ranges`]: {
            type: 'object',
            default: {
                desk: '',
                tab: '',
                mob: ''
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
export default generateResRangeAttributes;
