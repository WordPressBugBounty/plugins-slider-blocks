/* eslint-disable no-undef */
/* eslint-disable camelcase */
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

const ProLock = ({ children }) => {
    return (
        <>
            {gutslider_preview?.is_pro === '' ? (
                <div className="gkits-pro-lock-container">
                    {children}
                    <span className="pro-badge">{__('Pro', 'slider-blocks')}</span>
                </div>
            ) : (
                <>{children}</>
            )}
        </>
    );
};

export default ProLock;
