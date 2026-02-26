/**
 * WordPress dependencies
 */
import {
    BaseControl,
    Button,
    ButtonGroup,
    ColorIndicator,
    ColorPicker,
    Flex,
    FlexBlock,
    FlexItem,
    GradientPicker,
    Popover
} from '@wordpress/components';
import { withInstanceId } from '@wordpress/compose';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const gradientOptions = [
    {
        name: 'JShine',
        gradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
        slug: 'jshine'
    },
    {
        name: 'Moonlit Asteroid',
        gradient: 'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
        slug: 'moonlit-asteroid'
    },
    {
        name: 'Rastafarie',
        gradient: 'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
        slug: 'rastafari'
    },
    {
        name: 'Frozen',
        gradient: 'linear-gradient(135deg,#403B4A 0%, #E7E9BB 100%)',
        slug: 'frozen'
    },
    {
        name: 'Mango Pulp',
        gradient: 'linear-gradient(135deg,#F09819 0%, #EDDE5D 100%)',
        slug: 'mango-pulp'
    },
    {
        name: 'Bloody Mary',
        gradient: 'linear-gradient(135deg,#FF512F 0%, #DD2476 100%)',
        slug: 'bloody-mary'
    }
];

const BackgroundControl = ({ instanceId, label, controlName, objAttrs }) => {
    const [colorPanel, setColorPanel] = useState(false);
    const id = `color-control-${instanceId}`;
    const { attributes, setAttributes } = objAttrs;

    const colors = wp.data.select('core/editor').getEditorSettings().colors;

    const { [`${controlName}bgType`]: bgType, [`${controlName}bgColor`]: bgColor, [`${controlName}bgGradient`]: bgGradient } = attributes;

    return (
        <div className="gkits-control-container background-control">
            <Flex>
                <FlexBlock>
                    <BaseControl id={id} label={label} />
                </FlexBlock>
                <FlexItem>
                    <Button
                        className={`gkits-editor-icon gkits-reset-button ${bgColor || bgGradient ? 'active' : 'disabled'}`}
                        icon="image-rotate"
                        label={__('Reset', 'slider-blocks')}
                        onClick={() =>
                            setAttributes({
                                [`${controlName}bgType`]: '',
                                [`${controlName}bgColor`]: '',
                                [`${controlName}bgGradient`]: ''
                            })
                        }
                    />
                </FlexItem>
                <FlexItem>
                    <div className="bg-type">
                        <ButtonGroup>
                            <Button
                                className={`gkits-editor-icon ${bgType === 'color' ? 'active' : ''}`}
                                onClick={() =>
                                    setAttributes({
                                        [`${controlName}bgType`]: 'color'
                                    })
                                }
                            >
                                <svg width="11" height="10" viewBox="0 0 11 10">
                                    <path
                                        fill="#1d2327"
                                        d="M10.6927 1.08247C10.6927 1.08247 10.8502 0.615805 10.5119 0.289139C10.2027 -0.0141947 9.80023 0.149139 9.80023 0.149139C9.4444 0.324139 6.44023 2.17331 5.32606 3.39831C4.8244 3.95831 4.12439 5.60914 4.69023 6.20997C5.2269 6.78164 7.00023 6.11081 7.4844 5.62664C8.68606 4.42497 10.5236 1.44414 10.6927 1.08247ZM0.816895 9.29581C2.19939 8.38581 1.66856 7.30664 2.70106 6.58914C3.24356 6.20997 3.99606 6.22747 4.49773 6.75831C4.86523 7.14914 4.9644 8.25747 4.4044 8.77664C3.48856 9.62247 2.07106 9.68081 0.816895 9.29581Z"
                                    ></path>
                                </svg>
                            </Button>
                            <Button
                                className={`gkits-editor-icon ${bgType === 'gradient' ? 'active' : ''}`}
                                onClick={() =>
                                    setAttributes({
                                        [`${controlName}bgType`]: 'gradient'
                                    })
                                }
                            >
                                <svg width="12" height="12" viewBox="0 0 10 10">
                                    <path
                                        fill="#1d2327"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.11111 1.11111V8.88889H8.88889V1.11111H1.11111ZM0.555556 0C0.248731 0 0 0.248731 0 0.555556V9.44444C0 9.75127 0.248731 10 0.555556 10H9.44444C9.75127 10 10 9.75127 10 9.44444V0.555556C10 0.248731 9.75127 0 9.44444 0H0.555556Z"
                                    ></path>
                                    <path fill="#1d2327" d="M1.66667 1.66667H7.77778L1.66667 7.77778V1.66667Z"></path>
                                </svg>
                            </Button>
                        </ButtonGroup>
                    </div>
                </FlexItem>
            </Flex>
            {bgType === 'color' && (
                <div className="gkits-control-container gkits-color-control">
                    <Flex>
                        <FlexBlock>
                            <BaseControl id={id} label={__('Solid Color', 'slider-blocks')} />
                        </FlexBlock>
                        <FlexItem>
                            <Button
                                icon="image-rotate"
                                label={__('Reset', 'slider-blocks')}
                                onClick={() =>
                                    setAttributes({
                                        [`${controlName}bgColor`]: ''
                                    })
                                }
                                className={`gkits-reset-button ${bgColor ? 'active' : 'disabled'}`}
                            />
                        </FlexItem>
                        <FlexItem>
                            <button className="color-indicator" onClick={() => setColorPanel(true)}>
                                <ColorIndicator colorValue={bgColor} />
                            </button>
                            {colorPanel && (
                                <Popover position="bottom right" onFocusOutside={() => setColorPanel(false)} offset={10}>
                                    <div className="gkits-color-panel">
                                        <ColorPicker
                                            color={bgColor}
                                            onChangeComplete={value =>
                                                setAttributes({
                                                    [`${controlName}bgColor`]: value.hex
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
                                                                    paletteColor.color === bgColor ? 'active' : ''
                                                                }`}
                                                                title={paletteColor.name}
                                                                key={index}
                                                                colorValue={paletteColor.color}
                                                                onClick={() =>
                                                                    setAttributes({
                                                                        [`${controlName}bgColor`]: paletteColor.color
                                                                    })
                                                                }
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
            )}
            {bgType === 'gradient' && (
                <div className="gkits-control-container gkits-gradient-control">
                    <BaseControl id={id} label={__('Gradient Color', 'slider-blocks')} />
                    <GradientPicker
                        __nextHasNoMargin
                        value={bgGradient}
                        onChange={currentGradient =>
                            setAttributes({
                                [`${controlName}bgGradient`]: currentGradient
                            })
                        }
                        gradients={gradientOptions}
                    />
                </div>
            )}
        </div>
    );
};

export default withInstanceId(BackgroundControl);
