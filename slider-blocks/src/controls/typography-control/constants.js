import { __ } from '@wordpress/i18n';

export const fontWeightOptions = [
    { label: __('Default', 'slider-blocks'), value: '' },
    { label: __('100', 'slider-blocks'), value: '100' },
    { label: __('200', 'slider-blocks'), value: '200' },
    { label: __('300', 'slider-blocks'), value: '300' },
    { label: __('400', 'slider-blocks'), value: '400' },
    { label: __('500', 'slider-blocks'), value: '500' },
    { label: __('600', 'slider-blocks'), value: '600' },
    { label: __('700', 'slider-blocks'), value: '700' },
    { label: __('800', 'slider-blocks'), value: '800' },
    { label: __('900', 'slider-blocks'), value: '900' }
];

export const textTransformOptions = [
    { label: __('None', 'slider-blocks'), value: 'none' },
    { label: __('aa', 'slider-blocks'), value: 'lowercase' },
    { label: __('Aa', 'slider-blocks'), value: 'capitalize' },
    { label: __('AA', 'slider-blocks'), value: 'uppercase' }
];

export const textDecorationOptions = [
    { label: __('Default', 'slider-blocks'), value: '' },
    { label: __('None', 'slider-blocks'), value: 'none' },
    { label: __('Overline', 'slider-blocks'), value: 'overline' },
    { label: __('Line Through', 'slider-blocks'), value: 'line-through' },
    { label: __('Underline', 'slider-blocks'), value: 'underline' },
    {
        label: __('Underline Oveline', 'slider-blocks'),
        value: 'underline overline'
    }
];

export const fontStyleOptions = [
    { label: __('Normal', 'slider-blocks'), value: 'normal' },
    { label: __('Italic', 'slider-blocks'), value: 'italic' }
];
