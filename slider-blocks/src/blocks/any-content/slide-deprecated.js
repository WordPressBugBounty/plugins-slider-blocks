/* eslint-disable no-shadow */
/**
 * WordPress dependencies
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
const slideDeprecated = [
    {
        attributes: {
            bgType: {
                type: 'string',
                default: 'classic'
            },
            bgColor: {
                type: 'string',
                default: '#efefef'
            },
            bgGradient: {
                type: 'string',
                default: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)'
            },
            enableOverlay: {
                type: 'boolean',
                default: false
            },
            overlayType: {
                type: 'string',
                default: 'classic'
            },
            overlayColor: {
                type: 'string',
                default: '#000000'
            },
            overlayGradient: {
                type: 'string',
                default: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)'
            },
            overlayOpacity: {
                type: 'number',
                default: 0.5
            },
            image: {
                type: 'object',
                default: {
                    id: '',
                    url: '',
                    alt: ''
                }
            }
        },
        save: ({ attributes }) => {
            const { bgType, bgColor, bgGradient, enableOverlay, overlayType, overlayColor, overlayGradient, overlayOpacity, image } =
                attributes;

            // style
            const bgStyles = {
                backgroundColor: bgColor ? bgColor : '',
                backgroundImage: bgType === 'classic' ? `url(${image.url})` : bgGradient,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
            };
            const overlayStyles = {
                background: overlayType === 'classic' ? overlayColor : overlayGradient,
                opacity: overlayOpacity ? overlayOpacity : ''
            };
            return (
                <div
                    {...useBlockProps.save({
                        className: 'swiper-slide'
                    })}
                >
                    <div className="swiper-container-outer" style={bgStyles}>
                        {enableOverlay && <div className="gutslider-overlay" style={overlayStyles}></div>}
                        <div className="gutslider-content-inner">
                            <InnerBlocks.Content />
                        </div>
                    </div>
                </div>
            );
        }
    }
];

export default slideDeprecated;
