import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import attributes from './attributes';
import metadata from './block.json';

/**
 * Internal dependencies
 */
import Edit from './edit';
import Save from './save';

// import deprecated
import deprecated from './deprecated';

/**
 * Block Registration
 */
registerBlockType(metadata, {
    icon: {
        src: (
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <g stroke="#5a17e6" fill="none">
                    <rect rx="1" height="18" width="22" y="3" x="1" strokeWidth="1.5" />
                    <path d="M5.5 16.125h13" />
                    <path
                        d="M11.956 9.837h.026l.007-.024.008.024h.025l-.02.015.008.024-.02-.015-.021.015.008-.024-.02-.015zM16.019 11.212h.025l.008-.024.008.024h.025l-.02.015.007.024-.02-.015-.02.015.007-.024-.02-.015zM8.269 11.337h.025l.008-.024.008.024h.025l-.02.015.007.024-.02-.015-.02.015.007-.024-.02-.015z"
                        strokeWidth="1.5"
                    />
                </g>
            </svg>
        )
    },
    attributes,
    edit: Edit,
    save: Save,
    deprecated
});
