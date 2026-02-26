/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

const LogsHead = ({ setLogPanel }) => {
    return (
        <div className="logs-panel-head flex">
            <h3 className="logs-panel-title">{__('GutSlider Changelogs', 'slider-blocks')}</h3>
            <Button className="close-log-panel" onClick={() => setLogPanel(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path
                        fillRule="evenodd"
                        d="M12.293 3.293a1 1 0 0 1 1.414 1.414L9.414 9l4.293 4.293a1 1 0 1 1-1.414 1.414L8 10.414l-4.293 4.293a1 1 0 1 1-1.414-1.414L6.586 9 2.293 4.707A1 1 0 1 1 3.707 3.293L8 7.586l4.293-4.293z"
                    />
                </svg>
            </Button>
        </div>
    );
};
export default LogsHead;
