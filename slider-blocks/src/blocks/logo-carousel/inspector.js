/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, TextareaControl, SelectControl, ToggleControl, GradientPicker, TextControl, CardDivider } = wp.components;
const { Fragment } = wp.element;

/**
 * Internal dependencies
 */
import * as Constants from './constants';

const { CAROUSEL_EFFECTS, NAV_CONTAINER_POSITIONS, NAV_POSITIONS, BACKGROUND_TYPES, GRADIENT_PALETTES, PHOTO_EFFECTS } =
    window.gutSliderModules.GlobalConstants;

const {
    HeaderTabs,
    ResRangeControl,
    SingleRangeControl,
    ResBoxControl,
    ColorControl,
    TypographyControl,
    BorderControl,
    ButtonsGroupControl,
    SwitcherControl,
    FooterNotice,
    IconPickerControl,
    TipControl,
    ProLink,
    ProLock
} = window.gutSliderModules;

const {
    PRESETS_TYPES,
    PHOTO_PAGINATION_TYPES,
    COLUMNS,
    COLUMNS_GAP,
    SLIDE_HEIGHT,
    SLIDE_PADDING,
    SLIDE_MARGIN,
    TITLE_SPACING,
    TITLE_MARGIN,
    TITLE_TYPO,
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
    CAPTION_WIDTH_TYPE,
    OVERLAY_ICON_SIZE,
    OVERLAY_ICON_CONTAINER,
    CORNER_POSITIONS,
    CORNER_POSITIONS_TWO,
    PHOTO_BORDER,
    PHOTO_BRADIUS,
    PHOTO_PADDING,
    LOGO_MAX_WIDTH
} = Constants;

