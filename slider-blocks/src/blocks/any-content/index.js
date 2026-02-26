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
                <g strokeWidth="2.5" stroke="#5a17e6" fill="none">
                    <path
                        strokeLinecap="undefined"
                        strokeLinejoin="undefined"
                        d="M1.781 6.125h20.563M1.656 11.688h10.563M1.656 17.563h7.625"
                    />
                    <circle cy="15.531" cx="18.75" r="2.344" />
                </g>
            </svg>
        )
    },
    attributes,
    edit: Edit,
    save: Save,
    deprecated
});
