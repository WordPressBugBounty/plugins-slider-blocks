/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import classnames from 'classnames';
import { Fragment, RawHTML } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const { DisplayIcon } = window.gutSliderModules;

/**
 * Save function
 */

export default function save({ attributes }) {
    const {
        preset,
        uniqueId,
        titlePosition,
        titleWidthType,
        slideItems,
        sliderOptions,
        showCaption,
        showPagination,
        showNavigation,
        navContainerPosition,
        navPosition,
        customNavIcon,
        navIconSource,
        navPrevIcon,
        navNextIcon,
        customPrevSVG,
        customNextSVG,
        linkedLogos,
        openLinkInNewTab,
        photoHoverEffect,
        // remote navigation
        enableRemoteNav,
        remotePrevSelector,
        remoteNextSelector
    } = attributes;

    // Block Props
    const blockProps = useBlockProps.save({
        className: classnames(uniqueId, navContainerPosition, navPosition, showPagination ? 'has__pagination' : '')
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
            <div className={`swiper ${preset}`}>
                <div className="swiper-wrapper">
                    {slideItems &&
                        slideItems.length > 0 &&
                        slideItems.map((slide, index) => {
                            return (
                                <div className="swiper-slide" key={index}>
                                    <div className={`swiper-container-outer ${photoHoverEffect}`}>
                                        {linkedLogos && (
                                            <div className="gutslider-overlay">
                                                {linkedLogos ? (
                                                    <a
                                                        className="overlay-icon"
                                                        href={slide.link ? slide.link : '#'}
                                                        target={openLinkInNewTab && '_blank'}
                                                        rel={openLinkInNewTab && 'noopener noreferrer'}
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                                        </svg>
                                                    </a>
                                                ) : (
                                                    <div className="overlay-icon">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            viewBox="0 0 16 16"
                                                        >
                                                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                                                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                        {slide.url && <img src={slide.url} alt={slide.alt} />}
                                        {showCaption && (
                                            <div className={`gutslider-caption ${titlePosition} ${titleWidthType}`}>
                                                {slide.caption ? slide.caption : __('No Caption', 'slider-blocks')}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                </div>
                {showNavigation && navContainerPosition === 'nav_inside' && !enableRemoteNav && (
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
            {showPagination && <div className="swiper-pagination"></div>}
            {showNavigation && navContainerPosition === 'nav_outside' && !enableRemoteNav && (
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
