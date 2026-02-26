/* eslint-disable no-undef */
window.addEventListener('DOMContentLoaded', () => {
    const gutPhotoCarousels = document.querySelectorAll('.wp-block-gutsliders-photo-carousel');
    if (gutPhotoCarousels.length > 0) {
        gutPhotoCarousels.forEach(slider => {
            const sliderSelector = slider.querySelector('.swiper');
            const sliderOptions = slider.dataset.swiperOptions;
            const sliderOptionsObj = JSON.parse(sliderOptions);
            new Swiper(sliderSelector, sliderOptionsObj);

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