import objAttributes from './attributes';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        preset,
        slideItems,
        showCaption,
        titleColor,
        titleBgColor,
        titleWidthType,
        titlePosition,
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
        carouselEffect,
        linkedLogos,
        objectFit,
        openLinkInNewTab,
        overlayColor,
        overlayIconColor,
        overlayIconBgColor,
        overlayIconHoverColor,
        overlayIconHoverBgColor,
        photoBgType,
        photoBgColor,
        photoBgGradient,
        photoHoverEffect,
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
                        <PanelBody title={__('General', 'slider-blocks')} initialOpen={true}>
                            <SelectControl
                                label={__('Preset', 'slider-blocks')}
                                value={preset}
                                options={PRESETS_TYPES}
                                onChange={value => setAttributes({ preset: value })}
                            />

                            <CardDivider />

                            <ToggleControl
                                label={__('Show Caption', 'slider-blocks')}
                                checked={showCaption}
                                onChange={() => setAttributes({ showCaption: !showCaption })}
                            />
                            <ToggleControl
                                label={__('Link the Logos', 'slider-blocks')}
                                checked={linkedLogos}
                                onChange={() => setAttributes({ linkedLogos: !linkedLogos })}
                            />
                            {linkedLogos && (
                                <ToggleControl
                                    label={__('Open Links in New Tab', 'slider-blocks')}
                                    checked={openLinkInNewTab}
                                    onChange={() => setAttributes({ openLinkInNewTab: !openLinkInNewTab })}
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
                        </PanelBody>
                        {linkedLogos && (
                            <PanelBody title={__('Links', 'slider-blocks')} initialOpen={false}>
                                {slideItems &&
                                    slideItems.map((item, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <TextControl
                                                    label={__('Logo Link', 'slider-blocks') + ' #' + (index + 1)}
                                                    help={__('Enter the link for the logo.', 'slider-blocks')}
                                                    value={item.link}
                                                    onChange={v => {
                                                        setAttributes({
                                                            slideItems: [
                                                                ...slideItems.slice(0, index),
                                                                { ...item, link: v },
                                                                ...slideItems.slice(index + 1)
                                                            ]
                                                        });
                                                    }}
                                                />
                                            </Fragment>
                                        );
                                    })}
                            </PanelBody>
                        )}
                        <PanelBody title={__('Container', 'slider-blocks')} initialOpen={false}>
                            <ResRangeControl
                                label={__('Height', 'slider-blocks')}
                                controlName={SLIDE_HEIGHT}
                                objAttrs={objAttrs}
                                min={1}
                                max={1000}
                                units={['px', 'em', 'vh']}
                            />
                        </PanelBody>
                        <PanelBody title={__('Carousel Options', 'slider-blocks')} initialOpen={false}>
                            <ResRangeControl
                                label={__('Columns', 'slider-blocks')}
                                controlName={COLUMNS}
                                objAttrs={objAttrs}
                                min={1}
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
                        </PanelBody>
                        <PanelBody title={__('Slide Options', 'slider-blocks')} initialOpen={false}>
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
                                        label={__('Autoplay Delay', 'slider-blocks')}
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
                                value={carouselEffect}
                                options={CAROUSEL_EFFECTS}
                                onChange={effect => setAttributes({ carouselEffect: effect })}
                                help={__('Save & reload to see the effect.', 'slider-blocks')}
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
                                        options={PHOTO_PAGINATION_TYPES}
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
                        <PanelBody title={__('Container', 'slider-blocks')} initialOpen={true}>
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
                        <PanelBody title={__('Logo', 'slider-blocks')} initialOpen={false}>
                            <SelectControl
                                label={__('Hover Effect', 'slider-blocks')}
                                value={photoHoverEffect}
                                options={PHOTO_EFFECTS}
                                onChange={value => {
                                    setAttributes({ photoHoverEffect: value });
                                }}
                            />
                            <SelectControl
                                label={__('Object Fit', 'slider-blocks')}
                                value={objectFit}
                                options={[
                                    { label: __('Cover', 'slider-blocks'), value: 'cover' },
                                    { label: __('Contain', 'slider-blocks'), value: 'contain' },
                                    { label: __('Fill', 'slider-blocks'), value: 'fill' },
                                    { label: __('Scale Down', 'slider-blocks'), value: 'scale-down' }
                                ]}
                                onChange={value => {
                                    setAttributes({ objectFit: value });
                                }}
                            />
                            <ResRangeControl
                                label={__('Max Width', 'slider-blocks')}
                                controlName={LOGO_MAX_WIDTH}
                                objAttrs={objAttrs}
                                min={1}
                                max={500}
                            />
                            <BorderControl controlName={PHOTO_BORDER} objAttrs={objAttrs} />
                            <ResBoxControl
                                label={__('Border Radius', 'slider-blocks')}
                                controlName={PHOTO_BRADIUS}
                                objAttrs={objAttrs}
                                min={0}
                                max={100}
                            />
                            <ResBoxControl
                                label={__('Padding', 'slider-blocks')}
                                controlName={PHOTO_PADDING}
                                objAttrs={objAttrs}
                                min={0}
                                max={100}
                            />
                            <ButtonsGroupControl
                                label={__('Background Type', 'slider-blocks')}
                                value={photoBgType}
                                options={BACKGROUND_TYPES}
                                onChange={value => {
                                    setAttributes({ photoBgType: value });
                                }}
                            />
                            {photoBgType === 'classic' && (
                                <ColorControl
                                    label={__('Solid Color', 'slider-blocks')}
                                    color={photoBgColor}
                                    onChange={value => {
                                        setAttributes({ photoBgColor: value });
                                    }}
                                />
                            )}
                            {photoBgType === 'gradient' && (
                                <GradientPicker
                                    __nextHasNoMargin={true}
                                    value={photoBgGradient}
                                    onChange={currentGradient => {
                                        setAttributes({ photoBgGradient: currentGradient });
                                    }}
                                    gradients={GRADIENT_PALETTES}
                                />
                            )}
                        </PanelBody>
                        {showCaption && (
                            <PanelBody title={__('Caption', 'slider-blocks')} initialOpen={false}>
                                <ButtonsGroupControl
                                    label={__('Width Type', 'slider-blocks')}
                                    value={titleWidthType}
                                    options={CAPTION_WIDTH_TYPE}
                                    onChange={value => {
                                        setAttributes({ titleWidthType: value });
                                    }}
                                />
                                <SelectControl
                                    label={__('Position', 'slider-blocks')}
                                    value={titlePosition}
                                    options={titleWidthType === 'auto__width' ? CORNER_POSITIONS : CORNER_POSITIONS_TWO}
                                    onChange={v => {
                                        setAttributes({ titlePosition: v });
                                    }}
                                />
                                <ColorControl
                                    label={__('Color', 'slider-blocks')}
                                    color={titleColor}
                                    onChange={v => {
                                        setAttributes({ titleColor: v });
                                    }}
                                />
                                <ColorControl
                                    label={__('Background', 'slider-blocks')}
                                    color={titleBgColor}
                                    onChange={v => {
                                        setAttributes({ titleBgColor: v });
                                    }}
                                />
                                <TypographyControl label={__('Typography', 'slider-blocks')} controlName={TITLE_TYPO} objAttrs={objAttrs} />
                                <ResBoxControl
                                    label={__('Padding', 'slider-blocks')}
                                    controlName={TITLE_SPACING}
                                    objAttrs={objAttrs}
                                    min={0}
                                    max={100}
                                />

                                {preset === 'gutslider-preset-2' && (
                                    <>
                                        <ResBoxControl
                                            label={__('Margin', 'slider-blocks')}
                                            controlName={TITLE_MARGIN}
                                            objAttrs={objAttrs}
                                            min={0}
                                            max={100}
                                        />
                                    </>
                                )}
                            </PanelBody>
                        )}
                        {linkedLogos && (
                            <PanelBody
                                title={
                                    preset === 'gutslider-preset-2' ? __('Links', 'slider-blocks') : __('Links Overlay', 'slider-blocks')
                                }
                                initialOpen={false}
                            >
                                <ResRangeControl
                                    label={__('Icon Container', 'slider-blocks')}
                                    controlName={OVERLAY_ICON_CONTAINER}
                                    objAttrs={objAttrs}
                                    min={1}
                                    max={100}
                                />
                                <ResRangeControl
                                    label={__('Icon Size', 'slider-blocks')}
                                    controlName={OVERLAY_ICON_SIZE}
                                    objAttrs={objAttrs}
                                    min={1}
                                    max={100}
                                />
                                {preset !== 'gutslider-preset-2' && (
                                    <>
                                        <ColorControl
                                            label={__('Overlay Color', 'slider-blocks')}
                                            color={overlayColor}
                                            onChange={v => {
                                                setAttributes({ overlayColor: v });
                                            }}
                                        />
                                    </>
                                )}

                                <SwitcherControl
                                    normal={
                                        <Fragment>
                                            <ColorControl
                                                label={__('Icon Color', 'slider-blocks')}
                                                color={overlayIconColor}
                                                onChange={v => {
                                                    setAttributes({ overlayIconColor: v });
                                                }}
                                            />
                                            <ColorControl
                                                label={__('Icon Background', 'slider-blocks')}
                                                color={overlayIconBgColor}
                                                onChange={v => {
                                                    setAttributes({ overlayIconBgColor: v });
                                                }}
                                            />
                                        </Fragment>
                                    }
                                    hover={
                                        <Fragment>
                                            <ColorControl
                                                label={__('Icon Color', 'slider-blocks')}
                                                color={overlayIconHoverColor}
                                                onChange={v => {
                                                    setAttributes({ overlayIconHoverColor: v });
                                                }}
                                            />
                                            <ColorControl
                                                label={__('Icon Background', 'slider-blocks')}
                                                color={overlayIconHoverBgColor}
                                                onChange={v => {
                                                    setAttributes({ overlayIconHoverBgColor: v });
                                                }}
                                            />
                                        </Fragment>
                                    }
                                />
                            </PanelBody>
                        )}
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
