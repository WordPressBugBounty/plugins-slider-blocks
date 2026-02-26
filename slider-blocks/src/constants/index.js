/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

// prefix
export const PREFIX = 'gutsliders_';

// Responsive Devices
export const RES_DEVICES = [
    {
        label: __('Desktop', 'slider-blocks'),
        value: 'Desktop',
        icon: (
            <svg width="8" height="7" viewBox="0 0 8 7" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"></path>
            </svg>
        )
    },
    {
        label: __('Tablet', 'slider-blocks'),
        value: 'Tablet',
        icon: (
            <svg width="6" height="7" viewBox="0 0 6 7" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path>
            </svg>
        )
    },
    {
        label: __('Mobile', 'slider-blocks'),
        value: 'Mobile',
        icon: (
            <svg width="4" height="7" viewBox="0 0 4 7" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path>
            </svg>
        )
    }
];

// units
export const GENERAL_UNITS = ['px', 'em', 'rem'];
export const LHLS_UNITS = ['px', 'em'];

// text alignment
export const TEXT_ALIGNS = [
    {
        label: __('Left', 'slider-blocks'),
        value: 'left',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M4 12l10 0" />
                <path d="M4 18l14 0" />
            </svg>
        )
    },
    {
        label: __('Center', 'slider-blocks'),
        value: 'center',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M8 12l8 0" />
                <path d="M6 18l12 0" />
            </svg>
        )
    },
    {
        label: __('Right', 'affiliaterg-block'),
        value: 'right',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 6l16 0" />
                <path d="M10 12l10 0" />
                <path d="M6 18l14 0" />
            </svg>
        )
    }
];

// flex aligns
export const FLEX_HORIZONTAL_ALIGNS = [
    {
        label: __('Left', 'affiliaterg-block'),
        value: 'flex-start',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l0 16" />
                <path d="M8 9m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
            </svg>
        )
    },
    {
        label: __('Center', 'affiliaterg-block'),
        value: 'center',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 12l5 0" />
                <path d="M15 12l5 0" />
                <path d="M9 6m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
            </svg>
        )
    },
    {
        label: __('Right', 'affiliaterg-block'),
        value: 'flex-end',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 4l0 16" />
                <path d="M4 9m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
            </svg>
        )
    }
];

export const FLEX_VERTICAL_ALIGNS = [
    {
        label: __('Top', 'affiliaterg-block'),
        value: 'flex-start',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l16 0" />
                <path d="M9 8m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
            </svg>
        )
    },
    {
        label: __('Middle', 'affiliaterg-block'),
        value: 'center',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 4l0 5" />
                <path d="M12 15l0 5" />
                <path d="M6 9m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
            </svg>
        )
    },
    {
        label: __('Bottom', 'affiliaterg-block'),
        value: 'flex-end',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 20l16 0" />
                <path d="M9 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
            </svg>
        )
    }
];

// Box Shadow Position
export const BOX_SHADOW_POSITION = [
    {
        label: __('Outset', 'affiliaterg-block'),
        value: 'outset'
    },
    {
        label: __('Inset', 'affiliaterg-block'),
        value: 'inset'
    }
];

// Border Style
export const BORDER_STYLES = [
    {
        label: __('Default', 'affiliaterg-block'),
        value: ''
    },
    {
        label: __('None', 'affiliaterg-block'),
        value: 'none'
    },
    {
        label: __('Solid', 'affiliaterg-block'),
        value: 'solid'
    },
    {
        label: __('Dashed', 'affiliaterg-block'),
        value: 'dashed'
    },
    {
        label: __('Dotted', 'affiliaterg-block'),
        value: 'dotted'
    },
    {
        label: __('Double', 'affiliaterg-block'),
        value: 'double'
    },
    {
        label: __('Groove', 'affiliaterg-block'),
        value: 'groove'
    },
    {
        label: __('Ridge', 'affiliaterg-block'),
        value: 'ridge'
    }
];

// Background Types
export const BACKGROUND_TYPES = [
    {
        label: __('Classic', 'slider-blocks'),
        value: 'classic'
    },
    {
        label: __('Gradient', 'slider-blocks'),
        value: 'gradient'
    }
];

// Overlay Types
export const OVERLAY_TYPES = [
    {
        label: __('Classic', 'slider-blocks'),
        value: 'classic'
    },
    {
        label: __('Gradient', 'slider-blocks'),
        value: 'gradient'
    }
];

