/**
 * WordPress dependencies
 */
import { BaseControl, Button, ButtonGroup, Flex, FlexBlock, FlexItem, Popover, RangeControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { GENERAL_UNITS, LHLS_UNITS, PREFIX } from '../../constants';
import ResetButton from '../reset-btn';
import UnitsControl from '../units-control';
import FontPicker from './fontpicker';

/**
 * Internal dependencies
 */
import ResLabelControl from '../res-label-control';
import CustomSelectControl from '../select-control';

//block constant
import { fontStyleOptions, fontWeightOptions, textDecorationOptions, textTransformOptions } from './constants';

//google font list
import { googleFonts } from './fontpicker/googleFonts';

const TypographyControl = ({ label, controlName, objAttrs, instanceId }) => {
    const { attributes, setAttributes } = objAttrs;
    const { resMode } = attributes;
    const {
        [`${PREFIX}${controlName}FontFamily`]: fontFamily,
        [`${controlName}FontWeight`]: fontWeight,
        [`${controlName}FontStyle`]: fontStyle,
        [`${controlName}TextTransform`]: textTransform,
        [`${controlName}TextDecoration`]: textDecoration,

        [`${controlName}FontSizes`]: fontSizes,
        [`${controlName}LineHeights`]: lineHeights,
        [`${controlName}LetterSpacings`]: letterSpacings,

        [`${controlName}FontSizeUnits`]: fontSizeUnits,
        [`${controlName}LineHeightUnits`]: lineHeightUnits,
        [`${controlName}LetterSpacingUnits`]: letterSpacingUnits
    } = attributes;

    const [typographyPanel, setTypographyPanel] = useState(false);

    /**
     * Font Weights
     */
    const [fontWeights, setFontWeights] = useState(fontWeightOptions);
    useEffect(() => {
        const fontFamilyKey = (fontFamily || '').replace(/\s+/g, '-');
        const googleFontWeight = googleFonts[fontFamilyKey] ? googleFonts[fontFamilyKey].variants : [];
        const fontWeightVal = googleFontWeight.map(item => ({
            label: item,
            value: item
        }));
        const fontWeightwithDefault = [{ label: 'Default', value: '' }, ...fontWeightVal];
        setFontWeights(fontWeightwithDefault);
    }, [fontFamily]);

    return (
        <div className="gkits-control-container typography-control">
            <Flex>
                <FlexBlock>
                    <BaseControl id={`typography-control-${instanceId}`} label={label} />
                </FlexBlock>
                <FlexItem>
                    <Button
                        className="afterg-btn"
                        icon={() => (
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                                <path d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z" />
                            </svg>
                        )}
                        label="Edit"
                        onClick={() => setTypographyPanel(true)}
                    />
                </FlexItem>
            </Flex>
            {typographyPanel && (
                <Popover
                    position="bottom left"
                    className="gkits-typography-popover"
                    onClose={() => setTypographyPanel(false)}
                    onFocusOutside={() => setTypographyPanel(false)}
                    offset={5}
                >
                    <div className="gkits-typography-panel gkits-popover">
                        <div className="gkits-mb-8">
                            <Flex align="center">
                                <FlexBlock>
                                    <ResLabelControl
                                        id="font-size-control"
                                        label={__('Font Size', 'slider-blocks')}
                                        requiredProps={{
                                            resMode,
                                            setAttributes
                                        }}
                                    />
                                </FlexBlock>
                                <FlexItem>
                                    {resMode === 'Desktop' && (
                                        <UnitsControl
                                            value={fontSizeUnits && fontSizeUnits.desk}
                                            onChange={value =>
                                                setAttributes({
                                                    [`${controlName}FontSizeUnits`]: {
                                                        ...fontSizeUnits,
                                                        desk: value
                                                    }
                                                })
                                            }
                                            units={GENERAL_UNITS}
                                        />
                                    )}
                                    {resMode === 'Tablet' && (
                                        <UnitsControl
                                            value={fontSizeUnits && fontSizeUnits.tab}
                                            onChange={value =>
                                                setAttributes({
                                                    [`${controlName}FontSizeUnits`]: {
                                                        ...fontSizeUnits,
                                                        tab: value
                                                    }
                                                })
                                            }
                                            units={GENERAL_UNITS}
                                        />
                                    )}
                                    {resMode === 'Mobile' && (
                                        <UnitsControl
                                            value={fontSizeUnits && fontSizeUnits.mob}
                                            onChange={value =>
                                                setAttributes({
                                                    [`${controlName}FontSizeUnits`]: {
                                                        ...fontSizeUnits,
                                                        mob: value
                                                    }
                                                })
                                            }
                                            units={GENERAL_UNITS}
                                        />
                                    )}
                                </FlexItem>
                            </Flex>
                            <div className="gkits-controls-body" id="font-size-control">
                                {resMode === 'Desktop' && (
                                    <div className="single-rangle">
                                        <ResetButton
                                            onReset={() =>
                                                setAttributes({
                                                    [`${controlName}FontSizes`]: {
                                                        ...fontSizes,
                                                        desk: ''
                                                    },
                                                    [`${controlName}FontSizeUnits`]: {
                                                        ...fontSizeUnits,
                                                        desk: 'px'
                                                    }
                                                })
                                            }
                                            value={fontSizes && fontSizes.desk}
                                        >
                                            <RangeControl
                                                value={fontSizes && fontSizes.desk}
                                                onChange={value =>
                                                    setAttributes({
                                                        [`${controlName}FontSizes`]: {
                                                            ...fontSizes,
                                                            desk: value
                                                        }
                                                    })
                                                }
                                                min={1}
                                                max={200}
                                                step={
                                                    fontSizeUnits && (fontSizeUnits.desk === 'em' || fontSizeUnits.desk === 'rem')
                                                        ? 0.01
                                                        : 1
                                                }
                                            />
                                        </ResetButton>
                                    </div>
                                )}
                                {resMode === 'Tablet' && (
                                    <div className="single-rangle">
                                        <ResetButton
                                            onReset={() =>
                                                setAttributes({
                                                    [`${controlName}FontSizes`]: {
                                                        ...fontSizes,
                                                        tab: ''
                                                    },
                                                    [`${controlName}FontSizeUnits`]: {
                                                        ...fontSizeUnits,
                                                        tab: 'px'
                                                    }
                                                })
                                            }
                                            value={fontSizes && fontSizes.tab}
                                        >
                                            <RangeControl
                                                value={fontSizes && fontSizes.tab}
                                                onChange={value =>
                                                    setAttributes({
                                                        [`${controlName}FontSizes`]: {
                                                            ...fontSizes,
                                                            tab: value
                                                        }
                                                    })
                                                }
                                                min={1}
                                                max={200}
                                                step={
                                                    fontSizeUnits && (fontSizeUnits.tab === 'em' || fontSizeUnits.tab === 'rem') ? 0.01 : 1
                                                }
                                            />
                                        </ResetButton>
                                    </div>
                                )}
                                {resMode === 'Mobile' && (
                                    <div className="single-rangle">
                                        <ResetButton
                                            onReset={() =>
                                                setAttributes({
                                                    [`${controlName}FontSizes`]: {
                                                        ...fontSizes,
                                                        mob: ''
                                                    },
                                                    [`${controlName}FontSizeUnits`]: {
                                                        ...fontSizeUnits,
                                                        mob: 'px'
                                                    }
                                                })
                                            }
                                            value={fontSizes && fontSizes.mob}
                                        >
                                            <RangeControl
                                                value={fontSizes && fontSizes.mob}
                                                onChange={value =>
                                                    setAttributes({
                                                        [`${controlName}FontSizes`]: {
                                                            ...fontSizes,
                                                            mob: value
                                                        }
                                                    })
                                                }
                                                min={1}
                                                max={200}
                                                step={
                                                    fontSizeUnits && (fontSizeUnits.mob === 'em' || fontSizeUnits.mob === 'rem') ? 0.01 : 1
                                                }
                                            />
                                        </ResetButton>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="gkits-mb-16">
                            <FontPicker
                                value={fontFamily}
                                onChange={value =>
                                    setAttributes({
                                        [`${PREFIX}${controlName}FontFamily`]: value
                                    })
                                }
                            />
                        </div>
                        <div className="gkits-mb-16">
                            <CustomSelectControl
                                label={__('Font Weight', 'slider-blocks')}
                                value={fontWeight}
                                options={fontWeights}
                                onChange={weight => {
                                    setAttributes({
                                        [`${controlName}FontWeight`]: weight
                                    });
                                }}
                            />
                        </div>
                        <div className="gkits-mb-16">
                            <Flex>
                                <FlexBlock>
                                    <label htmlFor="font-style-control" className="gkits-label">
                                        {__('Font Style', 'slider-blocks')}
                                    </label>
                                </FlexBlock>
                                <FlexItem>
                                    <ButtonGroup id="font-style-control" className="gkits-btn-group">
                                        {fontStyleOptions &&
                                            fontStyleOptions.map((item, index) => {
                                                return (
                                                    <Button
                                                        key={index}
                                                        className={`font-style-btn ${item.value === fontStyle ? 'active' : ''}`}
                                                        onClick={() =>
                                                            setAttributes({
                                                                [`${controlName}FontStyle`]: item.value
                                                            })
                                                        }
                                                    >
                                                        {item.label}
                                                    </Button>
                                                );
                                            })}
                                    </ButtonGroup>
                                </FlexItem>
                            </Flex>
                        </div>
                        <div className="gkits-mb-16">
                            <CustomSelectControl
                                label={__('Text Decoration', 'slider-blocks')}
                                value={textDecoration}
                                onChange={value =>
                                    setAttributes({
                                        [`${controlName}TextDecoration`]: value
                                    })
                                }
                                options={textDecorationOptions}
                            />
                        </div>
                        <div className="gkits-mb-24">
                            <label htmlFor="text-transform-control" className="gkits-label gkits-mb-8 gkits-inline-block">
                                {__('Text Transform', 'slider-blocks')}
                            </label>
                            <ButtonGroup id="text-transform-control" className="gkits-btn-group gkits-full-group text-transform-btn-group">
                                {textTransformOptions &&
                                    textTransformOptions.map((item, index) => {
                                        return (
                                            <Button
                                                key={index}
                                                className={`text-transform-btn ${item.value === textTransform ? 'active' : ''}`}
                                                onClick={() =>
                                                    setAttributes({
                                                        [`${controlName}TextTransform`]: item.value
                                                    })
                                                }
                                            >
                                                {item.label}
                                            </Button>
                                        );
                                    })}
                            </ButtonGroup>
                        </div>
                        <div className="gkits-mb-12">
                            <Flex align="flex-start">
                                <FlexBlock>
                                    <ResLabelControl
                                        id="line-height-control"
                                        label={__('Line Height', 'slider-blocks')}
                                        requiredProps={{
                                            resMode,
                                            setAttributes
                                        }}
                                    />
                                </FlexBlock>
                                <FlexItem>
                                    {resMode === 'Desktop' && (
                                        <UnitsControl
                                            value={lineHeightUnits && lineHeightUnits.desk}
                                            onChange={value =>
                                                setAttributes({
                                                    [`${controlName}LineHeightUnits`]: {
                                                        ...lineHeightUnits,
                                                        desk: value
                                                    }
                                                })
                                            }
                                            units={LHLS_UNITS}
                                        />
                                    )}
                                    {resMode === 'Tablet' && (
                                        <UnitsControl
                                            value={lineHeightUnits && lineHeightUnits.tab}
                                            onChange={value =>
                                                setAttributes({
                                                    [`${controlName}LineHeightUnits`]: {
                                                        ...lineHeightUnits,
                                                        tab: value
                                                    }
                                                })
                                            }
                                            units={LHLS_UNITS}
                                        />
                                    )}
                                    {resMode === 'Mobile' && (
                                        <UnitsControl
                                            value={lineHeightUnits && lineHeightUnits.mob}
                                            onChange={value =>
                                                setAttributes({
                                                    [`${controlName}LineHeightUnits`]: {
                                                        ...lineHeightUnits,
                                                        mob: value
                                                    }
                                                })
                                            }
                                            units={LHLS_UNITS}
                                        />
                                    )}
                                </FlexItem>
                            </Flex>
                            <div className="gkits-controls-body" id="line-height-control">
                                {resMode === 'Desktop' && (
                                    <div className="single-rangle">
                                        <ResetButton
                                            onReset={() =>
                                                setAttributes({
                                                    [`${controlName}LineHeights`]: {
                                                        ...lineHeights,
                                                        desk: ''
                                                    },
                                                    [`${controlName}LineHeightUnits`]: {
                                                        ...lineHeightUnits,
                                                        desk: 'px'
                                                    }
                                                })
                                            }
                                            value={lineHeights && lineHeights.desk}
                                        >
                                            <RangeControl
                                                value={lineHeights && lineHeights.desk}
                                                onChange={value =>
                                                    setAttributes({
                                                        [`${controlName}LineHeights`]: {
                                                            ...lineHeights,
                                                            desk: value
                                                        }
                                                    })
                                                }
                                                min={0}
                                                max={100}
                                                step={lineHeightUnits && lineHeightUnits.desk === 'em' ? 0.01 : 1}
                                            />
                                        </ResetButton>
                                    </div>
                                )}
                                {resMode === 'Tablet' && (
                                    <div className="single-rangle">
                                        <ResetButton
                                            onReset={() =>
                                                setAttributes({
                                                    [`${controlName}LineHeights`]: {
                                                        ...lineHeights,
                                                        tab: ''
                                                    },
                                                    [`${controlName}LineHeightUnits`]: {
                                                        ...lineHeightUnits,
                                                        tab: 'px'
                                                    }
                                                })
                                            }
                                            value={lineHeights && lineHeights.tab}
                                        >
                                            <RangeControl
                                                value={lineHeights && lineHeights.tab}
                                                onChange={value =>
                                                    setAttributes({
                                                        [`${controlName}LineHeights`]: {
                                                            ...lineHeights,
                                                            tab: value
                                                        }
                                                    })
                                                }
                                                min={0}
                                                max={100}
                                                step={lineHeightUnits && lineHeightUnits.tab === 'em' ? 0.01 : 1}
                                            />
                                        </ResetButton>
                                    </div>
                                )}
                                {resMode === 'Mobile' && (
                                    <div className="single-rangle">
                                        <ResetButton
                                            onReset={() =>
                                                setAttributes({
                                                    [`${controlName}LineHeights`]: {
                                                        ...lineHeights,
                                                        mob: ''
                                                    },
                                                    [`${controlName}LineHeightUnits`]: {
                                                        ...lineHeightUnits,
                                                        mob: 'px'
                                                    }
                                                })
                                            }
                                            value={lineHeights && lineHeights.mob}
                                        >
                                            <RangeControl
                                                value={lineHeights && lineHeights.mob}
                                                onChange={value =>
                                                    setAttributes({
                                                        [`${controlName}LineHeights`]: {
                                                            ...lineHeights,
                                                            mob: value
                                                        }
                                                    })
                                                }
                                                min={0}
                                                max={100}
                                                step={lineHeightUnits && lineHeightUnits.mob === 'em' ? 0.01 : 1}
                                            />
                                        </ResetButton>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="gkits-mb-0">
                            <Flex align="flex-start">
                                <FlexBlock>
                                    <ResLabelControl
                                        id="letter-spacing-control"
                                        label={__('Letter Spacing', 'slider-blocks')}
                                        requiredProps={{
                                            resMode,
                                            setAttributes
                                        }}
                                    />
                                </FlexBlock>
                                <FlexItem>
                                    {resMode === 'Desktop' && (
                                        <UnitsControl
                                            value={letterSpacingUnits && letterSpacingUnits.desk}
                                            onChange={value =>
                                                setAttributes({
                                                    [`${controlName}LetterSpacingUnits`]: {
                                                        ...letterSpacingUnits,
                                                        desk: value
                                                    }
                                                })
                                            }
                                            units={LHLS_UNITS}
                                        />
                                    )}
                                    {resMode === 'Tablet' && (
                                        <UnitsControl
                                            value={letterSpacingUnits && letterSpacingUnits.tab}
                                            onChange={value =>
                                                setAttributes({
                                                    [`${controlName}LetterSpacingUnits`]: {
                                                        ...letterSpacingUnits,
                                                        tab: value
                                                    }
                                                })
                                            }
                                            units={LHLS_UNITS}
                                        />
                                    )}
                                    {resMode === 'Mobile' && (
                                        <UnitsControl
                                            value={letterSpacingUnits && letterSpacingUnits.mob}
                                            onChange={value =>
                                                setAttributes({
                                                    [`${controlName}LetterSpacingUnits`]: {
                                                        ...letterSpacingUnits,
                                                        mob: value
                                                    }
                                                })
                                            }
                                            units={LHLS_UNITS}
                                        />
                                    )}
                                </FlexItem>
                            </Flex>
                            <div className="gkits-controls-body" id="letter-spacing-control">
                                {resMode === 'Desktop' && (
                                    <div className="single-rangle">
                                        <ResetButton
                                            onReset={() =>
                                                setAttributes({
                                                    [`${controlName}LetterSpacings`]: {
                                                        ...letterSpacings,
                                                        desk: ''
                                                    },
                                                    [`${controlName}LetterSpacingUnits`]: {
                                                        ...letterSpacingUnits,
                                                        desk: 'px'
                                                    }
                                                })
                                            }
                                            value={letterSpacings && letterSpacings.desk}
                                        >
                                            <RangeControl
                                                value={letterSpacings && letterSpacings.desk}
                                                onChange={value =>
                                                    setAttributes({
                                                        [`${controlName}LetterSpacings`]: {
                                                            ...letterSpacings,
                                                            desk: value
                                                        }
                                                    })
                                                }
                                                min={0}
                                                max={100}
                                                step={letterSpacingUnits && letterSpacingUnits.desk === 'em' ? 0.01 : 1}
                                            />
                                        </ResetButton>
                                    </div>
                                )}
                                {resMode === 'Tablet' && (
                                    <div className="single-rangle">
                                        <ResetButton
                                            onReset={() =>
                                                setAttributes({
                                                    [`${controlName}LetterSpacings`]: {
                                                        ...letterSpacings,
                                                        tab: ''
                                                    },
                                                    [`${controlName}LetterSpacingUnits`]: {
                                                        ...letterSpacingUnits,
                                                        tab: 'px'
                                                    }
                                                })
                                            }
                                            value={letterSpacings && letterSpacings.tab}
                                        >
                                            <RangeControl
                                                value={letterSpacings && letterSpacings.tab}
                                                onChange={value =>
                                                    setAttributes({
                                                        [`${controlName}LetterSpacings`]: {
                                                            ...letterSpacings,
                                                            tab: value
                                                        }
                                                    })
                                                }
                                                min={0}
                                                max={100}
                                                step={letterSpacingUnits && letterSpacingUnits.tab === 'em' ? 0.01 : 1}
                                            />
                                        </ResetButton>
                                    </div>
                                )}
                                {resMode === 'Mobile' && (
                                    <div className="single-rangle">
                                        <ResetButton
                                            onReset={() =>
                                                setAttributes({
                                                    [`${controlName}LetterSpacings`]: {
                                                        ...letterSpacings,
                                                        mob: ''
                                                    },
                                                    [`${controlName}LetterSpacingUnits`]: {
                                                        ...letterSpacingUnits,
                                                        mob: 'px'
                                                    }
                                                })
                                            }
                                            value={letterSpacings && letterSpacings.mob}
                                        >
                                            <RangeControl
                                                value={letterSpacings && letterSpacings.mob}
                                                onChange={value =>
                                                    setAttributes({
                                                        [`${controlName}LetterSpacings`]: {
                                                            ...letterSpacings,
                                                            mob: value
                                                        }
                                                    })
                                                }
                                                min={0}
                                                max={100}
                                                step={letterSpacingUnits && letterSpacingUnits.mob === 'em' ? 0.01 : 1}
                                            />
                                        </ResetButton>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </Popover>
            )}
        </div>
    );
};
export default TypographyControl;
