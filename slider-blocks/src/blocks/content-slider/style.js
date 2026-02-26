/* eslint-disable no-undef */

// WordPress dependencies
const { useEffect } = wp.element;

/**
 * Internal dependencies
 */
const { softMinifyCssStrings } = window.gutSliderModules.Helper;
import * as Constants from './constants';

const {
    generateRangeStyles,
    generateBorderStyles,
    generateResBoxStyles,
    generateTypographyStyles,
    generateAlignmentStyles,
    generateResBtnsStyles
} = window.gutSliderModules;
const {
    SLIDE_HEIGHT,
    SLIDE_PADDING,
    SLIDE_MARGIN,
    CONTENT_WIDTH,
    CONTENT_VPOSITION,
    CONTENT_ALIGN,
    CONTENT_PADDING,
    CONTENT_HALIGN,
    CONTENT_BORDER,
    CONTENT_BRADIUS,
    CONTENT_MARGIN,
    BTN_BORDER,
    BTN_RADIUS,
    BTN_PADDING,
    BTN_MARGIN,
    BTN_TYPO,
    SECONDARY_BTN_BORDER,
    SECONDARY_BTN_RADIUS,
    SECONDARY_BTN_MARGIN,
    SECONDARY_BTN_PADDING,
    SECONDARY_BTN_TYPO,
    TITLE_SPACING,
    TITLE_TYPO,
    PHOTO_SIZE,
    PHOTO_BORDER,
    PHOTO_RADIUS,
    PHOTO_PADDING,
    PHOTO_MARGIN,
    SUBTITLE_SPACING,
    SUBTITLE_TYPO,
    DESC_SPACING,
    DESC_TYPO,
    NAV_BORDER,
    NAV_BRADIUS,
    NAV_HEIGHT,
    NAV_WIDTH,
    NAV_ICON_SIZE,
    NAV_MARGIN,
    NAV_GAP,
    PAG_BORDER,
    PAG_BRADIUS,
    PAG_WIDTH,
    PAG_HEIGHT,
    PAG_MARGIN,
    APAG_BORDER,
    APAG_BRADIUS,
    APAG_WIDTH,
    APAG_HEIGHT,
    FRAC_SIZE,
    PROG_SIZE
} = Constants;

