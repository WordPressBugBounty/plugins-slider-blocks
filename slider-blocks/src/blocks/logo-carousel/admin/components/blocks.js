/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal Components
 */

import BlocksControls from './blocks-parts/blocks';

const BlocksTab = () => {
    return (
        <div className="welcome-tab-elements">
            <div className="tab-container">
                <h3 className="settings-title">{__('Blocks List', 'slider-blocks')}</h3>
                <div className="blocks-container">
                    <BlocksControls />
                </div>
            </div>
        </div>
    );
};

export default BlocksTab;
