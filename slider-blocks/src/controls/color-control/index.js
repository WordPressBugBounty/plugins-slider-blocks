/**
 * WordPress dependencies
 */
import { BaseControl, Button, ColorIndicator, ColorPicker, Flex, FlexBlock, FlexItem, Popover } from '@wordpress/components';
import { withInstanceId } from '@wordpress/compose';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const ColorControl = ({ label, color, onChange, instanceId }) => {
    const [colorPanel, setColorPanel] = useState(false);
    const id = `color-control-${instanceId}`;

    const colors = wp.data.select('core/editor').getEditorSettings().colors;

    return (
        <div className="gkits-control-container gkits-color-control gkits-mb-0">
            <Flex>
                <FlexBlock>
                    <BaseControl id={id} label={label} />
                </FlexBlock>
                <FlexItem>
                    <Button
                        icon="image-rotate"
                        label={__('Reset', 'slider-blocks')}
                        onClick={() => onChange('')}
                        className={`gkits-reset-button ${color ? 'active' : 'disabled'}`}
                    />
                </FlexItem>
                <FlexItem>
                    <button className="color-indicator" onClick={() => setColorPanel(true)}>
                        <ColorIndicator colorValue={color} />
                    </button>
                    {colorPanel && (
                        <Popover position="bottom right" onFocusOutside={() => setColorPanel(false)} offset={10}>
                            <div className="gkits-color-panel">
                                <ColorPicker color={color} onChangeComplete={value => onChange(value.hex)} disableAlpha={false} />
                                <div className="gkits-colors-palette">
                                    <label className="gkits-label gkits-mb-8" htmlFor="gkits-colors-palette">
                                        {__('Theme Colors', 'slider-blocks')}
                                    </label>
                                    <div id="gkits-colors-palette">
                                        {colors &&
                                            colors.map((paletteColor, index) => {
                                                return (
                                                    <ColorIndicator
                                                        className={`gkits-color-indicator ${paletteColor.color === color ? 'active' : ''}`}
                                                        title={paletteColor.name}
                                                        key={index}
                                                        colorValue={paletteColor.color}
                                                        onClick={() => onChange(paletteColor.color)}
                                                    />
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                        </Popover>
                    )}
                </FlexItem>
            </Flex>
        </div>
    );
};

export default withInstanceId(ColorControl);
