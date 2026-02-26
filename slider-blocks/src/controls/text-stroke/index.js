/**
 * WordPress dependencies
 */
import { ColorIndicator, ColorPicker, Popover, RangeControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import ResLabelControl from '../res-label-control';
import ResetButton from '../reset-btn';
const TextStrokeControl = ({ label, value, onChange, onClickReset, min, max, step, strokeColor, onColorChange }) => {
    const [colorPanel, setColorPanel] = useState(false);
    const colors = wp.data.select('core/editor').getEditorSettings().colors;

    return (
        <div className="gkits-stroke gkits-control-container gkits-color-control gkits-mb-24">
            <div className="gkits-label-flex">
                <ResLabelControl label={label} noResBtns={true} />
                <div className="gkits-stroke-color">
                    <button className="color-indicator" onClick={() => setColorPanel(true)}>
                        <ColorIndicator colorValue={strokeColor} />
                    </button>
                    {colorPanel && (
                        <Popover position="bottom right" onFocusOutside={() => setColorPanel(false)} offset={10}>
                            <div className="gkits-color-panel">
                                <ColorPicker color={strokeColor} onChangeComplete={v => onColorChange(v.hex)} disableAlpha={false} />
                                <div className="gkits-colors-palette">
                                    <label className="gkits-label gkits-mb-8" htmlFor="gkits-colors-palette">
                                        {__('Theme Colors', 'slider-blocks')}
                                    </label>
                                    <div id="gkits-colors-palette">
                                        {colors &&
                                            colors.map((paletteColor, index) => {
                                                return (
                                                    <ColorIndicator
                                                        className={`gkits-color-indicator ${
                                                            paletteColor.color === strokeColor ? 'active' : ''
                                                        }`}
                                                        title={paletteColor.name}
                                                        key={index}
                                                        colorValue={paletteColor.color}
                                                        onClick={() => onColorChange(paletteColor.color)}
                                                    />
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                        </Popover>
                    )}
                </div>
            </div>

            <div className="gkits-controls-body">
                <ResetButton onReset={onClickReset} value={value || strokeColor}>
                    <RangeControl value={value} onChange={v => onChange(v)} min={min} max={max} step={step} />
                </ResetButton>
            </div>
        </div>
    );
};

export default TextStrokeControl;
