/**
 * WordPress dependencies
 */
const { useEffect } = wp.element;

// editor style
import * as Constants from './constants';
import './editor.scss';

/**
 * Internal dependencies
 */
const { softMinifyCssStrings } = window.gutSliderModules.Helper;

const { generateRangeStyles, generateBorderStyles, generateResBoxStyles, generateTypographyStyles } = window.gutSliderModules;
const {
    SLIDE_HEIGHT,
    SLIDE_PADDING,
    SLIDE_MARGIN,
    TITLE_SPACING,
    TITLE_TYPO,
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
    OVERLAY_ICON_CONTAINER,
    OVERLAY_ICON_SIZE,
    PHOTO_BORDER,
    PHOTO_BRADIUS,
    PHOTO_PADDING
} = Constants;

const Style = ({ props }) => {
    const { attributes, setAttributes } = props;
    const {
        uniqueId,
        blockStyle,
        titleColor,
        titleBgColor,
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
        enableOverlay,
        overlayColor,
        overlayOpacity,
        overlayIconColor,
        overlayIconBgColor,
        overlayIconHoverColor,
        overlayIconHoverBgColor,
        photoBgType,
        photoBgColor,
        photoBgGradient
    } = attributes;

    // photo settings
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
        desktopStyles: photoBorderDeskStyle,
        tabletStyles: photoBorderTabStyle,
        mobileStyles: photoBorderMobStyle,
        hoverColor: photoBorderHoverColor
    } = generateBorderStyles({
        controlName: PHOTO_BORDER,
        attributes
    });

    const {
        boxDeskStyles: photoBradiusDeskStyles,
        boxTabStyles: photoBradiusTabStyles,
        boxMobStyles: photoBradiusMobStyles
    } = generateResBoxStyles({
        controlName: PHOTO_BRADIUS,
        attributes,
        propertyName: 'border-radius',
        forRadius: true
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

    // title
    const {
        boxDeskStyles: titleDeskSpacing,
        boxTabStyles: titleTabSpacing,
        boxMobStyles: titleMobSpacing
    } = generateResBoxStyles({
        controlName: TITLE_SPACING,
        attributes,
        propertyName: 'padding'
    });

    const {
        desktopStyles: titleDeskTypo,
        tabletStyles: titleTabTypo,
        mobileStyles: titleMobTypo
    } = generateTypographyStyles({
        controlName: TITLE_TYPO,
        attributes
    });

    // Navigation
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
        boxDeskStyles: navDeskMargin,
        boxTabStyles: navTabMargin,
        boxMobStyles: navMobMargin
    } = generateResBoxStyles({
        controlName: NAV_MARGIN,
        attributes,
        propertyName: 'margin'
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
        boxDeskStyles: pagDeskMargin,
        boxTabStyles: pagTabMargin,
        boxMobStyles: pagMobMargin
    } = generateResBoxStyles({
        controlName: PAG_MARGIN,
        attributes,
        propertyName: 'margin'
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

    // overlay icon and its container
    const {
        deskStyle: iconContainerWidth,
        tabStyle: iconContainerWidthTab,
        mobStyle: iconContainerWidthMob
    } = generateRangeStyles({
        controlName: OVERLAY_ICON_CONTAINER,
        attributes,
        propertyName: 'min-width'
    });

    const {
        deskStyle: iconContainerHeight,
        tabStyle: iconContainerHeightTab,
        mobStyle: iconContainerHeightMob
    } = generateRangeStyles({
        controlName: OVERLAY_ICON_CONTAINER,
        attributes,
        propertyName: 'min-height'
    });

    const {
        deskStyle: iconSize,
        tabStyle: iconSizeTab,
        mobStyle: iconSizeMob
    } = generateRangeStyles({
        controlName: OVERLAY_ICON_SIZE,
        attributes,
        propertyName: 'width'
    });

    const {
        deskStyle: iconHSize,
        tabStyle: iconHSizeTab,
        mobStyle: iconHSizeMob
    } = generateRangeStyles({
        controlName: OVERLAY_ICON_SIZE,
        attributes,
        propertyName: 'height'
    });

    /**
     * Block Styles
     */
    const deskStyles = `
		${
            slideDeskMargin
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel {
					${slideDeskMargin ? slideDeskMargin : ''}
				}`
                : ''
        }
		${
            slideDeskPadding
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel.${navContainerPosition}.${navPosition} {
                    ${slideDeskPadding ? slideDeskPadding : ''}
				}`
                : ''
        }
		${
            slideDeskHeight || photoDeskPadding || photoBorderDeskStyle || photoBradiusDeskStyles || photoBgColor || photoBgGradient
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-container-outer {
					${slideDeskHeight ? slideDeskHeight : ''}
                    ${photoDeskPadding ? photoDeskPadding : ''}
                    ${photoBorderDeskStyle ? photoBorderDeskStyle : ''}
                    ${photoBradiusDeskStyles ? photoBradiusDeskStyles : ''}
                    ${photoBgType === 'classic' && photoBgColor ? `background-color: ${photoBgColor};` : ''}
                    ${photoBgType === 'gradient' && photoBgGradient ? `background-image: ${photoBgGradient};` : ''}
				}`
                : ''
        }
		${
            photoBorderHoverColor
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-container-outer:hover {
					${photoBorderHoverColor ? photoBorderHoverColor : ''}
				}`
                : ''
        }
		${
            photoBradiusDeskStyles
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-container-outer img{
                    ${photoBradiusDeskStyles ? photoBradiusDeskStyles : ''}
				}`
                : ''
        }
		${
            titleColor || titleBgColor || titleDeskSpacing || titleDeskTypo
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-caption { 
					${titleColor ? `color: ${titleColor};` : ''}
                    ${titleBgColor ? `background-color: ${titleBgColor};` : ''}
					${titleDeskSpacing ? titleDeskSpacing : ''}
					${titleDeskTypo ? titleDeskTypo : ''}
				}`
                : ''
        }
        ${
            showNavigation && (navDeskMargin || navDeskGap)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-nav{
                ${navDeskMargin ? navDeskMargin : ''}
                ${navDeskGap ? navDeskGap : ''}
            }`
                : ''
        }
        ${
            showNavigation && (navColor || navBgColor || navBorderDeskStyle || navBradiusDeskStyles || navDeskHeight || navDeskWidth)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-button-prev, .${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-prev, .${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-button-next, .${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-next {
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
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-button-prev:hover, .${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-prev:hover, .${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-button-next:hover, .${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-next:hover {
                    ${navHoverColor ? `color: ${navHoverColor};` : ''}
                    ${navHoverColor ? `fill: ${navHoverColor};` : ''}
                    ${navHoverBgColor ? `background-color: ${navHoverBgColor};` : ''}
                    ${navBorderHoverColor ? navBorderHoverColor : ''}
				}`
                : ''
        }
        ${
            showNavigation && navIconDeskSize
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-button-prev::after, .${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-prev svg, .${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-button-next::after, .${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-next svg {
                    ${navIconDeskSize ? navIconDeskSize : ''}
                }`
                : ''
        }
        ${
            showNavigation && navCustomIconDeskSize
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-prev svg, .${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-next svg {
                    ${navCustomIconDeskSize ? navCustomIconDeskSize : ''}
                }`
                : ''
        }
        ${
            showPagination && pagDeskMargin
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-pagination{
                ${pagDeskMargin ? pagDeskMargin : ''}
            }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (pagBorderDeskStyle || pagBradiusDeskStyles || pagDeskHeight || pagDeskWidth || pagColor)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-pagination-bullet {
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
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-pagination-bullet:hover {
                    ${pagBorderHoverColor ? pagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (apagBorderDeskStyle || apagBradiusDeskStyles || apagDeskHeight || apagDeskWidth || activePagColor)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-pagination-bullet-active {
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
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-pagination-bullet-active:hover {
                    ${apagBorderHoverColor ? apagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && (fracDividerColor || fracDeskSize)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-pagination-fraction {
                    ${fracDividerColor ? `color: ${fracDividerColor};` : ''}
                    ${fracDeskSize ? fracDeskSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && pagFracColor
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-pagination-total {
                    ${pagFracColor ? `color: ${pagFracColor};` : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && pagFracCurrentColor
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-pagination-current {
                    ${pagFracCurrentColor ? `color: ${pagFracCurrentColor};` : ''}
                }`
                : ''
        }
        ${
            enableOverlay && (overlayColor || overlayOpacity || overlayIconColor)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-overlay {
                    ${overlayColor ? `background-color: ${overlayColor};` : ''}
                    ${overlayOpacity ? `opacity: ${overlayOpacity};` : ''}
                    ${overlayIconColor ? `color: ${overlayIconColor};` : ''}
                }`
                : ''
        }
        ${
            enableOverlay && (overlayIconColor || iconSize || iconHSize)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-overlay svg{
                    ${overlayIconColor ? `color: ${overlayIconColor};` : ''}
                    ${iconSize ? iconSize : ''}
                    ${iconHSize ? iconHSize : ''}
                }`
                : ''
        }
        ${
            enableOverlay && overlayIconHoverColor
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-overlay .overlay-icon:hover svg{
                    ${overlayIconHoverColor ? `color: ${overlayIconHoverColor};` : ''}

                }`
                : ''
        }
        ${
            enableOverlay && (overlayIconBgColor || iconContainerHeight || iconContainerWidth)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-overlay .overlay-icon{
                    ${overlayIconBgColor ? `background: ${overlayIconBgColor};` : ''}
                    ${iconContainerHeight ? iconContainerHeight : ''}
                    ${iconContainerWidth ? iconContainerWidth : ''}
                }`
                : ''
        }
        ${
            enableOverlay && overlayIconHoverBgColor
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-overlay .overlay-icon:hover {
                    ${overlayIconHoverBgColor ? `background: ${overlayIconHoverBgColor};` : ''}
                }`
                : ''
        }
	`;
    const tabStyles = `
		${
            slideTabMargin
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel {
					${slideTabMargin ? slideTabMargin : ''}
				}`
                : ''
        }
        ${
            slideTabPadding
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel.${navContainerPosition}.${navPosition} {
                    ${slideTabPadding ? slideTabPadding : ''}
				}`
                : ''
        }
		${
            slideTabHeight || photoTabPadding || photoBorderTabStyle || photoBradiusTabStyles
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-container-outer {
					${slideTabHeight ? slideTabHeight : ''}
					${photoTabPadding ? photoTabPadding : ''}
					${photoBorderTabStyle ? photoBorderTabStyle : ''}
					${photoBradiusTabStyles ? photoBradiusTabStyles : ''}
				}`
                : ''
        }
		${
            titleTabSpacing || titleTabTypo
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-caption { 
				${titleTabSpacing ? titleTabSpacing : ''}
				${titleTabTypo ? titleTabTypo : ''}
			}`
                : ''
        }
        ${
            showNavigation && (navTabMargin || navTabGap)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-nav{
                ${navTabMargin ? navTabMargin : ''}
                ${navTabGap ? navTabGap : ''}
            }`
                : ''
        }
        ${
            showNavigation && (navBorderTabStyle || navBradiusTabStyles || navTabHeight || navTabWidth)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-button-prev, .${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-prev, .${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-button-next, .${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-next {
                    ${navBorderTabStyle ? navBorderTabStyle : ''}
                    ${navBradiusTabStyles ? navBradiusTabStyles : ''}
                    ${navTabHeight ? navTabHeight : ''}
                    ${navTabWidth ? navTabWidth : ''}

				}`
                : ''
        }
        ${
            showNavigation && navIconTabSize
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-button-prev::after, .${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-button-next::after {
                    ${navIconTabSize ? navIconTabSize : ''}
                }`
                : ''
        }
        ${
            showNavigation && navCustomIconTabSize
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-prev svg, .${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-next svg {
                    ${navCustomIconTabSize ? navCustomIconTabSize : ''}
                }`
                : ''
        }
        ${
            showPagination && pagTabMargin
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-pagination{
                ${pagTabMargin ? pagTabMargin : ''}
            }`
                : ''
        }
        ${
            showPagination && paginationType === 'bullets' && (pagBorderTabStyle || pagBradiusTabStyles || pagTabHeight || pagTabWidth)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-pagination-bullet {
                    ${pagBorderTabStyle ? pagBorderTabStyle : ''}
                    ${pagBradiusTabStyles ? pagBradiusTabStyles : ''}
                    ${pagTabHeight ? pagTabHeight : ''}
                    ${pagTabWidth ? pagTabWidth : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'bullets' && (apagBorderTabStyle || apagBradiusTabStyles || apagTabHeight || apagTabWidth)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-pagination-bullet-active {
                    ${apagBorderTabStyle ? apagBorderTabStyle : ''}
                    ${apagBradiusTabStyles ? apagBradiusTabStyles : ''}
                    ${apagTabHeight ? apagTabHeight : ''}
                    ${apagTabWidth ? apagTabWidth : ''}
            }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && fracTabSize
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-pagination-fraction {
                    ${fracTabSize ? fracTabSize : ''}
                }`
                : ''
        }
        ${
            enableOverlay && (iconSizeTab || iconHSizeTab)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-overlay svg{
                    ${iconSizeTab ? iconSizeTab : ''}
                    ${iconHSizeTab ? iconHSizeTab : ''}
                }`
                : ''
        }
        ${
            enableOverlay && (iconContainerHeightTab || iconContainerWidthTab)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-overlay .overlay-icon{
                    ${iconContainerHeightTab ? iconContainerHeightTab : ''}
                    ${iconContainerWidthTab ? iconContainerWidthTab : ''}
                }`
                : ''
        }
	`;
    const mobStyles = `
		${
            slideMobMargin
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel {
					${slideMobMargin ? slideMobMargin : ''}
				}`
                : ''
        }
        ${
            slideMobPadding
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel.${navContainerPosition}.${navPosition} {
                    ${slideMobPadding ? slideMobPadding : ''}
				}`
                : ''
        }
		${
            slideMobHeight || photoMobPadding || photoBorderMobStyle || photoBradiusMobStyles
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-container-outer {
					${slideMobHeight ? slideMobHeight : ''}
					${photoMobPadding ? photoMobPadding : ''}
					${photoBorderMobStyle ? photoBorderMobStyle : ''}
					${photoBradiusMobStyles ? photoBradiusMobStyles : ''}
				}`
                : ''
        }
		${
            titleMobSpacing || titleMobTypo
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-caption { 
				${titleMobSpacing ? titleMobSpacing : ''}
				${titleMobTypo ? titleMobTypo : ''}
			}`
                : ''
        }
        ${
            showNavigation && (navMobMargin || navMobGap)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-nav{
                ${navMobMargin ? navMobMargin : ''}
                ${navMobGap ? navMobGap : ''}
            }`
                : ''
        }
        ${
            showNavigation && (navBorderMobStyle || navBradiusMobStyles || navMobHeight || navMobWidth)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-button-prev, .${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-prev, .${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-button-next, .${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-next {
                    ${navBorderMobStyle ? navBorderMobStyle : ''}
                    ${navBradiusMobStyles ? navBradiusMobStyles : ''}
                    ${navMobHeight ? navMobHeight : ''}
                    ${navMobWidth ? navMobWidth : ''}

				}`
                : ''
        }
        ${
            showNavigation && navIconMobSize
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-button-prev::after, .${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-button-next::after {
                    ${navIconMobSize ? navIconMobSize : ''}
                }`
                : ''
        }
        ${
            showNavigation && navCustomIconMobSize
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-prev svg, .${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-next svg {
                    ${navCustomIconMobSize ? navCustomIconMobSize : ''}
                }`
                : ''
        }
        ${
            showPagination && pagMobMargin
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-pagination{
                ${pagMobMargin ? pagMobMargin : ''}
            }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (pagBorderMobStyle || pagBradiusMobStyles || pagMobHeight || pagMobWidth || pagColor)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-pagination-bullet {
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
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-pagination-bullet:hover {
                    ${pagBorderHoverColor ? pagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (apagBorderMobStyle || apagBradiusMobStyles || apagMobHeight || apagMobWidth || activePagColor)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-pagination-bullet-active {
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
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-pagination-bullet-active:hover {
                    ${apagBorderHoverColor ? apagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && (fracMobSize || fracDividerColor)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .swiper-pagination-fraction {
                    ${fracDividerColor ? `color: ${fracDividerColor};` : ''}
                    ${fracMobSize ? fracMobSize : ''}
                }`
                : ''
        }
        ${
            enableOverlay && (iconSizeMob || iconHSizeMob)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-overlay svg{
                    ${iconSizeMob ? iconSizeMob : ''}
                    ${iconHSizeMob ? iconHSizeMob : ''}
                }`
                : ''
        }
        ${
            enableOverlay && (iconContainerHeightMob || iconContainerWidthMob)
                ? `.${uniqueId}.wp-block-gutsliders-photo-carousel .gutslider-overlay .overlay-icon{
                    ${iconContainerHeightMob ? iconContainerHeightMob : ''}
                    ${iconContainerWidthMob ? iconContainerWidthMob : ''}
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
