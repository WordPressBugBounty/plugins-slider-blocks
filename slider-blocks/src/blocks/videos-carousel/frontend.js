/* eslint-disable no-undef */

document.addEventListener('DOMContentLoaded', () => {
    const gutVideoCaorusels = document.querySelectorAll('.wp-block-gutsliders-videos-carousel');
    if (gutVideoCaorusels.length > 0) {
        gutVideoCaorusels.forEach(slider => {
            // slider
            const sliderSelector = slider.querySelector('.swiper');
            const sliderOptions = slider.dataset.swiperOptions;
            const sliderOptionsObj = JSON.parse(sliderOptions);
            new Swiper(sliderSelector, sliderOptionsObj);

            // custom thumbnail
            const customThumbnails = slider.querySelectorAll('.custom-thumbnail');
            customThumbnails.forEach(thumbnail => {
                const playButton = thumbnail.querySelector('.play-btn');
                playButton.addEventListener('click', () => {
                    // Find the iframe in the same slide
                    const slide = thumbnail.closest('.swiper-slide');
                    const iframe = slide.querySelector('.video-carousel-slide');

                    if (iframe) {
                        const src = iframe.src;

                        // Check if it's YouTube or Vimeo and update src for autoplay
                        if (src.includes('youtube.com') || src.includes('youtu.be')) {
                            // For YouTube, add or update autoplay parameter
                            const newSrc = updateYouTubeUrl(src);
                            iframe.src = newSrc;
                        } else if (src.includes('vimeo.com')) {
                            // For Vimeo, add or update autoplay parameter
                            const newSrc = updateVimeoUrl(src);
                            iframe.src = newSrc;
                        }

                        // Hide the thumbnail after updating the iframe src
                        thumbnail.style.display = 'none';
                    }
                });
            });

            // Remote navigation selectors
            const remotePrevSelector = slider.dataset.rprev;
            const remoteNextSelector = slider.dataset.rnext;

            // If remote navigation is enabled, add event listeners
            if (remotePrevSelector && remoteNextSelector) {
                const remotePrev = document.querySelector(`.${remotePrevSelector}`);
                const remoteNext = document.querySelector(`.${remoteNextSelector}`);

                if (remotePrev) {
                    remotePrev.addEventListener('click', () => {
                        sliderSelector.swiper.slidePrev();
                    });
                }

                if (remoteNext) {
                    remoteNext.addEventListener('click', () => {
                        sliderSelector.swiper.slideNext();
                    });
                }
            }
        });
    }
});

// Helper function to update YouTube URL with autoplay
function updateYouTubeUrl(url) {
    const urlObj = new URL(url);
    urlObj.searchParams.set('autoplay', '1');
    return urlObj.toString();
}

// Helper function to update Vimeo URL with autoplay
function updateVimeoUrl(url) {
    const urlObj = new URL(url);
    urlObj.searchParams.set('autoplay', '1');
    return urlObj.toString();
}
