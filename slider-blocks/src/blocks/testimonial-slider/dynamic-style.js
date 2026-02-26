/**
 * WordPress dependencies
 */

import { Fragment, useEffect } from '@wordpress/element';
import * as Constants from './constants';
const { softMinifyCssStrings } = window.gutSliderModules.Helper;

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
    CONTENT_ALIGN,
    CONTENT_PADDING,
    CONTENT_HALIGN,
    IMAGE_BORDER,
    IMAGE_RADIUS,
    IMAGE_MARGIN,
    IMAGE_PADDING,
    IMAGE_SIZE,
    IMAGE_HEIGHT,
    IMAGE_POSITION,
    ICON_BORDER,
    ICON_RADIUS,
    ICON_PADDING,
    ICON_MARGIN,
    ICON_SIZE,
    ICON_SPACING,
    NAME_SPACING,
    NAME_TYPO,
    DESIGNATION_SPACING,
    DESIGNATION_TYPO,
    TESTIMONIAL_SPACING,
    TESTIMONIAL_TYPO,
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
    PAG_MARGIN,
    PAG_HEIGHT,
    APAG_BORDER,
    APAG_BRADIUS,
    APAG_WIDTH,
    APAG_HEIGHT,
    FRAC_SIZE,
    PROG_SIZE,
    STAR_SIZE,
    STAR_SPACING,
    IMAGE_GAP
} = Constants;

