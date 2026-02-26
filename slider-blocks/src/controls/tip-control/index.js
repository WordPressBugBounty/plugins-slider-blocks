/**
 * WordPress dependencies
 */
import { Tip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const TipControl = ({ message }) => {
    return (
        <div className="gkits-tip-control">
            <Tip>{message || __('Save and reload to see the carousel settings changes', 'slider-blocks')}</Tip>
        </div>
    );
};
export default TipControl;
