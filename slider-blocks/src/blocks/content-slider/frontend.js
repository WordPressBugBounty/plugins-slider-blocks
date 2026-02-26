/* eslint-disable no-undef */
window.addEventListener('DOMContentLoaded', () => {
    const gutContentSliders = document.querySelectorAll('.wp-block-gutsliders-content-slider');
    if (gutContentSliders.length > 0) {
        gutContentSliders.forEach(slider => {
            const sliderSelector = slider.querySelector('.swiper');
            const sliderOptions = slider.dataset.swiperOptions;
            const sliderOptionsObj = JSON.parse(sliderOptions);
            const prevArrow = slider.querySelector('.swiper-button-prev') || slider.querySelector('.gutslider-prev');
            const nextArrow = slider.querySelector('.swiper-button-next') || slider.querySelector('.gutslider-next');

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

            // Arrows follow mouse
            // Track target positions
            let targetX = 0,
                targetY = 0;
            let currentX = 0,
                currentY = 0;
            let activeArrow = null;

            // Get arrow dimensions for centering
            function getArrowCenter(arrow) {
                const rect = arrow.getBoundingClientRect();
                return {
                    width: rect.width,
                    height: rect.height
                };
            }

            // Smooth animation loop
            function animate() {
                currentX += (targetX - currentX) * 0.15; // easing factor
                currentY += (targetY - currentY) * 0.15;

                if (activeArrow) {
                    const arrowDimensions = getArrowCenter(activeArrow);
                    activeArrow.style.left = currentX - arrowDimensions.width / 2 + 'px';
                    activeArrow.style.top = currentY - arrowDimensions.height / 2 + 'px';
                }

                requestAnimationFrame(animate);
            }
            animate();

            // sliderSelector.addEventListener('mousemove', e => {
            //     const rect = sliderSelector.getBoundingClientRect();
            //     const mouseX = e.clientX - rect.left;
            //     const mouseY = e.clientY - rect.top;
            //     const midX = rect.width / 2;

            //     // Keep using relative coordinates but store them for centering
            //     targetX = mouseX;
            //     targetY = mouseY;

            //     if (mouseX < midX) {
            //         activeArrow = prevArrow;
            //         prevArrow.style.opacity = 1;
            //         nextArrow.style.opacity = 0;
            //     } else {
            //         activeArrow = nextArrow;
            //         nextArrow.style.opacity = 1;
            //         prevArrow.style.opacity = 0;
            //     }
            // });

            // sliderSelector.addEventListener('mouseleave', () => {
            //     prevArrow.style.opacity = 0;
            //     nextArrow.style.opacity = 0;
            //     activeArrow = null;
            // });

            // Enhanced click handling for better reliability
            // [prevArrow, nextArrow].forEach(arrow => {
            //     if (arrow) {
            //         // Use mousedown for more responsive clicks
            //         arrow.addEventListener('mousedown', e => {
            //             e.preventDefault();
            //             e.stopPropagation();

            //             if (arrow === prevArrow) {
            //                 sliderSelector.swiper.slidePrev();
            //             } else {
            //                 sliderSelector.swiper.slideNext();
            //             }
            //         });

            //         // Backup click handler
            //         arrow.addEventListener('click', e => {
            //             e.preventDefault();
            //             e.stopPropagation();

            //             if (arrow === prevArrow) {
            //                 sliderSelector.swiper.slidePrev();
            //             } else {
            //                 sliderSelector.swiper.slideNext();
            //             }
            //         });
            //     }
            // });
        });
    }
});
