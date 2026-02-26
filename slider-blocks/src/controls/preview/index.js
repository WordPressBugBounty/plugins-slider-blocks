/**
 * WordPress dependencies
 */
import { MediaUpload } from '@wordpress/block-editor';
import { Button, FocalPointPicker, TextControl, BaseControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import classnames from 'classnames';

const Preview = ({
    url,
    id,
    alt = '',
    label = '',
    onSelect,
    onClick,
    focalPoint = false,
    focalValue,
    onFocalPointChange,
    videoType = false,
    editing = true
}) => {
    return (
        <BaseControl label={label} id="gutslider-image-preview">
            <div
                className={classnames('gutslider-image-preview', {
                    'has-focal-point': focalPoint,
                    'has-video': videoType
                })}
            >
                {videoType ? (
                    <TextControl label={__('Video URL', 'slider-blocks')} value={url} readonly={true} />
                ) : (
                    <>
                        {focalPoint ? (
                            <FocalPointPicker url={url} value={focalValue} onChange={v => onFocalPointChange(v)} />
                        ) : (
                            <img src={url} alt={alt || 'placeholder alt'} />
                        )}
                    </>
                )}
                {editing && (
                    <>
                        <MediaUpload
                            onSelect={media => onSelect(media)}
                            allowedTypes={videoType ? '*' : ['image']}
                            value={id}
                            render={({ open }) => <Button onClick={open} className="edit-btn" icon="edit" />}
                        />
                        <Button className="remove-btn" icon="no-alt" onClick={() => onClick()} />
                    </>
                )}
            </div>
        </BaseControl>
    );
};

export default Preview;
