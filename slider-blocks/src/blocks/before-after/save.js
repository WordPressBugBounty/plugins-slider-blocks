/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';
import classNames from 'classnames';

/**
 * Save function
 */

export default function save({ attributes }) {
    const { uniqueId, sliderOptions, beforeImage, afterImage, showCaption, captionTag, sliderCaption, comparisonOptions } = attributes;

    // Block Props
    const blockProps = useBlockProps.save({
        className: classNames(uniqueId)
    });

    return (
        <div {...blockProps}>
            <div
                className="gutslider-compare-block"
                data-beforeImage={JSON.stringify(beforeImage)}
                data-afterImage={JSON.stringify(afterImage)}
                data-comparisonOptions={JSON.stringify(comparisonOptions)}
                data-sliderOptions={JSON.stringify(sliderOptions)}
            ></div>
            {showCaption && (
                <figcaption className="gutslider-caption">
                    <RichText.Content tagName={captionTag} className="gutslider-caption-text" value={sliderCaption} />
                </figcaption>
            )}
        </div>
    );
}
