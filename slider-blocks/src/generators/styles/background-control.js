const generateBgStyles = ({ controlName, attributes }) => {
    const {
        [`${controlName}bgType`]: bgType = 'classic',
        [`${controlName}bgColor`]: bgColor,
        [`${controlName}bgGradient`]: bgGradient
    } = attributes;

    let bgStyle;
    if (bgType === 'classic' && bgColor !== undefined && bgColor !== '') {
        bgStyle = bgColor
            ? `background-color: ${bgColor};
        `
            : '';
    } else if (bgType === 'gradient' && bgGradient !== undefined && bgGradient !== '') {
        bgStyle = bgGradient
            ? `background-image: ${bgGradient};
        `
            : '';
    } else {
        bgStyle = '';
    }

    return {
        bgStyle
    };
};

export default generateBgStyles;
