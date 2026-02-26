/* eslint-disable no-undef */
/* eslint-disable camelcase */
/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { ToggleControl } from '@wordpress/components';
import { Fragment, useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Components
 */
const DEMO_LINK = 'https://gutslider.com/';

const BlocksControls = () => {
    const [blocks, setBlocks] = useState([]);

    useEffect(() => {
        // fetch data from rest api endpoint gutslider/v1/blocks
        apiFetch({ path: '/gutslider/v1/blocks' }).then(response => {
            // check if response is not empty
            if (response.length > 0) {
                // set the blocks state with response data
                setBlocks(response);
            } else {
                console.error('No blocks found');
            }
        });
    }, []);

    const [dataSaveNotice, setDataSaveNotice] = useState(false);

    const updateStatus = blockName => {
        const block = blocks.find(b => b.name === blockName);
        const status = !block.active;

        apiFetch({
            path: '/gutslider/v1/blocks',
            method: 'POST',
            data: {
                nonce: gutslider?.nonce,
                name: blockName,
                active: status
            }
        })
            .then(response => {
                setBlocks(response);

                // set the notice to true
                setDataSaveNotice(true);
            })
            .catch(error => {
                console.error('Error updating block status:', error);
            });
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDataSaveNotice(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [dataSaveNotice]);

    return (
        <Fragment>
            {dataSaveNotice && (
                <div className="gutslider-data-update-notice">
                    <span className="notice-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                        </svg>
                    </span>
                    {__('Changes saved successfully.', 'slider-blocks')}
                    <button
                        className="notice-close"
                        onClick={() => {
                            setDataSaveNotice(false);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
            )}

            <div className="blocks-controls">
                {blocks &&
                    blocks.length > 0 &&
                    blocks.map((block, index) => {
                        return (
                            <div
                                className={classnames('single-block-wrapper', {
                                    pro: block?.is_pro
                                })}
                                key={index}
                            >
                                {block?.is_pro && <div className="pro-badge">{__('Pro', 'slider-blocks')}</div>}
                                <div className="single-block-head flex">
                                    {block?.title && <h3 className="single-block-title">{block.title}</h3>}
                                    {block?.is_pro ? (
                                        <>
                                            {gutslider?.isPro ? (
                                                <ToggleControl checked={block?.active} onChange={() => updateStatus(block?.name)} />
                                            ) : (
                                                <a
                                                    href="https://gutslider.com/pricing"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="upgrade-now"
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        id="Layer_1"
                                                        data-name="Layer 1"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="m23.664,0h-8.475l-2.97,6.003c-.073-.002-.146-.003-.22-.003-.076,0-.152,0-.228.003L8.811,0H.324l4.637,9.399c-1.227,1.538-1.961,3.486-1.961,5.601,0,4.962,4.038,9,9,9s9-4.038,9-9c0-2.121-.738-4.072-1.97-5.612L23.664,0Zm-7.854,1h6.243l-3.751,7.582c-1.334-1.311-3.074-2.209-5.011-2.489l2.52-5.093ZM1.933,1h6.256l2.513,5.094c-1.943.282-3.686,1.186-5.021,2.504L1.933,1Zm18.067,14c0,4.411-3.589,8-8,8s-8-3.589-8-8S7.589,7,12,7s8,3.589,8,8Zm-7.244-5.135h-1.494l-.897,3.135h-3.365v1.453l2.318,1.336-1.081,2.955,1.158.86,2.614-2.074,2.609,2.093,1.205-.831-1.171-2.969,2.347-1.377v-1.445h-3.347l-.896-3.135Zm.652,5.528l1.14,2.892-2.536-2.034-2.535,2.011,1.067-2.919-2.328-1.343h2.902l.89-3.11.89,3.11h2.884l-2.375,1.393Z" />
                                                    </svg>
                                                    {__('Upgrade Now', 'slider-blocks')}
                                                </a>
                                            )}
                                        </>
                                    ) : (
                                        <ToggleControl checked={block?.active} onChange={() => updateStatus(block?.name)} />
                                    )}
                                </div>
                                {block?.description && <p className="single-block-description">{block.description}</p>}
                                {block?.demo_slug && (
                                    <a
                                        className="single-block-actions"
                                        href={`${DEMO_LINK}${block.demo_slug}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {__('View Demo', 'slider-blocks')}
                                    </a>
                                )}
                            </div>
                        );
                    })}
            </div>
        </Fragment>
    );
};

export default BlocksControls;
