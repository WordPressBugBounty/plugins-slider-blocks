/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { withInstanceId } from '@wordpress/compose';
import { BaseControl } from '@wordpress/components';

/**
 * External dependencies
 */
import Select from 'react-select';

// googleFonts
import { googleFonts } from './googleFonts';

const FontPicker = ({ value, onChange, instanceId }) => {
    const fonts = [
        { value: '', label: __('Default', 'slider-blocks') },
        { value: 'Arial', label: 'Arial' },
        { value: 'Helvetica', label: 'Helvetica' },
        { value: 'Times-New-Roman', label: 'Times New Roman' },
        { value: 'Georgia', label: 'Georgia' }
    ];

    // push google fonts
    Object.keys(googleFonts).map(font => fonts.push({ value: font, label: googleFonts[font].family }));

    const onFontChange = select => {
        const selectedFont = select.label;
        const googleFontsAttr = ':100,200,300,400,500,600,700,800,900';
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        if (selectedFont) {
            // skip if the selectedFont is system fonts like Arial, Helvetica, Times New Roman, Georgia
            if (
                selectedFont === 'Default' ||
                selectedFont === 'Arial' ||
                selectedFont === 'Helvetica' ||
                selectedFont === 'Times New Roman' ||
                selectedFont === 'Georgia'
            ) {
                onChange(selectedFont);
                return;
            }

            link.href = 'https://fonts.googleapis.com/css?family=' + selectedFont.replace(/ /g, '+') + googleFontsAttr;
            document.head.appendChild(link);
        }
        onChange(selectedFont);
    };

    return (
        <div className="gkits-font-picker">
            <BaseControl id={`gkits-font-picker-${instanceId}`} label={__('Font Family', 'slider-blocks')}>
                <Select
                    classNamePrefix="gkits"
                    value={{
                        value: (value || '').replace(/\s+/g, '-'),
                        label: value
                    }}
                    onChange={onFontChange}
                    options={fonts}
                    unstyled={true}
                    isSearchable={true}
                    isClearable={false}
                />
            </BaseControl>
        </div>
    );
};
export default withInstanceId(FontPicker);
