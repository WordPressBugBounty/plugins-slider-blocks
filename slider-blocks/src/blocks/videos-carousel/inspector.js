/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, SelectControl, TextControl, TextareaControl, ToggleControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import * as Constants from './constants';

const { CAROUSEL_EFFECTS, PAGINATION_TYPES, NAV_CONTAINER_POSITIONS, NAV_POSITIONS } = window.gutSliderModules.GlobalConstants;

const {
    HeaderTabs,
    SortableItem,
    SortableControl,
    ResRangeControl,
    SingleRangeControl,
    ResBoxControl,
    ColorControl,
    BorderControl,
    ButtonsGroupControl,
    SwitcherControl,
    FooterNotice,
    IconPickerControl,
    TipControl,
    ProLink,
    Preview,
    UploadBtn,
    ProLock
} = window.gutSliderModules;

const {
    VIDEO_SOURCES,
    SLIDE_HEIGHT,
    SLIDE_PADDING,
    SLIDE_MARGIN,
    COLUMNS,
    COLUMNS_GAP,
    NAV_BORDER,
    NAV_BRADIUS,
    NAV_HEIGHT,
    NAV_WIDTH,
    NAV_ICON_SIZE,
    NAV_MARGIN,
    NAV_GAP,
    PAG_BORDER,
    PAG_BRADIUS,
    PAG_HEIGHT,
    PAG_WIDTH,
    PAG_MARGIN,
    APAG_BORDER,
    APAG_BRADIUS,
    APAG_HEIGHT,
    APAG_WIDTH,
    FRAC_SIZE,
    PROG_SIZE,
    IFRAME_BORDER,
    IFRAME_BRADIUS,
    IFRAME_PADDING
} = Constants;

