/**
 * WordPress dependencies
 */
import { Button, ButtonGroup } from '@wordpress/components';
import { dispatch, select } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

// Internal dependencies
import { RES_DEVICES } from '../../constants';

const ResBtn = ({ resMode, setAttributes }) => {
    const previewMode = resMode;

    const editorMode = select('core/editor').getDeviceType(); // get current device type
    useEffect(() => {
        if (!editorMode) {
            dispatch('core/editor').setDeviceType('Desktop');
        }
        setAttributes({ resMode: editorMode });
    }, [editorMode, resMode]);

    return (
        <div className="gkits-res-btn">
            <ButtonGroup>
                {RES_DEVICES &&
                    RES_DEVICES.map((device, index) => {
                        return (
                            <Button
                                key={index}
                                className={`gkits-device-btn ${previewMode === device.value ? 'gkits-active' : ''}`}
                                onClick={() => {
                                    dispatch('core/editor').setDeviceType(device.value);
                                    setAttributes({ resMode: device.value });
                                }}
                                title={device.label}
                            >
                                {device.icon}
                            </Button>
                        );
                    })}
            </ButtonGroup>
        </div>
    );
};

export default ResBtn;
