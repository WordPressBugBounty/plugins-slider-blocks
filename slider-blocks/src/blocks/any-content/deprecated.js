/* eslint-disable no-shadow */
/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { Fragment } from '@wordpress/element';
import classnames from 'classnames';

import attributes from './attributes';

const deprecated = [
    {
        attributes,
        save({ attributes }) {
            const { uniqueId, showNavigation, showPagination, sliderOptions } = attributes;

            // Block Props
            const blockProps = useBlockProps.save({
                className: classnames(uniqueId, 'swiper')
            });

            return (
                <div {...blockProps} data-swiper-options={JSON.stringify(sliderOptions)}>
                    <div className="swiper-wrapper">
                        <InnerBlocks.Content />
                    </div>
                    {showPagination && <div className="swiper-pagination"></div>}
                    {showNavigation && (
                        <Fragment>
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </Fragment>
                    )}
                </div>
            );
        }
    }
];

export default deprecated;