const DynamicStyle = ({ attributes, setAttributes }) => {
    const {
        uniqueID,
        blockStyle,
        ratingColor,
        designationColor,
        nameColor,
        testimonialColor,
        socialIconColors,
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
        // transition delay
        photoDelay,
        nameDelay,
        designationDelay,
        testimonialDelay,
        socialDelay
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
        deskAlign: contentDeskAlign,
        tabAlign: contentTabAlign,
        mobAlign: contentMobAlign
    } = generateAlignmentStyles({
        controlName: CONTENT_ALIGN,
        attributes,
        propertyName: 'text-align'
    });

    // Image
    const {
        deskStyle: imgDeskGap,
        tabStyle: imgTabGap,
        mobStyle: imgMobGap
    } = generateRangeStyles({
        controlName: IMAGE_GAP,
        attributes,
        propertyName: 'gap'
    });

    const {
        deskAlign: imgDeskAlign,
        tabAlign: imgTabAlign,
        mobAlign: imgMobAlign
    } = generateAlignmentStyles({
        controlName: IMAGE_POSITION,
        attributes,
        propertyName: 'justify-content'
    });

    const {
        desktopStyles: imgBorderDeskStyle,
        tabletStyles: imgBorderTabStyle,
        mobileStyles: imgBorderMobStyle
    } = generateBorderStyles({
        controlName: IMAGE_BORDER,
        attributes
    });

    const {
        boxDeskStyles: imgBorderRDeskStyles,
        boxTabStyles: imgBorderRTabStyles,
        boxMobStyles: imgBorderRMobStyles
    } = generateResBoxStyles({
        controlName: IMAGE_RADIUS,
        attributes,
        propertyName: 'border-radius',
        forRadius: true
    });

    const {
        boxDeskStyles: imgDeskPadding,
        boxTabStyles: imgTabPadding,
        boxMobStyles: imgMobPadding
    } = generateResBoxStyles({
        controlName: IMAGE_PADDING,
        attributes,
        propertyName: 'padding'
    });

    const {
        boxDeskStyles: imgDeskMargin,
        boxTabStyles: imgTabMargin,
        boxMobStyles: imgMobMargin
    } = generateResBoxStyles({
        controlName: IMAGE_MARGIN,
        attributes,
        propertyName: 'margin'
    });

    const {
        deskStyle: imgDeskWidth,
        tabStyle: imgTabWidth,
        mobStyle: imgMobWidth
    } = generateRangeStyles({
        controlName: IMAGE_SIZE,
        attributes,
        propertyName: 'width'
    });

    const {
        deskStyle: imgDeskHeight,
        tabStyle: imgTabHeight,
        mobStyle: imgMobHeight
    } = generateRangeStyles({
        controlName: IMAGE_SIZE,
        attributes,
        propertyName: 'height'
    });

    const {
        deskStyle: imgDeskCustomHeight,
        tabStyle: imgTabCustomHeight,
        mobStyle: imgMobCustomHeight
    } = generateRangeStyles({
        controlName: IMAGE_HEIGHT,
        attributes,
        propertyName: 'height'
    });

    const {
        desktopStyles: borderDeskStyle,
        tabletStyles: borderTabStyle,
        mobileStyles: borderMobStyle,
        hoverColor: borderHoverColor
    } = generateBorderStyles({
        controlName: ICON_BORDER,
        attributes
    });

    const {
        boxDeskStyles: iconDeskStyles,
        boxTabStyles: iconTabStyles,
        boxMobStyles: iconMobStyles
    } = generateResBoxStyles({
        controlName: ICON_RADIUS,
        attributes,
        propertyName: 'border-radius',
        forRadius: true
    });

    const {
        boxDeskStyles: iconDeskPadding,
        boxTabStyles: iconTabPadding,
        boxMobStyles: iconMobPadding
    } = generateResBoxStyles({
        controlName: ICON_PADDING,
        attributes,
        propertyName: 'padding'
    });

    const {
        boxDeskStyles: iconDeskMargin,
        boxTabStyles: iconTabMargin,
        boxMobStyles: iconMobMargin
    } = generateResBoxStyles({
        controlName: ICON_MARGIN,
        attributes,
        propertyName: 'margin'
    });

    const {
        deskStyle: iconDeskHeight,
        tabStyle: iconTabHeight,
        mobStyle: iconMobHeight
    } = generateRangeStyles({
        controlName: ICON_SIZE,
        attributes,
        propertyName: 'height'
    });

    const {
        deskStyle: iconDeskWidth,
        tabStyle: iconTabWidth,
        mobStyle: iconMobWidth
    } = generateRangeStyles({
        controlName: ICON_SIZE,
        attributes,
        propertyName: 'width'
    });

    const {
        deskStyle: iconDeskSpacing,
        tabStyle: iconTabSpacing,
        mobStyle: iconMobSpacing
    } = generateRangeStyles({
        controlName: ICON_SPACING,
        attributes,
        propertyName: 'margin-left'
    });

    // name
    const {
        boxDeskStyles: nameDeskSpacing,
        boxTabStyles: nameTabSpacing,
        boxMobStyles: nameMobSpacing
    } = generateResBoxStyles({
        controlName: NAME_SPACING,
        attributes,
        propertyName: 'margin'
    });

    const {
        desktopStyles: nameDeskTypo,
        tabletStyles: nameTabTypo,
        mobileStyles: nameMobTypo
    } = generateTypographyStyles({
        controlName: NAME_TYPO,
        attributes
    });

    // designation
    const {
        boxDeskStyles: designationDeskSpacing,
        boxTabStyles: designationTabSpacing,
        boxMobStyles: designationMobSpacing
    } = generateResBoxStyles({
        controlName: DESIGNATION_SPACING,
        attributes,
        propertyName: 'margin'
    });

    const {
        desktopStyles: designationDeskTypo,
        tabletStyles: designationTabTypo,
        mobileStyles: designationMobTypo
    } = generateTypographyStyles({
        controlName: DESIGNATION_TYPO,
        attributes
    });

    // testimonial
    const {
        boxDeskStyles: descDeskSpacing,
        boxTabStyles: descTabSpacing,
        boxMobStyles: descMobSpacing
    } = generateResBoxStyles({
        controlName: TESTIMONIAL_SPACING,
        attributes,
        propertyName: 'margin'
    });

    const {
        desktopStyles: descDeskTypo,
        tabletStyles: descTabTypo,
        mobileStyles: descMobTypo
    } = generateTypographyStyles({
        controlName: TESTIMONIAL_TYPO,
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

    // Star Rating
    const {
        deskStyle: starDeskWidth,
        tabStyle: starTabWidth,
        mobStyle: starMobWidth
    } = generateRangeStyles({
        controlName: STAR_SIZE,
        attributes,
        propertyName: 'width'
    });

    const {
        deskStyle: starDeskHeight,
        tabStyle: starTabHeight,
        mobStyle: starMobHeight
    } = generateRangeStyles({
        controlName: STAR_SIZE,
        attributes,
        propertyName: 'height'
    });

    const {
        deskStyle: starDeskSpacing,
        tabStyle: starTabSpacing,
        mobStyle: starMobSpacing
    } = generateRangeStyles({
        controlName: STAR_SPACING,
        attributes,
        propertyName: 'gap'
    });
    /**
     * Block Styles
     */
    const deskStyles = `
		${
            slideDeskMargin
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider {
					${slideDeskMargin ? slideDeskMargin : ''}
				}`
                : ''
        }
		${
            slideDeskPadding
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider.${navContainerPosition}.${navPosition} {
                    ${slideDeskPadding ? slideDeskPadding : ''}
				}`
                : ''
        }
		${
            slideDeskHeight
                ? `.${uniqueID} .gutslider-testimonial-wrapper {
					${slideDeskHeight ? slideDeskHeight : ''}
				}`
                : ''
        }
        ${
            imgDeskGap
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-preset-2 .gutslider-testimonial-inner {
                    ${imgDeskGap ? imgDeskGap : ''}
                }`
                : ''
        }
        ${
            starDeskSpacing
                ? `.${uniqueID} .gutslider-testimonial-wrapper .gkits-star-rating {
                    ${starDeskSpacing ? starDeskSpacing : ''}
                }`
                : ''
        }
        ${
            starDeskWidth || starDeskHeight || ratingColor
                ? `.${uniqueID} .gutslider-testimonial-wrapper .gkits-star-rating svg {
                    ${starDeskWidth ? starDeskWidth : ''}
                    ${starDeskHeight ? starDeskHeight : ''}
                    ${ratingColor ? `fill: ${ratingColor};` : ''}
                }`
                : ''
        }
		${
            contentDeskWidth || contentDeskAlign || contentDeskPadding || contentDeskHPos
                ? `.${uniqueID} .swiper .gutslider-testimonial-inner {
					${contentDeskWidth ? contentDeskWidth : ''}
					${contentDeskAlign ? contentDeskAlign : ''}
                    ${contentDeskPadding ? contentDeskPadding : ''}
                    ${contentDeskHPos ? contentDeskHPos : ''}
				}`
                : ''
        }

		${
            designationColor || designationDeskSpacing || designationDeskTypo || designationDelay
                ? `.${uniqueID} .gutslider-testimonial-wrapper .gutslider-designation { 
					${designationColor ? `color: ${designationColor};` : ''}
					${designationDeskSpacing ? designationDeskSpacing : ''}
					${designationDeskTypo ? designationDeskTypo : ''}
                    ${designationDelay ? `transition-delay: ${designationDelay}s !important;` : ''}
				}`
                : ''
        }
        ${
            imgDeskAlign
                ? `
                .${uniqueID} .gutslider-testimonial-wrapper .author-photo-outer {
                    ${imgDeskAlign ? imgDeskAlign : ''}
                }
            `
                : ''
        }
        ${
            imgBorderDeskStyle ||
            imgBorderRDeskStyles ||
            imgDeskPadding ||
            imgDeskMargin ||
            imgDeskWidth ||
            imgDeskHeight ||
            photoDelay ||
            imgDeskCustomHeight
                ? `
                .${uniqueID} .gutslider-testimonial-wrapper .author-photo {
                    ${imgBorderDeskStyle ? imgBorderDeskStyle : ''}
                    ${imgBorderRDeskStyles ? imgBorderRDeskStyles : ''}
                    ${imgDeskPadding ? imgDeskPadding : ''}
                    ${imgDeskMargin ? imgDeskMargin : ''}
                    ${imgDeskWidth ? imgDeskWidth : ''}
                    ${imgDeskCustomHeight ? imgDeskCustomHeight : imgDeskHeight}
                    ${photoDelay ? `transition-delay: ${photoDelay}s !important;` : ''} 
                }
            `
                : ''
        }
        ${
            imgBorderRDeskStyles
                ? `
                .${uniqueID} .gutslider-testimonial-wrapper .author-photo img{
                    ${imgBorderRDeskStyles ? imgBorderRDeskStyles : ''}
                }
            `
                : ''
        }
		${
            nameColor || nameDeskSpacing || nameDeskTypo || nameDelay
                ? `.${uniqueID} .gutslider-testimonial-wrapper .gutslider-name { 
					${nameColor ? `color: ${nameColor};` : ''}
					${nameDeskSpacing ? nameDeskSpacing : ''}
					${nameDeskTypo ? nameDeskTypo : ''}
                    ${nameDelay ? `transition-delay: ${nameDelay}s !important;` : ''}
				}`
                : ''
        }
		${
            testimonialColor || descDeskSpacing || descDeskTypo || testimonialDelay
                ? `.${uniqueID} .gutslider-testimonial-wrapper .gutslider-testimonial {
					${testimonialColor ? `color: ${testimonialColor};` : ''}
					${descDeskSpacing ? descDeskSpacing : ''}
					${descDeskTypo ? descDeskTypo : ''}
                    ${testimonialDelay ? `transition-delay: ${testimonialDelay}s !important;` : ''}
				}`
                : ''
        }
		
		${
            iconDeskStyles ||
            iconDeskPadding ||
            iconDeskMargin ||
            socialIconColors.color ||
            socialIconColors.bgColor ||
            borderDeskStyle ||
            iconDeskHeight ||
            iconDeskWidth ||
            socialDelay
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .social-profiles .social-profile { 
						${iconDeskStyles ? iconDeskStyles : ''}
						${iconDeskPadding ? iconDeskPadding : ''} 
						${iconDeskMargin ? iconDeskMargin : ''} 
						${socialIconColors.color ? `color: ${socialIconColors.color};` : ''}
						${socialIconColors.bgColor ? `background-color: ${socialIconColors.bgColor};` : ''}
						${borderDeskStyle ? borderDeskStyle : ''}
                        ${iconDeskHeight ? iconDeskHeight : ''}
                        ${iconDeskWidth ? iconDeskWidth : ''}
                        ${iconDeskSpacing ? iconDeskSpacing : ''}
                        ${socialDelay ? `transition-delay: ${socialDelay}s !important;` : ''}
					}`
                : ''
        }
        ${
            iconDeskSpacing
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .social-profiles a + a{
                ${iconDeskSpacing ? iconDeskSpacing : ''}
            }`
                : ''
        }
		${
            socialIconColors.hoverColor || socialIconColors.hoverBgColor || borderHoverColor
                ? ` 
				.${uniqueID}.wp-block-gutsliders-testimonial-slider .social-profiles .social-profile:hover {
					${socialIconColors.hoverColor ? `color: ${socialIconColors.hoverColor};` : ''}
					${socialIconColors.hoverBgColor ? `background-color: ${socialIconColors.hoverBgColor};` : ''}
					${borderHoverColor ? borderHoverColor : ''}
				}
			`
                : ''
        }
        ${
            showNavigation && (navDeskMargin || navDeskGap)
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-nav {
                ${navDeskMargin ? navDeskMargin : ''}
                ${navDeskGap ? navDeskGap : ''}
            } `
                : ''
        }
        ${
            showNavigation && (navColor || navBgColor || navBorderDeskStyle || navBradiusDeskStyles || navDeskHeight || navDeskWidth)
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-button-prev, .${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-prev, .${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-button-next, .${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-next {
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
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-button-prev:hover, .${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-prev:hover, .${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-button-next:hover, .${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-next:hover {
                    ${navHoverColor ? `color: ${navHoverColor};` : ''}
                    ${navHoverColor ? `fill: ${navHoverColor};` : ''}
                    ${navHoverBgColor ? `background-color: ${navHoverBgColor};` : ''}
                    ${navBorderHoverColor ? navBorderHoverColor : ''}
				}`
                : ''
        }
        ${
            showNavigation && navIconDeskSize
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-button-prev::after, .${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-prev svg, .${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-button-next::after, .${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-next svg {
                    ${navIconDeskSize ? navIconDeskSize : ''}
                }`
                : ''
        }
        ${
            showNavigation && (navCustomIconDeskSize || navCustomIconDeskHeight)
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-prev svg, .${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-next svg {
                    ${navCustomIconDeskSize ? navCustomIconDeskSize : ''}
                    ${navCustomIconDeskHeight ? navCustomIconDeskHeight : ''}
                }`
                : ''
        }
        ${
            showPagination && pagDeskMargin
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination {
            ${pagDeskMargin ? pagDeskMargin : ''}`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (pagBorderDeskStyle || pagBradiusDeskStyles || pagDeskHeight || pagDeskWidth || pagColor)
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-bullet {
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
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-bullet:hover {
                    ${pagBorderHoverColor ? pagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (apagBorderDeskStyle || apagBradiusDeskStyles || apagDeskHeight || apagDeskWidth || activePagColor)
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-bullet-active {
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
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-bullet-active:hover {
                    ${apagBorderHoverColor ? apagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && (fracDividerColor || fracDeskSize)
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-fraction {
                    ${fracDividerColor ? `color: ${fracDividerColor};` : ''}
                    ${fracDeskSize ? fracDeskSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && pagFracColor
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-total {
                    ${pagFracColor ? `color: ${pagFracColor};` : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && pagFracCurrentColor
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-current {
                    ${pagFracCurrentColor ? `color: ${pagFracCurrentColor};` : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && (progressColor || progDeskSize)
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-progressbar {
                    ${progressColor ? `background: ${progressColor};` : ''}
                    ${progDeskSize ? progDeskSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && activeProgressColor
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
                    ${activeProgressColor ? `background: ${activeProgressColor};` : ''}
                }`
                : ''
        }
       
	`;
    const tabStyles = `
		${
            slideTabMargin
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider {
					${slideTabMargin ? slideTabMargin : ''}
				}`
                : ''
        }
        ${
            slideTabPadding
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider.${navContainerPosition}.${navPosition} {
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
            contentTabWidth || contentTabAlign || contentTabPadding || contentTabHPos
                ? `.${uniqueID} .swiper .gutslider-testimonial-inner {
					${contentTabWidth ? contentTabWidth : ''}
					${contentTabAlign ? contentTabAlign : ''}
                    ${contentTabPadding ? contentTabPadding : ''}
                    ${contentTabHPos ? contentTabHPos : ''}
				}`
                : ''
        }
        ${
            imgTabGap
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-preset-2 .gutslider-testimonial-inner {
                    ${imgTabGap ? imgTabGap : ''}
                }`
                : ''
        }
        ${
            starTabSpacing
                ? `.${uniqueID} .gutslider-testimonial-wrapper .gkits-star-rating {
                    ${starTabSpacing ? starTabSpacing : ''}
                }`
                : ''
        }
        ${
            starTabWidth || starTabHeight
                ? `.${uniqueID} .gutslider-testimonial-wrapper .gkits-star-rating svg {
                    ${starTabWidth ? starTabWidth : ''}
                    ${starTabHeight ? starTabHeight : ''}
                }`
                : ''
        }
        ${
            imgTabAlign
                ? `
                .${uniqueID} .gutslider-testimonial-wrapper .author-photo-outer {
                    ${imgTabAlign ? imgTabAlign : ''}
                }
            `
                : ''
        }
        ${
            imgBorderTabStyle || imgBorderRTabStyles || imgTabPadding || imgTabMargin || imgTabWidth || imgTabHeight || imgTabCustomHeight
                ? `
                .${uniqueID} .gutslider-testimonial-wrapper .author-photo {

                    ${imgBorderTabStyle ? imgBorderTabStyle : ''}
                    ${imgBorderRTabStyles ? imgBorderRTabStyles : ''}
                    ${imgTabPadding ? imgTabPadding : ''}
                    ${imgTabMargin ? imgTabMargin : ''}
                    ${imgTabWidth ? imgTabWidth : ''}
                    ${imgTabCustomHeight ? imgTabCustomHeight : imgTabHeight}
                }
            `
                : ''
        }
        ${
            imgBorderRTabStyles
                ? `
                .${uniqueID} .gutslider-testimonial-wrapper .author-photo img{
                    ${imgBorderRTabStyles ? imgBorderRTabStyles : ''}
                }
            `
                : ''
        }
		${
            designationTabSpacing || designationTabTypo
                ? `.${uniqueID} .gutslider-testimonial-wrapper .gutslider-designation { 
					${designationTabSpacing ? designationTabSpacing : ''}
					${designationTabTypo ? designationTabTypo : ''}
				}`
                : ''
        }
		${
            nameTabSpacing || nameTabTypo
                ? `.${uniqueID} .gutslider-testimonial-wrapper .gutslider-name { 
				${nameTabSpacing ? nameTabSpacing : ''}
				${nameTabTypo ? nameTabTypo : ''}
			}`
                : ''
        }
		${
            descTabSpacing || descTabTypo
                ? `.${uniqueID} .gutslider-testimonial-wrapper .gutslider-testimonial {
					${descTabSpacing ? descTabSpacing : ''}
					${descTabTypo ? descTabTypo : ''}
				}`
                : ''
        }
		${
            iconTabStyles || iconTabPadding || iconTabMargin || borderTabStyle || iconTabHeight || iconTabWidth
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .social-profiles .social-profile { 
					${iconTabStyles ? iconTabStyles : ''} 
					${iconTabPadding ? iconTabPadding : ''} 
					${iconTabMargin ? iconTabMargin : ''}
					${borderTabStyle ? borderTabStyle : ''}
                    ${iconTabHeight ? iconTabHeight : ''}
                    ${iconTabWidth ? iconTabWidth : ''}
				}`
                : ''
        }
        ${
            iconTabSpacing
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .social-profiles a + a{
                ${iconTabSpacing ? iconTabSpacing : ''}
            }`
                : ''
        }
        ${
            showNavigation && (navTabMargin || navTabGap)
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-nav {
                ${navTabMargin ? navTabMargin : ''}
                ${navTabGap ? navTabGap : ''}
            } `
                : ''
        }
        ${
            showNavigation && (navBorderTabStyle || navBradiusTabStyles || navTabHeight || navTabWidth)
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-button-prev, .${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-prev, .${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-button-next, .${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-next {
                    ${navBorderTabStyle ? navBorderTabStyle : ''}
                    ${navBradiusTabStyles ? navBradiusTabStyles : ''}
                    ${navTabHeight ? navTabHeight : ''}
                    ${navTabWidth ? navTabWidth : ''}

				}`
                : ''
        }
        ${
            showNavigation && navIconTabSize
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-button-prev::after, .${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-button-next::after {
                    ${navIconTabSize ? navIconTabSize : ''}
                }`
                : ''
        }
        ${
            showNavigation && (navCustomIconTabSize || navCustomIconTabHeight)
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-prev svg, .${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-next svg {
                    ${navCustomIconTabSize ? navCustomIconTabSize : ''}
                    ${navCustomIconTabHeight ? navCustomIconTabHeight : ''}
                }`
                : ''
        }
        ${
            showPagination && pagTabMargin
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination {
            ${pagTabMargin ? pagTabMargin : ''}`
                : ''
        }
        ${
            showPagination && paginationType === 'bullets' && (pagBorderTabStyle || pagBradiusTabStyles || pagTabHeight || pagTabWidth)
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-bullet {
                    ${pagBorderTabStyle ? pagBorderTabStyle : ''}
                    ${pagBradiusTabStyles ? pagBradiusTabStyles : ''}
                    ${pagTabHeight ? pagTabHeight : ''}
                    ${pagTabWidth ? pagTabWidth : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'bullets' && (apagBorderTabStyle || apagBradiusTabStyles || apagTabHeight || apagTabWidth)
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-bullet-active {
                    ${apagBorderTabStyle ? apagBorderTabStyle : ''}
                    ${apagBradiusTabStyles ? apagBradiusTabStyles : ''}
                    ${apagTabHeight ? apagTabHeight : ''}
                    ${apagTabWidth ? apagTabWidth : ''}
            }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && fracTabSize
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-fraction {
                    ${fracTabSize ? fracTabSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && progTabSize
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-progressbar {
                    ${progTabSize ? progTabSize : ''}
                }`
                : ''
        }
	`;
    const mobStyles = `
		${
            slideMobMargin
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider {
					${slideMobMargin ? slideMobMargin : ''}
				}`
                : ''
        }
        ${
            slideMobPadding
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider.${navContainerPosition}.${navPosition} {
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
            contentMobWidth || contentMobAlign || contentMobPadding || contentMobHPos
                ? `.${uniqueID} .swiper .gutslider-testimonial-inner {
					${contentMobWidth ? contentMobWidth : ''}
					${contentMobAlign ? contentMobAlign : ''}
                    ${contentMobPadding ? contentMobPadding : ''}
                    ${contentMobHPos ? contentMobHPos : ''}
				}`
                : ''
        }
        ${
            imgMobGap
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-preset-2 .gutslider-testimonial-inner {
                    ${imgMobGap ? imgMobGap : ''}
                }`
                : ''
        }
        ${
            starMobSpacing
                ? `.${uniqueID} .gutslider-testimonial-wrapper .gkits-star-rating {
                    ${starMobSpacing ? starMobSpacing : ''}
                }`
                : ''
        }
        ${
            starMobWidth || starMobHeight
                ? `.${uniqueID} .gutslider-testimonial-wrapper .gkits-star-rating svg {
                    ${starMobWidth ? starMobWidth : ''}
                    ${starMobHeight ? starMobHeight : ''}
                }`
                : ''
        }
        ${
            imgMobAlign
                ? `
                .${uniqueID} .gutslider-testimonial-wrapper .author-photo-outer {
                    ${imgMobAlign ? imgMobAlign : ''}
                }
            `
                : ''
        }
        ${
            imgBorderMobStyle || imgBorderRMobStyles || imgMobPadding || imgMobMargin || imgMobWidth || imgMobHeight || imgMobCustomHeight
                ? `
                .${uniqueID} .gutslider-testimonial-wrapper .author-photo {

                    ${imgBorderMobStyle ? imgBorderMobStyle : ''}
                    ${imgBorderRMobStyles ? imgBorderRMobStyles : ''}
                    ${imgMobPadding ? imgMobPadding : ''}
                    ${imgMobMargin ? imgMobMargin : ''}
                    ${imgMobWidth ? imgMobWidth : ''}
                    ${imgMobCustomHeight ? imgMobCustomHeight : imgMobHeight}
                }
            `
                : ''
        }
        ${
            imgBorderRMobStyles
                ? `
                .${uniqueID} .gutslider-testimonial-wrapper .author-photo img{
                    ${imgBorderRMobStyles ? imgBorderRMobStyles : ''}
                }
            `
                : ''
        }
		${
            designationMobSpacing || designationMobTypo
                ? `.${uniqueID} .gutslider-testimonial-wrapper .gutslider-designation { 
					${designationMobSpacing ? designationMobSpacing : ''}
					${designationMobTypo ? designationMobTypo : ''}
				}`
                : ''
        }
		${
            nameMobSpacing || nameMobTypo
                ? `.${uniqueID} .gutslider-testimonial-wrapper .gutslider-name { 
				${nameMobSpacing ? nameMobSpacing : ''}
				${nameMobTypo ? nameMobTypo : ''}
			}`
                : ''
        }
		${
            descMobSpacing || descMobTypo
                ? `.${uniqueID} .gutslider-testimonial-wrapper .gutslider-testimonial {
					${descMobSpacing ? descMobSpacing : ''}
					${descMobTypo ? descMobTypo : ''}
				}`
                : ''
        }
		${
            iconMobStyles || iconMobPadding || iconMobMargin || borderMobStyle || iconMobHeight || iconMobWidth
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .social-profiles .social-profile { 
					${iconMobStyles ? iconMobStyles : ''} 
					${iconMobPadding ? iconMobPadding : ''} 
					${iconMobMargin ? iconMobMargin : ''} 
					${borderMobStyle ? borderMobStyle : ''}
                    ${iconMobHeight ? iconMobHeight : ''}
                    ${iconMobWidth ? iconMobWidth : ''}
				}`
                : ''
        }
        ${
            iconMobSpacing
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .social-profiles a + a{
                ${iconMobSpacing ? iconMobSpacing : ''}
            }`
                : ''
        }
        ${
            showNavigation && (navMobMargin || navMobGap)
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-nav {
                ${navMobMargin ? navMobMargin : ''}
                ${navMobGap ? navMobGap : ''}
            } `
                : ''
        }
        ${
            showNavigation && (navBorderMobStyle || navBradiusMobStyles || navMobHeight || navMobWidth)
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-button-prev, .${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-prev, .${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-button-next, .${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-next {
                    ${navBorderMobStyle ? navBorderMobStyle : ''}
                    ${navBradiusMobStyles ? navBradiusMobStyles : ''}
                    ${navMobHeight ? navMobHeight : ''}
                    ${navMobWidth ? navMobWidth : ''}

				}`
                : ''
        }
        ${
            showNavigation && navIconMobSize
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-button-prev::after, .${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-button-next::after {
                    ${navIconMobSize ? navIconMobSize : ''}
                }`
                : ''
        }
        ${
            showNavigation && (navCustomIconMobSize || navCustomIconMobHeight)
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-prev svg, .${uniqueID}.wp-block-gutsliders-testimonial-slider .gutslider-next svg {
                    ${navCustomIconMobSize ? navCustomIconMobSize : ''}
                    ${navCustomIconMobHeight ? navCustomIconMobHeight : ''}
                }`
                : ''
        }
        ${
            showPagination && pagMobMargin
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination {
            ${pagMobMargin ? pagMobMargin : ''}`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (pagBorderMobStyle || pagBradiusMobStyles || pagMobHeight || pagMobWidth || pagColor)
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-bullet {
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
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-bullet:hover {
                    ${pagBorderHoverColor ? pagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination &&
            paginationType === 'bullets' &&
            (apagBorderMobStyle || apagBradiusMobStyles || apagMobHeight || apagMobWidth || activePagColor)
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-bullet-active {
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
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-bullet-active:hover {
                    ${apagBorderHoverColor ? apagBorderHoverColor : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'fraction' && (fracMobSize || fracDividerColor)
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-fraction {
                    ${fracDividerColor ? `color: ${fracDividerColor};` : ''}
                    ${fracMobSize ? fracMobSize : ''}
                }`
                : ''
        }
        ${
            showPagination && paginationType === 'progressbar' && progMobSize
                ? `.${uniqueID}.wp-block-gutsliders-testimonial-slider .swiper-pagination-progressbar {
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

    return <Fragment> {<style>{`${softMinifyCssStrings(blockStyleCss)}`}</style>}</Fragment>;
};

export default DynamicStyle;
