/* eslint-disable no-undef */
/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal Components
 */
import Card from './welcome-parts/card';
import Video from './welcome-parts/video';

const WelcomeTab = () => {
    return (
        <div className="welcome-tab-elements">
            {!gutslider?.isPro && (
                <div className="gutslider-dashboard-pro-notice">
                    <div className="left-area">
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                                <path d="m23.664,0h-8.475l-2.97,6.003c-.073-.002-.146-.003-.22-.003-.076,0-.152,0-.228.003L8.811,0H.324l4.637,9.399c-1.227,1.538-1.961,3.486-1.961,5.601,0,4.962,4.038,9,9,9s9-4.038,9-9c0-2.121-.738-4.072-1.97-5.612L23.664,0Zm-7.854,1h6.243l-3.751,7.582c-1.334-1.311-3.074-2.209-5.011-2.489l2.52-5.093ZM1.933,1h6.256l2.513,5.094c-1.943.282-3.686,1.186-5.021,2.504L1.933,1Zm18.067,14c0,4.411-3.589,8-8,8s-8-3.589-8-8S7.589,7,12,7s8,3.589,8,8Zm-7.244-5.135h-1.494l-.897,3.135h-3.365v1.453l2.318,1.336-1.081,2.955,1.158.86,2.614-2.074,2.609,2.093,1.205-.831-1.171-2.969,2.347-1.377v-1.445h-3.347l-.896-3.135Zm.652,5.528l1.14,2.892-2.536-2.034-2.535,2.011,1.067-2.919-2.328-1.343h2.902l.89-3.11.89,3.11h2.884l-2.375,1.393Z" />
                            </svg>
                        </div>
                        <div className="title">{__('Upgrade to GutSlider Pro', 'slider-blocks')}</div>
                        <div className="features-list">
                            <li className="single-feature">{__('10+ Pro Slider and Carousel Blocks', 'slider-blocks')}</li>
                            <li className="single-feature">{__('25+ Interactive Content Animations', 'slider-blocks')}</li>
                            <li className="single-feature">{__('Static and Dynamic Content', 'slider-blocks')}</li>
                            <li className="single-feature">{__('Interactive Freemium Styles', 'slider-blocks')}</li>
                        </div>
                    </div>
                    <div className="right-area">
                        <a href="https://gutslider.com/pricing" target="_blank" rel="noopener noreferrer" className="button button-primary">
                            {__('Upgrade Now', 'slider-blocks')}
                        </a>
                    </div>
                </div>
            )}
            <div className="tab-container flex">
                <div className="flex-2">
                    <Video
                        title={__('Welcome to GutSlider Blocks', 'slider-blocks')}
                        description={__(
                            'GutSlider Blocks is a Gutenberg block plugin that allows you to create sliders in the Gutenberg editor. Watch this video to get started.',
                            'slider-blocks'
                        )}
                        videoId="P9Zj4bSVq4I"
                        actions={[
                            {
                                label: __('More Videos', 'slider-blocks'),
                                link: 'https://gutslider.com/videos'
                            },
                            {
                                label: __('Documentation', 'slider-blocks'),
                                link: 'https://gutslider.com/docs'
                            }
                        ]}
                    />
                </div>
                <div className="flex-1">
                    <Card
                        title={__('Report Bugs', 'slider-blocks')}
                        description={__(
                            'If you have found a bug in GutSlider Blocks, please report it in our support forum. We will fix it as soon as possible.',
                            'slider-blocks'
                        )}
                        action={{
                            label: __('Report Now', 'slider-blocks'),
                            link: 'https://wordpress.org/support/plugin/slider-blocks/'
                        }}
                    />
                    <Card
                        title={__('Love the Plugin', 'slider-blocks')}
                        description={__(
                            'If you love GutSlider Blocks, please leave us a review on WordPress.org. We appreciate your support!',
                            'slider-blocks'
                        )}
                        action={{
                            label: __('Rate Now', 'slider-blocks'),
                            link: 'https://wordpress.org/support/plugin/slider-blocks/reviews/#new-post'
                        }}
                    />
                    <Card
                        title={__('Contact Us', 'slider-blocks')}
                        description={__(
                            'If you have any questions or need help with GutSlider Blocks, please contact us. We are happy to help you!',
                            'slider-blocks'
                        )}
                        action={{
                            label: __('Contact Us', 'slider-blocks'),
                            link: 'https://gutenbergkits.com/contact'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default WelcomeTab;
