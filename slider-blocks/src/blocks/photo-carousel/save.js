/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { Fragment, RawHTML } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

const { DisplayIcon } = window.gutSliderModules;

/**
 * Save function
 */

export default function save({ attributes }) {
    const {
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
        enableOverlay,
        enableLightbox,
        photoHoverEffect,
        takePhotosFromSingleInstance,
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
            <div className="swiper">
                <div className="swiper-wrapper">
                    {slideItems &&
                        slideItems.length > 0 &&
                        slideItems.map((slide, index) => {
                            return (
                                <>
                                    {enableLightbox ? (
                                        <a
                                            className="swiper-slide"
                                            data-fslightbox={takePhotosFromSingleInstance ? `gallery-${uniqueId}` : 'gallery'}
                                            key={index}
                                            href={slide.url && slide.url}
                                        >
                                            <div className={`swiper-container-outer ${photoHoverEffect}`}>
                                                {enableOverlay && (
                                                    <div className="gutslider-overlay">
                                                        <div className="overlay-icon">
                                                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"
                                                                />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                )}
                                                {slide.url && <img src={slide.url} alt={slide.alt} className={`wp-image-${slide.id}`} />}
                                                {showCaption && (
                                                    <div className={`gutslider-caption ${titlePosition} ${titleWidthType}`}>
                                                        {slide.caption ? slide.caption : __('No Caption', 'slider-blocks')}
                                                    </div>
                                                )}
                                            </div>
                                        </a>
                                    ) : (
                                        <div className="swiper-slide" key={index}>
                                            <div className={`swiper-container-outer ${photoHoverEffect}`}>
                                                {enableOverlay && (
                                                    <div className="gutslider-overlay">
                                                        <div className="overlay-icon">
                                                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"
                                                                />
                                                            </svg>
                                                        </div>
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
                                    )}
                                </>
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
