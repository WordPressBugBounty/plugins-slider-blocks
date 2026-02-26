/**
 * WordPress dependencies
 */
import { Button, Flex, FlexBlock, FlexItem, Popover, TextControl, ToggleControl } from '@wordpress/components';
import { withInstanceId } from '@wordpress/compose';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import ResLabelControl from '../res-label-control';

const LinkControl = ({ instanceId, label, value, onChange, help = '', openInNewTab = true, addNoFollow = true, addSponsored = true }) => {
    const id = `link-control-${instanceId}`;
    const [linkExtra, setLinkExtra] = useState(false);

    return (
        <div className="gkits-control-container">
            <div className="gkits-mb-8">
                <ResLabelControl requiredProps={id} label={label} noResBtns={true} />
            </div>
            <div className="gkits-linked-control">
                <Flex>
                    <FlexBlock>
                        <TextControl
                            value={value && value.url}
                            onChange={url => {
                                onChange({
                                    ...value,
                                    url
                                });
                            }}
                        />
                    </FlexBlock>
                    <FlexItem>
                        <Button
                            icon="admin-generic"
                            onClick={() => {
                                setLinkExtra(true);
                            }}
                            className={`gkits-link-extra-btn ${linkExtra && 'gkits-le-active'}`}
                        />
                    </FlexItem>
                </Flex>
                {help && <p className="gkits_custom__help">{help}</p>}
            </div>
            {linkExtra && (
                <Popover
                    position="bottom left"
                    className="gkits-link-extra-popover-container"
                    onClose={() => {
                        setLinkExtra(false);
                    }}
                    onFocusOutside={() => setLinkExtra(false)}
                    offset={8}
                >
                    <div className="gkits-link-extra-popover">
                        {openInNewTab && (
                            <ToggleControl
                                label={__('Open in new tab', 'slider-blocks')}
                                checked={value && value.openInNewTab}
                                onChange={() => {
                                    onChange({
                                        ...value,
                                        openInNewTab: !value.openInNewTab
                                    });
                                }}
                            />
                        )}
                        {addNoFollow && (
                            <ToggleControl
                                label={__('Add nofollow rel', 'slider-blocks')}
                                checked={value && value.addNoFollow}
                                onChange={() => {
                                    onChange({
                                        ...value,
                                        addNoFollow: !value.addNoFollow
                                    });
                                }}
                            />
                        )}
                        {addSponsored && (
                            <ToggleControl
                                label={__('Add sponsored rel', 'slider-blocks')}
                                checked={value && value.addSponsored}
                                onChange={() => {
                                    onChange({
                                        ...value,
                                        addSponsored: !value.addSponsored
                                    });
                                }}
                            />
                        )}
                    </div>
                </Popover>
            )}
        </div>
    );
};
export default withInstanceId(LinkControl);
