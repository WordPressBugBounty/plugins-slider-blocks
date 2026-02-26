/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { Fragment, RawHTML } from '@wordpress/element';
const { DisplayIcon } = window.gutSliderModules;
/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Save function
 */

export default function save({ attributes }) {
    const {
        uniqueID,
        slideItems,
        sliderOptions,
        showNavigation,
        navContainerPosition,
        navPosition,
        customNavIcon,
        navIconSource,
        navPrevIcon,
        navNextIcon,
        customPrevSVG,
        customNextSVG,
        showPagination,
        videoPlayer,
        enableCustomPoster,
        enablePosterOverlay,
        // remote navigation
        enableRemoteNav,
        remotePrevSelector,
        remoteNextSelector
    } = attributes;

    const blockProps = useBlockProps.save({
        className: classnames(uniqueID, navContainerPosition, navPosition)
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
                        slideItems.map((slide, index) => {
                            return (
                                <div className={classnames('swiper-slide')} key={index}>
                                    <div className="gutslider-slide">
                                        {enableCustomPoster && slide.thumbnail && slide.thumbnail?.url && (
                                            <div className="custom-thumbnail">
                                                <img
                                                    src={slide.thumbnail.url}
                                                    alt={slide.thumbnail.alt || 'Custom Thumbnail'}
                                                    style={
                                                        slide.thumbFocalPoint
                                                            ? {
                                                                  objectPosition: `${slide.thumbFocalPoint?.x * 100}% ${
                                                                      slide.thumbFocalPoint?.y * 100
                                                                  }%`
                                                              }
                                                            : { objectPosition: '50% 50%' }
                                                    }
                                                />
                                                {enablePosterOverlay && <div className="thumb-overlay"></div>}
                                                <button className="play-btn">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM17.5 12L9.5 8V16L17.5 12Z"
                                                            fill="#141B34"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        )}
                                        {slide.videoType === 'youtube' && (
                                            <iframe
                                                className="video-carousel-slide"
                                                title="video-carousel-slide"
                                                width="100%"
                                                height="100%"
                                                src={`https://www.youtube.com/embed/${slide.videoID}?${
                                                    videoPlayer?.hideControls ? 'controls=0' : ''
                                                }&${videoPlayer?.autoplay ? 'autoplay=1' : 'autoplay=0'}&${
                                                    videoPlayer?.rel ? 'rel=0' : ''
                                                }&${videoPlayer?.mute ? 'mute=1' : 'mute=0'}`}
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            ></iframe>
                                        )}
                                        {slide.videoType === 'vimeo' && (
                                            <iframe
                                                className="video-carousel-slide"
                                                title="video-carousel-slide"
                                                width="100%"
                                                height="100%"
                                                src={`https://player.vimeo.com/video/${slide.videoID}?dnt=1`}
                                                allow="autoplay; fullscreen; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
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
            {showPagination && <div className="swiper-pagination"></div>}
        </div>
    );
}
