/**
 * WordPress dependencies
 */
import { Button, Flex, FlexItem, FlexBlock, Popover, ColorIndicator, ColorPicker, RangeControl } from '@wordpress/components';

import { withInstanceId } from '@wordpress/compose';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import ResetButton from '../reset-btn';
import ButtonsGroupControl from '../buttons-group';
import { BOX_SHADOW_POSITION } from '../../constants';
import ResLabelControl from '../res-label-control';

const BoxShadowControl = ({ instanceId, label, controlName, objAttrs }) => {
    const [boxshadowPanel, setBoxshadowPanel] = useState(false);
    const [colorpanel, setColorpanel] = useState(false);

    const colors = wp.data.select('core/editor').getEditorSettings().colors;

    const id = `boxshadow-control-${instanceId}`;

    const { attributes, setAttributes } = objAttrs;

    const {
        [`${controlName}BoxShadowPosition`]: boxShadowPosition = 'outset',
        [`${controlName}BoxShadowColor`]: boxShadowColor,
        [`${controlName}BoxShadowHorizontal`]: boxShadowHorizontal,
        [`${controlName}BoxShadowVertical`]: boxShadowVertical,
        [`${controlName}BoxShadowBlur`]: boxShadowBlur,
        [`${controlName}BoxShadowSpread`]: boxShadowSpread
    } = attributes;

    return (
        <div className="gkits-control-container box-shadow-control">
            <Flex>
                <FlexBlock>
                    <ResLabelControl
                        label={label}
                        requiredProps={{
                            id,
                            setAttributes
                        }}
                        noResBtns={true}
                    />
                </FlexBlock>
                <FlexItem>
                    <Button
                        icon="image-rotate"
                        label={__('Reset', 'slider-blocks')}
                        onClick={() => {
                            setAttributes({
                                [`${controlName}BoxShadowPosition`]: 'outset',
                                [`${controlName}BoxShadowColor`]: '',
                                [`${controlName}BoxShadowHorizontal`]: '',
                                [`${controlName}BoxShadowVertical`]: '',
                                [`${controlName}BoxShadowBlur`]: '',
                                [`${controlName}BoxShadowSpread`]: ''
                            });
                        }}
                        className={`gkits-reset-button range-btn ${
                            boxShadowColor || boxShadowHorizontal || boxShadowVertical || boxShadowSpread || boxShadowBlur
                                ? 'gkits-reset-button'
                                : 'disabled'
                        }`}
                    />
                    <Button className="shadow-indicator" onClick={() => setBoxshadowPanel(true)} icon="admin-appearance" />
                    {boxshadowPanel && (
                        <Popover position="bottom right" onFocusOutside={() => setBoxshadowPanel(false)} offset={10}>
                            <div className="gkits-shadow-panel">
                                <div className="position">
                                    <div className="gkits-mb-8">
                                        <ResLabelControl
                                            label={__('Position', 'slider-blocks')}
                                            requiredProps={{
                                                id,
                                                setAttributes
                                            }}
                                            noResBtns={true}
                                        />
                                    </div>
                                    <ButtonsGroupControl
                                        value={boxShadowPosition}
                                        onChange={data =>
                                            setAttributes({
                                                [`${controlName}BoxShadowPosition`]: data
                                            })
                                        }
                                        options={BOX_SHADOW_POSITION}
                                        hasIcons={false}
                                    />
                                </div>
                                <div className="box-shadow-color-picker">
                                    <Flex>
                                        <FlexBlock>
                                            <div className="gkits-mb-8">
                                                <ResLabelControl
                                                    label={__('Color', 'slider-blocks')}
                                                    requiredProps={{
                                                        id,
                                                        setAttributes
                                                    }}
                                                    noResBtns={true}
                                                />
                                            </div>
                                        </FlexBlock>
                                        <FlexItem>
                                            <Button
                                                icon="image-rotate"
                                                label={__('Reset', 'slider-blocks')}
                                                onClick={() =>
                                                    setAttributes({
                                                        [`${controlName}BoxShadowColor`]: ''
                                                    })
                                                }
                                                className={`gkits-reset-button ${boxShadowColor ? 'active' : 'disabled'}`}
                                            />
                                        </FlexItem>
                                        <FlexItem>
                                            <button className="color-indicator" onClick={() => setColorpanel(true)}>
                                                <ColorIndicator colorValue={boxShadowColor} />
                                            </button>
                                        </FlexItem>
                                    </Flex>

                                    {colorpanel && (
                                        <Popover onFocusOutside={() => setColorpanel(false)} position="bottom center" offset={5}>
                                            <ColorPicker
                                                color={boxShadowColor}
                                                onChangeComplete={value =>
                                                    setAttributes({
                                                        [`${controlName}BoxShadowColor`]: value.hex
                                                    })
                                                }
                                                disableAlpha={false}
                                            />
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
                                                                        paletteColor.color === boxShadowColor ? 'active' : ''
                                                                    }`}
                                                                    title={paletteColor.name}
                                                                    key={index}
                                                                    colorValue={paletteColor.color}
                                                                    onClick={() =>
                                                                        setAttributes({
                                                                            [`${controlName}BoxShadowColor`]: paletteColor.color
                                                                        })
                                                                    }
                                                                />
                                                            );
                                                        })}
                                                </div>
                                            </div>
                                        </Popover>
                                    )}
                                </div>
                                <div className="gkits-mb-16">
                                    <ResLabelControl
                                        label={__('Horizontal', 'slider-blocks')}
                                        requiredProps={{
                                            id,
                                            setAttributes
                                        }}
                                        noResBtns={true}
                                    />
                                    <ResetButton
                                        onReset={() =>
                                            setAttributes({
                                                [`${controlName}BoxShadowHorizontal`]: ''
                                            })
                                        }
                                        value={boxShadowHorizontal}
                                    >
                                        <RangeControl
                                            value={boxShadowHorizontal}
                                            onChange={data =>
                                                setAttributes({
                                                    [`${controlName}BoxShadowHorizontal`]: data
                                                })
                                            }
                                            min={-100}
                                            max={100}
                                        />
                                    </ResetButton>
                                </div>
                                <div className="gkits-mb-16">
                                    <ResLabelControl
                                        label={__('Vertical', 'slider-blocks')}
                                        requiredProps={{
                                            id,
                                            setAttributes
                                        }}
                                        noResBtns={true}
                                    />
                                    <ResetButton
                                        onReset={() =>
                                            setAttributes({
                                                [`${controlName}BoxShadowVertical`]: ''
                                            })
                                        }
                                        value={boxShadowVertical}
                                    >
                                        <RangeControl
                                            value={boxShadowVertical}
                                            onChange={data =>
                                                setAttributes({
                                                    [`${controlName}BoxShadowVertical`]: data
                                                })
                                            }
                                            min={-100}
                                            max={100}
                                        />
                                    </ResetButton>
                                </div>
                                <div className="gkits-mb-16">
                                    <ResLabelControl
                                        label={__('Blur', 'slider-blocks')}
                                        requiredProps={{
                                            id,
                                            setAttributes
                                        }}
                                        noResBtns={true}
                                    />
                                    <ResetButton
                                        onReset={() =>
                                            setAttributes({
                                                [`${controlName}BoxShadowBlur`]: ''
                                            })
                                        }
                                        value={boxShadowBlur}
                                    >
                                        <RangeControl
                                            value={boxShadowBlur}
                                            onChange={data =>
                                                setAttributes({
                                                    [`${controlName}BoxShadowBlur`]: data
                                                })
                                            }
                                            min={0}
                                            max={100}
                                        />
                                    </ResetButton>
                                </div>
                                <ResLabelControl
                                    label={__('Spread', 'slider-blocks')}
                                    requiredProps={{
                                        id,
                                        setAttributes
                                    }}
                                    noResBtns={true}
                                />
                                <ResetButton
                                    onReset={() =>
                                        setAttributes({
                                            [`${controlName}BoxShadowSpread`]: ''
                                        })
                                    }
                                    value={boxShadowSpread}
                                >
                                    <RangeControl
                                        value={boxShadowSpread}
                                        onChange={data =>
                                            setAttributes({
                                                [`${controlName}BoxShadowSpread`]: data
                                            })
                                        }
                                        min={0}
                                        max={100}
                                    />
                                </ResetButton>
                            </div>
                        </Popover>
                    )}
                </FlexItem>
            </Flex>
        </div>
    );
};

export default withInstanceId(BoxShadowControl);
