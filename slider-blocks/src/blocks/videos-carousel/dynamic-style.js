/**
 * WordPress dependencies
 */

import { Fragment, useEffect } from '@wordpress/element';
import * as Constants from './constants';
const { softMinifyCssStrings } = window.gutSliderModules.Helper;

const { generateRangeStyles, generateBorderStyles, generateResBoxStyles } = window.gutSliderModules;
const {
    SLIDE_HEIGHT,
    SLIDE_PADDING,
    SLIDE_MARGIN,
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
    IFRAME_BORDER,
    IFRAME_BRADIUS,
    IFRAME_PADDING
} = Constants;

const DynamicStyle = ({ attributes, setAttributes }) => {
    const {
        uniqueID,
        blockStyle,
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
        iframeBg,
        enableCustomPoster,
        enablePosterOverlay,
        posterOverlayColor,
        playIconColor,
        playIconSize
    } = attributes;

    // slider
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
        deskStyle: navCustomIconDeskHeight,
        tabStyle: navCustomIconTabHeight,
        mobStyle: navCustomIconMobHeight
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

    const {
        boxDeskStyles: pagDeskMargin,
        boxTabStyles: pagTabMargin,
        boxMobStyles: pagMobMargin
    } = generateResBoxStyles({
        controlName: PAG_MARGIN,
        attributes,
        propertyName: 'margin'
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

    // Iframe
    const {
        desktopStyles: iframeBorderDeskStyle,
        tabletStyles: iframeBorderTabStyle,
        mobileStyles: iframeBorderMobStyle
    } = generateBorderStyles({
        controlName: IFRAME_BORDER,
        attributes
    });

    const {
        boxDeskStyles: iframeBradiusDeskStyles,
        boxTabStyles: iframeBradiusTabStyles,
        boxMobStyles: iframeBradiusMobStyles
    } = generateResBoxStyles({
        controlName: IFRAME_BRADIUS,
        attributes,
        propertyName: 'border-radius',
        forRadius: true
    });

    const {
        boxDeskStyles: iframePaddingDeskStyles,
        boxTabStyles: iframePaddingTabStyles,
        boxMobStyles: iframePaddingMobStyles
    } = generateResBoxStyles({
        controlName: IFRAME_PADDING,
        attributes,
        propertyName: 'padding'
    });

    /**
     * Block Styles
     */
    const deskStyles = `
		${
            slideDeskMargin
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel {
					${slideDeskMargin ? slideDeskMargin : ''}
				}`
                : ''
        }
		${
            slideDeskPadding
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel.${navContainerPosition}.${navPosition} {
                    ${slideDeskPadding ? slideDeskPadding : ''}
				}`
                : ''
        }
		${
            slideDeskHeight
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-slide{
					${slideDeskHeight ? slideDeskHeight : ''}
				}`
                : ''
        }
        ${
            showNavigation && (navDeskMargin || navDeskGap)
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-nav {
                    ${navDeskMargin ? navDeskMargin : ''}
                    ${navDeskGap ? navDeskGap : ''}
                }`
                : ''
        }
        ${
            showNavigation && (navColor || navBgColor || navBorderDeskStyle || navBradiusDeskStyles || navDeskHeight || navDeskWidth)
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-button-prev, .${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-prev, .${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-button-next, .${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-next {
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
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-button-prev:hover, .${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-prev:hover, .${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-button-next:hover, .${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-next:hover {
                    ${navHoverColor ? `color: ${navHoverColor};` : ''}
                    ${navHoverColor ? `fill: ${navHoverColor};` : ''}
                    ${navHoverBgColor ? `background-color: ${navHoverBgColor};` : ''}
                    ${navBorderHoverColor ? navBorderHoverColor : ''}
				}`
                : ''
        }
        ${
            showNavigation && navIconDeskSize
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-button-prev::after, .${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-prev svg, .${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-button-next::after, .${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-next svg {
                    ${navIconDeskSize ? navIconDeskSize : ''}
                }`
                : ''
        }
        ${
            showNavigation && (navCustomIconDeskSize || navCustomIconDeskHeight)
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-prev svg, .${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-next svg {
                    ${navCustomIconDeskSize ? navCustomIconDeskSize : ''}
                    ${navCustomIconDeskHeight ? navCustomIconDeskHeight : ''}
                }`
                : ''
        }
        ${
            showPagination && pagDeskMargin
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination {
                    ${pagDeskMargin ? pagDeskMargin : ''}
                }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (pagBorderDeskStyle || pagBradiusDeskStyles || pagDeskHeight || pagDeskWidth || pagColor)
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-bullet {
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
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-bullet:hover {
                    ${pagBorderHoverColor ? pagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (apagBorderDeskStyle || apagBradiusDeskStyles || apagDeskHeight || apagDeskWidth || activePagColor)
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-bullet-active {
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
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-bullet-active:hover {
                    ${apagBorderHoverColor ? apagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && (fracDividerColor || fracDeskSize)
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-fraction {
                    ${fracDividerColor ? `color: ${fracDividerColor};` : ''}
                    ${fracDeskSize ? fracDeskSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && pagFracColor
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-total {
                    ${pagFracColor ? `color: ${pagFracColor};` : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && pagFracCurrentColor
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-current {
                    ${pagFracCurrentColor ? `color: ${pagFracCurrentColor};` : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && (progressColor || progDeskSize)
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-progressbar {
                    ${progressColor ? `background: ${progressColor};` : ''}
                    ${progDeskSize ? progDeskSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && activeProgressColor
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
                    ${activeProgressColor ? `background: ${activeProgressColor};` : ''}
                }`
                : ''
        }
        ${
            iframeBorderDeskStyle || iframeBradiusDeskStyles || iframePaddingDeskStyles || iframeBg
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-slide iframe {
                    ${iframeBorderDeskStyle ? iframeBorderDeskStyle : ''}
                    ${iframeBradiusDeskStyles ? iframeBradiusDeskStyles : ''}
                    ${iframePaddingDeskStyles ? iframePaddingDeskStyles : ''}
                    ${iframeBg ? `background-color: ${iframeBg};` : ''}
                }`
                : ''
        }
        ${
            enableCustomPoster && enablePosterOverlay && posterOverlayColor
                ? `
                .${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-slide .thumb-overlay {
                    ${posterOverlayColor ? `background-color: ${posterOverlayColor};` : ''}
                }
            `
                : ''
        }
        ${
            enableCustomPoster && playIconSize
                ? `
                .${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-slide .play-btn svg {
                    ${playIconSize ? `width: ${playIconSize}rem; height: ${playIconSize}rem;` : ''}
                }
            `
                : ''
        }
        ${
            enableCustomPoster && playIconColor
                ? `
                .${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-slide .play-btn path {
                    ${playIconColor ? `fill: ${playIconColor};` : ''}
                }
            `
                : ''
        }
	`;
    const tabStyles = `
		${
            slideTabMargin
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel {
					${slideTabMargin ? slideTabMargin : ''}
				}`
                : ''
        }
        ${
            slideTabPadding
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel.${navContainerPosition}.${navPosition} {
                    ${slideTabPadding ? slideTabPadding : ''}
				}`
                : ''
        }
		${
            slideTabHeight
                ? `.${uniqueID} .gutslider-testimonial-wrapper {
					${slideTabHeight ? slideTabHeight : ''}
				}`
                : ''
        }
        ${
            showNavigation && (navTabMargin || navTabGap)
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-nav {
                    ${navTabMargin ? navTabMargin : ''}
                    ${navTabGap ? navTabGap : ''}
                }`
                : ''
        }
        ${
            showNavigation && (navBorderTabStyle || navBradiusTabStyles || navTabHeight || navTabWidth)
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-button-prev, .${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-prev, .${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-button-next, .${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-next {
                    ${navBorderTabStyle ? navBorderTabStyle : ''}
                    ${navBradiusTabStyles ? navBradiusTabStyles : ''}
                    ${navTabHeight ? navTabHeight : ''}
                    ${navTabWidth ? navTabWidth : ''}

				}`
                : ''
        }
        ${
            showNavigation && navIconTabSize
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-button-prev::after, .${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-button-next::after {
                    ${navIconTabSize ? navIconTabSize : ''}
                }`
                : ''
        }
        ${
            showNavigation && (navCustomIconTabSize || navCustomIconTabHeight)
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-prev svg, .${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-next svg {
                    ${navCustomIconTabSize ? navCustomIconTabSize : ''}
                    ${navCustomIconTabHeight ? navCustomIconTabHeight : ''}
                }`
                : ''
        }
        ${
            showPagination && pagTabMargin
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination {
                    ${pagTabMargin ? pagTabMargin : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'bullets' && (pagBorderTabStyle || pagBradiusTabStyles || pagTabHeight || pagTabWidth)
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-bullet {
                    ${pagBorderTabStyle ? pagBorderTabStyle : ''}
                    ${pagBradiusTabStyles ? pagBradiusTabStyles : ''}
                    ${pagTabHeight ? pagTabHeight : ''}
                    ${pagTabWidth ? pagTabWidth : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'bullets' && (apagBorderTabStyle || apagBradiusTabStyles || apagTabHeight || apagTabWidth)
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-bullet-active {
                    ${apagBorderTabStyle ? apagBorderTabStyle : ''}
                    ${apagBradiusTabStyles ? apagBradiusTabStyles : ''}
                    ${apagTabHeight ? apagTabHeight : ''}
                    ${apagTabWidth ? apagTabWidth : ''}
            }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && fracTabSize
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-fraction {
                    ${fracTabSize ? fracTabSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && progTabSize
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-progressbar {
                    ${progTabSize ? progTabSize : ''}
                }`
                : ''
        }
        ${
            iframeBorderTabStyle || iframeBradiusTabStyles || iframePaddingTabStyles
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-slide iframe {
                    ${iframeBorderTabStyle ? iframeBorderTabStyle : ''}
                    ${iframeBradiusTabStyles ? iframeBradiusTabStyles : ''}
                    ${iframePaddingTabStyles ? iframePaddingTabStyles : ''}
                }`
                : ''
        }
	`;
    const mobStyles = `
		${
            slideMobMargin
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel {
					${slideMobMargin ? slideMobMargin : ''}
				}`
                : ''
        }
        ${
            slideMobPadding
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel.${navContainerPosition}.${navPosition} {
                    ${slideMobPadding ? slideMobPadding : ''}
				}`
                : ''
        }
		${
            slideMobHeight
                ? `.${uniqueID} .gutslider-testimonial-wrapper {
					${slideMobHeight ? slideMobHeight : ''}
				}`
                : ''
        }
        ${
            showNavigation && (navMobMargin || navMobGap)
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-nav {
                    ${navMobMargin ? navMobMargin : ''}
                    ${navMobGap ? navMobGap : ''}
                }`
                : ''
        }
        ${
            showNavigation && (navBorderMobStyle || navBradiusMobStyles || navMobHeight || navMobWidth)
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-button-prev, .${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-prev, .${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-button-next, .${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-next {
                    ${navBorderMobStyle ? navBorderMobStyle : ''}
                    ${navBradiusMobStyles ? navBradiusMobStyles : ''}
                    ${navMobHeight ? navMobHeight : ''}
                    ${navMobWidth ? navMobWidth : ''}

				}`
                : ''
        }
        ${
            showNavigation && navIconMobSize
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-button-prev::after, .${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-button-next::after {
                    ${navIconMobSize ? navIconMobSize : ''}
                }`
                : ''
        }
        ${
            showNavigation && (navCustomIconMobSize || navCustomIconMobHeight)
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-prev svg, .${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-next svg {
                    ${navCustomIconMobSize ? navCustomIconMobSize : ''}
                    ${navCustomIconMobHeight ? navCustomIconMobHeight : ''}
                }`
                : ''
        }
        ${
            showPagination && pagMobMargin
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination {
                    ${pagMobMargin ? pagMobMargin : ''}
                }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (pagBorderMobStyle || pagBradiusMobStyles || pagMobHeight || pagMobWidth || pagColor)
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-bullet {
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
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-bullet:hover {
                    ${pagBorderHoverColor ? pagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (apagBorderMobStyle || apagBradiusMobStyles || apagMobHeight || apagMobWidth || activePagColor)
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-bullet-active {
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
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-bullet-active:hover {
                    ${apagBorderHoverColor ? apagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && (fracMobSize || fracDividerColor)
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-fraction {
                    ${fracDividerColor ? `color: ${fracDividerColor};` : ''}
                    ${fracMobSize ? fracMobSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && progMobSize
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .swiper-pagination-progressbar {
                    ${progMobSize ? progMobSize : ''}
                }`
                : ''
        }
        ${
            iframeBorderMobStyle || iframeBradiusMobStyles || iframePaddingMobStyles
                ? `.${uniqueID}.wp-block-gutsliders-videos-carousel .gutslider-slide iframe {
                    ${iframeBorderMobStyle ? iframeBorderMobStyle : ''}
                    ${iframeBradiusMobStyles ? iframeBradiusMobStyles : ''}
                    ${iframePaddingMobStyles ? iframePaddingMobStyles : ''}
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

    return <Fragment> {<style>{`${softMinifyCssStrings(blockStyleCss)}`}</style>}</Fragment>;
};

export default DynamicStyle;
