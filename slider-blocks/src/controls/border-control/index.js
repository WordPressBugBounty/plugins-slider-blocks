/* eslint-disable @wordpress/no-unsafe-wp-apis */
/**
 * WordPress dependencies
 */
import { Button, Flex, FlexItem, __experimentalNumberControl as NumberControl, SelectControl } from '@wordpress/components';
import { withInstanceId } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { BORDER_STYLES, GENERAL_UNITS } from '../../constants';
import ColorControl from '../color-control';
import ResLabelControl from '../res-label-control';
import SwitcherControl from '../switcher-control';
import UnitsControl from '../units-control';

const BorderControl = ({ label, controlName, instanceId, objAttrs, units, noHover = false }) => {
    const id = `border-control-${instanceId}`;

    const { attributes, setAttributes } = objAttrs;
    const { resMode } = attributes;
    const availableUnits = units || GENERAL_UNITS;

    const {
        [`${controlName}Style`]: borderStyle,
        [`${controlName}Colors`]: borderColors,
        [`${controlName}LinkStatus`]: borderLinkedStatus,
        [`${controlName}LinkedWidth`]: borderLinkedWidth,
        [`${controlName}Widths`]: borderWidths,

        [`${controlName}TabLinkStatus`]: borderTabLinkedStatus,
        [`${controlName}TabLinkedWidth`]: borderTabLinkedWidth,
        [`${controlName}TabWidths`]: borderTabWidths,

        [`${controlName}MobLinkStatus`]: borderMobLinkedStatus,
        [`${controlName}MobLinkedWidth`]: borderMobLinkedWidth,
        [`${controlName}MobWidths`]: borderMobWidths,

        [`${controlName}Unit`]: borderUnit
    } = attributes;

    return (
        <div className="gkits-control-container">
            {label && (
                <div className="gkits-mb-8">
                    <ResLabelControl requiredProps={(id, setAttributes)} label={label} noResBtns={true} />
                </div>
            )}
            <div className="gkits-border-style gkits-mb-16">
                <SelectControl
                    label={__('Border Style', 'slider-blocks')}
                    value={borderStyle}
                    options={BORDER_STYLES}
                    onChange={style => {
                        setAttributes({
                            [`${controlName}Style`]: style
                        });
                    }}
                />
            </div>
            {borderStyle !== 'none' && (
                <Fragment>
                    <div className="gkits-mb-8">
                        <Flex align="flex-start">
                            <FlexItem>
                                <ResLabelControl
                                    label={__('Border Width', 'slider-blocks')}
                                    requiredProps={{
                                        id,
                                        resMode,
                                        setAttributes
                                    }}
                                />
                            </FlexItem>
                            <FlexItem>
                                <UnitsControl
                                    value={borderUnit}
                                    onChange={value =>
                                        setAttributes({
                                            [`${controlName}Unit`]: value
                                        })
                                    }
                                    units={availableUnits}
                                />
                            </FlexItem>
                        </Flex>
                        <div className="gkits-controls-body" id={id}>
                            {resMode === 'Desktop' && (
                                <div className="gkits-single-inputs-group">
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Top', 'slider-blocks')}
                                            labelPosition="bottom"
                                            value={borderLinkedStatus ? borderLinkedWidth : borderWidths && borderWidths.top}
                                            onChange={value =>
                                                setAttributes(
                                                    borderLinkedStatus
                                                        ? {
                                                              [`${controlName}LinkedWidth`]: value
                                                          }
                                                        : {
                                                              [`${controlName}Widths`]: {
                                                                  ...borderWidths,
                                                                  top: value
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                            step={borderUnit === 'px' ? 1 : 0.01}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Right', 'slider-blocks')}
                                            labelPosition="bottom"
                                            value={borderLinkedStatus ? borderLinkedWidth : borderWidths && borderWidths.right}
                                            onChange={value =>
                                                setAttributes(
                                                    borderLinkedStatus
                                                        ? {
                                                              [`${controlName}LinkedWidth`]: value
                                                          }
                                                        : {
                                                              [`${controlName}Widths`]: {
                                                                  ...borderWidths,
                                                                  right: value
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                            step={borderUnit === 'px' ? 1 : 0.01}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Bottom', 'slider-blocks')}
                                            labelPosition="bottom"
                                            value={borderLinkedStatus ? borderLinkedWidth : borderWidths && borderWidths.bottom}
                                            onChange={value =>
                                                setAttributes(
                                                    borderLinkedStatus
                                                        ? {
                                                              [`${controlName}LinkedWidth`]: value
                                                          }
                                                        : {
                                                              [`${controlName}Widths`]: {
                                                                  ...borderWidths,
                                                                  bottom: value
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                            step={borderUnit === 'px' ? 1 : 0.01}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Left', 'slider-blocks')}
                                            labelPosition="bottom"
                                            value={borderLinkedStatus ? borderLinkedWidth : borderWidths && borderWidths.left}
                                            onChange={value =>
                                                setAttributes(
                                                    borderLinkedStatus
                                                        ? {
                                                              [`${controlName}LinkedWidth`]: value
                                                          }
                                                        : {
                                                              [`${controlName}Widths`]: {
                                                                  ...borderWidths,
                                                                  left: value
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                            step={borderUnit === 'px' ? 1 : 0.01}
                                        />
                                    </div>
                                    <div className="single-input desk-linked-btn">
                                        <Button
                                            className={borderLinkedStatus ? 'active' : ''}
                                            onClick={() =>
                                                setAttributes({
                                                    [`${controlName}LinkStatus`]: !borderLinkedStatus
                                                })
                                            }
                                            icon={borderLinkedStatus ? 'admin-links' : 'editor-unlink'}
                                        />
                                    </div>
                                </div>
                            )}
                            {resMode === 'Tablet' && (
                                <div className="gkits-single-inputs-group">
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Top', 'slider-blocks')}
                                            labelPosition="bottom"
                                            value={borderTabLinkedStatus ? borderTabLinkedWidth : borderTabWidths && borderTabWidths.top}
                                            onChange={value =>
                                                setAttributes(
                                                    borderTabLinkedStatus
                                                        ? {
                                                              [`${controlName}TabLinkedWidth`]: value
                                                          }
                                                        : {
                                                              [`${controlName}TabWidths`]: {
                                                                  ...borderTabWidths,
                                                                  top: value
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                            step={borderUnit === 'px' ? 1 : 0.01}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Right', 'slider-blocks')}
                                            labelPosition="bottom"
                                            value={borderTabLinkedStatus ? borderTabLinkedWidth : borderTabWidths && borderTabWidths.right}
                                            onChange={value =>
                                                setAttributes(
                                                    borderTabLinkedStatus
                                                        ? {
                                                              [`${controlName}TabLinkedWidth`]: value
                                                          }
                                                        : {
                                                              [`${controlName}TabWidths`]: {
                                                                  ...borderTabWidths,
                                                                  right: value
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                            step={borderUnit === 'px' ? 1 : 0.01}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Bottom', 'slider-blocks')}
                                            labelPosition="bottom"
                                            value={borderTabLinkedStatus ? borderTabLinkedWidth : borderTabWidths && borderTabWidths.bottom}
                                            onChange={value =>
                                                setAttributes(
                                                    borderTabLinkedStatus
                                                        ? {
                                                              [`${controlName}TabLinkedWidth`]: value
                                                          }
                                                        : {
                                                              [`${controlName}TabWidths`]: {
                                                                  ...borderTabWidths,
                                                                  bottom: value
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                            step={borderUnit === 'px' ? 1 : 0.01}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Left', 'slider-blocks')}
                                            labelPosition="bottom"
                                            value={borderTabLinkedStatus ? borderTabLinkedWidth : borderTabWidths && borderTabWidths.left}
                                            onChange={value =>
                                                setAttributes(
                                                    borderTabLinkedStatus
                                                        ? {
                                                              [`${controlName}TabLinkedWidth`]: value
                                                          }
                                                        : {
                                                              [`${controlName}TabWidths`]: {
                                                                  ...borderTabWidths,
                                                                  left: value
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                            step={borderUnit === 'px' ? 1 : 0.01}
                                        />
                                    </div>
                                    <div className="single-input desk-linked-btn">
                                        <Button
                                            className={borderTabLinkedStatus ? 'active' : ''}
                                            onClick={() =>
                                                setAttributes({
                                                    [`${controlName}TabLinkedStatus`]: !borderTabLinkedStatus
                                                })
                                            }
                                            icon={borderTabLinkedStatus ? 'admin-links' : 'editor-unlink'}
                                        />
                                    </div>
                                </div>
                            )}
                            {resMode === 'Mobile' && (
                                <div className="gkits-single-inputs-group">
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Top', 'slider-blocks')}
                                            labelPosition="bottom"
                                            value={borderMobLinkedStatus ? borderMobLinkedWidth : borderMobWidths && borderMobWidths.top}
                                            onChange={value =>
                                                setAttributes(
                                                    borderMobLinkedStatus
                                                        ? {
                                                              [`${controlName}MobLinkedWidth`]: value
                                                          }
                                                        : {
                                                              [`${controlName}MobWidths`]: {
                                                                  ...borderMobWidths,
                                                                  top: value
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                            step={borderUnit === 'px' ? 1 : 0.01}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Right', 'slider-blocks')}
                                            labelPosition="bottom"
                                            value={borderMobLinkedStatus ? borderMobLinkedWidth : borderMobWidths && borderMobWidths.right}
                                            onChange={value =>
                                                setAttributes(
                                                    borderMobLinkedStatus
                                                        ? {
                                                              [`${controlName}MobLinkedWidth`]: value
                                                          }
                                                        : {
                                                              [`${controlName}MobWidths`]: {
                                                                  ...borderMobWidths,
                                                                  right: value
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                            step={borderUnit === 'px' ? 1 : 0.01}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Bottom', 'slider-blocks')}
                                            labelPosition="bottom"
                                            value={borderMobLinkedStatus ? borderMobLinkedWidth : borderMobWidths && borderMobWidths.bottom}
                                            onChange={value =>
                                                setAttributes(
                                                    borderMobLinkedStatus
                                                        ? {
                                                              [`${controlName}MobLinkedWidth`]: value
                                                          }
                                                        : {
                                                              [`${controlName}MobWidths`]: {
                                                                  ...borderMobWidths,
                                                                  bottom: value
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                            step={borderUnit === 'px' ? 1 : 0.01}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <NumberControl
                                            label={__('Left', 'slider-blocks')}
                                            labelPosition="bottom"
                                            value={borderMobLinkedStatus ? borderMobLinkedWidth : borderMobWidths && borderMobWidths.left}
                                            onChange={value =>
                                                setAttributes(
                                                    borderMobLinkedStatus
                                                        ? {
                                                              [`${controlName}MobLinkedWidth`]: value
                                                          }
                                                        : {
                                                              [`${controlName}MobWidths`]: {
                                                                  ...borderMobWidths,
                                                                  left: value
                                                              }
                                                          }
                                                )
                                            }
                                            min={0}
                                            max={100}
                                            step={borderUnit === 'px' ? 1 : 0.01}
                                        />
                                    </div>
                                    <div className="single-input desk-linked-btn">
                                        <Button
                                            className={borderMobLinkedStatus ? 'active' : ''}
                                            onClick={() =>
                                                setAttributes({
                                                    [`${controlName}MobLinkedStatus`]: !borderMobLinkedStatus
                                                })
                                            }
                                            icon={borderMobLinkedStatus ? 'admin-links' : 'editor-unlink'}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    {noHover && (
                        <ColorControl
                            label={__('Border Color', 'slider-blocks')}
                            color={borderColors && borderColors.normal}
                            onChange={color => {
                                setAttributes({
                                    [`${controlName}Colors`]: {
                                        ...borderColors,
                                        normal: color
                                    }
                                });
                            }}
                        />
                    )}
                    {!noHover && (
                        <SwitcherControl
                            normal={
                                <ColorControl
                                    label={__('Border Color', 'slider-blocks')}
                                    color={borderColors && borderColors.normal}
                                    onChange={color => {
                                        setAttributes({
                                            [`${controlName}Colors`]: {
                                                ...borderColors,
                                                normal: color
                                            }
                                        });
                                    }}
                                />
                            }
                            hover={
                                <ColorControl
                                    label={__('Hover Color', 'slider-blocks')}
                                    color={borderColors && borderColors.hover}
                                    onChange={color => {
                                        setAttributes({
                                            [`${controlName}Colors`]: {
                                                ...borderColors,
                                                hover: color
                                            }
                                        });
                                    }}
                                />
                            }
                        />
                    )}
                </Fragment>
            )}
        </div>
    );
};

export default withInstanceId(BorderControl);
