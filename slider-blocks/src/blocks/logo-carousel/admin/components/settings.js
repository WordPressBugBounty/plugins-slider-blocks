/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useState, Fragment } from '@wordpress/element';

/**
 * Internal Components
 */
import BlocksControls from './blocks-parts/blocks';
import AssetsControls from './settings-parts/assets';

const SettingsTab = () => {
    const [activeSetting, setActiveSetting] = useState('assets');
    return (
        <Fragment>
            <h3 className="settings-title">{__('GutSlider Settings', 'slider-blocks')}</h3>
            <div className="settings-tabs">
                <div className="tab-container settings-height flex">
                    <div className="flex-1">
                        <div className="setting-buttons">
                            <Button
                                className={`setting-btn ${activeSetting === 'assets' ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveSetting('assets');
                                }}
                            >
                                {__('Assets Settings', 'slider-blocks')}
                            </Button>
                        </div>
                    </div>
                    <div className="flex-2">
                        {activeSetting === 'blocks' && <BlocksControls />}
                        {activeSetting === 'assets' && <AssetsControls />}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default SettingsTab;
