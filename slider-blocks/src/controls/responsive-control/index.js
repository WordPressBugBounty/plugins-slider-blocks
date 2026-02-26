import { dispatch, useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

const devices = [
    {
        name: 'Desktop',
        icon: 'desktop'
    },
    {
        name: 'Tablet',
        icon: 'tablet'
    },
    {
        name: 'Mobile',
        icon: 'smartphone'
    }
];

const ResponsiveControl = ({ label, children, setAttributes }) => {
    const deviceType = useSelect(select => {
        return select('core/editor').getDeviceType();
    }, []);

    // change resMode on device change
    useEffect(() => {
        setAttributes({ resMode: deviceType });
    }, [deviceType]);

    return (
        <div className="gutslider-control responsive-control">
            <div className="gutslider-responsive-control">
                <div className="gutslider-responsive-label">{label}</div>
                <div className="gutslider-responsive-value">
                    <div className="gutslider-responsive-device-selector">
                        {devices.map(device => (
                            <button
                                key={device.name}
                                className={`gutslider-responsive-device-button ${deviceType === device.name ? 'active' : ''}`}
                                onClick={() => {
                                    dispatch('core/editor').setDeviceType(device.name);
                                    setAttributes({ resMode: device.name });
                                }}
                                title={`${device.name} View`}
                            >
                                <span className={`dashicons dashicons-${device.icon}`}></span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="gutslider-responsive-control-content">{children}</div>
        </div>
    );
};

export default ResponsiveControl;
