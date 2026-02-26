import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { render } from '@wordpress/element';
import classNames from 'classnames';

const GutSliderCompareBlock = ({ comparisonOptions, sliderOptions, beforeImage, afterImage }) => {
    return (
        <ReactCompareSlider
            portrait={comparisonOptions?.slideMode !== 'horizontal' ? true : false}
            changePositionOnHover={comparisonOptions?.swipeMode !== 'drag' ? true : false}
            onlyHandleDraggable={comparisonOptions?.onlyHandleDraggable}
            disabled={comparisonOptions?.disableSliding}
            position={comparisonOptions?.initialPosition}
            itemOne={
                <div className={classNames('gutslider-before', 'gutslider-ba-item', `${sliderOptions?.labelsVisibility}`)}>
                    {sliderOptions?.showLabels && (
                        <div
                            className={classNames(
                                'gutslider-label',
                                'before-label',
                                `${sliderOptions?.labelsVisibility === 'hover' ? sliderOptions?.hoverAnimation : ''}`,
                                `${comparisonOptions?.slideMode}`,
                                `${
                                    comparisonOptions?.slideMode === 'horizontal'
                                        ? sliderOptions?.labelVPosition
                                        : sliderOptions?.labelHPosition
                                }`
                            )}
                        >
                            {sliderOptions?.beforeLabel}
                        </div>
                    )}
                    <ReactCompareSliderImage
                        src={beforeImage && beforeImage.url}
                        alt={(beforeImage && beforeImage.alt) || 'Before Slider Photo'}
                        className={`wp-image-${beforeImage && beforeImage.id}`}
                    />
                </div>
            }
            itemTwo={
                <div className={classNames('gutslider-after', 'gutslider-ba-item', `${sliderOptions?.labelsVisibility}`)}>
                    {sliderOptions?.showLabels && (
                        <div
                            className={classNames(
                                'gutslider-label',
                                'after-label',
                                `${sliderOptions?.labelsVisibility === 'hover' ? sliderOptions?.hoverAnimation : ''}`,
                                `${comparisonOptions?.slideMode}`,
                                `${
                                    comparisonOptions?.slideMode === 'horizontal'
                                        ? sliderOptions?.labelVPosition
                                        : sliderOptions?.labelHPosition
                                }`
                            )}
                        >
                            {sliderOptions?.afterLabel}
                        </div>
                    )}
                    <ReactCompareSliderImage
                        src={afterImage && afterImage.url}
                        alt={(afterImage && afterImage.alt) || 'After Slider Photo'}
                        className={`wp-image-${afterImage && afterImage.id}`}
                    />
                </div>
            }
        />
    );
};

document.addEventListener('DOMContentLoaded', () => {
    const icgbpCompareBlocks = document.querySelectorAll('.wp-block-gutsliders-before-after');

    if (icgbpCompareBlocks.length > 0) {
        icgbpCompareBlocks.forEach(element => {
            const comparisonSelector = element.querySelector('.gutslider-compare-block');

            const beforeImage = JSON.parse(comparisonSelector.dataset.beforeimage);
            const afterImage = JSON.parse(comparisonSelector.dataset.afterimage);
            const comparisonOptions = JSON.parse(comparisonSelector.dataset.comparisonoptions);
            const sliderOptions = JSON.parse(comparisonSelector.dataset.slideroptions);

            render(
                <GutSliderCompareBlock
                    comparisonOptions={comparisonOptions}
                    sliderOptions={sliderOptions}
                    beforeImage={beforeImage}
                    afterImage={afterImage}
                />,
                comparisonSelector
            );
        });
    }
});
