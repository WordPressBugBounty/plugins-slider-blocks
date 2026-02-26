/* eslint-disable no-undef */
/* eslint-disable camelcase */
/**
 * WordPress dependencies
 */
import { BlockControls, MediaUpload, RichText, useBlockProps } from '@wordpress/block-editor';
import { Button, ToolbarButton, ToolbarGroup } from '@wordpress/components';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
const { Fragment, useEffect } = wp.element;
const { __ } = wp.i18n;

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
const { SidebarOpener } = window.gutSliderModules;

/**
 * Style
 */
import classNames from 'classnames';
import Style from './style';

/**
 * Edit function
 */

export default function Edit(props) {
    const { attributes, setAttributes, clientId } = props;
    const { uniqueId, preview, beforeImage, afterImage, sliderOptions, comparisonOptions, showCaption, sliderCaption, captionTag } =
        attributes;

    // Unique ID
    useEffect(() => {
        setAttributes({
            uniqueId: 'gutslider-' + clientId.slice(0, 8)
        });
    }, []);

    // block preview
    if (preview) {
        return (
            <div className="gutslider-preview">
                <img src={gutslider_preview.before_after} alt="before after slider preview" />
            </div>
        );
    }

    // Block Props
    const blockProps = useBlockProps({
        className: classNames(uniqueId, `${sliderOptions?.labelsVisibility}`)
    });

    return (
        <Fragment>
            <Inspector attributes={attributes} setAttributes={setAttributes} />
            <Style {...props} />
            {((beforeImage && beforeImage.id) || (afterImage && afterImage.id)) && (
                <BlockControls>
                    {beforeImage && beforeImage.id && (
                        <ToolbarGroup>
                            <MediaUpload
                                onSelect={media => {
                                    setAttributes({
                                        beforeImage: media
                                    });
                                }}
                                type="image"
                                value={beforeImage && beforeImage.id}
                                render={({ open }) => (
                                    <ToolbarButton
                                        className="icgbp__upload_btn"
                                        onClick={open}
                                        icon="edit"
                                        title={__('Edit Before Image', 'image-comparision-block')}
                                    />
                                )}
                            />
                        </ToolbarGroup>
                    )}
                    {afterImage && afterImage.id && (
                        <ToolbarGroup>
                            <MediaUpload
                                onSelect={media => {
                                    setAttributes({
                                        afterImage: media
                                    });
                                }}
                                type="image"
                                value={afterImage && afterImage.id}
                                render={({ open }) => (
                                    <ToolbarButton
                                        className="icgbp__upload_btn"
                                        onClick={open}
                                        icon="edit"
                                        title={__('Edit After Image', 'image-comparision-block')}
                                    />
                                )}
                            />
                        </ToolbarGroup>
                    )}
                </BlockControls>
            )}

            <div {...blockProps}>
                <SidebarOpener />
                <div className="gutslider-compare-block">
                    {beforeImage && beforeImage.url && afterImage && afterImage.url ? (
                        <ReactCompareSlider
                            portrait={comparisonOptions?.slideMode !== 'horizontal' ? true : false}
                            changePositionOnHover={comparisonOptions?.swipeMode !== 'drag' ? true : false}
                            onlyHandleDraggable={comparisonOptions?.onlyHandleDraggable}
                            disabled={comparisonOptions?.disableSliding}
                            position={comparisonOptions?.initialPosition}
                            itemOne={
                                <div className={classNames('gutslider-before', 'gutslider-ba-item', `${sliderOptions?.labelsVisibility}`)}>
                                    {sliderOptions?.showLabels && (
                                        <div
                                            className={classNames(
                                                'gutslider-label',
                                                'before-label',
                                                `${sliderOptions?.labelsVisibility === 'hover' ? sliderOptions?.hoverAnimation : ''}`,
                                                `${comparisonOptions?.slideMode}`,
                                                `${
                                                    comparisonOptions?.slideMode === 'horizontal'
                                                        ? sliderOptions?.labelVPosition
                                                        : sliderOptions?.labelHPosition
                                                }`
                                            )}
                                        >
                                            {sliderOptions?.beforeLabel}
                                        </div>
                                    )}
                                    <ReactCompareSliderImage
                                        src={beforeImage && beforeImage.url}
                                        alt={(beforeImage && beforeImage.alt) || 'Before Slider Photo'}
                                    />
                                </div>
                            }
                            itemTwo={
                                <div className={classNames('gutslider-after', 'gutslider-ba-item', `${sliderOptions?.labelsVisibility}`)}>
                                    {sliderOptions?.showLabels && (
                                        <div
                                            className={classNames(
                                                'gutslider-label',
                                                'after-label',
                                                `${sliderOptions?.labelsVisibility === 'hover' ? sliderOptions?.hoverAnimation : ''}`,
                                                `${comparisonOptions?.slideMode}`,
                                                `${
                                                    comparisonOptions?.slideMode === 'horizontal'
                                                        ? sliderOptions?.labelVPosition
                                                        : sliderOptions?.labelHPosition
                                                }`
                                            )}
                                        >
                                            {sliderOptions?.afterLabel}
                                        </div>
                                    )}
                                    <ReactCompareSliderImage
                                        src={afterImage && afterImage.url}
                                        alt={(afterImage && afterImage.alt) || 'After Slider Photo'}
                                    />
                                </div>
                            }
                        />
                    ) : (
                        <div className="gutslider-compare-block--loaded">
                            <div className="gutslider-placeholder">
                                {beforeImage && beforeImage.id ? (
                                    <img src={beforeImage.url} alt={beforeImage.alt} />
                                ) : (
                                    <MediaUpload
                                        onSelect={media => {
                                            setAttributes({
                                                beforeImage: {
                                                    id: media.id,
                                                    url: media.url,
                                                    alt: media.alt
                                                }
                                            });
                                        }}
                                        type="image"
                                        value={beforeImage && beforeImage.id}
                                        render={({ open }) => (
                                            <Button className="icgbp__upload_btn" onClick={open}>
                                                {__('Add Before Image', 'image-comparision-block')}
                                            </Button>
                                        )}
                                    />
                                )}
                            </div>
                            <div className="gutslider-placeholder">
                                {afterImage && afterImage.id ? (
                                    <img src={afterImage.url} alt={afterImage.alt} />
                                ) : (
                                    <MediaUpload
                                        onSelect={media => {
                                            setAttributes({
                                                afterImage: {
                                                    id: media.id,
                                                    url: media.url,
                                                    alt: media.alt
                                                }
                                            });
                                        }}
                                        type="image"
                                        value={afterImage && afterImage.id}
                                        render={({ open }) => (
                                            <Button className="icgbp__upload_btn" onClick={open}>
                                                {__('Add After Image', 'image-comparision-block')}
                                            </Button>
                                        )}
                                    />
                                )}
                            </div>
                        </div>
                    )}
                </div>
                {showCaption && (
                    <figcaption className="gutslider-caption">
                        <RichText
                            tagName={captionTag}
                            className="gutslider-caption-text"
                            value={sliderCaption}
                            onChange={v =>
                                setAttributes({
                                    sliderCaption: v
                                })
                            }
                            placeholder={__('Enter caption here', 'image-comparision-block')}
                        />
                    </figcaption>
                )}
            </div>
        </Fragment>
    );
}