import objAttributes from './attributes';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        addNewSlide,
        slideItems,
        infiniteLoop,
        autoplay,
        autoplayDelay,
        stopOnLastSlide,
        reverseDirection,
        pauseOnHover,
        speed,
        showNavigation,
        navColor,
        navHoverColor,
        navBgColor,
        navHoverBgColor,
        navContainerPosition,
        navPosition,
        customNavIcon,
        navIconSource,
        navPrevIcon,
        navNextIcon,
        customPrevSVG,
        customNextSVG,
        showPagination,
        paginationType,
        dynamicBullets,
        pagColor,
        activePagColor,
        pagFracColor,
        pagFracCurrentColor,
        fracDividerColor,
        progressColor,
        activeProgressColor,
        keyboardControl,
        mousewheelControl,
        slideEffect,
        iframeBg,
        videoPlayer,
        // custom poster
        enableCustomPoster,
        enablePosterOverlay,
        posterOverlayColor,
        playIconColor,
        playIconSize,
        // remote navigation
        enableRemoteNav,
        remotePrevSelector,
        remoteNextSelector
    } = attributes;
    const objAttrs = { attributes, setAttributes, objAttributes };
    return (
        <InspectorControls>
            <HeaderTabs
                settingTabContent={
                    <Fragment>
                        <PanelBody title={__('Video Items', 'slider-blocks')} initialOpen={true}>
                            <ProLock>
                                <ToggleControl
                                    label={__('Enable Custom Thumbnail', 'slider-blocks')}
                                    checked={enableCustomPoster}
                                    onChange={() => setAttributes({ enableCustomPoster: !enableCustomPoster })}
                                />
                            </ProLock>
                            {enableCustomPoster && (
                                <ToggleControl
                                    label={__('Enable Thumbnail Overlay', 'slider-blocks')}
                                    checked={enablePosterOverlay}
                                    onChange={() => setAttributes({ enablePosterOverlay: !enablePosterOverlay })}
                                />
                            )}
                            <ProLock>
                                <ToggleControl
                                    label={__('Enable Remote Navigation', 'slider-blocks')}
                                    checked={enableRemoteNav}
                                    onChange={() => setAttributes({ enableRemoteNav: !enableRemoteNav })}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ProLock>
                            <SortableControl defaultItems={slideItems} attributeName="slideItems" setAttributes={setAttributes}>
                                {slideItems &&
                                    slideItems.map((item, index) => {
                                        return (
                                            <div className="dnd-container" key={index}>
                                                <Button
                                                    className="dnd-trash"
                                                    icon="trash"
                                                    onClick={() => {
                                                        const newItems = [...slideItems];
                                                        newItems.splice(index, 1);
                                                        setAttributes({
                                                            slideItems: newItems,
                                                            addNewSlide: !addNewSlide
                                                        });
                                                    }}
                                                />

                                                <Button
                                                    className="duplicate-btn"
                                                    icon="admin-page"
                                                    onClick={() => {
                                                        setAttributes({
                                                            addNewSlide: !addNewSlide
                                                        });
                                                        // create a deep copy of the slideItems array
                                                        const newSlideItems = JSON.parse(JSON.stringify(slideItems));
                                                        // duplicate the item and add it at the end
                                                        const duplicatedItem = { ...item }; // or use your preferred method to duplicate the item
                                                        newSlideItems.push(duplicatedItem);
                                                        setAttributes({
                                                            slideItems: newSlideItems
                                                        });
                                                    }}
                                                />

                                                <SortableItem key={item.id} id={item.id}>
                                                    <PanelBody
                                                        title={item.panelTitle || __('Panel Title', 'slider-blocks')}
                                                        initialOpen={false}
                                                    >
                                                        <TextControl
                                                            label={__('Panel Title', 'slider-blocks')}
                                                            value={item.panelTitle && item?.panelTitle}
                                                            onChange={value => {
                                                                const newSlideItems = [...slideItems];
                                                                newSlideItems[index].panelTitle = value;
                                                                setAttributes({
                                                                    slideItems: newSlideItems
                                                                });
                                                            }}
                                                        />
                                                        <SelectControl
                                                            label={__('Video Source', 'slider-blocks')}
                                                            value={item?.videoType}
                                                            options={applyFilters('gutslider.videoSources', VIDEO_SOURCES)}
                                                            onChange={v => {
                                                                const newSlideItems = [...slideItems];
                                                                newSlideItems[index].videoType = v;
                                                                setAttributes({
                                                                    slideItems: newSlideItems
                                                                });
                                                            }}
                                                        />
                                                        <TextControl
                                                            label={__('Video ID', 'slider-blocks')}
                                                            value={item?.videoID}
                                                            onChange={v => {
                                                                const newSlideItems = [...slideItems];
                                                                newSlideItems[index].videoID = v;
                                                                setAttributes({
                                                                    slideItems: newSlideItems
                                                                });
                                                            }}
                                                            placeholder={__('Enter Video ID', 'slider-blocks')}
                                                        />
                                                        {enableCustomPoster && (
                                                            <>
                                                                {item.thumbnail && item.thumbnail.url ? (
                                                                    <>
                                                                        <Preview
                                                                            label={__('Video Thumbnail', 'slider-blocks')}
                                                                            url={item.thumbnail.url}
                                                                            id={item.thumbnail.id}
                                                                            alt={item.thumbnail.alt}
                                                                            onSelect={media => {
                                                                                const newSlideItems = [...slideItems];
                                                                                newSlideItems[index].thumbnail = {
                                                                                    id: media.id,
                                                                                    url: media.url,
                                                                                    alt: media.alt
                                                                                };
                                                                                setAttributes({
                                                                                    slideItems: newSlideItems
                                                                                });
                                                                            }}
                                                                            onClick={() => {
                                                                                const newSlideItems = [...slideItems];
                                                                                newSlideItems[index].thumbnail = {
                                                                                    id: '',
                                                                                    url: '',
                                                                                    alt: ''
                                                                                };
                                                                                setAttributes({
                                                                                    slideItems: newSlideItems
                                                                                });
                                                                            }}
                                                                            focalPoint={true}
                                                                            focalValue={item.thumbFocalPoint}
                                                                            onFocalPointChange={v => {
                                                                                const newSlideItems = [...slideItems];
                                                                                newSlideItems[index].thumbFocalPoint = v;
                                                                                setAttributes({
                                                                                    slideItems: newSlideItems
                                                                                });
                                                                            }}
                                                                        />
                                                                    </>
                                                                ) : (
                                                                    <UploadBtn
                                                                        title={__('Add Thumbnail', 'slider-blocks')}
                                                                        onSelect={media => {
                                                                            const newSlideItems = [...slideItems];
                                                                            newSlideItems[index].thumbnail = {
                                                                                id: media.id,
                                                                                url: media.url,
                                                                                alt: media.alt
                                                                            };
                                                                            setAttributes({
                                                                                slideItems: newSlideItems
                                                                            });
                                                                        }}
                                                                        id={item.thumbnail && item.thumbnail.id}
                                                                    />
                                                                )}
                                                            </>
                                                        )}
                                                    </PanelBody>
                                                </SortableItem>
                                            </div>
                                        );
                                    })}
                            </SortableControl>
                            <Button
                                variant="primary"
                                style={{
                                    marginTop: '10px'
                                }}
                                onClick={() => {
                                    setAttributes({
                                        addNewSlide: !addNewSlide
                                    });
                                    setAttributes({
                                        slideItems: [
                                            ...slideItems,
                                            {
                                                id: slideItems.length + 1,
                                                panelTitle: 'Item #' + (slideItems.length + 1),
                                                videoSource: 'youtube',
                                                videoID: '',
                                                thumbnail: {},
                                                thumbFocalPoint: { x: 0.5, y: 0.5 }
                                            }
                                        ]
                                    });
                                }}
                            >
                                {__('Add Slide Item', 'slider-blocks')}
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 8V16" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M16 12H8" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </Button>
                        </PanelBody>
                        <PanelBody title={__('Video Player', 'slider-blocks')} initialOpen={false}>
                            <ToggleControl
                                label={__('Autoplay on load', 'slider-blocks')}
                                checked={videoPlayer?.autoplay}
                                onChange={() => setAttributes({ videoPlayer: { ...videoPlayer, autoplay: !videoPlayer.autoplay } })}
                            />
                            <ToggleControl
                                label={__('Mute volume', 'slider-blocks')}
                                checked={videoPlayer?.mute}
                                onChange={() => setAttributes({ videoPlayer: { ...videoPlayer, mute: !videoPlayer.mute } })}
                            />
                            <ToggleControl
                                label={__('Hide Player Controls', 'slider-blocks')}
                                checked={videoPlayer?.hideControls}
                                onChange={() => setAttributes({ videoPlayer: { ...videoPlayer, hideControls: !videoPlayer.hideControls } })}
                            />
                            <ToggleControl
                                label={__('Stop Showing Reels', 'slider-blocks')}
                                checked={videoPlayer?.rel}
                                onChange={() => setAttributes({ videoPlayer: { ...videoPlayer, rel: !videoPlayer.rel } })}
                            />
                        </PanelBody>
                        <PanelBody title={__('Container', 'slider-blocks')} initialOpen={false}>
                            <ResRangeControl
                                label={__('Height', 'slider-blocks')}
                                controlName={SLIDE_HEIGHT}
                                objAttrs={objAttrs}
                                min={1}
                                max={1000}
                                units={['px', 'em', 'vh']}
                            />
                            <ResBoxControl
                                label={__('Padding', 'slider-blocks')}
                                controlName={SLIDE_PADDING}
                                objAttrs={objAttrs}
                                min={0}
                                max={500}
                            />
                            <ResBoxControl
                                label={__('Margin', 'slider-blocks')}
                                controlName={SLIDE_MARGIN}
                                objAttrs={objAttrs}
                                min={-500}
                                max={500}
                            />
                        </PanelBody>
                        <PanelBody title={__('Carousel Options', 'slider-blocks')} initialOpen={false}>
                            <ResRangeControl
                                label={__('Columns', 'slider-blocks')}
                                controlName={COLUMNS}
                                objAttrs={objAttrs}
                                min={2}
                                max={10}
                                noUnits={true}
                            />
                            <ResRangeControl
                                label={__('Columns Gap', 'slider-blocks')}
                                controlName={COLUMNS_GAP}
                                objAttrs={objAttrs}
                                min={0}
                                max={200}
                            />
                            <SingleRangeControl
                                label={__('Speed', 'slider-blocks')}
                                value={speed}
                                onChange={v => setAttributes({ speed: v })}
                                min={1}
                                max={100}
                                onClickReset={() => setAttributes({ speed: null })}
                            />
                            <ToggleControl
                                label={__('Enable Infinite Loop', 'slider-blocks')}
                                checked={infiniteLoop}
                                onChange={() => {
                                    setAttributes({ infiniteLoop: !infiniteLoop, stopOnLastSlide: false });
                                }}
                            />
                            <ToggleControl
                                label={__('Enable Autoplay', 'slider-blocks')}
                                checked={autoplay}
                                onChange={() => setAttributes({ autoplay: !autoplay })}
                            />
                            {autoplay && (
                                <Fragment>
                                    <SingleRangeControl
                                        label={__('Autoplay Transition Delay', 'slider-blocks')}
                                        value={autoplayDelay}
                                        onChange={v => setAttributes({ autoplayDelay: v })}
                                        min={1}
                                        max={100}
                                        step={1}
                                        onClickReset={() => setAttributes({ autoplayDelay: '' })}
                                    />
                                    <ToggleControl
                                        label={__('Pause on Hover', 'slider-blocks')}
                                        checked={pauseOnHover}
                                        onChange={() => setAttributes({ pauseOnHover: !pauseOnHover })}
                                    />
                                    <ToggleControl
                                        label={__('Stop on Last Slide', 'slider-blocks')}
                                        checked={stopOnLastSlide}
                                        onChange={() => {
                                            setAttributes({ stopOnLastSlide: !stopOnLastSlide, infiniteLoop: false });
                                        }}
                                    />
                                    <ToggleControl
                                        label={__('Reverse Direction', 'slider-blocks')}
                                        checked={reverseDirection}
                                        onChange={() => setAttributes({ reverseDirection: !reverseDirection })}
                                    />
                                </Fragment>
                            )}
                            <ToggleControl
                                label={__('Enable Keyboard Control', 'slider-blocks')}
                                checked={keyboardControl}
                                onChange={() => setAttributes({ keyboardControl: !keyboardControl })}
                            />
                            <ToggleControl
                                label={__('Enable Mouse Wheel Control', 'slider-blocks')}
                                checked={mousewheelControl}
                                onChange={() => setAttributes({ mousewheelControl: !mousewheelControl })}
                            />
                            <ToggleControl
                                label={__('Show Navigation', 'slider-blocks')}
                                checked={showNavigation}
                                onChange={() => setAttributes({ showNavigation: !showNavigation })}
                            />
                            <ToggleControl
                                label={__('Show Pagination', 'slider-blocks')}
                                checked={showPagination}
                                onChange={() => setAttributes({ showPagination: !showPagination })}
                            />
                        </PanelBody>
                        <PanelBody title={__('Effects', 'slider-blocks')} initialOpen={false}>
                            <SelectControl
                                label={__('Carousel Effect', 'slider-blocks')}
                                value={slideEffect}
                                options={CAROUSEL_EFFECTS}
                                onChange={effect => setAttributes({ slideEffect: effect })}
                            />
                        </PanelBody>
                        {enableRemoteNav && (
                            <PanelBody title={__('Remote Navigation', 'slider-blocks')} initialOpen={false}>
                                <TextControl
                                    label={__('Previous Selector', 'slider-blocks')}
                                    value={remotePrevSelector}
                                    onChange={v =>
                                        setAttributes({
                                            remotePrevSelector: v
                                        })
                                    }
                                    help={__('Add the selector class to navigate to the previous slide.', 'slider-blocks')}
                                />
                                <TextControl
                                    label={__('Next Selector', 'slider-blocks')}
                                    value={remoteNextSelector}
                                    onChange={v =>
                                        setAttributes({
                                            remoteNextSelector: v
                                        })
                                    }
                                    help={__('Add the selector class to navigate to the next slide.', 'slider-blocks')}
                                />
                                <p className="gutslider-note">
                                    <strong>{__('Note:', 'slider-blocks')} </strong>
                                    {__('Save and refresh the page to see the changes in the editor.', 'slider-blocks')}
                                </p>{' '}
                            </PanelBody>
                        )}
                        {showNavigation && !enableRemoteNav && (
                            <PanelBody title={__('Navigation', 'slider-blocks')} initialOpen={false}>
                                <ButtonsGroupControl
                                    label={__('Position Type', 'slider-blocks')}
                                    value={navContainerPosition}
                                    options={NAV_CONTAINER_POSITIONS}
                                    onChange={value => {
                                        setAttributes({ navContainerPosition: value });
                                    }}
                                />
                                <SelectControl
                                    label={__('Position', 'slider-blocks')}
                                    value={navPosition}
                                    options={NAV_POSITIONS}
                                    onChange={v => {
                                        setAttributes({ navPosition: v });
                                    }}
                                />
                                <ToggleControl
                                    label={__('Custom Navigation Icon', 'slider-blocks')}
                                    checked={customNavIcon}
                                    onChange={() => setAttributes({ customNavIcon: !customNavIcon })}
                                />
                                {customNavIcon && (
                                    <Fragment>
                                        <ButtonsGroupControl
                                            label={__('Icon Source', 'slider-blocks')}
                                            value={navIconSource}
                                            options={[
                                                { label: __('Library', 'slider-blocks'), value: 'library' },
                                                { label: __('Custom SVG', 'slider-blocks'), value: 'custom' }
                                            ]}
                                            onChange={value => {
                                                setAttributes({ navIconSource: value });
                                            }}
                                        />
                                        {navIconSource === 'library' && (
                                            <Fragment>
                                                <IconPickerControl
                                                    label={__('Prev Icon', 'slider-blocks')}
                                                    value={navPrevIcon}
                                                    onChange={value => {
                                                        setAttributes({ navPrevIcon: value });
                                                    }}
                                                />
                                                <IconPickerControl
                                                    label={__('Next Icon', 'slider-blocks')}
                                                    value={navNextIcon}
                                                    onChange={value => {
                                                        setAttributes({ navNextIcon: value });
                                                    }}
                                                />
                                            </Fragment>
                                        )}
                                        {navIconSource === 'custom' && (
                                            <Fragment>
                                                <TextareaControl
                                                    label={__('Prev SVG Code', 'slider-blocks')}
                                                    help={__('Paste your custom SVG codes here', 'slider-blocks')}
                                                    value={customPrevSVG}
                                                    onChange={v => setAttributes({ customPrevSVG: v })}
                                                />
                                                <TextareaControl
                                                    label={__('Next SVG Code', 'slider-blocks')}
                                                    help={__('Paste your custom SVG codes here', 'slider-blocks')}
                                                    value={customNextSVG}
                                                    onChange={v => setAttributes({ customNextSVG: v })}
                                                />
                                            </Fragment>
                                        )}
                                    </Fragment>
                                )}
                            </PanelBody>
                        )}
                        {showPagination && (
                            <PanelBody title={__('Pagination', 'slider-blocks')} initialOpen={false}>
                                <Fragment>
                                    <ButtonsGroupControl
                                        label={__('Pagination Type', 'slider-blocks')}
                                        value={paginationType}
                                        options={PAGINATION_TYPES}
                                        onChange={value => {
                                            setAttributes({ paginationType: value });
                                        }}
                                    />
                                    {paginationType === 'bullets' && (
                                        <ToggleControl
                                            label={__('Dynamic Bullets', 'slider-blocks')}
                                            checked={dynamicBullets}
                                            onChange={() => setAttributes({ dynamicBullets: !dynamicBullets })}
                                        />
                                    )}
                                </Fragment>
                                <TipControl message={__('Changes not visible? save & reload to see the changes.', 'slider-blocks')} />
                            </PanelBody>
                        )}
                    </Fragment>
                }
                designTabContent={
                    <Fragment>
                        {enableCustomPoster && (
                            <PanelBody title={__('Custom Thumbnail', 'slider-blocks')} initialOpen={false}>
                                <SingleRangeControl
                                    label={__('Play Icon Size', 'slider-blocks')}
                                    value={playIconSize}
                                    onChange={v => setAttributes({ playIconSize: v })}
                                    min={1}
                                    max={10}
                                    step={0.1}
                                    onClickReset={() => setAttributes({ playIconSize: 2.5 })}
                                />
                                <ColorControl
                                    label={__('Play Icon Color', 'slider-blocks')}
                                    color={playIconColor}
                                    onChange={v => setAttributes({ playIconColor: v })}
                                />
                                {enablePosterOverlay && (
                                    <ColorControl
                                        label={__('Overlay Color', 'slider-blocks')}
                                        color={posterOverlayColor}
                                        onChange={v => setAttributes({ posterOverlayColor: v })}
                                    />
                                )}
                            </PanelBody>
                        )}
                        <PanelBody title={__('Iframe', 'slider-blocks')} initialOpen={false}>
                            <BorderControl controlName={IFRAME_BORDER} objAttrs={objAttrs} />
                            <ResBoxControl
                                label={__('Border Radius', 'slider-blocks')}
                                controlName={IFRAME_BRADIUS}
                                objAttrs={objAttrs}
                                min={0}
                                max={100}
                            />
                            <ResBoxControl
                                label={__('Padding', 'slider-blocks')}
                                controlName={IFRAME_PADDING}
                                objAttrs={objAttrs}
                                min={0}
                                max={100}
                            />
                            <ColorControl
                                label={__('Background', 'slider-blocks')}
                                color={iframeBg}
                                onChange={v => {
                                    setAttributes({ iframeBg: v });
                                }}
                            />
                        </PanelBody>
                        {showNavigation && (
                            <PanelBody title={__('Navigation', 'slider-blocks')} initialOpen={false}>
                                <ResRangeControl
                                    label={__('Width', 'slider-blocks')}
                                    controlName={NAV_WIDTH}
                                    objAttrs={objAttrs}
                                    min={1}
                                    max={100}
                                    units={['px', 'em', 'rem']}
                                />
                                <ResRangeControl
                                    label={__('Height', 'slider-blocks')}
                                    controlName={NAV_HEIGHT}
                                    objAttrs={objAttrs}
                                    min={1}
                                    max={100}
                                    units={['px', 'em', 'rem']}
                                />
                                <ResRangeControl
                                    label={__('Icon Size', 'slider-blocks')}
                                    controlName={NAV_ICON_SIZE}
                                    objAttrs={objAttrs}
                                    min={1}
                                    max={100}
                                    units={['px', 'em', 'rem']}
                                />
                                <ResRangeControl
                                    label={__('Icon Gap', 'gutslider-pro')}
                                    controlName={NAV_GAP}
                                    objAttrs={objAttrs}
                                    min={0}
                                    max={100}
                                    units={['px', 'em', 'rem']}
                                />
                                <BorderControl controlName={NAV_BORDER} objAttrs={objAttrs} />
                                <ResBoxControl
                                    label={__('Border Radius', 'slider-blocks')}
                                    controlName={NAV_BRADIUS}
                                    objAttrs={objAttrs}
                                    min={0}
                                    max={100}
                                />
                                <ResBoxControl
                                    label={__('Margin', 'slider-blocks')}
                                    controlName={NAV_MARGIN}
                                    objAttrs={objAttrs}
                                    min={-500}
                                    max={500}
                                />
                                <SwitcherControl
                                    normal={
                                        <Fragment>
                                            <ColorControl
                                                label={__('Color', 'slider-blocks')}
                                                color={navColor}
                                                onChange={v => {
                                                    setAttributes({
                                                        navColor: v
                                                    });
                                                }}
                                            />
                                            <ColorControl
                                                label={__('Background', 'slider-blocks')}
                                                color={navBgColor}
                                                onChange={v => {
                                                    setAttributes({
                                                        navBgColor: v
                                                    });
                                                }}
                                            />
                                        </Fragment>
                                    }
                                    hover={
                                        <Fragment>
                                            <ColorControl
                                                label={__('Color', 'slider-blocks')}
                                                color={navHoverColor}
                                                onChange={v => {
                                                    setAttributes({
                                                        navHoverColor: v
                                                    });
                                                }}
                                            />
                                            <ColorControl
                                                label={__('Background', 'slider-blocks')}
                                                color={navHoverBgColor}
                                                onChange={v => {
                                                    setAttributes({
                                                        navHoverBgColor: v
                                                    });
                                                }}
                                            />
                                        </Fragment>
                                    }
                                />
                            </PanelBody>
                        )}
                        {showPagination && (
                            <PanelBody title={__('Pagination', 'slider-blocks')} initialOpen={false}>
                                {paginationType === 'fraction' && (
                                    <ResRangeControl
                                        label={__('Size', 'slider-blocks')}
                                        controlName={FRAC_SIZE}
                                        objAttrs={objAttrs}
                                        min={1}
                                        max={100}
                                        units={['px', 'em', 'rem']}
                                    />
                                )}
                                {paginationType === 'progressbar' && (
                                    <ResRangeControl
                                        label={__('Size', 'slider-blocks')}
                                        controlName={PROG_SIZE}
                                        objAttrs={objAttrs}
                                        min={1}
                                        max={100}
                                        units={['px', 'em', 'rem']}
                                    />
                                )}
                                <ResBoxControl
                                    label={__('Margin', 'slider-blocks')}
                                    controlName={PAG_MARGIN}
                                    objAttrs={objAttrs}
                                    min={-500}
                                    max={500}
                                />
                                <SwitcherControl
                                    options={[
                                        {
                                            label: __('Normal', 'slider-blocks'),
                                            value: 'normal'
                                        },
                                        {
                                            label: __('Active', 'slider-blocks'),
                                            value: 'hover'
                                        }
                                    ]}
                                    normal={
                                        <Fragment>
                                            {paginationType === 'bullets' && (
                                                <Fragment>
                                                    <ResRangeControl
                                                        label={__('Width', 'slider-blocks')}
                                                        controlName={PAG_WIDTH}
                                                        objAttrs={objAttrs}
                                                        min={1}
                                                        max={100}
                                                        units={['px', 'em', 'rem']}
                                                    />
                                                    <ResRangeControl
                                                        label={__('Height', 'slider-blocks')}
                                                        controlName={PAG_HEIGHT}
                                                        objAttrs={objAttrs}
                                                        min={1}
                                                        max={100}
                                                        units={['px', 'em', 'rem']}
                                                    />
                                                    <ColorControl
                                                        label={__('Color', 'slider-blocks')}
                                                        color={pagColor}
                                                        onChange={v => {
                                                            setAttributes({ pagColor: v });
                                                        }}
                                                    />
                                                    <BorderControl controlName={PAG_BORDER} objAttrs={objAttrs} />
                                                    <ResBoxControl
                                                        label={__('Border Radius', 'slider-blocks')}
                                                        controlName={PAG_BRADIUS}
                                                        objAttrs={objAttrs}
                                                        min={0}
                                                        max={100}
                                                    />
                                                </Fragment>
                                            )}
                                            {paginationType === 'fraction' && (
                                                <Fragment>
                                                    <ColorControl
                                                        label={__('Color', 'slider-blocks')}
                                                        color={pagFracColor}
                                                        onChange={v => {
                                                            setAttributes({ pagFracColor: v });
                                                        }}
                                                    />
                                                    <ColorControl
                                                        label={__('Divider Color', 'slider-blocks')}
                                                        color={fracDividerColor}
                                                        onChange={v => {
                                                            setAttributes({ fracDividerColor: v });
                                                        }}
                                                    />
                                                </Fragment>
                                            )}
                                            {paginationType === 'progressbar' && (
                                                <Fragment>
                                                    <ColorControl
                                                        label={__('Color', 'slider-blocks')}
                                                        color={progressColor}
                                                        onChange={v => {
                                                            setAttributes({ progressColor: v });
                                                        }}
                                                    />
                                                </Fragment>
                                            )}
                                        </Fragment>
                                    }
                                    hover={
                                        <Fragment>
                                            {paginationType === 'bullets' && (
                                                <Fragment>
                                                    <ResRangeControl
                                                        label={__('Width', 'slider-blocks')}
                                                        controlName={APAG_WIDTH}
                                                        objAttrs={objAttrs}
                                                        min={1}
                                                        max={100}
                                                        units={['px', 'em', 'rem']}
                                                    />
                                                    <ResRangeControl
                                                        label={__('Height', 'slider-blocks')}
                                                        controlName={APAG_HEIGHT}
                                                        objAttrs={objAttrs}
                                                        min={1}
                                                        max={100}
                                                        units={['px', 'em', 'rem']}
                                                    />
                                                    <ColorControl
                                                        label={__('Color', 'slider-blocks')}
                                                        color={activePagColor}
                                                        onChange={v => {
                                                            setAttributes({ activePagColor: v });
                                                        }}
                                                    />
                                                    <BorderControl controlName={APAG_BORDER} objAttrs={objAttrs} />
                                                    <ResBoxControl
                                                        label={__('Border Radius', 'slider-blocks')}
                                                        controlName={APAG_BRADIUS}
                                                        objAttrs={objAttrs}
                                                        min={0}
                                                        max={100}
                                                    />
                                                </Fragment>
                                            )}
                                            {paginationType === 'fraction' && (
                                                <Fragment>
                                                    <ColorControl
                                                        label={__('Color', 'slider-blocks')}
                                                        color={pagFracCurrentColor}
                                                        onChange={v => {
                                                            setAttributes({ pagFracCurrentColor: v });
                                                        }}
                                                    />
                                                </Fragment>
                                            )}
                                            {paginationType === 'progressbar' && (
                                                <Fragment>
                                                    <ColorControl
                                                        label={__('Color', 'slider-blocks')}
                                                        color={activeProgressColor}
                                                        onChange={v => {
                                                            setAttributes({ activeProgressColor: v });
                                                        }}
                                                    />
                                                </Fragment>
                                            )}
                                        </Fragment>
                                    }
                                />
                            </PanelBody>
                        )}
                    </Fragment>
                }
            />
            <ProLink message={__('GutSlider Pro', 'slider-blocks')} />
            <FooterNotice />
        </InspectorControls>
    );
};

export default Inspector;
