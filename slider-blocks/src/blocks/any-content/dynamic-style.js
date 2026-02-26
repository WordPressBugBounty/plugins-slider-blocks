/* eslint-disable no-undef */
/* eslint-disable camelcase */
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

const { generateBorderStyles, generateRangeStyles, generateResBoxStyles, generateAlignmentStyles, generateResBtnsStyles } =
    window.gutSliderModules;
const { softMinifyCssStrings } = window.gutSliderModules.Helper;
const {
    SLIDE_HEIGHT,
    SLIDE_PADDING,
    SLIDE_MARGIN,
    CONTENT_WIDTH,
    CONTENT_VPOSITION,
    CONTENT_ALIGN,
    CONTENT_PADDING,
    CONTENT_HALIGN,
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

const DynamicStyle = ({ attributes, setAttributes }) => {
    const {
        uniqueId,
        blockStyle,
        showNavigation,
        navColor,
        navHoverColor,
        navBgColor,
        navHoverBgColor,
        showPagination,
        paginationType,
        pagColor,
        pagFracColor,
        pagFracCurrentColor,
        fracDividerColor,
        activePagColor,
        progressColor,
        activeProgressColor
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
                ? `.${uniqueId}.wp-block-gutsliders-any-content {
					${slideDeskMargin ? slideDeskMargin : ''}
				}`
                : ''
        }
		${
            slideDeskHeight
                ? `.${uniqueId} .swiper-slide {
					${slideDeskHeight ? slideDeskHeight : ''}
				}`
                : ''
        }
		${
            contentDeskVPos || slideDeskPadding
                ? `.${uniqueId} .swiper-container-outer {
					${contentDeskVPos ? contentDeskVPos : ''}
                    ${slideDeskPadding ? slideDeskPadding : ''}

				}`
                : ''
        }
		${
            contentDeskWidth || contentDeskAlign || contentDeskPadding || contentDeskHPos
                ? `.${uniqueId} .gutslider-content-inner {
					${contentDeskWidth ? contentDeskWidth : ''}
					${contentDeskAlign ? contentDeskAlign : ''}
                    ${contentDeskPadding ? contentDeskPadding : ''}
                    ${contentDeskHPos ? contentDeskHPos : ''}
				}`
                : ''
        }
        ${
            showNavigation && (navDeskMargin || navDeskGap)
                ? `.${uniqueId}.wp-block-gutsliders-any-content .gutslider-nav{
                 ${navDeskMargin ? navDeskMargin : ''}
                 ${navDeskGap ? navDeskGap : ''}
            }`
                : ''
        }
		${
            showNavigation && (navColor || navBgColor || navBorderDeskStyle || navBradiusDeskStyles || navDeskHeight || navDeskWidth)
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-button-prev, .${uniqueId}.wp-block-gutsliders-any-content .gutslider-prev, .${uniqueId}.wp-block-gutsliders-any-content .swiper-button-next, .${uniqueId}.wp-block-gutsliders-any-content .gutslider-next {
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
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-button-prev:hover, .${uniqueId}.wp-block-gutsliders-any-content .gutslider-prev:hover, .${uniqueId}.wp-block-gutsliders-any-content .swiper-button-next:hover, .${uniqueId}.wp-block-gutsliders-any-content .gutslider-next:hover {
                    ${navHoverColor ? `color: ${navHoverColor};` : ''}
                    ${navHoverColor ? `fill: ${navHoverColor};` : ''}
                    ${navHoverBgColor ? `background-color: ${navHoverBgColor};` : ''}
                    ${navBorderHoverColor ? navBorderHoverColor : ''}
				}`
                : ''
        }
        ${
            showNavigation && navIconDeskSize
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-button-prev::after, .${uniqueId}.wp-block-gutsliders-any-content .gutslider-prev svg, .${uniqueId}.wp-block-gutsliders-any-content .swiper-button-next::after, .${uniqueId}.wp-block-gutsliders-any-content .gutslider-next svg {
                    ${navIconDeskSize ? navIconDeskSize : ''}
                }`
                : ''
        }
        ${
            showNavigation && navCustomIconDeskSize && navCustomIconDeskHSize
                ? `.${uniqueId}.wp-block-gutsliders-any-content .gutslider-prev svg, .${uniqueId}.wp-block-gutsliders-any-content .gutslider-next svg {
                    ${navCustomIconDeskSize ? navCustomIconDeskSize : ''}
                    ${navCustomIconDeskHSize ? navCustomIconDeskHSize : ''}
                }`
                : ''
        }
        ${
            showPagination && pagDeskMargin
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination {
                ${pagDeskMargin ? pagDeskMargin : ''}
            }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (pagBorderDeskStyle || pagBradiusDeskStyles || pagDeskHeight || pagDeskWidth || pagColor)
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-bullet {
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
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-bullet:hover {
                    ${pagBorderHoverColor ? pagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (apagBorderDeskStyle || apagBradiusDeskStyles || apagDeskHeight || apagDeskWidth || activePagColor)
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-bullet-active {
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
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-bullet-active:hover {
                    ${apagBorderHoverColor ? apagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && (fracDividerColor || fracDeskSize)
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-fraction {
                    ${fracDividerColor ? `color: ${fracDividerColor};` : ''}
                    ${fracDeskSize ? fracDeskSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && pagFracColor
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-total {
                    ${pagFracColor ? `color: ${pagFracColor};` : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && pagFracCurrentColor
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-current {
                    ${pagFracCurrentColor ? `color: ${pagFracCurrentColor};` : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && (progressColor || progDeskSize)
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-progressbar {
                    ${progressColor ? `background: ${progressColor};` : ''}
                    ${progDeskSize ? progDeskSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && activeProgressColor
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
                    ${activeProgressColor ? `background: ${activeProgressColor};` : ''}
                }`
                : ''
        }
	`;
    const tabStyles = `
		${
            slideTabMargin
                ? `.${uniqueId}.wp-block-gutsliders-any-content {
					${slideTabMargin ? slideTabMargin : ''}
				}`
                : ''
        }
        ${
            slideTabHeight
                ? `.${uniqueId} .swiper-slide {
					${slideTabHeight ? slideTabHeight : ''}
				}`
                : ''
        }
		${
            contentTabVPos || slideTabPadding
                ? `.${uniqueId} .swiper-container-outer {
					${contentTabVPos ? contentTabVPos : ''}
                    ${slideTabPadding ? slideTabPadding : ''}
				}`
                : ''
        }
		${
            contentTabWidth || contentTabAlign || contentTabPadding || contentTabHPos
                ? `.${uniqueId} .gutslider-content-inner {
					${contentTabWidth ? contentTabWidth : ''}
					${contentTabAlign ? contentTabAlign : ''}
                    ${contentTabPadding ? contentTabPadding : ''}
				}`
                : ''
        }
        ${
            showNavigation && (navTabMargin || navTabGap)
                ? `.${uniqueId}.wp-block-gutsliders-any-content .gutslider-nav{
                ${navTabMargin ? navTabMargin : ''}
                ${navTabGap ? navTabGap : ''}
            }`
                : ''
        }
        ${
            showNavigation && (navBorderTabStyle || navBradiusTabStyles || navTabHeight || navTabWidth)
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-button-prev, .${uniqueId}.wp-block-gutsliders-any-content .gutslider-prev, .${uniqueId}.wp-block-gutsliders-any-content .swiper-button-next, .${uniqueId}.wp-block-gutsliders-any-content .gutslider-next {
                    ${navBorderTabStyle ? navBorderTabStyle : ''}
                    ${navBradiusTabStyles ? navBradiusTabStyles : ''}
                    ${navTabHeight ? navTabHeight : ''}
                    ${navTabWidth ? navTabWidth : ''}

				}`
                : ''
        }
        ${
            showNavigation && navIconTabSize
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-button-prev::after, .${uniqueId}.wp-block-gutsliders-any-content .swiper-button-next::after {
                    ${navIconTabSize ? navIconTabSize : ''}
                }`
                : ''
        }
        ${
            showNavigation && navCustomIconTabSize && navCustomIconTabHSize
                ? `.${uniqueId}.wp-block-gutsliders-any-content .gutslider-prev svg, .${uniqueId}.wp-block-gutsliders-any-content .gutslider-next svg {
                    ${navCustomIconTabSize ? navCustomIconTabSize : ''}
                    ${navCustomIconTabHSize ? navCustomIconTabHSize : ''}
                }`
                : ''
        }
        ${
            showPagination && pagTabMargin
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination {
                ${pagTabMargin ? pagTabMargin : ''}
            }`
                : ''
        }
        ${
            showPagination && paginationType === 'bullets' && (pagBorderTabStyle || pagBradiusTabStyles || pagTabHeight || pagTabWidth)
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-bullet {
                    ${pagBorderTabStyle ? pagBorderTabStyle : ''}
                    ${pagBradiusTabStyles ? pagBradiusTabStyles : ''}
                    ${pagTabHeight ? pagTabHeight : ''}
                    ${pagTabWidth ? pagTabWidth : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'bullets' && (apagBorderTabStyle || apagBradiusTabStyles || apagTabHeight || apagTabWidth)
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-bullet-active {
                    ${apagBorderTabStyle ? apagBorderTabStyle : ''}
                    ${apagBradiusTabStyles ? apagBradiusTabStyles : ''}
                    ${apagTabHeight ? apagTabHeight : ''}
                    ${apagTabWidth ? apagTabWidth : ''}
            }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && fracTabSize
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-fraction {
                    ${fracTabSize ? fracTabSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && progTabSize
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-progressbar {
                    ${progTabSize ? progTabSize : ''}
                }`
                : ''
        }
	`;
    const mobStyles = `
		${
            slideMobMargin
                ? `.${uniqueId}.wp-block-gutsliders-any-content {
					${slideMobMargin ? slideMobMargin : ''}
				}`
                : ''
        }
        ${
            slideMobHeight
                ? `.${uniqueId} .swiper-slide {
					${slideMobHeight ? slideMobHeight : ''}
				}`
                : ''
        }
		${
            contentMobVPos || slideMobPadding
                ? `.${uniqueId} .swiper-container-outer {
					${contentMobVPos ? contentMobVPos : ''}
                    ${slideMobPadding ? slideMobPadding : ''}
				}`
                : ''
        }
		${
            contentMobWidth || contentMobAlign || contentMobPadding || contentMobHPos
                ? `.${uniqueId} .gutslider-content-inner {
					${contentMobWidth ? contentMobWidth : ''}
					${contentMobAlign ? contentMobAlign : ''}
                    ${contentMobPadding ? contentMobPadding : ''}
                    ${contentMobHPos ? contentMobHPos : ''}
				}`
                : ''
        }
        ${
            showNavigation && (navMobMargin || navMobGap)
                ? `.${uniqueId}.wp-block-gutsliders-any-content .gutslider-nav{
                ${navMobMargin ? navMobMargin : ''}
                ${navMobGap ? navMobGap : ''}
            }`
                : ''
        }
        ${
            showNavigation && (navBorderMobStyle || navBradiusMobStyles || navMobHeight || navMobWidth)
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-button-prev, .${uniqueId}.wp-block-gutsliders-any-content .gutslider-prev, .${uniqueId}.wp-block-gutsliders-any-content .swiper-button-next, .${uniqueId}.wp-block-gutsliders-any-content .gutslider-next {
                    ${navBorderMobStyle ? navBorderMobStyle : ''}
                    ${navBradiusMobStyles ? navBradiusMobStyles : ''}
                    ${navMobHeight ? navMobHeight : ''}
                    ${navMobWidth ? navMobWidth : ''}

				}`
                : ''
        }
        ${
            showNavigation && navIconMobSize
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-button-prev::after, .${uniqueId}.wp-block-gutsliders-any-content .swiper-button-next::after {
                    ${navIconMobSize ? navIconMobSize : ''}
                }`
                : ''
        }
        ${
            showNavigation && navCustomIconMobSize && navCustomIconMobHSize
                ? `.${uniqueId}.wp-block-gutsliders-any-content .gutslider-prev svg, .${uniqueId}.wp-block-gutsliders-any-content .gutslider-next svg {
                    ${navCustomIconMobSize ? navCustomIconMobSize : ''}
                    ${navCustomIconMobHSize ? navCustomIconMobHSize : ''}
                }`
                : ''
        }
        ${
            showPagination && pagMobMargin
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination {
                ${pagMobMargin ? pagMobMargin : ''}
            }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (pagBorderMobStyle || pagBradiusMobStyles || pagMobHeight || pagMobWidth || pagColor)
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-bullet {
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
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-bullet:hover {
                    ${pagBorderHoverColor ? pagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (apagBorderMobStyle || apagBradiusMobStyles || apagMobHeight || apagMobWidth || activePagColor)
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-bullet-active {
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
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-bullet-active:hover {
                    ${apagBorderHoverColor ? apagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && (fracMobSize || fracDividerColor)
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-fraction {
                    ${fracDividerColor ? `color: ${fracDividerColor};` : ''}
                    ${fracMobSize ? fracMobSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && progMobSize
                ? `.${uniqueId}.wp-block-gutsliders-any-content .swiper-pagination-progressbar {
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

export default DynamicStyle;
