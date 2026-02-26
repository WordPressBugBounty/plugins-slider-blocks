/**
 * WordPress dependencies
 */
import { useEffect } from '@wordpress/element';

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
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
    BTN_BORDER,
    BTN_RADIUS,
    BTN_MARGIN,
    BTN_PADDING,
    BTN_TYPO,
    TITLE_SPACING,
    TITLE_TYPO,
    CAT_SPACING,
    CAT_TYPO,
    EXPT_SPACING,
    EXPT_TYPO,
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
    PROG_SIZE,
    FI_HEIGHT
} = Constants;
const { softMinifyCssStrings } = window.gutSliderModules.Helper;
const Style = ({ attributes, setAttributes }) => {
    const {
        uniqueId,
        blockStyle,
        catColor,
        titleColor,
        excerptColor,
        btnColors,
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
        bgType,
        bgColor,
        bgGradient,
        bgImage,
        enableOverlay,
        overlayType,
        overlayColor,
        overlayGradient,
        overlayOpacity,
        // animation delay
        titleDelay,
        catDelay,
        exptDelay,
        btnDelay
    } = attributes;

    // featured image
    //detached-featured-image
    const {
        deskStyle: fiDeskHeight,
        tabStyle: fiTabHeight,
        mobStyle: fiMobHeight
    } = generateRangeStyles({
        controlName: FI_HEIGHT,
        attributes,
        propertyName: 'height'
    });

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
        deskAlign: contentDeskHPos,
        tabAlign: contentTabHPos,
        mobAlign: contentMobHPos
    } = generateResBtnsStyles({
        controlName: CONTENT_HALIGN,
        attributes,
        noProperty: true
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
        deskAlign: contentDeskAlign,
        tabAlign: contentTabAlign,
        mobAlign: contentMobAlign
    } = generateAlignmentStyles({
        controlName: CONTENT_ALIGN,
        attributes,
        propertyName: 'text-align'
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

    // cat
    const {
        boxDeskStyles: catDeskSpacing,
        boxTabStyles: catTabSpacing,
        boxMobStyles: catMobSpacing
    } = generateResBoxStyles({
        controlName: CAT_SPACING,
        attributes,
        propertyName: 'margin'
    });

    const {
        desktopStyles: catDeskTypo,
        tabletStyles: catTabTypo,
        mobileStyles: catMobTypo
    } = generateTypographyStyles({
        controlName: CAT_TYPO,
        attributes
    });

    // excerpt
    const {
        boxDeskStyles: exptDeskSpacing,
        boxTabStyles: exptTabSpacing,
        boxMobStyles: exptMobSpacing
    } = generateResBoxStyles({
        controlName: EXPT_SPACING,
        attributes,
        propertyName: 'margin'
    });

    const {
        desktopStyles: exptDeskTypo,
        tabletStyles: exptTabTypo,
        mobileStyles: exptMobTypo
    } = generateTypographyStyles({
        controlName: EXPT_TYPO,
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
                ? `.${uniqueId}.wp-block-gutsliders-post-slider {
					${slideDeskMargin ? slideDeskMargin : ''}
				}`
                : ''
        }
		${
            slideDeskPadding
                ? `.${uniqueId}.wp-block-gutsliders-post-slider.${navContainerPosition}.${navPosition} {
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
        ${fiDeskHeight ? `.${uniqueId}.wp-block-gutsliders-post-slider .detached-featured-image { ${fiDeskHeight}; }` : ''}
		${
            contentDeskWidth || contentDeskAlign || contentDeskHPos || contentDeskPadding
                ? `.${uniqueId} .gutslider-content-inner {
					${contentDeskWidth ? contentDeskWidth : ''}
					${contentDeskAlign ? contentDeskAlign : ''}
                    ${contentDeskHPos ? contentDeskHPos : ''}
                    ${contentDeskPadding ? contentDeskPadding : ''}
				}`
                : ''
        }
        ${
            bgImage || bgColor || bgGradient
                ? `.${uniqueId} .swiper-container-outer { 
                    ${bgType === 'classic' && bgImage && bgImage.url !== '' ? `background-image: url(${bgImage.url});` : ''} 
                    ${bgType === 'classic' ? `background-color: ${bgColor};` : ''} 
                    ${bgType === 'gradient' ? `background-image: ${bgGradient};` : ''} }`
                : ''
        }
        ${
            enableOverlay
                ? `.${uniqueId} .gutslider-overlay {
                ${overlayType === 'classic' ? `background-color: ${overlayColor};` : ''}
                ${overlayType === 'gradient' ? `background-image: ${overlayGradient};` : ''}
                ${overlayOpacity ? `opacity: ${overlayOpacity};` : ''}
            }`
                : ''
        }
		${
            catDeskSpacing || catDelay
                ? `.${uniqueId} .gutslider-content-wrapper .post-categories {
					${catDeskSpacing ? catDeskSpacing : ''}
                    ${catDelay ? `transition-delay: ${catDelay}s !important;` : ''}
				}`
                : ''
        }
		${
            catColor || catDeskTypo
                ? `.${uniqueId} .gutslider-content-wrapper .post-category { 
					${catColor ? `color: ${catColor};` : ''}
					${catDeskTypo ? catDeskTypo : ''}
				}`
                : ''
        }
		${
            titleColor || titleDeskSpacing || titleDeskTypo || titleDelay
                ? `.${uniqueId} .gutslider-content-wrapper .post-title { 
					${titleColor ? `color: ${titleColor};` : ''}
					${titleDeskSpacing ? titleDeskSpacing : ''}
					${titleDeskTypo ? titleDeskTypo : ''}
                    ${titleDelay ? `transition-delay: ${titleDelay}s !important;` : ''}
				}`
                : ''
        }
		${
            excerptColor || exptDeskSpacing || exptDeskTypo || exptDelay
                ? `.${uniqueId} .gutslider-content-wrapper .post-excerpt {
					${excerptColor ? `color: ${excerptColor};` : ''}
					${exptDeskSpacing ? exptDeskSpacing : ''}
					${exptDeskTypo ? exptDeskTypo : ''}
                    ${exptDelay ? `transition-delay: ${exptDelay}s !important;` : ''}
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
                ? `.${uniqueId} .post-cta { 
						${buttonDeskStyles ? buttonDeskStyles : ''}
						${btnDeskPadding ? btnDeskPadding : ''} 
						${btnDeskMargin ? btnDeskMargin : ''} 
						${btnColors.btnTextColor ? `color: ${btnColors.btnTextColor} !important;` : ''}
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
				.${uniqueId} .post-cta:hover {
					${btnColors.btnHoverTextColor ? `color: ${btnColors.btnHoverTextColor} !important;` : ''}
					${btnColors.btnHoverBgColor ? `background-color: ${btnColors.btnHoverBgColor};` : ''}
					${borderHoverColor ? borderHoverColor : ''}
				}
			`
                : ''
        }
        ${
            showNavigation && (navDeskMargin || navDeskGap)
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .gutslider-nav{
                    ${navDeskMargin ? navDeskMargin : ''}
                    ${navDeskGap ? navDeskGap : ''}
            }`
                : ''
        }
        ${
            showNavigation && (navColor || navBgColor || navBorderDeskStyle || navBradiusDeskStyles || navDeskHeight || navDeskWidth)
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-button-prev, .${uniqueId}.wp-block-gutsliders-post-slider .gutslider-prev, .${uniqueId}.wp-block-gutsliders-post-slider .swiper-button-next, .${uniqueId}.wp-block-gutsliders-post-slider .gutslider-next {
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
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-button-prev:hover, .${uniqueId}.wp-block-gutsliders-post-slider .gutslider-prev:hover, .${uniqueId}.wp-block-gutsliders-post-slider .swiper-button-next:hover, .${uniqueId}.wp-block-gutsliders-post-slider .gutslider-next:hover {
                    ${navHoverColor ? `color: ${navHoverColor};` : ''}
                    ${navHoverColor ? `fill: ${navHoverColor};` : ''}
                    ${navHoverBgColor ? `background-color: ${navHoverBgColor};` : ''}
                    ${navBorderHoverColor ? navBorderHoverColor : ''}
				}`
                : ''
        }
        ${
            showNavigation && navIconDeskSize
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-button-prev::after, .${uniqueId}.wp-block-gutsliders-post-slider .gutslider-prev svg, .${uniqueId}.wp-block-gutsliders-post-slider .swiper-button-next::after, .${uniqueId}.wp-block-gutsliders-post-slider .gutslider-next svg {
                    ${navIconDeskSize ? navIconDeskSize : ''}
                }`
                : ''
        }
        ${
            showNavigation && navCustomIconDeskSize && navCustomIconDeskHSize
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .gutslider-prev svg, .${uniqueId}.wp-block-gutsliders-post-slider .gutslider-next svg {
                    ${navCustomIconDeskSize ? navCustomIconDeskSize : ''}
                    ${navCustomIconDeskHSize ? navCustomIconDeskHSize : ''}
                }`
                : ''
        }
        ${
            showPagination && pagDeskMargin
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination{
            ${pagDeskMargin ? pagDeskMargin : ''}
            }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (pagBorderDeskStyle || pagBradiusDeskStyles || pagDeskHeight || pagDeskWidth || pagColor)
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-bullet {
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
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-bullet:hover {
                    ${pagBorderHoverColor ? pagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (apagBorderDeskStyle || apagBradiusDeskStyles || apagDeskHeight || apagDeskWidth || activePagColor)
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-bullet-active {
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
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-bullet-active:hover {
                    ${apagBorderHoverColor ? apagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && (fracDividerColor || fracDeskSize)
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-fraction {
                    ${fracDividerColor ? `color: ${fracDividerColor};` : ''}
                    ${fracDeskSize ? fracDeskSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && pagFracColor
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-total {
                    ${pagFracColor ? `color: ${pagFracColor};` : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && pagFracCurrentColor
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-current {
                    ${pagFracCurrentColor ? `color: ${pagFracCurrentColor};` : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && (progressColor || progDeskSize)
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-progressbar {
                    ${progressColor ? `background: ${progressColor};` : ''}
                    ${progDeskSize ? progDeskSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && activeProgressColor
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
                    ${activeProgressColor ? `background: ${activeProgressColor};` : ''}
                }`
                : ''
        }
	`;
    const tabStyles = `
		${
            slideTabMargin
                ? `.${uniqueId}.wp-block-gutsliders-post-slider {
					${slideTabMargin ? slideTabMargin : ''}
				}`
                : ''
        }
        ${
            slideTabPadding
                ? `.${uniqueId}.wp-block-gutsliders-post-slider.${navContainerPosition}.${navPosition} {
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
        ${fiTabHeight ? `.${uniqueId}.wp-block-gutsliders-post-slider .detached-featured-image { ${fiTabHeight}; }` : ''}
		${
            contentTabWidth || contentTabAlign || contentTabHPos || contentTabPadding
                ? `.${uniqueId} .gutslider-content-inner {
					${contentTabWidth ? contentTabWidth : ''}
					${contentTabAlign ? contentTabAlign : ''}
                    ${contentTabHPos ? contentTabHPos : ''}
                    ${contentTabPadding ? contentTabPadding : ''}
				}`
                : ''
        }
		${
            catTabSpacing
                ? `.${uniqueId} .gutslider-content-wrapper .post-categories { 
					${catTabSpacing ? catTabSpacing : ''}
				}`
                : ''
        }
		${
            catTabTypo
                ? `.${uniqueId} .gutslider-content-wrapper .post-category { 
					${catTabTypo ? catTabTypo : ''}
				}`
                : ''
        }
		${
            titleTabSpacing || titleTabTypo
                ? `.${uniqueId} .gutslider-content-wrapper .post-title { 
				${titleTabSpacing ? titleTabSpacing : ''}
				${titleTabTypo ? titleTabTypo : ''}
			}`
                : ''
        }
		${
            exptTabSpacing || exptTabTypo
                ? `.${uniqueId} .gutslider-content-wrapper .post-excerpt {
					${exptTabSpacing ? exptTabSpacing : ''}
					${exptTabTypo ? exptTabTypo : ''}
				}`
                : ''
        }
		${
            buttonTabStyles || btnTabPadding || btnTabMargin || borderTabStyle || btnTabTypo
                ? `.${uniqueId} .post-cta { 
					${buttonTabStyles ? buttonTabStyles : ''} 
					${btnTabPadding ? btnTabPadding : ''} 
					${btnTabMargin ? btnTabMargin : ''}
					${borderTabStyle ? borderTabStyle : ''}
                    ${btnTabTypo ? btnTabTypo : ''}
				}`
                : ''
        }
        ${
            showNavigation && (navTabMargin || navTabGap)
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .gutslider-nav{
            ${navTabMargin ? navTabMargin : ''}
            ${navTabGap ? navTabGap : ''}
            }`
                : ''
        }
        ${
            showNavigation && (navBorderTabStyle || navBradiusTabStyles || navTabHeight || navTabWidth)
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-button-prev, .${uniqueId}.wp-block-gutsliders-post-slider .gutslider-prev, .${uniqueId}.wp-block-gutsliders-post-slider .swiper-button-next, .${uniqueId}.wp-block-gutsliders-post-slider .gutslider-next {
                    ${navBorderTabStyle ? navBorderTabStyle : ''}
                    ${navBradiusTabStyles ? navBradiusTabStyles : ''}
                    ${navTabHeight ? navTabHeight : ''}
                    ${navTabWidth ? navTabWidth : ''}

				}`
                : ''
        }
        ${
            showNavigation && navIconTabSize
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-button-prev::after, .${uniqueId}.wp-block-gutsliders-post-slider .swiper-button-next::after {
                    ${navIconTabSize ? navIconTabSize : ''}
                }`
                : ''
        }
        ${
            showNavigation && navCustomIconTabSize && navCustomIconTabHSize
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .gutslider-prev svg, .${uniqueId}.wp-block-gutsliders-post-slider .gutslider-next svg {
                    ${navCustomIconTabSize ? navCustomIconTabSize : ''}
                    ${navCustomIconTabHSize ? navCustomIconTabHSize : ''}
                }`
                : ''
        }
        ${
            showPagination && pagTabMargin
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination{
            ${pagTabMargin ? pagTabMargin : ''}
            }`
                : ''
        }
        ${
            showPagination && paginationType === 'bullets' && (pagBorderTabStyle || pagBradiusTabStyles || pagTabHeight || pagTabWidth)
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-bullet {
                    ${pagBorderTabStyle ? pagBorderTabStyle : ''}
                    ${pagBradiusTabStyles ? pagBradiusTabStyles : ''}
                    ${pagTabHeight ? pagTabHeight : ''}
                    ${pagTabWidth ? pagTabWidth : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'bullets' && (apagBorderTabStyle || apagBradiusTabStyles || apagTabHeight || apagTabWidth)
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-bullet-active {
                    ${apagBorderTabStyle ? apagBorderTabStyle : ''}
                    ${apagBradiusTabStyles ? apagBradiusTabStyles : ''}
                    ${apagTabHeight ? apagTabHeight : ''}
                    ${apagTabWidth ? apagTabWidth : ''}
            }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && fracTabSize
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-fraction {
                    ${fracTabSize ? fracTabSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && progTabSize
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-progressbar {
                    ${progTabSize ? progTabSize : ''}
                }`
                : ''
        }
	`;
    const mobStyles = `
		${
            slideMobMargin
                ? `.${uniqueId}.wp-block-gutsliders-post-slider {
					${slideMobMargin ? slideMobMargin : ''}
				}`
                : ''
        }
        ${
            slideMobPadding
                ? `.${uniqueId}.wp-block-gutsliders-post-slider.${navContainerPosition}.${navPosition} {
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
        ${fiMobHeight ? `.${uniqueId}.wp-block-gutsliders-post-slider .detached-featured-image { ${fiMobHeight}; }` : ''}
		${
            contentMobWidth || contentMobAlign || contentMobHPos || contentMobPadding
                ? `.${uniqueId} .gutslider-content-inner {
					${contentMobWidth ? contentMobWidth : ''}
					${contentMobAlign ? contentMobAlign : ''}
                    ${contentMobHPos ? contentMobHPos : ''}
                    ${contentMobPadding ? contentMobPadding : ''}
				}`
                : ''
        }
		${
            catMobSpacing
                ? `.${uniqueId} .gutslider-content-wrapper .post-categories { 
					${catMobSpacing ? catMobSpacing : ''}
				}`
                : ''
        }
		${
            catMobTypo
                ? `.${uniqueId} .gutslider-content-wrapper .post-category { 
					${catMobTypo ? catMobTypo : ''}
				}`
                : ''
        }
		${
            titleMobSpacing || titleMobTypo
                ? `.${uniqueId} .gutslider-content-wrapper .post-title { 
				${titleMobSpacing ? titleMobSpacing : ''}
				${titleMobTypo ? titleMobTypo : ''}
			}`
                : ''
        }
		${
            exptMobSpacing || exptMobTypo
                ? `.${uniqueId} .gutslider-content-wrapper .post-excerpt {
					${exptMobSpacing ? exptMobSpacing : ''}
					${exptMobTypo ? exptMobTypo : ''}
				}`
                : ''
        }
		${
            buttonMobStyles || btnMobPadding || btnMobMargin || borderMobStyle || btnMobTypo
                ? `.${uniqueId} .post-cta { 
					${buttonMobStyles ? buttonMobStyles : ''} 
					${btnMobPadding ? btnMobPadding : ''} 
					${btnMobMargin ? btnMobMargin : ''} 
					${borderMobStyle ? borderMobStyle : ''}
                    ${btnMobTypo ? btnMobTypo : ''}
				}`
                : ''
        }
        ${
            showNavigation && (navMobMargin || navMobGap)
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .gutslider-nav{
                    ${navMobMargin ? navMobMargin : ''}
                    ${navMobGap ? navMobGap : ''}
            }`
                : ''
        }
        ${
            showNavigation && (navBorderMobStyle || navBradiusMobStyles || navMobHeight || navMobWidth)
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-button-prev, .${uniqueId}.wp-block-gutsliders-post-slider .gutslider-prev, .${uniqueId}.wp-block-gutsliders-post-slider .swiper-button-next, .${uniqueId}.wp-block-gutsliders-post-slider .gutslider-next {
                    ${navBorderMobStyle ? navBorderMobStyle : ''}
                    ${navBradiusMobStyles ? navBradiusMobStyles : ''}
                    ${navMobHeight ? navMobHeight : ''}
                    ${navMobWidth ? navMobWidth : ''}

				}`
                : ''
        }
        ${
            showNavigation && navIconMobSize
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-button-prev::after, .${uniqueId}.wp-block-gutsliders-post-slider .swiper-button-next::after {
                    ${navIconMobSize ? navIconMobSize : ''}
                }`
                : ''
        }
        ${
            showNavigation && navCustomIconMobSize && navCustomIconMobHSize
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .gutslider-prev svg, .${uniqueId}.wp-block-gutsliders-post-slider .gutslider-next svg {
                    ${navCustomIconMobSize ? navCustomIconMobSize : ''}
                    ${navCustomIconMobHSize ? navCustomIconMobHSize : ''}
                }`
                : ''
        }
        ${
            showPagination && pagMobMargin
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination{
            ${pagMobMargin ? pagMobMargin : ''}
            }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (pagBorderMobStyle || pagBradiusMobStyles || pagMobHeight || pagMobWidth || pagColor)
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-bullet {
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
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-bullet:hover {
                    ${pagBorderHoverColor ? pagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (apagBorderMobStyle || apagBradiusMobStyles || apagMobHeight || apagMobWidth || activePagColor)
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-bullet-active {
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
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-bullet-active:hover {
                    ${apagBorderHoverColor ? apagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && (fracMobSize || fracDividerColor)
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-fraction {
                    ${fracDividerColor ? `color: ${fracDividerColor};` : ''}
                    ${fracMobSize ? fracMobSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && progMobSize
                ? `.${uniqueId}.wp-block-gutsliders-post-slider .swiper-pagination-progressbar {
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