const Style = ({ attributes, setAttributes }) => {
    const {
        uniqueId,
        blockStyle,
        imgPosition,
        subtitleColor,
        titleColor,
        descriptionColor,
        btnColors,
        sbtnColors,
        showNavigation,
        navColor,
        navHoverColor,
        navBgColor,
        navHoverBgColor,
        navContainerPosition,
        navPosition,
        showPagination,
        paginationType,
        pagColor,
        pagFracColor,
        pagFracCurrentColor,
        fracDividerColor,
        activePagColor,
        progressColor,
        activeProgressColor,
        // animation transition delay
        subtitleDelay,
        titleDelay,
        descDelay,
        btnDelay,
        sbtnDelay,
        contentBgColor
    } = attributes;

    // Slide Settings
    const {
        deskStyle: slideDeskHeight,
        tabStyle: slideTabHeight,
        mobStyle: slideMobHeight
    } = generateRangeStyles({
        controlName: SLIDE_HEIGHT,
        attributes,
        propertyName: 'height'
    });

    const {
        boxDeskStyles: slideDeskPadding,
        boxTabStyles: slideTabPadding,
        boxMobStyles: slideMobPadding
    } = generateResBoxStyles({
        controlName: SLIDE_PADDING,
        attributes,
        propertyName: 'padding'
    });

    const {
        boxDeskStyles: slideDeskMargin,
        boxTabStyles: slideTabMargin,
        boxMobStyles: slideMobMargin
    } = generateResBoxStyles({
        controlName: SLIDE_MARGIN,
        attributes,
        propertyName: 'margin'
    });

    // Content
    const {
        boxDeskStyles: contentDeskPadding,
        boxTabStyles: contentTabPadding,
        boxMobStyles: contentMobPadding
    } = generateResBoxStyles({
        controlName: CONTENT_PADDING,
        attributes,
        propertyName: 'padding'
    });

    const {
        deskStyle: contentDeskWidth,
        tabStyle: contentTabWidth,
        mobStyle: contentMobWidth
    } = generateRangeStyles({
        controlName: CONTENT_WIDTH,
        attributes,
        propertyName: 'max-width'
    });

    const {
        deskAlign: contentDeskVPos,
        tabAlign: contentTabVPos,
        mobAlign: contentMobVPos
    } = generateAlignmentStyles({
        controlName: CONTENT_VPOSITION,
        attributes,
        propertyName: 'justify-content'
    });

    const {
        deskAlign: contentDeskHPos,
        tabAlign: contentTabHPos,
        mobAlign: contentMobHPos
    } = generateResBtnsStyles({
        controlName: CONTENT_HALIGN,
        attributes,
        noProperty: true
    });

    const {
        deskAlign: contentDeskAlign,
        tabAlign: contentTabAlign,
        mobAlign: contentMobAlign
    } = generateAlignmentStyles({
        controlName: CONTENT_ALIGN,
        attributes,
        propertyName: 'text-align'
    });

    const {
        desktopStyles: cBorderDeskStyle,
        tabletStyles: cBorderTabStyle,
        mobileStyles: cBorderMobStyle
    } = generateBorderStyles({
        controlName: CONTENT_BORDER,
        attributes
    });

    const {
        boxDeskStyles: contentDeskBradius,
        boxTabStyles: contentTabBradius,
        boxMobStyles: contentMobBradius
    } = generateResBoxStyles({
        controlName: CONTENT_BRADIUS,
        attributes,
        propertyName: 'border-radius',
        forRadius: true
    });

    const {
        boxDeskStyles: contentDeskMargin,
        boxTabStyles: contentTabMargin,
        boxMobStyles: contentMobMargin
    } = generateResBoxStyles({
        controlName: CONTENT_MARGIN,
        attributes,
        propertyName: 'margin'
    });

    /**
     * Photo Style
     */

    const {
        deskStyle: photoDeskWidth,
        tabStyle: photoTabWidth,
        mobStyle: photoMobWidth
    } = generateRangeStyles({
        controlName: PHOTO_SIZE,
        attributes,
        propertyName: 'width'
    });

    const {
        deskStyle: photoDeskHeight,
        tabStyle: photoTabHeight,
        mobStyle: photoMobHeight
    } = generateRangeStyles({
        controlName: PHOTO_SIZE,
        attributes,
        propertyName: 'height'
    });

    const {
        desktopStyles: photoDeskBorder,
        tabletStyles: photoTabBorder,
        mobileStyles: photoMobBorder
    } = generateBorderStyles({
        controlName: PHOTO_BORDER,
        attributes
    });

    const {
        boxDeskStyles: photoDeskBradius,
        boxTabStyles: photoTabBradius,
        boxMobStyles: photoMobBradius
    } = generateResBoxStyles({
        controlName: PHOTO_RADIUS,
        attributes,
        propertyName: 'border-radius',
        forRadius: true
    });

    const {
        boxDeskStyles: photoDeskPadding,
        boxTabStyles: photoTabPadding,
        boxMobStyles: photoMobPadding
    } = generateResBoxStyles({
        controlName: PHOTO_PADDING,
        attributes,
        propertyName: 'padding'
    });

    const {
        boxDeskStyles: photoDeskMargin,
        boxTabStyles: photoTabMargin,
        boxMobStyles: photoMobMargin
    } = generateResBoxStyles({
        controlName: PHOTO_MARGIN,
        attributes,
        propertyName: 'margin'
    });

    /**
     * Button Style
     */
    const {
        desktopStyles: borderDeskStyle,
        tabletStyles: borderTabStyle,
        mobileStyles: borderMobStyle,
        hoverColor: borderHoverColor
    } = generateBorderStyles({
        controlName: BTN_BORDER,
        attributes
    });

    const {
        boxDeskStyles: buttonDeskStyles,
        boxTabStyles: buttonTabStyles,
        boxMobStyles: buttonMobStyles
    } = generateResBoxStyles({
        controlName: BTN_RADIUS,
        attributes,
        propertyName: 'border-radius',
        forRadius: true
    });

    const {
        boxDeskStyles: btnDeskPadding,
        boxTabStyles: btnTabPadding,
        boxMobStyles: btnMobPadding
    } = generateResBoxStyles({
        controlName: BTN_PADDING,
        attributes,
        propertyName: 'padding'
    });

    const {
        boxDeskStyles: btnDeskMargin,
        boxTabStyles: btnTabMargin,
        boxMobStyles: btnMobMargin
    } = generateResBoxStyles({
        controlName: BTN_MARGIN,
        attributes,
        propertyName: 'margin'
    });

    const {
        desktopStyles: btnDeskTypo,
        tabletStyles: btnTabTypo,
        mobileStyles: btnMobTypo
    } = generateTypographyStyles({
        controlName: BTN_TYPO,
        attributes
    });

    /**
     * Secondary Button Style
     */
    const {
        desktopStyles: borderDeskSBtnStyle,
        tabletStyles: borderTabSBtnStyle,
        mobileStyles: borderMobSBtnStyle,
        hoverColor: borderSBtnHoverColor
    } = generateBorderStyles({
        controlName: SECONDARY_BTN_BORDER,
        attributes
    });

    const {
        boxDeskStyles: buttonDeskSBtnStyles,
        boxTabStyles: buttonTabSBtnStyles,
        boxMobStyles: buttonMobSBtnStyles
    } = generateResBoxStyles({
        controlName: SECONDARY_BTN_RADIUS,
        attributes,
        propertyName: 'border-radius',
        forRadius: true
    });

    const {
        boxDeskStyles: btnDeskSBtnPadding,
        boxTabStyles: btnTabSBtnPadding,
        boxMobStyles: btnMobSBtnPadding
    } = generateResBoxStyles({
        controlName: SECONDARY_BTN_PADDING,
        attributes,
        propertyName: 'padding'
    });

    const {
        boxDeskStyles: btnDeskSBtnMargin,
        boxTabStyles: btnTabSBtnMargin,
        boxMobStyles: btnMobSBtnMargin
    } = generateResBoxStyles({
        controlName: SECONDARY_BTN_MARGIN,
        attributes,
        propertyName: 'margin'
    });

    const {
        desktopStyles: btnDeskSBtnTypo,
        tabletStyles: btnTabSBtnTypo,
        mobileStyles: btnMobSBtnTypo
    } = generateTypographyStyles({
        controlName: SECONDARY_BTN_TYPO,
        attributes
    });

    // title
    const {
        boxDeskStyles: titleDeskSpacing,
        boxTabStyles: titleTabSpacing,
        boxMobStyles: titleMobSpacing
    } = generateResBoxStyles({
        controlName: TITLE_SPACING,
        attributes,
        propertyName: 'margin'
    });

    const {
        desktopStyles: titleDeskTypo,
        tabletStyles: titleTabTypo,
        mobileStyles: titleMobTypo
    } = generateTypographyStyles({
        controlName: TITLE_TYPO,
        attributes
    });

    // subtitle
    const {
        boxDeskStyles: subtitleDeskSpacing,
        boxTabStyles: subtitleTabSpacing,
        boxMobStyles: subtitleMobSpacing
    } = generateResBoxStyles({
        controlName: SUBTITLE_SPACING,
        attributes,
        propertyName: 'margin'
    });

    const {
        desktopStyles: subtitleDeskTypo,
        tabletStyles: subtitleTabTypo,
        mobileStyles: subtitleMobTypo
    } = generateTypographyStyles({
        controlName: SUBTITLE_TYPO,
        attributes
    });

    // description
    const {
        boxDeskStyles: descDeskSpacing,
        boxTabStyles: descTabSpacing,
        boxMobStyles: descMobSpacing
    } = generateResBoxStyles({
        controlName: DESC_SPACING,
        attributes,
        propertyName: 'margin'
    });

    const {
        desktopStyles: descDeskTypo,
        tabletStyles: descTabTypo,
        mobileStyles: descMobTypo
    } = generateTypographyStyles({
        controlName: DESC_TYPO,
        attributes
    });

    // Navigation
    const {
        boxDeskStyles: navDeskMargin,
        boxTabStyles: navTabMargin,
        boxMobStyles: navMobMargin
    } = generateResBoxStyles({
        controlName: NAV_MARGIN,
        attributes,
        propertyName: 'margin'
    });

    const {
        desktopStyles: navBorderDeskStyle,
        tabletStyles: navBorderTabStyle,
        mobileStyles: navBorderMobStyle,
        hoverColor: navBorderHoverColor
    } = generateBorderStyles({
        controlName: NAV_BORDER,
        attributes
    });

    const {
        boxDeskStyles: navBradiusDeskStyles,
        boxTabStyles: navBradiusTabStyles,
        boxMobStyles: navBradiusMobStyles
    } = generateResBoxStyles({
        controlName: NAV_BRADIUS,
        attributes,
        propertyName: 'border-radius',
        forRadius: true
    });

    const {
        deskStyle: navDeskHeight,
        tabStyle: navTabHeight,
        mobStyle: navMobHeight
    } = generateRangeStyles({
        controlName: NAV_HEIGHT,
        attributes,
        propertyName: 'height'
    });

    const {
        deskStyle: navDeskWidth,
        tabStyle: navTabWidth,
        mobStyle: navMobWidth
    } = generateRangeStyles({
        controlName: NAV_WIDTH,
        attributes,
        propertyName: 'width'
    });

    const {
        deskStyle: navIconDeskSize,
        tabStyle: navIconTabSize,
        mobStyle: navIconMobSize
    } = generateRangeStyles({
        controlName: NAV_ICON_SIZE,
        attributes,
        propertyName: 'font-size'
    });

    const {
        deskStyle: navCustomIconDeskSize,
        tabStyle: navCustomIconTabSize,
        mobStyle: navCustomIconMobSize
    } = generateRangeStyles({
        controlName: NAV_ICON_SIZE,
        attributes,
        propertyName: 'width'
    });

    const {
        deskStyle: navCustomIconDeskHSize,
        tabStyle: navCustomIconTabHSize,
        mobStyle: navCustomIconMobHSize
    } = generateRangeStyles({
        controlName: NAV_ICON_SIZE,
        attributes,
        propertyName: 'height'
    });

    const {
        deskStyle: navDeskGap,
        tabStyle: navTabGap,
        mobStyle: navMobGap
    } = generateRangeStyles({
        controlName: NAV_GAP,
        attributes,
        propertyName: 'gap'
    });

    // Pagination Style
    const {
        boxDeskStyles: pagDeskMargin,
        boxTabStyles: pagTabMargin,
        boxMobStyles: pagMobMargin
    } = generateResBoxStyles({
        controlName: PAG_MARGIN,
        attributes,
        propertyName: 'margin'
    });

    const {
        desktopStyles: pagBorderDeskStyle,
        tabletStyles: pagBorderTabStyle,
        mobileStyles: pagBorderMobStyle,
        hoverColor: pagBorderHoverColor
    } = generateBorderStyles({
        controlName: PAG_BORDER,
        attributes
    });

    const {
        boxDeskStyles: pagBradiusDeskStyles,
        boxTabStyles: pagBradiusTabStyles,
        boxMobStyles: pagBradiusMobStyles
    } = generateResBoxStyles({
        controlName: PAG_BRADIUS,
        attributes,
        propertyName: 'border-radius',
        forRadius: true
    });

    const {
        deskStyle: pagDeskHeight,
        tabStyle: pagTabHeight,
        mobStyle: pagMobHeight
    } = generateRangeStyles({
        controlName: PAG_HEIGHT,
        attributes,
        propertyName: 'height'
    });

    const {
        deskStyle: pagDeskWidth,
        tabStyle: pagTabWidth,
        mobStyle: pagMobWidth
    } = generateRangeStyles({
        controlName: PAG_WIDTH,
        attributes,
        propertyName: 'width'
    });

    // Active Pagination Style
    const {
        desktopStyles: apagBorderDeskStyle,
        tabletStyles: apagBorderTabStyle,
        mobileStyles: apagBorderMobStyle,
        hoverColor: apagBorderHoverColor
    } = generateBorderStyles({
        controlName: APAG_BORDER,
        attributes
    });

    const {
        boxDeskStyles: apagBradiusDeskStyles,
        boxTabStyles: apagBradiusTabStyles,
        boxMobStyles: apagBradiusMobStyles
    } = generateResBoxStyles({
        controlName: APAG_BRADIUS,
        attributes,
        propertyName: 'border-radius',
        forRadius: true
    });

    const {
        deskStyle: apagDeskHeight,
        tabStyle: apagTabHeight,
        mobStyle: apagMobHeight
    } = generateRangeStyles({
        controlName: APAG_HEIGHT,
        attributes,
        propertyName: 'height'
    });

    const {
        deskStyle: apagDeskWidth,
        tabStyle: apagTabWidth,
        mobStyle: apagMobWidth
    } = generateRangeStyles({
        controlName: APAG_WIDTH,
        attributes,
        propertyName: 'width'
    });

    // Fraction pagination
    const {
        deskStyle: fracDeskSize,
        tabStyle: fracTabSize,
        mobStyle: fracMobSize
    } = generateRangeStyles({
        controlName: FRAC_SIZE,
        attributes,
        propertyName: 'font-size'
    });

    // Progress pagination
    const {
        deskStyle: progDeskSize,
        tabStyle: progTabSize,
        mobStyle: progMobSize
    } = generateRangeStyles({
        controlName: PROG_SIZE,
        attributes,
        propertyName: 'height'
    });

    /**
     * Block Styles
     */
    const deskStyles = `
		${
            slideDeskMargin
                ? `.${uniqueId}.wp-block-gutsliders-content-slider {
					${slideDeskMargin ? slideDeskMargin : ''}
				}`
                : ''
        }
		${
            slideDeskPadding
                ? `.${uniqueId}.wp-block-gutsliders-content-slider.${navContainerPosition}.${navPosition} {
                    ${slideDeskPadding ? slideDeskPadding : ''}
				}`
                : ''
        }
		${
            slideDeskHeight || contentDeskVPos
                ? `.${uniqueId} .gutslider-content-wrapper {
					${slideDeskHeight ? slideDeskHeight : ''}
					${contentDeskVPos ? contentDeskVPos : ''}
				}`
                : ''
        }
		${
            contentDeskWidth ||
            contentDeskAlign ||
            contentDeskHPos ||
            contentDeskPadding ||
            contentDeskMargin ||
            cBorderDeskStyle ||
            contentDeskBradius ||
            contentBgColor
                ? `.${uniqueId} .gutslider-content-inner {
					${contentDeskWidth ? contentDeskWidth : ''}
					${contentDeskAlign ? contentDeskAlign : ''}
                    ${contentDeskHPos ? contentDeskHPos : ''}
                    ${contentDeskPadding ? contentDeskPadding : ''}
                    ${contentDeskMargin ? contentDeskMargin : ''}
                    ${cBorderDeskStyle ? cBorderDeskStyle : ''}
                    ${contentDeskBradius ? contentDeskBradius : ''}
                    ${contentBgColor ? `background-color: ${contentBgColor};` : ''}
                    }
				}`
                : ''
        }
        ${
            imgPosition
                ? `.${uniqueId} .gutslider-content-position {
                    ${imgPosition === 'row' || imgPosition === 'row-reverse' ? 'margin-top:65px;' : ''}
                    ${imgPosition ? `flex-direction: ${imgPosition};` : ''}
                    
				}`
                : ''
        }
      
        ${
            photoDeskBorder || photoDeskBradius || photoDeskPadding || photoDeskMargin || photoDeskWidth || photoDeskHeight
                ? `.${uniqueId} .gutslider-content-image img {
            ${photoDeskWidth ? photoDeskWidth : ''}
            ${photoDeskHeight ? photoDeskHeight : ''}
            ${photoDeskBorder ? photoDeskBorder : ''}
            ${photoDeskBradius ? photoDeskBradius : ''}
            ${photoDeskPadding ? photoDeskPadding : ''}
            ${photoDeskMargin ? photoDeskMargin : ''}
        }`
                : ''
        }
		${
            subtitleColor || subtitleDeskSpacing || subtitleDeskTypo || subtitleDelay
                ? `.${uniqueId} .gutslider-content-wrapper .gutslider-subtitle { 
					${subtitleColor ? `color: ${subtitleColor};` : ''}
					${subtitleDeskSpacing ? subtitleDeskSpacing : ''}
					${subtitleDeskTypo ? subtitleDeskTypo : ''}
                    ${subtitleDelay ? `transition-delay: ${subtitleDelay}s !important;` : ''}
				}`
                : ''
        }
		${
            titleColor || titleDeskSpacing || titleDeskTypo || titleDelay
                ? `.${uniqueId} .gutslider-content-wrapper .gutslider-title { 
					${titleColor ? `color: ${titleColor};` : ''}
					${titleDeskSpacing ? titleDeskSpacing : ''}
					${titleDeskTypo ? titleDeskTypo : ''}
                    ${titleDelay ? `transition-delay: ${titleDelay}s !important;` : ''}
				}`
                : ''
        }
		${
            descriptionColor || descDeskSpacing || descDeskTypo || descDelay
                ? `.${uniqueId} .gutslider-content-wrapper .gutslider-description {
					${descriptionColor ? `color: ${descriptionColor};` : ''}
					${descDeskSpacing ? descDeskSpacing : ''}
					${descDeskTypo ? descDeskTypo : ''}
                    ${descDelay ? `transition-delay: ${descDelay}s !important;` : ''}
				}`
                : ''
        }
		
		${
            buttonDeskStyles ||
            btnDeskPadding ||
            btnDeskMargin ||
            btnColors.btnTextColor ||
            btnColors.btnBgColor ||
            borderDeskStyle ||
            btnDeskTypo ||
            btnDelay
                ? `.${uniqueId} .gutslider-cta { 
						${buttonDeskStyles ? buttonDeskStyles : ''}
						${btnDeskPadding ? btnDeskPadding : ''} 
						${btnDeskMargin ? btnDeskMargin : ''} 
						${btnColors.btnTextColor ? `color: ${btnColors.btnTextColor};` : ''}
						${btnColors.btnBgColor ? `background-color: ${btnColors.btnBgColor};` : ''}
						${borderDeskStyle ? borderDeskStyle : ''}
                        ${btnDeskTypo ? btnDeskTypo : ''}
                        ${btnDelay ? `transition-delay: ${btnDelay}s !important;` : ''}
					}`
                : ''
        }
        ${
            btnColors.btnHoverTextColor || btnColors.btnHoverBgColor || borderHoverColor
                ? ` 
				.${uniqueId} .gutslider-cta:hover {
					${btnColors.btnHoverTextColor ? `color: ${btnColors.btnHoverTextColor};` : ''}
					${btnColors.btnHoverBgColor ? `background-color: ${btnColors.btnHoverBgColor};` : ''}
					${borderHoverColor ? borderHoverColor : ''}
				}
			`
                : ''
        }

        	${
                buttonDeskSBtnStyles ||
                btnDeskSBtnPadding ||
                btnDeskSBtnMargin ||
                sbtnColors.btnTextColor ||
                sbtnColors.btnBgColor ||
                borderDeskSBtnStyle ||
                btnDeskSBtnTypo ||
                sbtnDelay
                    ? `.${uniqueId} .gutslider-cta-secondary { 
						${buttonDeskSBtnStyles ? buttonDeskSBtnStyles : ''}
						${btnDeskSBtnPadding ? btnDeskSBtnPadding : ''} 
						${btnDeskSBtnMargin ? btnDeskSBtnMargin : ''} 
						${sbtnColors.btnTextColor ? `color: ${sbtnColors.btnTextColor};` : ''}
						${sbtnColors.btnBgColor ? `background-color: ${sbtnColors.btnBgColor};` : ''}
						${borderDeskSBtnStyle ? borderDeskSBtnStyle : ''}
                        ${btnDeskSBtnTypo ? btnDeskSBtnTypo : ''}
                        ${sbtnDelay ? `transition-delay: ${sbtnDelay}s !important;` : ''}
					}`
                    : ''
            }

            ${
                sbtnColors.btnHoverTextColor || sbtnColors.btnHoverBgColor || borderSBtnHoverColor
                    ? ` 
				.${uniqueId} .gutslider-cta-secondary:hover {
					${sbtnColors.btnHoverTextColor ? `color: ${sbtnColors.btnHoverTextColor};` : ''}
					${sbtnColors.btnHoverBgColor ? `background-color: ${sbtnColors.btnHoverBgColor};` : ''}
					${borderSBtnHoverColor ? borderSBtnHoverColor : ''}
				}
			`
                    : ''
            }
		
        ${
            showNavigation && (navDeskMargin || navDeskGap)
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .gutslider-nav{
                ${navDeskMargin ? navDeskMargin : ''}
                ${navDeskGap ? navDeskGap : ''}
            }`
                : ''
        }
        ${
            showNavigation && (navColor || navBgColor || navBorderDeskStyle || navBradiusDeskStyles || navDeskHeight || navDeskWidth)
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-button-prev, .${uniqueId}.wp-block-gutsliders-content-slider .gutslider-prev, .${uniqueId}.wp-block-gutsliders-content-slider .swiper-button-next, .${uniqueId}.wp-block-gutsliders-content-slider .gutslider-next {
                    ${navColor ? `color: ${navColor};` : ''}
                    ${navColor ? `fill: ${navColor};` : ''}
                    ${navBgColor ? `background-color: ${navBgColor};` : ''}
                    ${navBorderDeskStyle ? navBorderDeskStyle : ''}
                    ${navBradiusDeskStyles ? navBradiusDeskStyles : ''}
                    ${navDeskHeight ? navDeskHeight : ''}
                    ${navDeskWidth ? navDeskWidth : ''}

				}`
                : ''
        }
		${
            showNavigation && (navHoverColor || navHoverBgColor || navBorderHoverColor)
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-button-prev:hover, .${uniqueId}.wp-block-gutsliders-content-slider .gutslider-prev:hover, .${uniqueId}.wp-block-gutsliders-content-slider .swiper-button-next:hover, .${uniqueId}.wp-block-gutsliders-content-slider .gutslider-next:hover {
                    ${navHoverColor ? `color: ${navHoverColor};` : ''}
                    ${navHoverColor ? `fill: ${navHoverColor};` : ''}
                    ${navHoverBgColor ? `background-color: ${navHoverBgColor};` : ''}
                    ${navBorderHoverColor ? navBorderHoverColor : ''}
				}`
                : ''
        }
        ${
            showNavigation && navIconDeskSize
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-button-prev::after, .${uniqueId}.wp-block-gutsliders-content-slider .gutslider-prev svg, .${uniqueId}.wp-block-gutsliders-content-slider .swiper-button-next::after, .${uniqueId}.wp-block-gutsliders-content-slider .gutslider-next svg {
                    ${navIconDeskSize ? navIconDeskSize : ''}
                }`
                : ''
        }
        ${
            showNavigation && navCustomIconDeskSize && navCustomIconDeskHSize
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .gutslider-prev svg, .${uniqueId}.wp-block-gutsliders-content-slider .gutslider-next svg {
                    ${navCustomIconDeskSize ? navCustomIconDeskSize : ''}
                    ${navCustomIconDeskHSize ? navCustomIconDeskHSize : ''}
                }`
                : ''
        }
        ${
            showPagination && pagDeskMargin
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination {
                ${pagDeskMargin ? pagDeskMargin : ''}
            }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (pagBorderDeskStyle || pagBradiusDeskStyles || pagDeskHeight || pagDeskWidth || pagColor)
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-bullet {
                    ${pagBorderDeskStyle ? pagBorderDeskStyle : ''}
                    ${pagBradiusDeskStyles ? pagBradiusDeskStyles : ''}
                    ${pagDeskHeight ? pagDeskHeight : ''}
                    ${pagDeskWidth ? pagDeskWidth : ''}
                    ${pagColor ? `background-color: ${pagColor};` : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'bullets' && pagBorderHoverColor
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-bullet:hover {
                    ${pagBorderHoverColor ? pagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (apagBorderDeskStyle || apagBradiusDeskStyles || apagDeskHeight || apagDeskWidth || activePagColor)
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-bullet-active {
                    ${apagBorderDeskStyle ? apagBorderDeskStyle : ''}
                    ${apagBradiusDeskStyles ? apagBradiusDeskStyles : ''}
                    ${apagDeskHeight ? apagDeskHeight : ''}
                    ${apagDeskWidth ? apagDeskWidth : ''}
                    ${activePagColor ? `background-color: ${activePagColor};` : ''}
            }`
                : ''
        }
        ${
            showPagination && paginationType === 'bullets' && apagBorderHoverColor
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-bullet-active:hover {
                    ${apagBorderHoverColor ? apagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && (fracDividerColor || fracDeskSize)
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-fraction {
                    ${fracDividerColor ? `color: ${fracDividerColor};` : ''}
                    ${fracDeskSize ? fracDeskSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && pagFracColor
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-total {
                    ${pagFracColor ? `color: ${pagFracColor};` : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && pagFracCurrentColor
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-current {
                    ${pagFracCurrentColor ? `color: ${pagFracCurrentColor};` : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && (progressColor || progDeskSize)
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-progressbar {
                    ${progressColor ? `background: ${progressColor};` : ''}
                    ${progDeskSize ? progDeskSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && activeProgressColor
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
                    ${activeProgressColor ? `background: ${activeProgressColor};` : ''}
                }`
                : ''
        }
	`;
    const tabStyles = `
		${
            slideTabMargin
                ? `.${uniqueId}.wp-block-gutsliders-content-slider {
					${slideTabMargin ? slideTabMargin : ''}
				}`
                : ''
        }
        ${
            slideTabPadding
                ? `.${uniqueId}.wp-block-gutsliders-content-slider.${navContainerPosition}.${navPosition} {
                    ${slideTabPadding ? slideTabPadding : ''}
				}`
                : ''
        }
		${
            slideTabHeight || contentTabVPos
                ? `.${uniqueId} .gutslider-content-wrapper {
					${slideTabHeight ? slideTabHeight : ''}
					${contentTabVPos ? contentTabVPos : ''}
				}`
                : ''
        }
		${
            contentTabWidth ||
            contentTabAlign ||
            contentTabHPos ||
            contentTabPadding ||
            contentTabMargin ||
            cBorderTabStyle ||
            contentTabBradius
                ? `.${uniqueId} .gutslider-content-inner {
					${contentTabWidth ? contentTabWidth : ''}
					${contentTabAlign ? contentTabAlign : ''}
                    ${contentTabHPos ? contentTabHPos : ''}
                    ${contentTabPadding ? contentTabPadding : ''}
                    ${contentTabMargin ? contentTabMargin : ''}
                    ${cBorderTabStyle ? cBorderTabStyle : ''}
                    ${contentTabBradius ? contentTabBradius : ''}
				}`
                : ''
        }
		${
            photoTabBorder || photoTabBradius || photoTabPadding || photoTabMargin || photoTabWidth || photoTabHeight
                ? `.${uniqueId} .gutslider-content-image img {
           ${photoTabWidth ? photoTabWidth : ''}
            ${photoTabHeight ? photoTabHeight : ''}
            ${photoTabBorder ? photoTabBorder : ''}
            ${photoTabBradius ? photoTabBradius : ''}
            ${photoTabPadding ? photoTabPadding : ''}
            ${photoTabMargin ? photoTabMargin : ''}
        }`
                : ''
        }
        
        ${
            subtitleTabSpacing || subtitleTabTypo
                ? `.${uniqueId} .gutslider-content-wrapper .gutslider-subtitle { 
					${subtitleTabSpacing ? subtitleTabSpacing : ''}
					${subtitleTabTypo ? subtitleTabTypo : ''}
				}`
                : ''
        }
		${
            titleTabSpacing || titleTabTypo
                ? `.${uniqueId} .gutslider-content-wrapper .gutslider-title { 
				${titleTabSpacing ? titleTabSpacing : ''}
				${titleTabTypo ? titleTabTypo : ''}
			}`
                : ''
        }
		${
            descTabSpacing || descTabTypo
                ? `.${uniqueId} .gutslider-content-wrapper .gutslider-description {
					${descTabSpacing ? descTabSpacing : ''}
					${descTabTypo ? descTabTypo : ''}
				}`
                : ''
        }
		${
            buttonTabStyles || btnTabPadding || btnTabMargin || borderTabStyle || btnTabTypo
                ? `.${uniqueId} .gutslider-cta { 
					${buttonTabStyles ? buttonTabStyles : ''} 
					${btnTabPadding ? btnTabPadding : ''} 
					${btnTabMargin ? btnTabMargin : ''}
					${borderTabStyle ? borderTabStyle : ''}
                    ${btnTabTypo ? btnTabTypo : ''}
				}`
                : ''
        }
	    ${
            buttonTabSBtnStyles || btnTabSBtnPadding || btnTabSBtnMargin || borderTabSBtnStyle || btnTabSBtnTypo
                ? `.${uniqueId} .gutslider-cta-secondary { 
					${buttonTabSBtnStyles ? buttonTabSBtnStyles : ''} 
					${btnTabSBtnPadding ? btnTabSBtnPadding : ''} 
					${btnTabSBtnMargin ? btnTabSBtnMargin : ''}
					${borderTabSBtnStyle ? borderTabSBtnStyle : ''}
                    ${btnTabSBtnTypo ? btnTabSBtnTypo : ''}
				}`
                : ''
        }
        	
        ${
            showNavigation && (navTabMargin || navTabGap)
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .gutslider-nav{
                ${navTabMargin ? navTabMargin : ''}
                ${navTabGap ? navTabGap : ''}
            }`
                : ''
        }
        ${
            showNavigation && (navBorderTabStyle || navBradiusTabStyles || navTabHeight || navTabWidth)
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-button-prev, .${uniqueId}.wp-block-gutsliders-content-slider .gutslider-prev, .${uniqueId}.wp-block-gutsliders-content-slider .swiper-button-next, .${uniqueId}.wp-block-gutsliders-content-slider .gutslider-next {
                    ${navBorderTabStyle ? navBorderTabStyle : ''}
                    ${navBradiusTabStyles ? navBradiusTabStyles : ''}
                    ${navTabHeight ? navTabHeight : ''}
                    ${navTabWidth ? navTabWidth : ''}

				}`
                : ''
        }
        ${
            showNavigation && navIconTabSize
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-button-prev::after, .${uniqueId}.wp-block-gutsliders-content-slider .swiper-button-next::after {
                    ${navIconTabSize ? navIconTabSize : ''}
                }`
                : ''
        }
        ${
            showPagination && pagTabMargin
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination {
                ${pagTabMargin ? pagTabMargin : ''}
            }`
                : ''
        }
        ${
            showNavigation && navCustomIconTabSize && navCustomIconTabHSize
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .gutslider-prev svg, .${uniqueId}.wp-block-gutsliders-content-slider .gutslider-next svg {
                    ${navCustomIconTabSize ? navCustomIconTabSize : ''}
                    ${navCustomIconTabHSize ? navCustomIconTabHSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'bullets' && (pagBorderTabStyle || pagBradiusTabStyles || pagTabHeight || pagTabWidth)
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-bullet {
                    ${pagBorderTabStyle ? pagBorderTabStyle : ''}
                    ${pagBradiusTabStyles ? pagBradiusTabStyles : ''}
                    ${pagTabHeight ? pagTabHeight : ''}
                    ${pagTabWidth ? pagTabWidth : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'bullets' && (apagBorderTabStyle || apagBradiusTabStyles || apagTabHeight || apagTabWidth)
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-bullet-active {
                    ${apagBorderTabStyle ? apagBorderTabStyle : ''}
                    ${apagBradiusTabStyles ? apagBradiusTabStyles : ''}
                    ${apagTabHeight ? apagTabHeight : ''}
                    ${apagTabWidth ? apagTabWidth : ''}
            }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && fracTabSize
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-fraction {
                    ${fracTabSize ? fracTabSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && progTabSize
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-progressbar {
                    ${progTabSize ? progTabSize : ''}
                }`
                : ''
        }
	`;
    const mobStyles = `
		${
            slideMobMargin
                ? `.${uniqueId}.wp-block-gutsliders-content-slider {
					${slideMobMargin ? slideMobMargin : ''}
				}`
                : ''
        }
        ${
            slideMobPadding
                ? `.${uniqueId}.wp-block-gutsliders-content-slider.${navContainerPosition}.${navPosition} {
                    ${slideMobPadding ? slideMobPadding : ''}
				}`
                : ''
        }
		${
            slideMobHeight || contentMobVPos
                ? `.${uniqueId} .gutslider-content-wrapper {
					${slideMobHeight ? slideMobHeight : ''}
					${contentMobVPos ? contentMobVPos : ''}
				}`
                : ''
        }
		${
            contentMobWidth ||
            contentMobAlign ||
            contentMobHPos ||
            contentMobPadding ||
            contentMobMargin ||
            cBorderMobStyle ||
            contentMobBradius
                ? `.${uniqueId} .gutslider-content-inner {
					${contentMobWidth ? contentMobWidth : ''}
					${contentMobAlign ? contentMobAlign : ''}
                    ${contentMobHPos ? contentMobHPos : ''}
                    ${contentMobPadding ? contentMobPadding : ''}
                    ${contentMobMargin ? contentMobMargin : ''}
                    ${cBorderMobStyle ? cBorderMobStyle : ''}
                    ${contentMobBradius ? contentMobBradius : ''}
				}`
                : ''
        }
		
        	${
                photoMobBorder || photoMobBradius || photoMobPadding || photoMobMargin || photoMobWidth || photoMobHeight
                    ? `.${uniqueId} .gutslider-content-image img  {
            ${photoMobWidth ? photoMobWidth : ''}
            ${photoMobHeight ? photoMobHeight : ''}
            ${photoMobBorder ? photoMobBorder : ''}
            ${photoMobBradius ? photoMobBradius : ''}
            ${photoMobPadding ? photoMobPadding : ''}
            ${photoMobMargin ? photoMobMargin : ''}
        }`
                    : ''
            }
        ${
            subtitleMobSpacing || subtitleMobTypo
                ? `.${uniqueId} .gutslider-content-wrapper .gutslider-subtitle { 
					${subtitleMobSpacing ? subtitleMobSpacing : ''}
					${subtitleMobTypo ? subtitleMobTypo : ''}
				}`
                : ''
        }
		${
            titleMobSpacing || titleMobTypo
                ? `.${uniqueId} .gutslider-content-wrapper .gutslider-title { 
				${titleMobSpacing ? titleMobSpacing : ''}
				${titleMobTypo ? titleMobTypo : ''}
			}`
                : ''
        }
		${
            descMobSpacing || descMobTypo
                ? `.${uniqueId} .gutslider-content-wrapper .gutslider-description {
					${descMobSpacing ? descMobSpacing : ''}
					${descMobTypo ? descMobTypo : ''}
				}`
                : ''
        }
		${
            buttonMobStyles || btnMobPadding || btnMobMargin || borderMobStyle || btnMobTypo
                ? `.${uniqueId} .gutslider-cta { 
					${buttonMobStyles ? buttonMobStyles : ''} 
					${btnMobPadding ? btnMobPadding : ''} 
					${btnMobMargin ? btnMobMargin : ''} 
					${borderMobStyle ? borderMobStyle : ''}
                    ${btnMobTypo ? btnMobTypo : ''}
				}`
                : ''
        }
        ${
            buttonMobSBtnStyles || btnMobSBtnPadding || btnMobSBtnMargin || borderMobSBtnStyle || btnMobSBtnTypo
                ? `.${uniqueId} .gutslider-cta-secondary { 
					${buttonMobSBtnStyles ? buttonMobSBtnStyles : ''} 
					${btnMobSBtnPadding ? btnMobSBtnPadding : ''} 
					${btnMobSBtnMargin ? btnMobSBtnMargin : ''} 
					${borderMobSBtnStyle ? borderMobSBtnStyle : ''}
                    ${btnMobSBtnTypo ? btnMobSBtnTypo : ''}
				}`
                : ''
        }
        ${
            showNavigation && (navMobMargin || navMobGap)
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .gutslider-nav{
                ${navMobMargin ? navMobMargin : ''}
                ${navMobGap ? navMobGap : ''}
            }`
                : ''
        }
        ${
            showNavigation && (navBorderMobStyle || navBradiusMobStyles || navMobHeight || navMobWidth)
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-button-prev, .${uniqueId}.wp-block-gutsliders-content-slider .gutslider-prev, .${uniqueId}.wp-block-gutsliders-content-slider .swiper-button-next, .${uniqueId}.wp-block-gutsliders-content-slider .gutslider-next {
                    ${navBorderMobStyle ? navBorderMobStyle : ''}
                    ${navBradiusMobStyles ? navBradiusMobStyles : ''}
                    ${navMobHeight ? navMobHeight : ''}
                    ${navMobWidth ? navMobWidth : ''}

				}`
                : ''
        }
        ${
            showNavigation && navIconMobSize
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-button-prev::after, .${uniqueId}.wp-block-gutsliders-content-slider .swiper-button-next::after {
                    ${navIconMobSize ? navIconMobSize : ''}
                }`
                : ''
        }
        ${
            showNavigation && navCustomIconMobSize && navCustomIconMobHSize
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .gutslider-prev svg, .${uniqueId}.wp-block-gutsliders-content-slider .gutslider-next svg {
                    ${navCustomIconMobSize ? navCustomIconMobSize : ''}
                    ${navCustomIconMobHSize ? navCustomIconMobHSize : ''}
                }`
                : ''
        }
        ${
            showPagination && pagMobMargin
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination {
                ${pagMobMargin ? pagMobMargin : ''}
            }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (pagBorderMobStyle || pagBradiusMobStyles || pagMobHeight || pagMobWidth || pagColor)
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-bullet {
                    ${pagBorderMobStyle ? pagBorderMobStyle : ''}
                    ${pagBradiusMobStyles ? pagBradiusMobStyles : ''}
                    ${pagMobHeight ? pagMobHeight : ''}
                    ${pagMobWidth ? pagMobWidth : ''}
                    ${pagColor ? `background-color: ${pagColor};` : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'bullets' && pagBorderHoverColor
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-bullet:hover {
                    ${pagBorderHoverColor ? pagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (apagBorderMobStyle || apagBradiusMobStyles || apagMobHeight || apagMobWidth || activePagColor)
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-bullet-active {
                    ${apagBorderMobStyle ? apagBorderMobStyle : ''}
                    ${apagBradiusMobStyles ? apagBradiusMobStyles : ''}
                    ${apagMobHeight ? apagMobHeight : ''}
                    ${apagMobWidth ? apagMobWidth : ''}
                    ${activePagColor ? `background-color: ${activePagColor};` : ''}
            }`
                : ''
        }
        ${
            showPagination && paginationType === 'bullets' && apagBorderHoverColor
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-bullet-active:hover {
                    ${apagBorderHoverColor ? apagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && (fracMobSize || fracDividerColor)
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-fraction {
                    ${fracDividerColor ? `color: ${fracDividerColor};` : ''}
                    ${fracMobSize ? fracMobSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && progMobSize
                ? `.${uniqueId}.wp-block-gutsliders-content-slider .swiper-pagination-progressbar {
                    ${progMobSize ? progMobSize : ''}
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
