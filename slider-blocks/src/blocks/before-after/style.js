const { useEffect } = wp.element;
const { softMinifyCssStrings } = window.gutSliderModules.Helper;
// Internal constants
import {
    AL_BORDER,
    AL_BRADIUS,
    AL_BSHADOW,
    AL_MARGIN,
    AL_PADDING,
    AL_TYPO,
    BL_BORDER,
    BL_BRADIUS,
    BL_BSHADOW,
    BL_MARGIN,
    BL_PADDING,
    BL_TYPO,
    CAP_ALIGN,
    CAP_MARGIN,
    CAP_TYPO,
    CB_BORDER,
    CB_BRADIUS,
    CB_BSHADOW,
    CB_HEIGHT,
    CB_WIDTH,
    HANDLE_BSHADOW,
    HANDLE_WIDTH,
    HEIGHT
} from './constants';

const {
    generateRangeStyles,
    generateBorderStyles,
    generateResBoxStyles,
    generateTypographyStyles,
    generateBoxShadowStyles,
    generateAlignmentStyles
} = window.gutSliderModules;

const Style = props => {
    const { attributes, setAttributes } = props;
    const { uniqueId, blockStyle, blColor, afColor, capColor, cbBlur, arrowColor, blBg, alBg, handleBg, cbBg } = attributes;

    // height
    const {
        deskStyle: heightDesk,
        tabStyke: heightTab,
        mobStyle: heightMob
    } = generateRangeStyles({
        controlName: HEIGHT,
        attributes,
        propertyName: 'height'
    });

    // before label
    const {
        desktopStyles: blDeskBorder,
        tabletStyles: blTabBorder,
        mobileStyles: blMobBorder
    } = generateBorderStyles({
        controlName: BL_BORDER,
        attributes
    });

    const {
        desktopStyles: blDeskTypo,
        tabletStyles: blTabTypo,
        mobileStyles: blMobTypo
    } = generateTypographyStyles({
        controlName: BL_TYPO,
        attributes
    });

    const {
        boxDeskStyles: blDeskRadius,
        boxTabStyles: blTabRadius,
        boxMobStyles: blMobRadius
    } = generateResBoxStyles({
        controlName: BL_BRADIUS,
        attributes,
        propertyName: 'border-radius',
        forRadius: true
    });

    const {
        boxDeskStyles: blDeskPadding,
        boxTabStyles: blTabPadding,
        boxMobStyles: blMobPadding
    } = generateResBoxStyles({
        controlName: BL_PADDING,
        attributes,
        propertyName: 'padding'
    });

    const {
        boxDeskStyles: blDeskMargin,
        boxTabStyles: blTabMargin,
        boxMobStyles: blMobMargin
    } = generateResBoxStyles({
        controlName: BL_MARGIN,
        attributes,
        propertyName: 'margin'
    });

    const { boxShadowStyles: blShadow } = generateBoxShadowStyles({
        controlName: BL_BSHADOW,
        attributes
    });

    // after label
    const {
        desktopStyles: alDeskBorder,
        tabletStyles: alTabBorder,
        mobileStyles: alMobBorder
    } = generateBorderStyles({
        controlName: AL_BORDER,
        attributes
    });

    const {
        desktopStyles: alDeskTypo,
        tabletStyles: alTabTypo,
        mobileStyles: alMobTypo
    } = generateTypographyStyles({
        controlName: AL_TYPO,
        attributes
    });

    const {
        boxDeskStyles: alDeskRadius,
        boxTabStyles: alTabRadius,
        boxMobStyles: alMobRadius
    } = generateResBoxStyles({
        controlName: AL_BRADIUS,
        attributes,
        propertyName: 'border-radius',
        forRadius: true
    });

    const {
        boxDeskStyles: alDeskPadding,
        boxTabStyles: alTabPadding,
        boxMobStyles: alMobPadding
    } = generateResBoxStyles({
        controlName: AL_PADDING,
        attributes,
        propertyName: 'padding'
    });

    const {
        boxDeskStyles: alDeskMargin,
        boxTabStyles: alTabMargin,
        boxMobStyles: alMobMargin
    } = generateResBoxStyles({
        controlName: AL_MARGIN,
        attributes,
        propertyName: 'margin'
    });

    const { boxShadowStyles: alShadow } = generateBoxShadowStyles({
        controlName: AL_BSHADOW,
        attributes
    });

    // caption
    const {
        deskAlign: capDeskAlign,
        tabAlign: capTabAlign,
        mobAlign: capMobAlign
    } = generateAlignmentStyles({
        controlName: CAP_ALIGN,
        attributes,
        propertyName: 'text-align'
    });

    const {
        desktopStyles: capDeskTypo,
        tabletStyles: capTabTypo,
        mobileStyles: capMobTypo
    } = generateTypographyStyles({
        controlName: CAP_TYPO,
        attributes
    });

    const {
        boxDeskStyles: capDeskMargin,
        boxTabStyles: capTabMargin,
        boxMobStyles: capMobMargin
    } = generateResBoxStyles({
        controlName: CAP_MARGIN,
        attributes,
        propertyName: 'margin'
    });

    // handle Line
    const {
        deskStyle: handleDeskWidth,
        tabStyke: handleTabWidth,
        mobStyle: handleMobWidth
    } = generateRangeStyles({
        controlName: HANDLE_WIDTH,
        attributes,
        propertyName: 'width'
    });

    const { boxShadowStyles: handleShadow } = generateBoxShadowStyles({
        controlName: HANDLE_BSHADOW,
        attributes
    });

    // control button
    const {
        desktopStyles: cbDeskBorder,
        tabletStyles: cbTabBorder,
        mobileStyles: cbMobBorder
    } = generateBorderStyles({
        controlName: CB_BORDER,
        attributes
    });

    const {
        boxDeskStyles: cbDeskRadius,
        boxTabStyles: cbTabRadius,
        boxMobStyles: cbMobRadius
    } = generateResBoxStyles({
        controlName: CB_BRADIUS,
        attributes,
        propertyName: 'border-radius',
        forRadius: true
    });

    const { boxShadowStyles: cbShadow } = generateBoxShadowStyles({
        controlName: CB_BSHADOW,
        attributes
    });

    const {
        deskStyle: cbDeskWidth,
        tabStyke: cbTabWidth,
        mobStyle: cbMobWidth
    } = generateRangeStyles({
        controlName: CB_WIDTH,
        attributes,
        propertyName: 'width'
    });

    const {
        deskStyle: cbDeskHeight,
        tabStyke: cbTabHeight,
        mobStyle: cbMobHeight
    } = generateRangeStyles({
        controlName: CB_HEIGHT,
        attributes,
        propertyName: 'height'
    });

    /**
     * Block Styles
     */
    const deskStyles = `
        ${
            heightDesk
                ? `.wp-block-gutsliders-before-after.${uniqueId} .gutslider-ba-item {
                    ${heightDesk}
                }`
                : ''
        }
		${
            blColor || blDeskBorder || blDeskTypo || blDeskRadius || blDeskPadding || blDeskMargin || blShadow || blBg
                ? `.wp-block-gutsliders-before-after.${uniqueId} .before-label {
					${blColor ? `color: ${blColor};` : ''}
					${blBg ? `background: ${blBg};` : ''}
					${blDeskBorder}
					${blDeskTypo}
					${blDeskRadius}
					${blDeskPadding}
					${blDeskMargin}
					${blShadow}
				}`
                : ''
        }
		${
            afColor || alDeskBorder || alDeskTypo || alDeskRadius || alDeskPadding || alDeskMargin || alShadow || alBg
                ? `.wp-block-gutsliders-before-after.${uniqueId} .after-label {
					${afColor ? `color: ${afColor};` : ''}
					${alBg ? `background: ${alBg};` : ''}
					${alDeskBorder}
					${alDeskTypo}
					${alDeskRadius}
					${alDeskPadding}
					${alDeskMargin}
					${alShadow}
				}`
                : ''
        }
        ${
            capColor || capDeskTypo
                ? `.wp-block-gutsliders-before-after.${uniqueId} .gutslider-caption-text {
                    ${capColor ? `color: ${capColor};` : ''}
                    ${capDeskTypo}
                }`
                : ''
        }
        ${
            capDeskMargin || capDeskAlign
                ? `.wp-block-gutsliders-before-after.${uniqueId} .gutslider-caption {
                    ${capDeskAlign}
                    ${capDeskMargin}
                }`
                : ''
        }
        ${
            arrowColor
                ? `.wp-block-gutsliders-before-after.${uniqueId} .__rcs-handle-arrow {
                border-right-color: ${arrowColor} !important;
            }`
                : ''
        }
        ${
            handleDeskWidth || handleBg || handleShadow
                ? `.wp-block-gutsliders-before-after.${uniqueId} .__rcs-handle-line {
                    ${handleDeskWidth.replace(/;/g, ' !important;')}
                    ${handleBg ? `background: ${handleBg} !important;` : ''}
                    ${handleShadow.replace(/;/g, ' !important;')}
                }`
                : ''
        } 
		${
            cbBlur || cbDeskBorder || cbDeskRadius || cbBg || cbShadow || cbDeskWidth || cbDeskHeight
                ? `.wp-block-gutsliders-before-after.${uniqueId} .__rcs-handle-button {
                    ${cbBlur ? `backdrop-filter: blur(${cbBlur}px) !important;` : ''}
                    ${cbBg ? `background: ${cbBg} !important;` : ''}
                    ${cbDeskBorder.replace(/;/g, ' !important;')}
                    ${cbDeskRadius.replace(/;/g, ' !important;')}
                    ${cbShadow.replace(/;/g, ' !important;')}
                    ${cbDeskWidth.replace(/;/g, ' !important;')}
                    ${cbDeskHeight.replace(/;/g, ' !important;')}
                }`
                : ''
        }
	`;
    const tabStyles = `
        ${
            heightTab
                ? `.wp-block-gutsliders-before-after.${uniqueId} .gutslider-ba-item {
                    ${heightTab}
                }`
                : ''
        }
		${
            blTabBorder || blTabTypo || blTabRadius || blTabPadding || blTabMargin
                ? `.wp-block-gutsliders-before-after.${uniqueId} .before-label {
					${blTabBorder}
					${blTabTypo}
					${blTabRadius}
					${blTabPadding}
					${blTabMargin}
				}`
                : ''
        }
		${
            alTabBorder || alTabTypo || alTabRadius || alTabPadding || alTabMargin
                ? `.wp-block-gutsliders-before-after.${uniqueId} .after-label {
					${alTabBorder}
					${alTabTypo}
					${alTabRadius}
					${alTabPadding}
					${alTabMargin}
				}`
                : ''
        }
        ${
            capTabTypo
                ? `.wp-block-gutsliders-before-after.${uniqueId} .gutslider-caption-text {
                    ${capTabTypo}
                }`
                : ''
        }
        ${
            capTabMargin || capTabAlign
                ? `.wp-block-gutsliders-before-after.${uniqueId} .gutslider-caption {
                    ${capTabAlign}
                    ${capTabMargin}
                }`
                : ''
        }
        ${
            handleTabWidth
                ? `.wp-block-gutsliders-before-after.${uniqueId} .__rcs-handle-line {
                    ${handleTabWidth.replace(/;/g, ' !important;')}
                }`
                : ''
        }
        ${
            cbTabBorder || cbTabRadius || cbTabWidth || cbTabHeight
                ? `.wp-block-gutsliders-before-after.${uniqueId} .__rcs-handle-button {
                    ${cbTabBorder.replace(/;/g, ' !important;')}
                    ${cbTabRadius.replace(/;/g, ' !important;')}
                    ${cbTabWidth.replace(/;/g, ' !important;')}
                    ${cbTabHeight.replace(/;/g, ' !important;')}
                }`
                : ''
        }
	`;
    const mobStyles = `
        ${
            heightMob
                ? `.wp-block-gutsliders-before-after.${uniqueId} .gutslider-ba-item {
                    ${heightMob}
                }`
                : ''
        }
		${
            blMobBorder || blMobTypo || blMobRadius || blMobPadding || blMobMargin
                ? `.wp-block-gutsliders-before-after.${uniqueId} .before-label {
					${blMobBorder}
					${blMobTypo}
					${blMobRadius}
					${blMobPadding}
					${blMobMargin}
				}`
                : ''
        }
		${
            alMobBorder || alMobTypo || alMobRadius || alMobPadding || alMobMargin
                ? `.wp-block-gutsliders-before-after.${uniqueId} .after-label {
					${alMobBorder}
					${alMobTypo}
					${alMobRadius}
					${alMobPadding}
					${alMobMargin}
				}`
                : ''
        }
        ${
            capMobTypo
                ? `.wp-block-gutsliders-before-after.${uniqueId} .gutslider-caption-text {
                    ${capMobTypo}
                }`
                : ''
        }
        ${
            capMobMargin || capMobAlign
                ? `.wp-block-gutsliders-before-after.${uniqueId} .gutslider-caption {
                    ${capMobAlign}
                    ${capMobMargin}
                }`
                : ''
        }
        ${
            handleMobWidth
                ? `.wp-block-gutsliders-before-after.${uniqueId} .__rcs-handle-line {
                    ${handleMobWidth.replace(/;/g, ' !important;')}
                }`
                : ''
        }
        ${
            cbMobBorder || cbMobRadius || cbMobWidth || cbMobHeight
                ? `.wp-block-gutsliders-before-after.${uniqueId} .__rcs-handle-button {
                    ${cbMobBorder.replace(/;/g, ' !important;')}
                    ${cbMobRadius.replace(/;/g, ' !important;')}
                    ${cbMobWidth.replace(/;/g, ' !important;')}
                    ${cbMobHeight.replace(/;/g, ' !important;')}
                }`
                : ''
        }
	`;

    /**
     * Block All Styles
     */
    const blockStyleCss = `
        ${deskStyles.replace(/\s/g, '').length > 0 ? `${deskStyles}` : ''}
        ${
            tabStyles.replace(/\s/g, '').length > 0
                ? `@media (max-width: 1024px) {
                    ${tabStyles}
                }`
                : ''
        }
        ${
            mobStyles.replace(/\s/g, '').length > 0
                ? `@media (max-width: 767px) {
                    ${mobStyles}
                }`
                : ''
        }
    `;

    // Set Block Styles
    useEffect(() => {
        if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
            setAttributes({ blockStyle: blockStyleCss });
        }
    }, [attributes]);

    return <style>{`${softMinifyCssStrings(blockStyleCss)}`}</style>;
};

export default Style;
