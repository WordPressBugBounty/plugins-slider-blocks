const generateResBtnsAttributes = ({ controlName }) => {
    return {
        [`${controlName}`]: {
            type: 'object',
            default: {
                desk: '',
                tab: '',
                mob: ''
            }
        }
    };
};

export default generateResBtnsAttributes;