// Gradient Palettes
export const GRADIENT_PALETTES = [
    {
        name: 'JShine',
        gradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
        slug: 'jshine'
    },
    {
        name: 'Rastafarie',
        gradient: 'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
        slug: 'rastafari'
    },
    {
        name: 'Yoda',
        gradient: 'linear-gradient(135deg,#FF0099 0%, #493240 100%)',
        slug: 'yoda'
    },
    {
        name: 'Piglet',
        gradient: 'linear-gradient(135deg,#ee9ca7 0%, #ffdde1 100%)',
        slug: 'piglet'
    },
    {
        name: 'Cool Blues',
        gradient: 'linear-gradient(135deg,#2193b0 0%, #6dd5ed 100%)',
        slug: 'cool-blues'
    },
    {
        name: 'MegaTron',
        gradient: 'linear-gradient(135deg,#C6FFDD 0%, #FBD786 100%)',
        slug: 'megatron'
    }
];

// Heading Tags
export const HEADING_TAGS = [
    {
        label: __('H1', 'slider-blocks'),
        value: 'h1'
    },
    {
        label: __('H2', 'slider-blocks'),
        value: 'h2'
    },
    {
        label: __('H3', 'slider-blocks'),
        value: 'h3'
    },
    {
        label: __('H4', 'slider-blocks'),
        value: 'h4'
    },
    {
        label: __('H5', 'slider-blocks'),
        value: 'h5'
    },
    {
        label: __('H6', 'slider-blocks'),
        value: 'h6'
    },
    {
        label: __('Div', 'slider-blocks'),
        value: 'div'
    },
    {
        label: __('P', 'slider-blocks'),
        value: 'p'
    },
    {
        label: __('Span', 'slider-blocks'),
        value: 'span'
    }
];

export const tagMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    p: 'p',
    span: 'span'
};

// slider types
export const SLIDER_TYPES = [
    {
        label: __('Slider', 'slider-blocks'),
        value: 'slider'
    },
    {
        label: __('Carousel', 'slider-blocks'),
        value: 'carousel'
    }
];

// animation types
export const ANIMATION_TYPES = [
    {
        label: __('None', 'slider-blocks'),
        value: 'none'
    },
    {
        label: __('Fade Up', 'slider-blocks'),
        value: 'gutanimation gutslider-fadeInUp'
    },
    {
        label: __('Fade Down', 'slider-blocks'),
        value: 'gutanimation gutslider-fadeInDown'
    },
    {
        label: __('Fade Left', 'slider-blocks'),
        value: 'gutanimation gutslider-fadeInLeft'
    },
    {
        label: __('Fade Right', 'slider-blocks'),
        value: 'gutanimation gutslider-fadeInRight'
    },
    {
        label: __('Slide Up', 'slider-blocks'),
        value: 'gutanimation gutslider-slideInUp'
    },
    {
        label: __('Slide Down', 'slider-blocks'),
        value: 'gutanimation gutslider-slideInDown'
    },
    {
        label: __('Slide Left', 'slider-blocks'),
        value: 'gutanimation gutslider-slideInLeft'
    },
    {
        label: __('Slide Right', 'slider-blocks'),
        value: 'gutanimation gutslider-slideInRight'
    }
];

// Slide Effects
export const SLIDE_EFFECTS = [
    {
        label: __('Fade', 'slider-blocks'),
        value: 'fade'
    },
    {
        label: __('Slide', 'slider-blocks'),
        value: 'slide'
    },
    {
        label: __('Coverflow', 'slider-blocks'),
        value: 'coverflow'
    },
    {
        label: __('Flip', 'slider-blocks'),
        value: 'flip'
    },
    {
        label: __('Creative', 'slider-blocks'),
        value: 'creative'
    }
];

// Creative Effects Styles
export const CREATIVE_STYLES = [
    {
        label: __('Style 1', 'slider-blocks'),
        value: 'style-1'
    },
    {
        label: __('Style 2', 'slider-blocks'),
        value: 'style-2'
    },
    {
        label: __('Style 3', 'slider-blocks'),
        value: 'style-3'
    },
    {
        label: __('Style 4', 'slider-blocks'),
        value: 'style-4'
    }
];

export const CE_STYLES = {
    'style-1': {
        prev: {
            shadow: true,
            translate: [0, 0, -400]
        },
        next: {
            translate: ['100%', 0, 0]
        }
    },
    'style-2': {
        prev: {
            shadow: true,
            translate: ['-120%', 0, -500]
        },
        next: {
            shadow: true,
            translate: ['120%', 0, -500]
        }
    },
    'style-3': {
        prev: {
            shadow: true,
            translate: ['-20%', 0, -1]
        },
        next: {
            translate: ['100%', 0, 0]
        }
    },
    'style-4': {
        prev: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [180, 0, 0]
        },
        next: {
            shadow: true,
            translate: [0, 0, -800],
            rotate: [-180, 0, 0]
        }
    }
};

