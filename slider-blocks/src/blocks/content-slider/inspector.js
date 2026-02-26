/* eslint-disable import/no-extraneous-dependencies */
/**
 * WordPress dependencies
 */
import { InspectorControls } from '@wordpress/block-editor';
import {
    Button,
    GradientPicker,
    PanelBody,
    RangeControl,
    SelectControl,
    TextControl,
    TextareaControl,
    ToggleControl
} from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { cloneDeep } from 'lodash';

/**
 * Internal dependencies
 */
import * as Constants from './constants';

const {
    SLIDER_TYPES,
    OVERLAY_TYPES,
    HEADING_TAGS,
    ANIMATION_TYPES,
    GRADIENT_PALETTES,
    SLIDE_EFFECTS,
    CREATIVE_STYLES,
    CAROUSEL_EFFECTS,
    PAGINATION_TYPES,
    NAV_CONTAINER_POSITIONS,
    NAV_POSITIONS,
    HALIGNS
} = window.gutSliderModules.GlobalConstants;

const {
    HeaderTabs,
    PopoverControl,
    SortableItem,
    SortableControl,
    ResRangeControl,
    SingleRangeControl,
    ResBoxControl,
    ColorControl,
    AlignmentControl,
    TypographyControl,
    BorderControl,
    LinkControl,
    ButtonsGroupControl,
    SwitcherControl,
    FooterNotice,
    IconPickerControl,
    TipControl,
    Preview,
    UploadBtn,
    ProLink,
    ResButtonsGroup,
    ProLock,
    ResponsiveControl
} = window?.gutSliderModules;

const {
    COLUMNS,
    COLUMNS_GAP,
    SLIDE_HEIGHT,
    SLIDE_PADDING,
    SLIDE_MARGIN,
    CONTENT_WIDTH,
    CONTENT_VPOSITION,
    CONTENT_ALIGN,
    CONTENT_PADDING,
    CONTENT_HALIGN,
    CONTENT_BORDER,
    CONTENT_BRADIUS,
    CONTENT_MARGIN,
    BTN_BORDER,
    BTN_RADIUS,
    BTN_MARGIN,
    BTN_PADDING,
    BTN_TYPO,
    SECONDARY_BTN_BORDER,
    SECONDARY_BTN_RADIUS,
    SECONDARY_BTN_MARGIN,
    SECONDARY_BTN_PADDING,
    SECONDARY_BTN_TYPO,
    TITLE_SPACING,
    TITLE_TYPO,
    PHOTO_SIZE,
    PHOTO_BORDER,
    PHOTO_RADIUS,
    PHOTO_PADDING,
    PHOTO_MARGIN,
    SUBTITLE_SPACING,
    SUBTITLE_TYPO,
    DESC_SPACING,
    DESC_TYPO,
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
    BACKGROUND_TYPES
} = Constants;

