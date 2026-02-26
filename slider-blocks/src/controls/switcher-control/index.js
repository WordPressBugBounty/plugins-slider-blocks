/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { ButtonGroup, Button } from '@wordpress/components';

const tabOptions = [
    {
        label: __('Normal', 'slider-blocks'),
        value: 'normal'
    },
    {
        label: __('Hover', 'slider-blocks'),
        value: 'hover'
    }
];
const SwitcherControl = ({ normal, hover, options = [] }) => {
    const [tab, setTab] = useState('normal');

    const Tabs = options.length > 0 ? options : tabOptions;

    return (
        <div className="gkits-control-container gkits-switcher gkits-mb-24">
            <ButtonGroup>
                {Tabs &&
                    Tabs.map((item, index) => {
                        return (
                            <Button
                                key={index}
                                className={`switcher-button ${tab === item.value ? 'gkits-active' : ''}`}
                                onClick={() => setTab(item.value)}
                            >
                                {item.label}
                            </Button>
                        );
                    })}
            </ButtonGroup>
            <div className="gkits-switcher-content">
                {tab === 'normal' && <div className="gkits-normal-content">{normal}</div>}
                {tab === 'hover' && <div className="gkits-hover-content">{hover}</div>}
            </div>
        </div>
    );
};

export default SwitcherControl;
