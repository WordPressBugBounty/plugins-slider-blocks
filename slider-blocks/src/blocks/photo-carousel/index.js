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
 * Block Registration
 */
registerBlockType(metadata, {
    icon: {
        src: (
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <rect rx="1" strokeWidth="1.5" height="18" width="22" y="3" x="1" stroke="#5a17e6" fill="#fff" />
                <path
                    stroke="#5a17e6"
                    d="M4.709 5.969V18.03H19.29V5.97H4.71zm4.726 4.95a1.395 1.395 0 1 0-.001-2.79 1.395 1.395 0 0 0 0 2.79zm7.021 1.216-2.655-2.656-3.736 3.736-1.036-1.035-1.486 1.486v2.79h8.913v-4.321z"
                    fill="#fff"
                />
            </svg>
        )
    },
    attributes,
    edit: Edit,
    save: Save
});
