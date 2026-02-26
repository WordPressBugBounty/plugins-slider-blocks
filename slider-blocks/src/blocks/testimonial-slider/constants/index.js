/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
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
export const IMG_STYLES = [
    {
        label: __('Separate', 'slider-blocks'),
        value: ''
    },
    {
        label: __('Inline', 'slider-blocks'),
        value: 'inline'
    }
];
export const IMAGE_POSITIONS = [
    { label: __('Left', 'slider-blocks'), value: 'left' },
    { label: __('Right', 'slider-blocks'), value: 'right' },
    { label: __('Top', 'slider-blocks'), value: 'top' }
];

export const PHOTO_DIRECTIONS = [
    {
        label: __('Left', 'slider-blocks'),
        value: 'gutslider-photo-left'
    },
    {
        label: __('Right', 'slider-blocks'),
        value: 'gutslider-photo-right'
    }
];

export const SLIDER_TYPES = [
    {
        label: __('Slider', 'slider-blocks'),
        value: ''
    },
    {
        label: __('Carousel', 'slider-blocks'),
        value: 'carousel'
    }
];

export const PHOTO_POSITIONS = [
    {
        label: __('Top', 'slider-blocks'),
        value: 'v-top'
    },
    {
        label: __('Center', 'slider-blocks'),
        value: ''
    },
    {
        label: __('Bottom', 'slider-blocks'),
        value: 'v-bottom'
    }
];

// Columns
export const COLUMNS = 'columns';
export const COLUMNS_GAP = 'columnsGap';

// Block attributes
// Image
export const IMAGE_BORDER = 'imageBorder';
export const IMAGE_RADIUS = 'imageRadius';
export const IMAGE_MARGIN = 'imageMargin';
export const IMAGE_PADDING = 'imagePadding';
export const IMAGE_HEIGHT = 'imageHeight';
export const IMAGE_SIZE = 'imageSize';
export const IMAGE_GAP = 'imageGap';

// name
export const NAME_SPACING = 'nameSpacing';
export const NAME_TYPO = 'nameTypo';

// designation
export const DESIGNATION_SPACING = 'designationSpacing';
export const DESIGNATION_TYPO = 'designationTypo';

// Description
export const TESTIMONIAL_SPACING = 'testimonialSpacing';
export const TESTIMONIAL_TYPO = 'testimonialTypo';

// General Settings
export const SLIDE_HEIGHT = 'slideHeight';
export const SLIDE_PADDING = 'slidePadding';
export const SLIDE_MARGIN = 'slideMargin';

// Content
export const CONTENT_WIDTH = 'contentWidth';
export const CONTENT_ALIGN = 'contentAlign';
export const CONTENT_HALIGN = 'contentHAlign';
export const CONTENT_PADDING = 'contentPadding';

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

// social icons
export const ICON_BORDER = 'iconBorder';
export const ICON_RADIUS = 'iconRadius';
export const ICON_MARGIN = 'iconMargin';
export const ICON_PADDING = 'iconPadding';
export const ICON_SIZE = 'iconSize';
export const ICON_SPACING = 'iconSpacing';

// Start Rating
export const STAR_SIZE = 'starSize';
export const STAR_SPACING = 'starSpacing';
//
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
