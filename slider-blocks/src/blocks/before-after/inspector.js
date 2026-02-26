/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, TextControl, TextareaControl, SelectControl, ToggleControl } = wp.components;
const { Fragment } = wp.element;

/**
 * Internal dependencies
 */
const {
    HeaderTabs,
    ResRangeControl,
    SingleRangeControl,
    ResBoxControl,
    ColorControl,
    AlignmentControl,
    TypographyControl,
    BorderControl,
    BoxShadowControl,
    ButtonsGroupControl,
    FooterNotice,
    ProLink
} = window.gutSliderModules;

const { HEADING_TAGS } = window.gutSliderModules.GlobalConstants;

// Internal constants
import objAttributes from './attributes';
import {
    AL_BORDER,
    AL_BRADIUS,
    AL_BSHADOW,
    AL_MARGIN,
    AL_PADDING,
    AL_TYPO,
    BL_BORDER,
    BL_BRADIUS,
    BL_BSHADOW,
    BL_MARGIN,
    BL_PADDING,
    BL_TYPO,
    CAP_ALIGN,
    CAP_MARGIN,
    CAP_TYPO,
    CB_BORDER,
    CB_BRADIUS,
    CB_BSHADOW,
    CB_HEIGHT,
    CB_WIDTH,
    HANDLE_BSHADOW,
    HANDLE_WIDTH,
    HEIGHT,
    HORIZONTAL_POSITIONS,
    HOVER_ANIMATIONS,
    LABEL_VISIBILITY,
    SLIDE_DIRECTION,
    SWIPE_MODE,
    VERTICAL_POSITIONS
} from './constants';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        sliderOptions,
        comparisonOptions,
        showCaption,
        sliderCaption,
        captionTag,
        blColor,
        afColor,
        capColor,
        cbBlur,
        arrowColor,
        blBg,
        alBg,
        handleBg,
        cbBg
    } = attributes;

    const objAttrs = { attributes, setAttributes, objAttributes };

    return (
        <InspectorControls>
            <HeaderTabs
                settingTabContent={
                    <Fragment>
                        <PanelBody title={__('General', 'photo-comparison')} initialOpen={true}>
                            <ToggleControl
                                label={__('Show Labels', 'photo-comparison')}
                                checked={sliderOptions?.showLabels}
                                onChange={() => {
                                    setAttributes({
                                        sliderOptions: {
                                            ...sliderOptions,
                                            showLabels: !sliderOptions?.showLabels
                                        }
                                    });
                                }}
                            />
                            <ToggleControl
                                label={__('Show Slider Caption', 'photo-comparison')}
                                checked={showCaption}
                                onChange={() =>
                                    setAttributes({
                                        showCaption: !showCaption
                                    })
                                }
                            />
                            <ToggleControl
                                label={__('Disable Sliding Behavior', 'photo-comparison')}
                                checked={comparisonOptions?.disableSliding}
                                onChange={() =>
                                    setAttributes({
                                        comparisonOptions: {
                                            ...comparisonOptions,
                                            disableSliding: !comparisonOptions?.disableSliding
                                        }
                                    })
                                }
                            />
                            {!comparisonOptions?.disableSliding && (
                                <ToggleControl
                                    label={__('Only Handle Draggable', 'photo-comparison')}
                                    checked={comparisonOptions?.onlyHandleDraggable}
                                    onChange={() =>
                                        setAttributes({
                                            comparisonOptions: {
                                                ...comparisonOptions,
                                                onlyHandleDraggable: !comparisonOptions?.onlyHandleDraggable
                                            }
                                        })
                                    }
                                />
                            )}

                            <SingleRangeControl
                                label={__('Initial Position', 'photo-comparison')}
                                value={comparisonOptions?.initialPosition}
                                onChange={v =>
                                    setAttributes({
                                        comparisonOptions: {
                                            ...comparisonOptions,
                                            initialPosition: v
                                        }
                                    })
                                }
                                min={0}
                                max={100}
                                onClickReset={() =>
                                    setAttributes({
                                        comparisonOptions: {
                                            ...comparisonOptions,
                                            initialPosition: 50
                                        }
                                    })
                                }
                            />

                            <ButtonsGroupControl
                                label={__('Slide Direction', 'photo-comparison')}
                                value={comparisonOptions?.slideMode}
                                onChange={slideMode =>
                                    setAttributes({
                                        comparisonOptions: {
                                            ...comparisonOptions,
                                            slideMode
                                        }
                                    })
                                }
                                options={SLIDE_DIRECTION}
                            />
                            {!comparisonOptions?.disableSliding && (
                                <ButtonsGroupControl
                                    label={__('Swipe Mode', 'photo-comparison')}
                                    value={comparisonOptions?.swipeMode}
                                    onChange={swipeMode =>
                                        setAttributes({
                                            comparisonOptions: {
                                                ...comparisonOptions,
                                                swipeMode
                                            }
                                        })
                                    }
                                    options={SWIPE_MODE}
                                />
                            )}
                        </PanelBody>
                        {sliderOptions?.showLabels && (
                            <PanelBody title={__('Labels', 'photo-comparison')} initialOpen={false}>
                                <TextControl
                                    label={__('Before Label', 'photo-comparison')}
                                    value={sliderOptions?.beforeLabel}
                                    onChange={beforeLabel =>
                                        setAttributes({
                                            sliderOptions: {
                                                ...sliderOptions,
                                                beforeLabel
                                            }
                                        })
                                    }
                                    placeholder={__('Before', 'photo-comparison')}
                                />
                                <TextControl
                                    label={__('After Label', 'photo-comparison')}
                                    value={sliderOptions?.afterLabel}
                                    onChange={afterLabel =>
                                        setAttributes({
                                            sliderOptions: {
                                                ...sliderOptions,
                                                afterLabel
                                            }
                                        })
                                    }
                                    placeholder={__('After', 'photo-comparison')}
                                />
                                {comparisonOptions?.slideMode === 'horizontal' && (
                                    <ButtonsGroupControl
                                        label={__('Labels Position', 'photo-comparison')}
                                        value={sliderOptions?.labelVPosition}
                                        onChange={labelVPosition =>
                                            setAttributes({
                                                sliderOptions: {
                                                    ...sliderOptions,
                                                    labelVPosition
                                                }
                                            })
                                        }
                                        options={VERTICAL_POSITIONS}
                                    />
                                )}
                                {comparisonOptions?.slideMode === 'vertical' && (
                                    <ButtonsGroupControl
                                        label={__('Labels Position', 'photo-comparison')}
                                        value={sliderOptions?.labelHPosition}
                                        onChange={labelHPosition =>
                                            setAttributes({
                                                sliderOptions: {
                                                    ...sliderOptions,
                                                    labelHPosition
                                                }
                                            })
                                        }
                                        options={HORIZONTAL_POSITIONS}
                                    />
                                )}

                                <ButtonsGroupControl
                                    label={__('Labels Visible On', 'photo-comparison')}
                                    value={sliderOptions?.labelsVisibility}
                                    onChange={labelsVisibility =>
                                        setAttributes({
                                            sliderOptions: {
                                                ...sliderOptions,
                                                labelsVisibility
                                            }
                                        })
                                    }
                                    options={LABEL_VISIBILITY}
                                />
                                {sliderOptions?.labelsVisibility === 'hover' && (
                                    <SelectControl
                                        label={__('Animation', 'photo-comparison')}
                                        value={sliderOptions?.hoverAnimation}
                                        options={HOVER_ANIMATIONS}
                                        onChange={hoverAnimation =>
                                            setAttributes({
                                                sliderOptions: {
                                                    ...sliderOptions,
                                                    hoverAnimation
                                                }
                                            })
                                        }
                                    />
                                )}
                            </PanelBody>
                        )}
                        {showCaption && (
                            <PanelBody title={__('Caption', 'photo-comparison')} initialOpen={false}>
                                <TextareaControl
                                    label={__('Text', 'photo-comparison')}
                                    value={sliderCaption}
                                    onChange={v =>
                                        setAttributes({
                                            sliderCaption: v
                                        })
                                    }
                                    placeholder={__('Enter caption here', 'photo-comparison')}
                                />
                                <SelectControl
                                    label={__('Select Tag', 'photo-comparison')}
                                    value={captionTag}
                                    options={HEADING_TAGS}
                                    onChange={v =>
                                        setAttributes({
                                            captionTag: v
                                        })
                                    }
                                />
                                <AlignmentControl label={__('Alignment', 'photo-comparison')} controlName={CAP_ALIGN} objAttrs={objAttrs} />
                            </PanelBody>
                        )}
                    </Fragment>
                }
                designTabContent={
                    <Fragment>
                        <PanelBody title={__('Container', 'photo-comparison')} initialOpen={true}>
                            <ResRangeControl
                                label={__('Height', 'photo-comparison')}
                                objAttrs={objAttrs}
                                controlName={HEIGHT}
                                min={100}
                                max={1000}
                            />
                        </PanelBody>
                        <PanelBody title={__('Before Label', 'photo-comparison')} initialOpen={false}>
                            <ColorControl
                                label={__('Color', 'photo-comparison')}
                                color={blColor}
                                onChange={v =>
                                    setAttributes({
                                        blColor: v
                                    })
                                }
                            />
                            <TypographyControl label={__('Typography', 'photo-comparison')} objAttrs={objAttrs} controlName={BL_TYPO} />
                            <BorderControl objAttrs={objAttrs} controlName={BL_BORDER} noHover={true} />
                            <ResBoxControl label={__('Border Radius', 'photo-comparison')} objAttrs={objAttrs} controlName={BL_BRADIUS} />
                            <ResBoxControl label={__('Margin', 'photo-comparison')} objAttrs={objAttrs} controlName={BL_MARGIN} />
                            <ResBoxControl label={__('Padding', 'photo-comparison')} objAttrs={objAttrs} controlName={BL_PADDING} />
                            <BoxShadowControl label={__('Box Shadow', 'photo-comparison')} objAttrs={objAttrs} controlName={BL_BSHADOW} />
                            <ColorControl
                                label={__('Background Color', 'photo-comparison')}
                                color={blBg}
                                onChange={v =>
                                    setAttributes({
                                        blBg: v
                                    })
                                }
                            />
                        </PanelBody>
                        <PanelBody title={__('After Label', 'photo-comparison')} initialOpen={false}>
                            <ColorControl
                                label={__('Color', 'photo-comparison')}
                                color={afColor}
                                onChange={v =>
                                    setAttributes({
                                        afColor: v
                                    })
                                }
                            />
                            <TypographyControl label={__('Typography', 'photo-comparison')} objAttrs={objAttrs} controlName={AL_TYPO} />
                            <BorderControl objAttrs={objAttrs} controlName={AL_BORDER} noHover={true} />
                            <ResBoxControl label={__('Border Radius', 'photo-comparison')} objAttrs={objAttrs} controlName={AL_BRADIUS} />
                            <ResBoxControl label={__('Margin', 'photo-comparison')} objAttrs={objAttrs} controlName={AL_MARGIN} />
                            <ResBoxControl label={__('Padding', 'photo-comparison')} objAttrs={objAttrs} controlName={AL_PADDING} />
                            <BoxShadowControl label={__('Box Shadow', 'photo-comparison')} objAttrs={objAttrs} controlName={AL_BSHADOW} />
                            <ColorControl
                                label={__('Background Color', 'photo-comparison')}
                                color={alBg}
                                onChange={v =>
                                    setAttributes({
                                        alBg: v
                                    })
                                }
                            />
                        </PanelBody>
                        {showCaption && (
                            <PanelBody title={__('Caption', 'photo-comparison')} initialOpen={false}>
                                <ColorControl
                                    label={__('Color', 'photo-comparison')}
                                    color={capColor}
                                    onChange={v =>
                                        setAttributes({
                                            capColor: v
                                        })
                                    }
                                />
                                <TypographyControl
                                    label={__('Typography', 'photo-comparison')}
                                    objAttrs={objAttrs}
                                    controlName={CAP_TYPO}
                                />
                                <ResBoxControl label={__('Margin', 'photo-comparison')} objAttrs={objAttrs} controlName={CAP_MARGIN} />
                            </PanelBody>
                        )}

                        <PanelBody title={__('Control Line', 'photo-comparison')} initialOpen={false}>
                            <ResRangeControl label={__('Thickness', 'photo-comparison')} objAttrs={objAttrs} controlName={HANDLE_WIDTH} />
                            <BoxShadowControl
                                label={__('Box Shadow', 'photo-comparison')}
                                objAttrs={objAttrs}
                                controlName={HANDLE_BSHADOW}
                            />
                            <ColorControl
                                label={__('Background Color', 'photo-comparison')}
                                color={handleBg}
                                onChange={v =>
                                    setAttributes({
                                        handleBg: v
                                    })
                                }
                            />
                        </PanelBody>
                        <PanelBody title={__('Control Button', 'photo-comparison')} initialOpen={false}>
                            <ColorControl
                                label={__('Arrow Color', 'photo-comparison')}
                                color={arrowColor}
                                onChange={v =>
                                    setAttributes({
                                        arrowColor: v
                                    })
                                }
                            />
                            <SingleRangeControl
                                label={__('Blur', 'photo-comparison')}
                                value={cbBlur}
                                onChange={v =>
                                    setAttributes({
                                        cbBlur: v
                                    })
                                }
                                min={1}
                                max={20}
                                onClickReset={() =>
                                    setAttributes({
                                        cbBlur: ''
                                    })
                                }
                            />
                            <ResRangeControl label={__('Width', 'photo-comparison')} objAttrs={objAttrs} controlName={CB_WIDTH} />
                            <ResRangeControl label={__('Height', 'photo-comparison')} objAttrs={objAttrs} controlName={CB_HEIGHT} />
                            <BorderControl objAttrs={objAttrs} controlName={CB_BORDER} noHover={true} />
                            <ResBoxControl label={__('Border Radius', 'photo-comparison')} objAttrs={objAttrs} controlName={CB_BRADIUS} />
                            <BoxShadowControl label={__('Box Shadow', 'photo-comparison')} objAttrs={objAttrs} controlName={CB_BSHADOW} />
                            <ColorControl
                                label={__('Background Color', 'photo-comparison')}
                                color={cbBg}
                                onChange={v =>
                                    setAttributes({
                                        cbBg: v
                                    })
                                }
                            />
                        </PanelBody>
                    </Fragment>
                }
            />
            <ProLink message={__('GutSlider Pro', 'slider-blocks')} />
            <FooterNotice />
        </InspectorControls>
    );
};

export default Inspector;
