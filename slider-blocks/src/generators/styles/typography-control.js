import { PREFIX } from '../../constants';

const generateTypographyStyles = ({ controlName, attributes }) => {
    const {
        [`${PREFIX}${controlName}FontFamily`]: fontFamily,
        [`${controlName}FontWeight`]: fontWeight,
        [`${controlName}FontStyle`]: fontStyle,
        [`${controlName}TextTransform`]: textTransform,
        [`${controlName}TextDecoration`]: textDecoration,

        [`${controlName}FontSizes`]: fontSizes,
        [`${controlName}LineHeights`]: lineHeights,
        [`${controlName}LetterSpacings`]: letterSpacings,

        [`${controlName}FontSizeUnits`]: fontSizeUnits,
        [`${controlName}LineHeightUnits`]: lineHeightUnits,
        [`${controlName}LetterSpacingUnits`]: letterSpacingUnits
    } = attributes;

    let desktopStyles = '';
    let tabletStyles = '';
    let mobileStyles = '';

    // common to all devices
    if (fontFamily) {
        desktopStyles += `font-family: ${fontFamily};`;
    }

    if (fontWeight) {
        desktopStyles += `font-weight: ${fontWeight.value};`;
    }

    if (fontStyle) {
        desktopStyles += `font-style: ${fontStyle};`;
    }

    if (textTransform) {
        desktopStyles += `text-transform: ${textTransform};`;
    }

    if (textDecoration && textDecoration.value) {
        desktopStyles += `text-decoration: ${textDecoration.value};`;
    }

    // desktop only
    if (fontSizes && fontSizes.desk !== undefined && fontSizes.desk !== '' && isNaN(fontSizes.desk) === false) {
        desktopStyles += `font-size: ${fontSizes.desk}${fontSizeUnits.desk};`;
    }

    if (lineHeights && lineHeights.desk && lineHeights.desk !== undefined && lineHeights.desk !== '' && isNaN(lineHeights.desk) === false) {
        desktopStyles += `line-height: ${lineHeights.desk}${lineHeightUnits.desk};`;
    }

    if (
        letterSpacings &&
        letterSpacings.desk &&
        letterSpacings.desk !== undefined &&
        letterSpacings.desk !== '' &&
        isNaN(letterSpacings.desk) === false
    ) {
        desktopStyles += `letter-spacing: ${letterSpacings.desk}${letterSpacingUnits.desk};`;
    }

    // tablet only
    if (fontSizes && fontSizes.tab && fontSizes.tab !== undefined && fontSizes.tab !== '' && isNaN(fontSizes.tab) === false) {
        tabletStyles += `font-size: ${fontSizes.tab}${fontSizeUnits.tab};`;
    }

    if (lineHeights && lineHeights.tab && lineHeights.tab !== undefined && lineHeights.tab !== '' && isNaN(lineHeights.tab) === false) {
        tabletStyles += `line-height: ${lineHeights.tab}${lineHeightUnits.tab};`;
    }

    if (
        letterSpacings &&
        letterSpacings.tab &&
        letterSpacings.tab !== undefined &&
        letterSpacings.tab !== '' &&
        isNaN(letterSpacings.tab) === false
    ) {
        tabletStyles += `letter-spacing: ${letterSpacings.tab}${letterSpacingUnits.tab};`;
    }

    // mobile only
    if (fontSizes && fontSizes.mob && fontSizes.mob !== undefined && fontSizes.mob !== '' && isNaN(fontSizes.mob) === false) {
        mobileStyles += `font-size: ${fontSizes.mob}${fontSizeUnits.mob};`;
    }

    if (lineHeights && lineHeights.mob && lineHeights.mob !== undefined && lineHeights.mob !== '' && isNaN(lineHeights.mob) === false) {
        mobileStyles += `line-height: ${lineHeights.mob}${lineHeightUnits.mob};`;
    }

    if (
        letterSpacings &&
        letterSpacings.mob &&
        letterSpacings.mob !== undefined &&
        letterSpacings.mob !== '' &&
        isNaN(letterSpacings.mob) === false
    ) {
        mobileStyles += `letter-spacing: ${letterSpacings.mob}${letterSpacingUnits.mob};`;
    }

    return {
        desktopStyles,
        tabletStyles,
        mobileStyles
    };
};

export default generateTypographyStyles;
