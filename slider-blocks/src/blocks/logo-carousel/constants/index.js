/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// photo carousel pagination types
export const PHOTO_PAGINATION_TYPES = [
    {
        label: __('Bullets', 'slider-blocks'),
        value: 'bullets'
    },
    {
        label: __('Fraction', 'slider-blocks'),
        value: 'fraction'
    }
];

export const CAPTION_WIDTH_TYPE = [
    {
        label: __('Full', 'slider-blocks'),
        value: 'full__width'
    },
    {
        label: __('Auto', 'slider-blocks'),
        value: 'auto__width'
    }
];

export const PRESETS_TYPES = [
    {
        label: __('Preset 1', 'slider-blocks'),
        value: ''
    },
    {
        label: __('Preset 2', 'slider-blocks'),
        value: 'gutslider-preset-2'
    }
];

// Columns
export const COLUMNS = 'columns';
export const COLUMNS_GAP = 'columnsGap';

// title
export const TITLE_SPACING = 'titleSpacing';
export const TITLE_MARGIN = 'titleMargin';
export const TITLE_TYPO = 'titleTypo';

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

// overlay icon
export const OVERLAY_ICON_SIZE = 'overlayIconSize';
export const OVERLAY_ICON_CONTAINER = 'iconContainer';

// photo
export const PHOTO_BORDER = 'photoBorder';
export const PHOTO_BRADIUS = 'photoBorderRadius';
export const PHOTO_PADDING = 'photoPadding';

// logo
export const LOGO_MAX_WIDTH = 'logoMaxWidth';

// corner position
export const CORNER_POSITIONS = [
    {
        label: __('Top Left', 'slider-blocks'),
        value: 'top__left'
    },
    {
        label: __('Top Right', 'slider-blocks'),
        value: 'top__right'
    },
    {
        label: __('Bottom Left', 'slider-blocks'),
        value: 'bottom__left'
    },
    {
        label: __('Bottom Right', 'slider-blocks'),
        value: 'bottom__right'
    }
];

export const CORNER_POSITIONS_TWO = [
    {
        label: __('Top', 'slider-blocks'),
        value: 'top__left'
    },
    {
        label: __('Bottom', 'slider-blocks'),
        value: 'bottom__left'
    }
];
