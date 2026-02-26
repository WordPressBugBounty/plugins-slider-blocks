/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// video sources
export const VIDEO_SOURCES = [
    { label: __('YouTube', 'slider-blocks'), value: 'youtube' },
    {
        label: __('Vimeo (Pro)', 'slider-blocks'),
        value: 'vimeo',
        disabled: true
    }
];

// Columns
export const COLUMNS = 'columns';
export const COLUMNS_GAP = 'columnsGap';

// General Settings
export const SLIDE_HEIGHT = 'slideHeight';
export const SLIDE_PADDING = 'slidePadding';
export const SLIDE_MARGIN = 'slideMargin';

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

// Iframe
export const IFRAME_BORDER = 'iframeBorder';
export const IFRAME_BRADIUS = 'iframeBorderRadius';
export const IFRAME_PADDING = 'iframePadding';
