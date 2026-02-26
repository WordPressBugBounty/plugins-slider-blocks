import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import attributes from './attributes';
import metadata from './block.json';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

/**
 * Deprecated dependencies
 */
import deprecated from './deprecated';

/**
 * Block Registration
 */
registerBlockType(metadata, {
    icon: {
        src: (
            <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg">
                <rect rx={1} stroke="#5a17e6" strokeWidth="1.5" height={18} width="22.5" y={3} x=".75" fill="none" />
                <g strokeWidth="1.5" stroke="#5a17e6" fill="none">
                    <path d="M3.968 8.406h16.064M3.968 11.846h10.751M3.968 15.594h6.376" />
                </g>
            </svg>
        )
    },
    attributes,
    edit: Edit,
    save: Save,
    deprecated
});