import objAttributes from './attributes';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        resMode,
        //visible elements
        showImage,
        showSubTitle,
        showTitle,
        showDescription,
        showButton,
        imgPosition,
        sliderType,
        slideItems,
        addNewSlide,
        subtitleTag,
        subtitleColor,
        titleTag,
        titleColor,
        descriptionTag,
        descriptionColor,
        btnColors,
        sbtnColors,
        titleAnimation,
        subtitleAnimation,
        descAnimation,
        btnAnimation,
        sbtnAnimation,
        infiniteLoop,
        autoplay,
        autoplayDelay,
        stopOnLastSlide,
        reverseDirection,
        pauseOnHover,
        speed,
        showNavigation,
        centerMode,
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
        carouselEffect,
        creativeEffectStyle,
        // transition delay
        titleDelay,
        subtitleDelay,
        descDelay,
        btnDelay,
        sbtnDelay,
        contentBgColor,
        // Global link
        enableGlobalLink,
        // remote navigation
        enableRemoteNav,
        remotePrevSelector,
        remoteNextSelector
    } = attributes;
    const objAttrs = { attributes, setAttributes, objAttributes };

    const slideItemsClone = cloneDeep(slideItems);

    return (
        <InspectorControls>
            <HeaderTabs
                settingTabContent={
                    <Fragment>
                        <PanelBody title={__('General', 'slider-blocks')} initialOpen={true}>
                            <ToggleControl
                                label={__('Show Image', 'slider-blocks')}
                                checked={showImage}
                                onChange={() => setAttributes({ showImage: !showImage })}
                                __nextHasNoMarginBottom={true}
                            />
                            <ToggleControl
                                label={__('Show SubTitle', 'slider-blocks')}
                                checked={showSubTitle}
                                onChange={() => setAttributes({ showSubTitle: !showSubTitle })}
                                __nextHasNoMarginBottom={true}
                            />
                            <ToggleControl
                                label={__('Show Title', 'slider-blocks')}
                                checked={showTitle}
                                onChange={() => setAttributes({ showTitle: !showTitle })}
                                __nextHasNoMarginBottom={true}
                            />
                            <ToggleControl
                                label={__('Show Description', 'slider-blocks')}
                                checked={showDescription}
                                onChange={() => setAttributes({ showDescription: !showDescription })}
                                __nextHasNoMarginBottom={true}
                            />
                            <ToggleControl
                                label={__('Show Buttons', 'slider-blocks')}
                                checked={showButton}
                                onChange={() => setAttributes({ showButton: !showButton })}
                                __nextHasNoMarginBottom={true}
                            />
                            <ProLock>
                                <ToggleControl
                                    label={__('Enable Wrapper Link', 'slider-blocks')}
                                    checked={enableGlobalLink}
                                    onChange={() => setAttributes({ enableGlobalLink: !enableGlobalLink })}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ProLock>

                            {enableGlobalLink && (
                                <p className="gutslider-note">
                                    {__(
                                        'Enable this option to add a global link to all slides. You can set the link in the individual item settings. Buttons link will be ignored.',
                                        'slider-blocks'
                                    )}
                                </p>
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
                        <PanelBody title={__('Slide Items', 'slider-blocks')} initialOpen={false}>
                            <SortableControl defaultItems={slideItems} attributeName="slideItems" setAttributes={setAttributes}>
                                {slideItemsClone &&
                                    slideItemsClone.map((item, index) => {
                                        return (
                                            <div className="dnd-container" key={index}>
                                                <Button
                                                    className="dnd-trash"
                                                    icon="trash"
                                                    onClick={() => {
                                                        const newItems = [...slideItemsClone];
                                                        newItems.splice(index, 1);
                                                        setAttributes({
                                                            slideItems: newItems
                                                        });
                                                        setAttributes({
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
                                                        const newSlideItems = JSON.parse(JSON.stringify(slideItems));
                                                        const duplicatedItem = { ...item };
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
                                                            value={item.panelTitle && item.panelTitle}
                                                            onChange={value => {
                                                                const newSlideItems = [...slideItemsClone];
                                                                newSlideItems[index].panelTitle = value;
                                                                setAttributes({
                                                                    slideItems: newSlideItems
                                                                });
                                                            }}
                                                        />
                                                        {enableGlobalLink && (
                                                            <>
                                                                <LinkControl
                                                                    label={__('Wrapper Link', 'slider-blocks')}
                                                                    value={item.globalLink && item.globalLink}
                                                                    onChange={value => {
                                                                        const newSlideItems = [...slideItemsClone];
                                                                        newSlideItems[index].globalLink = value;
                                                                        setAttributes({
                                                                            slideItems: newSlideItems
                                                                        });
                                                                    }}
                                                                />
                                                            </>
                                                        )}
                                                        <PopoverControl label={__('Slide Content', 'slider-blocks')}>
                                                            {showImage && (
                                                                <>
                                                                    {item.photo && item.photo.url ? (
                                                                        <Fragment>
                                                                            <Preview
                                                                                url={item.photo.url}
                                                                                id={item.photo.id}
                                                                                alt={item.photo.alt}
                                                                                onSelect={media => {
                                                                                    const newSlideItems = [...slideItemsClone];
                                                                                    newSlideItems[index].photo = media;
                                                                                    setAttributes({
                                                                                        slideItems: newSlideItems
                                                                                    });
                                                                                }}
                                                                                onClick={() => {
                                                                                    const newSlideItems = [...slideItemsClone];
                                                                                    newSlideItems[index].photo = '';
                                                                                    setAttributes({
                                                                                        slideItems: newSlideItems
                                                                                    });
                                                                                }}
                                                                            />
                                                                        </Fragment>
                                                                    ) : (
                                                                        <UploadBtn
                                                                            title={__('Upload Photo', 'slider-blocks')}
                                                                            onSelect={media => {
                                                                                const newSlideItems = [...slideItemsClone];
                                                                                newSlideItems[index].photo = media;
                                                                                setAttributes({
                                                                                    slideItems: newSlideItems
                                                                                });
                                                                            }}
                                                                            id={item.photo && item.photo.id}
                                                                        />
                                                                    )}
                                                                    {item.photo?.url && (
                                                                        <SelectControl
                                                                            label={__('Photo Resolution', 'slider-blocks')}
                                                                            options={[
                                                                                { label: 'Full', value: 'full' },
                                                                                { label: 'Thumbnail', value: 'thumbnail' },
                                                                                { label: 'Medium', value: 'medium' }
                                                                            ]}
                                                                            onChange={size => {
                                                                                const newSlideItems = [...slideItemsClone];
                                                                                newSlideItems[index].photoSize = size;
                                                                                setAttributes({ slideItems: newSlideItems });
                                                                            }}
                                                                            value={item.photoSize}
                                                                        />
                                                                    )}
                                                                </>
                                                            )}
                                                            {showSubTitle && (
                                                                <TextControl
                                                                    label={__('Subtitle', 'slider-blocks')}
                                                                    value={item.subtitle}
                                                                    onChange={value => {
                                                                        const newSlideItems = [...slideItemsClone];
                                                                        newSlideItems[index].subtitle = value;
                                                                        setAttributes({
                                                                            slideItems: newSlideItems
                                                                        });
                                                                    }}
                                                                    help={__('Skip to hide subtitle', 'slider-blocks')}
                                                                    placeholder={__('Enter subtitle here…', 'slider-blocks')}
                                                                />
                                                            )}
                                                            {showTitle && (
                                                                <TextareaControl
                                                                    label={__('Title', 'slider-blocks')}
                                                                    value={item.title}
                                                                    onChange={value => {
                                                                        const newSlideItems = [...slideItemsClone];
                                                                        newSlideItems[index].title = value;
                                                                        setAttributes({
                                                                            slideItems: newSlideItems
                                                                        });
                                                                    }}
                                                                    help={__('Skip to hide title', 'slider-blocks')}
                                                                    placeholder={__('Enter title here…', 'slider-blocks')}
                                                                    rows="3"
                                                                />
                                                            )}
                                                            {showDescription && (
                                                                <TextareaControl
                                                                    label={__('Description', 'slider-blocks')}
                                                                    value={item.description}
                                                                    onChange={value => {
                                                                        const newSlideItems = [...slideItemsClone];
                                                                        newSlideItems[index].description = value;
                                                                        setAttributes({
                                                                            slideItems: newSlideItems
                                                                        });
                                                                    }}
                                                                    help={__('Skip to hide description', 'slider-blocks')}
                                                                    placeholder={__('Enter description here…', 'slider-blocks')}
                                                                    rows="6"
                                                                />
                                                            )}

                                                            {showButton && (
                                                                <>
                                                                    <TextControl
                                                                        label={__('Primary Button Label', 'slider-blocks')}
                                                                        value={item.btnLabel && item.btnLabel}
                                                                        onChange={value => {
                                                                            const newSlideItems = [...slideItemsClone];
                                                                            newSlideItems[index].btnLabel = value;
                                                                            setAttributes({
                                                                                slideItems: newSlideItems
                                                                            });
                                                                        }}
                                                                        help={__('Skip to hide button', 'slider-blocks')}
                                                                    />
                                                                    <LinkControl
                                                                        label={__('Primary Button Link', 'slider-blocks')}
                                                                        value={item.btnLinks && item.btnLinks}
                                                                        onChange={value => {
                                                                            const newSlideItems = [...slideItemsClone];
                                                                            newSlideItems[index].btnLinks = value;
                                                                            setAttributes({
                                                                                slideItems: newSlideItems
                                                                            });
                                                                        }}
                                                                    />
                                                                    <ToggleControl
                                                                        label={__('Show Secondary Button', 'slider-blocks')}
                                                                        checked={item.showSbtnLinks}
                                                                        onChange={() => {
                                                                            const newSlideItems = [...slideItemsClone];
                                                                            newSlideItems[index].showSbtnLinks = !item.showSbtnLinks;
                                                                            setAttributes({ slideItems: newSlideItems });
                                                                        }}
                                                                    />
                                                                    {item?.showSbtnLinks && (
                                                                        <>
                                                                            <TextControl
                                                                                label={__('Secondary Button Label', 'slider-blocks')}
                                                                                value={item.sbtnLabel && item.sbtnLabel}
                                                                                onChange={value => {
                                                                                    const newSlideItems = [...slideItemsClone];
                                                                                    newSlideItems[index].sbtnLabel = value;
                                                                                    setAttributes({
                                                                                        slideItems: newSlideItems
                                                                                    });
                                                                                }}
                                                                                help={__('Skip to hide button', 'slider-blocks')}
                                                                            />
                                                                            <LinkControl
                                                                                label={__('Secondary Button Link', 'slider-blocks')}
                                                                                value={item.sbtnLinks && item.sbtnLinks}
                                                                                onChange={value => {
                                                                                    const newSlideItems = [...slideItemsClone];
                                                                                    newSlideItems[index].sbtnLinks = value;
                                                                                    setAttributes({
                                                                                        slideItems: newSlideItems
                                                                                    });
                                                                                }}
                                                                            />
                                                                        </>
                                                                    )}
                                                                </>
                                                            )}
                                                        </PopoverControl>
                                                        <PopoverControl label={__('Background', 'slider-blocks')}>
                                                            <ButtonsGroupControl
                                                                label={__('Background Type', 'slider-blocks')}
                                                                value={item.bgType && item.bgType}
                                                                options={applyFilters('gutslider.slideBgTypes', BACKGROUND_TYPES)}
                                                                onChange={value => {
                                                                    const newSlideItems = [...slideItemsClone];
                                                                    newSlideItems[index].bgType = value;
                                                                    setAttributes({
                                                                        slideItems: newSlideItems
                                                                    });
                                                                }}
                                                            />
                                                            {item.bgType === 'classic' && (
                                                                <Fragment>
                                                                    <ColorControl
                                                                        label={__('Background Color', 'slider-blocks')}
                                                                        color={item.bgColor}
                                                                        onChange={value => {
                                                                            const newSlideItems = [...slideItemsClone];
                                                                            newSlideItems[index].bgColor = value;
                                                                            setAttributes({
                                                                                slideItems: newSlideItems
                                                                            });
                                                                        }}
                                                                    />
                                                                    <ProLock>
                                                                        <ToggleControl
                                                                            label={__('Responsive Background Image', 'slider-blocks')}
                                                                            checked={item?.enableResponsiveBg && item?.enableResponsiveBg}
                                                                            onChange={() => {
                                                                                const newSlideItems = [...slideItemsClone];
                                                                                newSlideItems[index].enableResponsiveBg =
                                                                                    !item.enableResponsiveBg;
                                                                                setAttributes({
                                                                                    slideItems: newSlideItems
                                                                                });
                                                                            }}
                                                                        />
                                                                    </ProLock>
                                                                    {item?.enableResponsiveBg && (
                                                                        <ResponsiveControl
                                                                            label={__('Background', 'slider-blocks')}
                                                                            setAttributes={setAttributes}
                                                                        >
                                                                            {item[`${resMode}Bg`]?.url ? (
                                                                                <Preview
                                                                                    url={item[`${resMode}Bg`]?.url}
                                                                                    id={item[`${resMode}Bg`]?.id}
                                                                                    alt={item[`${resMode}Bg`]?.alt}
                                                                                    onSelect={media => {
                                                                                        const newSlideItems = [...slideItemsClone];
                                                                                        newSlideItems[index][`${resMode}Bg`] = {
                                                                                            id: media.id,
                                                                                            url: media.url,
                                                                                            alt: media.alt
                                                                                        };
                                                                                        setAttributes({
                                                                                            slideItems: newSlideItems
                                                                                        });
                                                                                    }}
                                                                                    onClick={() => {
                                                                                        const newSlideItems = [...slideItemsClone];
                                                                                        newSlideItems[index][`${resMode}Bg`] = {
                                                                                            id: '',
                                                                                            url: '',
                                                                                            alt: ''
                                                                                        };
                                                                                        setAttributes({
                                                                                            slideItems: newSlideItems
                                                                                        });
                                                                                    }}
                                                                                    focalPoint={true}
                                                                                    focalValue={item?.[`${resMode}FocalPoint`]}
                                                                                    onFocalPointChange={value => {
                                                                                        const newSlideItems = [...slideItemsClone];
                                                                                        newSlideItems[index][`${resMode}FocalPoint`] =
                                                                                            value;
                                                                                        setAttributes({
                                                                                            slideItems: newSlideItems
                                                                                        });
                                                                                    }}
                                                                                />
                                                                            ) : (
                                                                                <UploadBtn
                                                                                    title={__('Upload Image', 'slider-blocks')}
                                                                                    onSelect={media => {
                                                                                        const newSlideItems = [...slideItemsClone];
                                                                                        newSlideItems[index][`${resMode}Bg`] = {
                                                                                            id: media.id,
                                                                                            url: media.url,
                                                                                            alt: media.alt
                                                                                        };
                                                                                        setAttributes({
                                                                                            slideItems: newSlideItems
                                                                                        });
                                                                                    }}
                                                                                    id={item[`${resMode}Bg`] && item[`${resMode}Bg`].id}
                                                                                />
                                                                            )}
                                                                        </ResponsiveControl>
                                                                    )}
                                                                    <>
                                                                        {!item?.enableResponsiveBg && (
                                                                            <>
                                                                                {item.image && item.image.url ? (
                                                                                    <Fragment>
                                                                                        <Preview
                                                                                            url={item.image.url}
                                                                                            id={item.image.id}
                                                                                            alt={item.image.alt}
                                                                                            onSelect={media => {
                                                                                                const newSlideItems = [...slideItemsClone];
                                                                                                newSlideItems[index].image = {
                                                                                                    id: media.id,
                                                                                                    url: media.url,
                                                                                                    alt: media.alt
                                                                                                };
                                                                                                setAttributes({
                                                                                                    slideItems: newSlideItems
                                                                                                });
                                                                                            }}
                                                                                            onClick={() => {
                                                                                                const newSlideItems = [...slideItemsClone];
                                                                                                newSlideItems[index].image = {
                                                                                                    id: '',
                                                                                                    url: '',
                                                                                                    alt: ''
                                                                                                };
                                                                                                setAttributes({
                                                                                                    slideItems: newSlideItems
                                                                                                });
                                                                                            }}
                                                                                            focalPoint={true}
                                                                                            focalValue={item?.focusPoint}
                                                                                            onFocalPointChange={value => {
                                                                                                const newSlideItems = [...slideItemsClone];
                                                                                                newSlideItems[index].focusPoint = value;
                                                                                                setAttributes({
                                                                                                    slideItems: newSlideItems
                                                                                                });
                                                                                            }}
                                                                                        />
                                                                                    </Fragment>
                                                                                ) : (
                                                                                    <UploadBtn
                                                                                        title={__('Upload Image', 'slider-blocks')}
                                                                                        onSelect={media => {
                                                                                            const newSlideItems = [...slideItemsClone];
                                                                                            newSlideItems[index].image = {
                                                                                                id: media.id,
                                                                                                url: media.url,
                                                                                                alt: media.alt
                                                                                            };
                                                                                            setAttributes({
                                                                                                slideItems: newSlideItems
                                                                                            });
                                                                                        }}
                                                                                        id={item.image && item.image.id}
                                                                                    />
                                                                                )}
                                                                            </>
                                                                        )}
                                                                    </>
                                                                </Fragment>
                                                            )}
                                                            {item.bgType === 'gradient' && (
                                                                <GradientPicker
                                                                    __nextHasNoMargin={true}
                                                                    value={item.bgGradient && item.bgGradient}
                                                                    onChange={currentGradient => {
                                                                        const newSlideItems = [...slideItemsClone];
                                                                        newSlideItems[index].bgGradient = currentGradient;
                                                                        setAttributes({
                                                                            slideItems: newSlideItems
                                                                        });
                                                                    }}
                                                                    gradients={GRADIENT_PALETTES}
                                                                />
                                                            )}
                                                            {item.bgType === 'video' && (
                                                                <Fragment>
                                                                    {item.bgVideo && item.bgVideo.url ? (
                                                                        <Preview
                                                                            url={item.bgVideo.url}
                                                                            id={item.bgVideo.id}
                                                                            onSelect={media => {
                                                                                const newSlideItems = [...slideItemsClone];
                                                                                newSlideItems[index].bgVideo = {
                                                                                    id: media.id,
                                                                                    url: media.url
                                                                                };
                                                                                setAttributes({
                                                                                    slideItems: newSlideItems
                                                                                });
                                                                            }}
                                                                            onClick={() => {
                                                                                const newSlideItems = [...slideItemsClone];
                                                                                newSlideItems[index].bgVideo = {
                                                                                    id: '',
                                                                                    url: ''
                                                                                };
                                                                                setAttributes({
                                                                                    slideItems: newSlideItems
                                                                                });
                                                                            }}
                                                                            videoType={true}
                                                                        />
                                                                    ) : (
                                                                        <UploadBtn
                                                                            title={__('Upload Video', 'slider-blocks')}
                                                                            onSelect={media => {
                                                                                const newSlideItems = [...slideItemsClone];
                                                                                newSlideItems[index].bgVideo = {
                                                                                    id: media.id,
                                                                                    url: media.url
                                                                                };
                                                                                setAttributes({
                                                                                    slideItems: newSlideItems
                                                                                });
                                                                            }}
                                                                            id={item.bgVideo && item.bgVideo.id}
                                                                            videoType={true}
                                                                        />
                                                                    )}
                                                                </Fragment>
                                                            )}

                                                            {(item.bgType === 'classic' || item.bgType === 'video') && (
                                                                <>
                                                                    <ToggleControl
                                                                        label={__('Enable Overlay', 'slider-blocks')}
                                                                        checked={item.enableOverlay && item.enableOverlay}
                                                                        onChange={() => {
                                                                            const newSlideItems = [...slideItemsClone];
                                                                            newSlideItems[index].enableOverlay = !item.enableOverlay;
                                                                            setAttributes({
                                                                                slideItems: newSlideItems
                                                                            });
                                                                        }}
                                                                    />
                                                                    {item.enableOverlay && (
                                                                        <>
                                                                            <ButtonsGroupControl
                                                                                label={__('Overlay Type', 'slider-blocks')}
                                                                                value={item.overlayType && item.overlayType}
                                                                                options={OVERLAY_TYPES}
                                                                                onChange={value => {
                                                                                    const newSlideItems = [...slideItemsClone];
                                                                                    newSlideItems[index].overlayType = value;
                                                                                    setAttributes({
                                                                                        slideItems: newSlideItems
                                                                                    });
                                                                                }}
                                                                            />
                                                                            {item.overlayType === 'classic' && (
                                                                                <ColorControl
                                                                                    label={__('Overlay Color', 'slider-blocks')}
                                                                                    color={item.overlayColor && item.overlayColor}
                                                                                    onChange={value => {
                                                                                        const newSlideItems = [...slideItemsClone];
                                                                                        newSlideItems[index].overlayColor = value;
                                                                                        setAttributes({
                                                                                            slideItems: newSlideItems
                                                                                        });
                                                                                    }}
                                                                                />
                                                                            )}
                                                                            {item.overlayType === 'gradient' && (
                                                                                <GradientPicker
                                                                                    __nextHasNoMargin={true}
                                                                                    value={item.overlayGradient && item.overlayGradient}
                                                                                    onChange={currentGradient => {
                                                                                        const newSlideItems = [...slideItemsClone];
                                                                                        newSlideItems[index].overlayGradient =
                                                                                            currentGradient;
                                                                                        setAttributes({
                                                                                            slideItems: newSlideItems
                                                                                        });
                                                                                    }}
                                                                                    gradients={GRADIENT_PALETTES}
                                                                                />
                                                                            )}
                                                                            <RangeControl
                                                                                label={__('Overlay Opacity', 'slider-blocks')}
                                                                                value={item.overlayOpacity && item.overlayOpacity}
                                                                                onChange={v => {
                                                                                    const newSlideItems = [...slideItemsClone];
                                                                                    newSlideItems[index].overlayOpacity = v;
                                                                                    setAttributes({
                                                                                        slideItems: newSlideItems
                                                                                    });
                                                                                }}
                                                                                min={0.01}
                                                                                max={1}
                                                                                step={0.01}
                                                                            />
                                                                        </>
                                                                    )}
                                                                </>
                                                            )}
                                                        </PopoverControl>
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
                                                panelTitle: 'Gutslider Item',
                                                subtitle: 'Gutslider Block',
                                                title: '#1 Best Gutenberg Slider Block',
                                                description:
                                                    'Gutslider is a Gutenberg Slider Block that is easy to use and has many features. It is a great alternative to other slider blocks that are not as easy to use and have less features.',
                                                bgType: 'classic',
                                                bgColor: '#efefef',
                                                enableOverlay: false,
                                                overlayType: 'classic',
                                                overlayColor: '#000000',
                                                overlayGradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                                                overlayOpacity: 0.5,
                                                bgGradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                                                bgVideo: {},
                                                image: {
                                                    id: slideItems.length + 1,
                                                    url: '',
                                                    alt: 'Gutslider Logo'
                                                },
                                                photo: {},
                                                photoSize: 'thumbnail',
                                                focusPoint: { x: 0.5, y: 0.5 },
                                                btnLabel: 'Get Gutslider',
                                                btnLinks: {
                                                    url: 'https://gutenbergkits.com',
                                                    openInNewTab: true,
                                                    addNoFollow: false,
                                                    addSponsored: false
                                                },
                                                showSbtnLinks: false,
                                                sbtnLabel: '',
                                                sbtnLinks: {
                                                    url: '',
                                                    openInNewTab: true,
                                                    addNoFollow: false,
                                                    addSponsored: false
                                                },
                                                // Global link
                                                globalLink: {
                                                    url: '',
                                                    openInNewTab: false,
                                                    addNoFollow: false,
                                                    addSponsored: false
                                                }
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
                        {showImage && (
                            <PanelBody title={__('Image', 'slider-blocks')} initialOpen={false}>
                                <SelectControl
                                    label={__('Image Position', 'slider-blocks')}
                                    options={[
                                        { label: 'Top', value: 'column' },
                                        { label: 'Bottom', value: 'column-reverse' },
                                        { label: 'Left', value: 'row' },
                                        { label: 'Right', value: 'row-reverse' }
                                    ]}
                                    onChange={value => setAttributes({ imgPosition: value })}
                                    value={imgPosition}
                                />
                            </PanelBody>
                        )}
                        <PanelBody title={__('Slider Layout', 'slider-blocks')} initialOpen={false}>
                            <ButtonsGroupControl
                                label={__('Slider Type', 'slider-blocks')}
                                value={sliderType}
                                options={SLIDER_TYPES}
                                onChange={value => {
                                    setAttributes({ sliderType: value });
                                }}
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
                        </PanelBody>
                        <PanelBody title={__('Content', 'slider-blocks')} initialOpen={false}>
                            <ResRangeControl
                                label={__('Max Width', 'slider-blocks')}
                                controlName={CONTENT_WIDTH}
                                objAttrs={objAttrs}
                                min={1}
                                max={2000}
                                units={['px', 'em', '%']}
                            />
                            <AlignmentControl
                                label={__('V. Position', 'slider-blocks')}
                                controlName={CONTENT_VPOSITION}
                                objAttrs={objAttrs}
                                flexAlign={true}
                                flexVerticle={true}
                            />
                            <ResButtonsGroup
                                label={__('H. Position', 'slider-blocks')}
                                controlName={CONTENT_HALIGN}
                                objAttrs={objAttrs}
                                options={HALIGNS}
                            />
                            <AlignmentControl
                                label={__('Text Align', 'slider-blocks')}
                                controlName={CONTENT_ALIGN}
                                objAttrs={objAttrs}
                                flexAlign={false}
                                flexVerticle={false}
                            />
                            <SelectControl
                                label={__('Subtitle Tag', 'slider-blocks')}
                                value={subtitleTag}
                                options={HEADING_TAGS}
                                onChange={v => {
                                    setAttributes({ subtitleTag: v });
                                }}
                            />
                            <SelectControl
                                label={__('Title Tag', 'slider-blocks')}
                                value={titleTag}
                                options={HEADING_TAGS}
                                onChange={v => {
                                    setAttributes({ titleTag: v });
                                }}
                            />
                            <SelectControl
                                label={__('Description Tag', 'slider-blocks')}
                                value={descriptionTag}
                                options={HEADING_TAGS}
                                onChange={v => {
                                    setAttributes({ descriptionTag: v });
                                }}
                            />
                        </PanelBody>

                        {sliderType === 'carousel' && (
                            <PanelBody title={__('Carousel Options', 'slider-blocks')} initialOpen={false}>
                                <ResRangeControl
                                    label={__('Columns', 'slider-blocks')}
                                    controlName={COLUMNS}
                                    objAttrs={objAttrs}
                                    min={1}
                                    max={5}
                                    noUnits={true}
                                />
                                <ResRangeControl
                                    label={__('Columns Gap', 'slider-blocks')}
                                    controlName={COLUMNS_GAP}
                                    objAttrs={objAttrs}
                                    min={0}
                                    max={100}
                                />
                            </PanelBody>
                        )}
                        <PanelBody title={__('Slider Options', 'slider-blocks')} initialOpen={false}>
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
                            {sliderType === 'carousel' && (
                                <ToggleControl
                                    label={__('Enable Center Mode', 'slider-blocks')}
                                    checked={centerMode}
                                    onChange={() => setAttributes({ centerMode: !centerMode })}
                                />
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
                            {sliderType === 'slider' && (
                                <Fragment>
                                    <SelectControl
                                        label={__('Slide Effect', 'slider-blocks')}
                                        value={slideEffect}
                                        options={SLIDE_EFFECTS}
                                        onChange={effect => setAttributes({ slideEffect: effect })}
                                        help={__('Use background to see the effects properly.', 'slider-blocks')}
                                    />
                                    {slideEffect === 'creative' && (
                                        <SelectControl
                                            label={__('Creative Styles', 'slider-blocks')}
                                            value={creativeEffectStyle}
                                            options={CREATIVE_STYLES}
                                            onChange={effect => setAttributes({ creativeEffectStyle: effect })}
                                        />
                                    )}
                                </Fragment>
                            )}
                            {sliderType === 'carousel' && (
                                <SelectControl
                                    label={__('Carousel Effect', 'slider-blocks')}
                                    value={carouselEffect}
                                    options={CAROUSEL_EFFECTS}
                                    onChange={effect => setAttributes({ carouselEffect: effect })}
                                    help={__('Save & reload to see the effect.', 'slider-blocks')}
                                />
                            )}
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
                        <PanelBody title={__('Content', 'slider-blocks')} initialOpen={false}>
                            <ColorControl
                                label={__('Background Color', 'slider-blocks')}
                                color={contentBgColor}
                                onChange={v => {
                                    setAttributes({ contentBgColor: v });
                                }}
                            />
                            <BorderControl controlName={CONTENT_BORDER} objAttrs={objAttrs} noHover={true} />
                            <ResBoxControl
                                label={__('Border Radius', 'slider-blocks')}
                                controlName={CONTENT_BRADIUS}
                                objAttrs={objAttrs}
                                min={0}
                                max={500}
                            />
                            <ResBoxControl
                                label={__('Padding', 'slider-blocks')}
                                controlName={CONTENT_PADDING}
                                objAttrs={objAttrs}
                                min={0}
                                max={500}
                            />
                            <ResBoxControl
                                label={__('Margin', 'slider-blocks')}
                                controlName={CONTENT_MARGIN}
                                objAttrs={objAttrs}
                                min={-500}
                                max={500}
                            />
                        </PanelBody>
                        {slideItemsClone.map(
                            item =>
                                item.photo?.url &&
                                showImage && (
                                    <PanelBody title={__('Image', 'slider-blocks')} initialOpen={false}>
                                        <ResRangeControl
                                            label={__('Image Size', 'slider-blocks')}
                                            controlName={PHOTO_SIZE}
                                            objAttrs={objAttrs}
                                            min={0}
                                            max={500}
                                        />
                                        <BorderControl controlName={PHOTO_BORDER} objAttrs={objAttrs} noHover={true} />
                                        <ResBoxControl
                                            label={__('Border Radius', 'slider-blocks')}
                                            controlName={PHOTO_RADIUS}
                                            objAttrs={objAttrs}
                                            min={0}
                                            max={500}
                                        />
                                        <ResBoxControl
                                            label={__('Padding', 'slider-blocks')}
                                            controlName={PHOTO_PADDING}
                                            objAttrs={objAttrs}
                                            min={0}
                                            max={500}
                                        />
                                        <ResBoxControl
                                            label={__('Margin', 'slider-blocks')}
                                            controlName={PHOTO_MARGIN}
                                            objAttrs={objAttrs}
                                            min={-500}
                                            max={500}
                                        />
                                    </PanelBody>
                                )
                        )}
                        <PanelBody title={__('Subtitle', 'slider-blocks')} initialOpen={false}>
                            {sliderType === 'slider' && (
                                <Fragment>
                                    <SelectControl
                                        label={__('Animation', 'slider-blocks')}
                                        value={subtitleAnimation}
                                        options={ANIMATION_TYPES}
                                        onChange={v => {
                                            setAttributes({ subtitleAnimation: v });
                                        }}
                                    />
                                    {subtitleAnimation !== 'none' && subtitleAnimation !== '' && (
                                        <SingleRangeControl
                                            label={__('Transition Delay', 'slider-blocks')}
                                            value={subtitleDelay}
                                            onChange={v => setAttributes({ subtitleDelay: v })}
                                            min={0}
                                            max={2}
                                            step={0.01}
                                            onClickReset={() => setAttributes({ subtitleDelay: null })}
                                        />
                                    )}
                                </Fragment>
                            )}

                            <ColorControl
                                label={__('Color', 'slider-blocks')}
                                color={subtitleColor}
                                onChange={v => {
                                    setAttributes({ subtitleColor: v });
                                }}
                            />
                            <TypographyControl label={__('Typography', 'slider-blocks')} controlName={SUBTITLE_TYPO} objAttrs={objAttrs} />
                            <ResBoxControl
                                label={__('Spacing', 'slider-blocks')}
                                controlName={SUBTITLE_SPACING}
                                objAttrs={objAttrs}
                                min={-200}
                                max={200}
                            />
                        </PanelBody>
                        <PanelBody title={__('Title', 'slider-blocks')} initialOpen={false}>
                            {sliderType === 'slider' && (
                                <Fragment>
                                    <SelectControl
                                        label={__('Animation', 'slider-blocks')}
                                        value={titleAnimation}
                                        options={ANIMATION_TYPES}
                                        onChange={v => {
                                            setAttributes({ titleAnimation: v });
                                        }}
                                    />
                                    {titleAnimation !== 'none' && titleAnimation !== '' && (
                                        <SingleRangeControl
                                            label={__('Transition Delay', 'slider-blocks')}
                                            value={titleDelay}
                                            onChange={v => setAttributes({ titleDelay: v })}
                                            min={0}
                                            max={2}
                                            step={0.01}
                                            onClickReset={() => setAttributes({ titleDelay: null })}
                                        />
                                    )}
                                </Fragment>
                            )}
                            <ColorControl
                                label={__('Color', 'slider-blocks')}
                                color={titleColor}
                                onChange={v => {
                                    setAttributes({ titleColor: v });
                                }}
                            />
                            <TypographyControl label={__('Typography', 'slider-blocks')} controlName={TITLE_TYPO} objAttrs={objAttrs} />
                            <ResBoxControl
                                label={__('Spacing', 'slider-blocks')}
                                controlName={TITLE_SPACING}
                                objAttrs={objAttrs}
                                min={-200}
                                max={200}
                            />
                        </PanelBody>
                        <PanelBody title={__('Description', 'slider-blocks')} initialOpen={false}>
                            {sliderType === 'slider' && (
                                <Fragment>
                                    <SelectControl
                                        label={__('Animation', 'slider-blocks')}
                                        value={descAnimation}
                                        options={ANIMATION_TYPES}
                                        onChange={v => {
                                            setAttributes({ descAnimation: v });
                                        }}
                                    />
                                    {descAnimation !== 'none' && descAnimation !== '' && (
                                        <SingleRangeControl
                                            label={__('Transition Delay', 'slider-blocks')}
                                            value={descDelay}
                                            onChange={v => setAttributes({ descDelay: v })}
                                            min={0}
                                            max={2}
                                            step={0.01}
                                            onClickReset={() => setAttributes({ descDelay: null })}
                                        />
                                    )}
                                </Fragment>
                            )}
                            <ColorControl
                                label={__('Color', 'slider-blocks')}
                                color={descriptionColor}
                                onChange={v => {
                                    setAttributes({ descriptionColor: v });
                                }}
                            />
                            <TypographyControl label={__('Typography', 'slider-blocks')} controlName={DESC_TYPO} objAttrs={objAttrs} />
                            <ResBoxControl
                                label={__('Spacing', 'slider-blocks')}
                                controlName={DESC_SPACING}
                                objAttrs={objAttrs}
                                min={-200}
                                max={200}
                            />
                        </PanelBody>
                        <PanelBody title={__('Primary Button', 'slider-blocks')} initialOpen={false}>
                            {sliderType === 'slider' && (
                                <Fragment>
                                    <SelectControl
                                        label={__('Animation', 'slider-blocks')}
                                        value={btnAnimation}
                                        options={ANIMATION_TYPES}
                                        onChange={v => {
                                            setAttributes({ btnAnimation: v });
                                        }}
                                    />
                                    {sbtnAnimation !== 'none' && btnAnimation !== '' && (
                                        <SingleRangeControl
                                            label={__('Transition Delay', 'slider-blocks')}
                                            value={btnDelay}
                                            onChange={v => setAttributes({ btnDelay: v })}
                                            min={0}
                                            max={2}
                                            step={0.01}
                                            onClickReset={() => setAttributes({ btnDelay: null })}
                                        />
                                    )}
                                </Fragment>
                            )}
                            <TypographyControl label={__('Typography', 'slider-blocks')} controlName={BTN_TYPO} objAttrs={objAttrs} />
                            <BorderControl controlName={BTN_BORDER} objAttrs={objAttrs} />
                            <ResBoxControl
                                label={__('Border Radius', 'slider-blocks')}
                                controlName={BTN_RADIUS}
                                objAttrs={objAttrs}
                                min={0}
                                max={100}
                            />
                            <ResBoxControl
                                label={__('Padding', 'slider-blocks')}
                                controlName={BTN_PADDING}
                                objAttrs={objAttrs}
                                min={0}
                                max={100}
                            />
                            <ResBoxControl
                                label={__('Margin', 'slider-blocks')}
                                controlName={BTN_MARGIN}
                                objAttrs={objAttrs}
                                min={0}
                                max={100}
                            />
                            <SwitcherControl
                                normal={
                                    <Fragment>
                                        <ColorControl
                                            label={__('Color', 'slider-blocks')}
                                            color={btnColors && btnColors.btnTextColor}
                                            onChange={v => {
                                                const newBtnColors = {
                                                    ...btnColors,
                                                    btnTextColor: v
                                                };
                                                setAttributes({
                                                    btnColors: newBtnColors
                                                });
                                            }}
                                        />
                                        <ColorControl
                                            label={__('Background', 'slider-blocks')}
                                            color={btnColors && btnColors.btnBgColor}
                                            onChange={v => {
                                                const newBtnColors = {
                                                    ...btnColors,
                                                    btnBgColor: v
                                                };
                                                setAttributes({
                                                    btnColors: newBtnColors
                                                });
                                            }}
                                        />
                                    </Fragment>
                                }
                                hover={
                                    <Fragment>
                                        <ColorControl
                                            label={__('Color', 'slider-blocks')}
                                            color={btnColors && btnColors.btnHoverTextColor}
                                            onChange={v => {
                                                const newBtnColors = {
                                                    ...btnColors,
                                                    btnHoverTextColor: v
                                                };
                                                setAttributes({
                                                    btnColors: newBtnColors
                                                });
                                            }}
                                        />
                                        <ColorControl
                                            label={__('Background', 'slider-blocks')}
                                            color={btnColors && btnColors.btnHoverBgColor}
                                            onChange={v => {
                                                const newBtnColors = {
                                                    ...btnColors,
                                                    btnHoverBgColor: v
                                                };
                                                setAttributes({
                                                    btnColors: newBtnColors
                                                });
                                            }}
                                        />
                                    </Fragment>
                                }
                            />
                        </PanelBody>
                        {slideItemsClone.map(
                            item =>
                                item.showSbtnLinks && (
                                    <PanelBody title={__('Secondary Button', 'slider-blocks')} initialOpen={false}>
                                        {sliderType === 'slider' && (
                                            <Fragment>
                                                <SelectControl
                                                    label={__('Animation', 'slider-blocks')}
                                                    value={sbtnAnimation}
                                                    options={ANIMATION_TYPES}
                                                    onChange={v => {
                                                        setAttributes({ sbtnAnimation: v });
                                                    }}
                                                />
                                                {sbtnAnimation !== 'none' && sbtnAnimation !== '' && (
                                                    <SingleRangeControl
                                                        label={__('Transition Delay', 'slider-blocks')}
                                                        value={sbtnDelay}
                                                        onChange={v => setAttributes({ sbtnDelay: v })}
                                                        min={0}
                                                        max={2}
                                                        step={0.01}
                                                        onClickReset={() => setAttributes({ sbtnDelay: null })}
                                                    />
                                                )}
                                            </Fragment>
                                        )}
                                        <TypographyControl
                                            label={__('Typography', 'slider-blocks')}
                                            controlName={SECONDARY_BTN_TYPO}
                                            objAttrs={objAttrs}
                                        />
                                        <BorderControl controlName={SECONDARY_BTN_BORDER} objAttrs={objAttrs} />
                                        <ResBoxControl
                                            label={__('Border Radius', 'slider-blocks')}
                                            controlName={SECONDARY_BTN_RADIUS}
                                            objAttrs={objAttrs}
                                            min={0}
                                            max={100}
                                        />
                                        <ResBoxControl
                                            label={__('Padding', 'slider-blocks')}
                                            controlName={SECONDARY_BTN_PADDING}
                                            objAttrs={objAttrs}
                                            min={0}
                                            max={100}
                                        />
                                        <ResBoxControl
                                            label={__('Margin', 'slider-blocks')}
                                            controlName={SECONDARY_BTN_MARGIN}
                                            objAttrs={objAttrs}
                                            min={0}
                                            max={100}
                                        />
                                        <SwitcherControl
                                            normal={
                                                <Fragment>
                                                    <ColorControl
                                                        label={__('Color', 'slider-blocks')}
                                                        color={sbtnColors && sbtnColors.btnTextColor}
                                                        onChange={v => {
                                                            const newBtnColors = {
                                                                ...sbtnColors,
                                                                btnTextColor: v
                                                            };
                                                            setAttributes({
                                                                sbtnColors: newBtnColors
                                                            });
                                                        }}
                                                    />
                                                    <ColorControl
                                                        label={__('Background', 'slider-blocks')}
                                                        color={sbtnColors && sbtnColors.btnBgColor}
                                                        onChange={v => {
                                                            const newBtnColors = {
                                                                ...sbtnColors,
                                                                btnBgColor: v
                                                            };
                                                            setAttributes({
                                                                sbtnColors: newBtnColors
                                                            });
                                                        }}
                                                    />
                                                </Fragment>
                                            }
                                            hover={
                                                <Fragment>
                                                    <ColorControl
                                                        label={__('Color', 'slider-blocks')}
                                                        color={sbtnColors && sbtnColors.btnHoverTextColor}
                                                        onChange={v => {
                                                            const newBtnColors = {
                                                                ...sbtnColors,
                                                                btnHoverTextColor: v
                                                            };
                                                            setAttributes({
                                                                sbtnColors: newBtnColors
                                                            });
                                                        }}
                                                    />
                                                    <ColorControl
                                                        label={__('Background', 'slider-blocks')}
                                                        color={sbtnColors && sbtnColors.btnHoverBgColor}
                                                        onChange={v => {
                                                            const newBtnColors = {
                                                                ...sbtnColors,
                                                                btnHoverBgColor: v
                                                            };
                                                            setAttributes({
                                                                sbtnColors: newBtnColors
                                                            });
                                                        }}
                                                    />
                                                </Fragment>
                                            }
                                        />
                                    </PanelBody>
                                )
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
