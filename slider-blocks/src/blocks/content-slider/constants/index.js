/* eslint-disable import/no-extraneous-dependencies */
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
// Columns
export const COLUMNS = 'columns';
export const COLUMNS_GAP = 'columnsGap';

// Block attributes
export const BTN_BORDER = 'btnBorder';
export const BTN_RADIUS = 'btnRadius';
export const BTN_MARGIN = 'btnMargin';
export const BTN_PADDING = 'btnPadding';
export const BTN_TYPO = 'btnTypo';

// secondary Button
export const SECONDARY_BTN_BORDER = 'secondaryBtnBorder';
export const SECONDARY_BTN_RADIUS = 'secondaryBtnRadius';
export const SECONDARY_BTN_MARGIN = 'secondaryBtnMargin';
export const SECONDARY_BTN_PADDING = 'secondaryBtnPadding';
export const SECONDARY_BTN_TYPO = 'secondaryBtnTypo';

// title
export const TITLE_SPACING = 'titleSpacing';
export const TITLE_TYPO = 'titleTypo';

// subtitle
export const SUBTITLE_SPACING = 'subtitleSpacing';
export const SUBTITLE_TYPO = 'subtitleTypo';

// Description
export const DESC_SPACING = 'descSpacing';
export const DESC_TYPO = 'descTypo';

// General Settings
export const SLIDE_HEIGHT = 'slideHeight';
export const SLIDE_PADDING = 'slidePadding';
export const SLIDE_MARGIN = 'slideMargin';

// Content
export const CONTENT_WIDTH = 'contentWidth';
export const CONTENT_VPOSITION = 'contentVPosition';
export const CONTENT_ALIGN = 'contentAlign';
export const CONTENT_HALIGN = 'contentHAlign';
export const CONTENT_PADDING = 'contentPadding';
export const CONTENT_BORDER = 'contentBorder';
export const CONTENT_BRADIUS = 'contentBorderRadius';
export const CONTENT_MARGIN = 'contentMargin';

//photo
export const PHOTO_SIZE = 'photoSize';
export const PHOTO_BORDER = 'photoBorder';
export const PHOTO_RADIUS = 'photoBorderRadius';
export const PHOTO_PADDING = 'photoPadding';
export const PHOTO_MARGIN = 'photoMargin';

// Navigation Style
export const NAV_BORDER = 'navBorder';
export const NAV_BRADIUS = 'navBorderRadius';
export const NAV_WIDTH = 'navWidth';
export const NAV_HEIGHT = 'navHeight';
export const NAV_MARGIN = 'navMargin';
export const NAV_GAP = 'navGap';

// Navigation icon
export const NAV_ICON_SIZE = 'navIconSize';

// Pagination Style
export const PAG_BORDER = 'pagBorder';
export const PAG_BRADIUS = 'pagBorderRadius';
export const PAG_WIDTH = 'pagWidth';
export const PAG_HEIGHT = 'pagHeight';
export const PAG_MARGIN = 'pagMargin';

// Active Pagination Style
export const APAG_BORDER = 'apagBorder';
export const APAG_BRADIUS = 'apagBorderRadius';
export const APAG_WIDTH = 'apagWidth';
export const APAG_HEIGHT = 'apagHeight';

// Fraction pagination
export const FRAC_SIZE = 'fracSize';

// Progress pagination
export const PROG_SIZE = 'progSize';

// Background Types
export const BACKGROUND_TYPES = [
    {
        label: __('Classic', 'slider-blocks'),
        value: 'classic'
    },
    {
        label: __('Gradient', 'slider-blocks'),
        value: 'gradient'
    },
    {
        label: __('Video (Pro)', 'slider-blocks'),
        value: 'video',
        disabled: true
    }
];
