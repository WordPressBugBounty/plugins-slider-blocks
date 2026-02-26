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
                <rect rx="1" strokeWidth="1.5" height="18" width="22" y="3" x=".938" stroke="#5a17e6" fill="#fff" />
                <path
                    stroke="#5a17e6"
                    d="M10.834 27.594v12.062h14.582V27.594H10.834zm4.726 4.95a1.395 1.395 0 1 0-.001-2.79 1.395 1.395 0 0 0 0 2.79zm7.021 1.216-2.655-2.656-3.736 3.736-1.036-1.035-1.486 1.486v2.79h8.913V33.76z"
                    fill="#fff"
                />
                <g strokeWidth=".5" stroke="#5a17e6" fill="#fff">
                    <path d="M3.281 9.469h7.938v5.063H3.281zM12.656 9.469h7.938v5.063h-7.938z" />
                </g>
                <path stroke="#5a17e6" fill="none" d="M4.688 12h4.697M14 12h5.197" />
            </svg>
        )
    },
    attributes,
    edit: Edit,
    save: Save
});
