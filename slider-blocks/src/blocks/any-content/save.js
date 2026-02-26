/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { Fragment, RawHTML } from '@wordpress/element';
import classnames from 'classnames';
const { DisplayIcon } = window.gutSliderModules;

/**
 * Save function
 */

export default function save({ attributes }) {
    const {
        uniqueId,
        showNavigation,
        showPagination,
        sliderOptions,
        navContainerPosition,
        navPosition,
        customNavIcon,
        navIconSource,
        navPrevIcon,
        navNextIcon,
        customPrevSVG,
        customNextSVG,
        // remote navigation
        enableRemoteNav,
        remotePrevSelector,
        remoteNextSelector
    } = attributes;

    // Block Props
    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, navContainerPosition, navPosition)
    });

    return (
        <div
            {...blockProps}
            data-swiper-options={JSON.stringify(sliderOptions)}
            {...(enableRemoteNav && {
                'data-rprev': remotePrevSelector,
                'data-rnext': remoteNextSelector
            })}
        >
            <div className="swiper">
                <div className="swiper-wrapper">
                    <InnerBlocks.Content />
                </div>
                {showPagination && <div className="swiper-pagination"></div>}
                {showNavigation && navContainerPosition === 'nav_inside' && (
                    <Fragment>
                        <div className={`gutslider-nav nav_inside ${navPosition}`}>
                            {customNavIcon ? (
                                <Fragment>
                                    <div className="gutslider-prev">
                                        {navIconSource === 'library' && <DisplayIcon icon={navPrevIcon} />}
                                        {navIconSource === 'custom' && <RawHTML>{customPrevSVG}</RawHTML>}
                                    </div>
                                    <div className="gutslider-next">
                                        {navIconSource === 'library' && <DisplayIcon icon={navNextIcon} />}
                                        {navIconSource === 'custom' && <RawHTML>{customNextSVG}</RawHTML>}
                                    </div>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <div className="swiper-button-prev"></div>
                                    <div className="swiper-button-next"></div>
                                </Fragment>
                            )}
                        </div>
                    </Fragment>
                )}
            </div>
            {showNavigation && navContainerPosition === 'nav_outside' && (
                <Fragment>
                    <div className={`gutslider-nav nav_outside ${navPosition}`}>
                        {customNavIcon ? (
                            <Fragment>
                                <div className="gutslider-prev">
                                    {navIconSource === 'library' && <DisplayIcon icon={navPrevIcon} />}
                                    {navIconSource === 'custom' && <RawHTML>{customPrevSVG}</RawHTML>}
                                </div>
                                <div className="gutslider-next">
                                    {navIconSource === 'library' && <DisplayIcon icon={navNextIcon} />}
                                    {navIconSource === 'custom' && <RawHTML>{customNextSVG}</RawHTML>}
                                </div>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <div className="swiper-button-prev"></div>
                                <div className="swiper-button-next"></div>
                            </Fragment>
                        )}
                    </div>
                </Fragment>
            )}
        </div>
    );
}
