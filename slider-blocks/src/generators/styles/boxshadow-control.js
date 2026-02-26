const generateBoxShadowStyles = ({ controlName, attributes }) => {
    const {
        [`${controlName}BoxShadowPosition`]: boxShadowPosition = 'outset',
        [`${controlName}BoxShadowColor`]: boxShadowColor = '',
        [`${controlName}BoxShadowHorizontal`]: boxShadowHorizontal = 0,
        [`${controlName}BoxShadowVertical`]: boxShadowVertical = 0,
        [`${controlName}BoxShadowBlur`]: boxShadowBlur = 0,
        [`${controlName}BoxShadowSpread`]: boxShadowSpread = 0
    } = attributes;

    // if (!boxShadowColor) return;

    let boxShadowStyles = '';

    // box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2) inset; || box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);

    const horizontalUnit = boxShadowHorizontal && boxShadowHorizontal !== 0 ? 'px' : '';
    const verticalUnit = boxShadowVertical && boxShadowVertical !== 0 ? 'px' : '';
    const blurUnit = boxShadowBlur && boxShadowBlur !== 0 ? 'px' : '';
    const spreadUnit = boxShadowSpread && boxShadowSpread !== 0 ? 'px' : '';

    if (boxShadowHorizontal || boxShadowVertical || boxShadowBlur || boxShadowSpread) {
        if (boxShadowPosition === 'inset') {
            boxShadowStyles += `
            box-shadow: ${boxShadowHorizontal}${horizontalUnit} ${boxShadowVertical}${verticalUnit} ${boxShadowBlur}${blurUnit} ${boxShadowSpread}${spreadUnit} ${boxShadowColor} ${boxShadowPosition} inset;
        `;
        } else {
            boxShadowStyles += `
            box-shadow: ${boxShadowHorizontal}${horizontalUnit} ${boxShadowVertical}${verticalUnit} ${boxShadowBlur}${blurUnit} ${boxShadowSpread}${spreadUnit} ${boxShadowColor};
        `;
        }
    }

    return {
        boxShadowStyles
    };
};

export default generateBoxShadowStyles;
