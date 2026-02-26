/* eslint-disable no-undef */
import { createRoot } from '@wordpress/element';
import StarRating from '../../controls/star-rating';

window.addEventListener('DOMContentLoaded', () => {
    const gutTestimonialSliders = document.querySelectorAll('.wp-block-gutsliders-testimonial-slider');
    if (gutTestimonialSliders.length > 0) {
        gutTestimonialSliders.forEach(slider => {
            // star rating
            const starRatingWrappers = slider.querySelectorAll('.author-rating');
            if (starRatingWrappers.length > 0) {
                starRatingWrappers.forEach(starRatingWrapper => {
                    const rating = starRatingWrapper.dataset.rating;
                    const root = createRoot(starRatingWrapper);
                    root.render(<StarRating rating={rating} />);
                });
            }
            // slider
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