// Carousel Effects
export const CAROUSEL_EFFECTS = [
    {
        label: __('Slide', 'slider-blocks'),
        value: 'slide'
    },
    {
        label: __('Coverflow', 'slider-blocks'),
        value: 'coverflow'
    }
];

/**
 * Pagination Types
 */
export const PAGINATION_TYPES = [
    {
        label: __('Bullets', 'slider-blocks'),
        value: 'bullets'
    },
    {
        label: __('Fraction', 'slider-blocks'),
        value: 'fraction'
    },
    {
        label: __('Progress', 'slider-blocks'),
        value: 'progressbar'
    }
];

/**
 * Nav Container Positions
 */
export const NAV_CONTAINER_POSITIONS = [
    {
        label: __('Inside', 'slider-blocks'),
        value: 'nav_inside'
    },
    {
        label: __('Outside', 'slider-blocks'),
        value: 'nav_outside'
    }
];

/**
 * Navigation Positions
 */
export const NAV_POSITIONS = [
    {
        label: __('Top Left', 'slider-blocks'),
        value: 'nav_tl'
    },
    {
        label: __('Top Center', 'slider-blocks'),
        value: 'nav_tc'
    },
    {
        label: __('Top Right', 'slider-blocks'),
        value: 'nav_tr'
    },
    {
        label: __('Center Center', 'slider-blocks'),
        value: 'nav_cc'
    },
    {
        label: __('Bottom Left', 'slider-blocks'),
        value: 'nav_bl'
    },
    {
        label: __('Bottom Center', 'slider-blocks'),
        value: 'nav_bc'
    },
    {
        label: __('Bottom Right', 'slider-blocks'),
        value: 'nav_br'
    }
];

// Post Query Types
export const QUERY_TYPES = [
    {
        label: __('Latest', 'slider-blocks'),
        value: 'latest_posts'
    },
    {
        label: __('Categories', 'slider-blocks'),
        value: 'specific_categories'
    },
    {
        label: __('Individual', 'slider-blocks'),
        value: 'specific_posts'
    }
];

export const ORDER_BY = [
    { label: __('Date', 'slider-blocks'), value: 'date' },
    { label: __('Title', 'slider-blocks'), value: 'title' },
    { label: __('Last modified date', 'slider-blocks'), value: 'modified' }
];

export const POST_ORDER = [
    { label: __('ASC', 'slider-blocks'), value: 'asc' },
    { label: __('DESC', 'slider-blocks'), value: 'desc' }
];

//  photo effects
export const PHOTO_EFFECTS = [
    {
        label: __('None', 'slider-blocks'),
        value: 'none'
    },
    {
        label: __('Zoom In', 'slider-blocks'),
        value: 'zoom__in'
    },
    {
        label: __('Zoom Out', 'slider-blocks'),
        value: 'zoom__out'
    },
    {
        label: __('Rotate Clockwise', 'slider-blocks'),
        value: 'rotate__clockwise'
    },
    {
        label: __('Rotate Anti Clockwise', 'slider-blocks'),
        value: 'rotate__anti__clockwise'
    },
    {
        label: __('Blur', 'slider-blocks'),
        value: 'blur'
    },
    {
        label: __('Grayscale', 'slider-blocks'),
        value: 'grayscale'
    },
    {
        label: __('Sepia', 'slider-blocks'),
        value: 'sepia'
    },
    {
        label: __('Invert', 'slider-blocks'),
        value: 'invert'
    },
    {
        label: __('Brightness', 'slider-blocks'),
        value: 'brightness'
    }
];

export const HALIGNS = [
    {
        label: __('Left', 'slider-blocks'),
        value: 'margin-right: auto; margin-left: 0;',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l0 16" />
                <path d="M8 9m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
            </svg>
        )
    },
    {
        label: __('Center', 'slider-blocks'),
        value: 'margin-left: auto; margin-right: auto;',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 12l5 0" />
                <path d="M15 12l5 0" />
                <path d="M9 6m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
            </svg>
        )
    },
    {
        label: __('Right', 'slider-blocks'),
        value: 'margin-left: auto; margin-right: 0;',
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 4l0 16" />
                <path d="M4 9m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
            </svg>
        )
    }
];
