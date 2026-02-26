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
    OVERLAY_TYPES,
    HEADING_TAGS,
    ANIMATION_TYPES,
    GRADIENT_PALETTES,
    SLIDE_EFFECTS,
    CREATIVE_STYLES,
    PAGINATION_TYPES,
    NAV_CONTAINER_POSITIONS,
    NAV_POSITIONS,
    HALIGNS
} = window.gutSliderModules.GlobalConstants;
const { BACKGROUND_TYPES } = Constants;

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
    ProLock
} = window.gutSliderModules;

const {
    IMG_STYLES,
    SLIDER_TYPES,
    COLUMNS,
    COLUMNS_GAP,
    PRESETS_TYPES,
    PHOTO_DIRECTIONS,
    SLIDE_HEIGHT,
    SLIDE_PADDING,
    SLIDE_MARGIN,
    CONTENT_WIDTH,
    CONTENT_ALIGN,
    CONTENT_PADDING,
    CONTENT_HALIGN,
    IMAGE_BORDER,
    IMAGE_RADIUS,
    IMAGE_MARGIN,
    IMAGE_PADDING,
    IMAGE_SIZE,
    IMAGE_HEIGHT,
    IMAGE_POSITION,
    ICON_BORDER,
    ICON_RADIUS,
    ICON_MARGIN,
    ICON_PADDING,
    ICON_SIZE,
    ICON_SPACING,
    NAME_SPACING,
    NAME_TYPO,
    DESIGNATION_SPACING,
    DESIGNATION_TYPO,
    TESTIMONIAL_SPACING,
    TESTIMONIAL_TYPO,
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
    STAR_SIZE,
    STAR_SPACING,
    IMAGE_POSITIONS,
    PHOTO_POSITIONS,
    IMAGE_GAP
    // layout
} = Constants;

import objAttributes from './attributes';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        preset,
        photoDirection,
        addNewSlide,
        slideItems,
        ratingColor,
        photoAnimation,
        designationTag,
        designationColor,
        nameTag,
        nameColor,
        testimonialTag,
        testimonialColor,
        socialIconColors,
        nameAnimation,
        designationAnimation,
        testimonialAnimation,
        socialIconAnimation,
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
        creativeEffectStyle,
        // transition delay
        photoDelay,
        nameDelay,
        designationDelay,
        testimonialDelay,
        socialDelay,
        // slider layout
        sliderType,
        imageStyle,
        imagePosition,
        photoVPosition,
        // global link
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
                        <PanelBody title={__('Genarel', 'slider-blocks')} initialOpen={true}>
                            <SelectControl
                                __nextHasNoMarginBottom
                                label={__('Preset', 'slider-blocks')}
                                value={preset}
                                options={PRESETS_TYPES}
                                onChange={v => {
                                    setAttributes({ preset: v });
                                }}
                            />
                            <ButtonsGroupControl
                                label={__('Slider Type', 'slider-blocks')}
                                value={sliderType}
                                options={SLIDER_TYPES}
                                onChange={value => {
                                    setAttributes({ sliderType: value });
                                }}
                            />
                            <ProLock>
                                <ToggleControl
                                    label={__('Enable Wrapper Link', 'slider-blocks')}
                                    checked={enableGlobalLink}
                                    onChange={() => setAttributes({ enableGlobalLink: !enableGlobalLink })}
                                />
                            </ProLock>
                            <ProLock>
                                <ToggleControl
                                    label={__('Enable Remote Navigation', 'slider-blocks')}
                                    checked={enableRemoteNav}
                                    onChange={() => setAttributes({ enableRemoteNav: !enableRemoteNav })}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ProLock>
                        </PanelBody>
                        <PanelBody title={__('Testimonial Items', 'slider-blocks')} initialOpen={false}>
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
                                                        <PopoverControl label={__('Testimonial Content', 'slider-blocks')}>
                                                            {item.authorPhoto && item.authorPhoto.url ? (
                                                                <Fragment>
                                                                    <Preview
                                                                        url={item.authorPhoto.url}
                                                                        id={item.authorPhoto.id}
                                                                        alt={item.authorPhoto.alt}
                                                                        onSelect={media => {
                                                                            const newSlideItems = [...slideItemsClone];
                                                                            newSlideItems[index].authorPhoto = {
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
                                                                            newSlideItems[index].authorPhoto = {
                                                                                id: '',
                                                                                url: '',
                                                                                alt: ''
                                                                            };
                                                                            setAttributes({
                                                                                slideItems: newSlideItems
                                                                            });
                                                                        }}
                                                                        focalPoint={true}
                                                                        focalValue={
                                                                            item?.authorPhotoFocusPoint && item.authorPhotoFocusPoint
                                                                        }
                                                                        onFocalPointChange={value => {
                                                                            const newSlideItems = [...slideItemsClone];
                                                                            newSlideItems[index].authorPhotoFocusPoint = value;
                                                                            setAttributes({
                                                                                slideItems: newSlideItems
                                                                            });
                                                                        }}
                                                                    />
                                                                </Fragment>
                                                            ) : (
                                                                <UploadBtn
                                                                    title={__('Upload Author Photo', 'slider-blocks')}
                                                                    onSelect={media => {
                                                                        const newSlideItems = [...slideItemsClone];
                                                                        newSlideItems[index].authorPhoto = {
                                                                            id: media.id,
                                                                            url: media.url,
                                                                            alt: media.alt
                                                                        };
                                                                        setAttributes({
                                                                            slideItems: newSlideItems
                                                                        });
                                                                    }}
                                                                    id={item.authorPhoto && item.authorPhoto.id}
                                                                />
                                                            )}
                                                            <RangeControl
                                                                __nextHasNoMarginBottom
                                                                label={__('Rating', 'slider-blocks')}
                                                                value={item.rating && item.rating}
                                                                onChange={v => {
                                                                    const newSlideItems = [...slideItemsClone];
                                                                    newSlideItems[index].rating = v;
                                                                    setAttributes({
                                                                        slideItems: newSlideItems
                                                                    });
                                                                }}
                                                                min={1}
                                                                max={5}
                                                                step={0.1}
                                                            />
                                                            <TextControl
                                                                label={__('Name', 'slider-blocks')}
                                                                value={item.name && item.name}
                                                                onChange={value => {
                                                                    const newSlideItems = [...slideItemsClone];
                                                                    newSlideItems[index].name = value;
                                                                    setAttributes({
                                                                        slideItems: newSlideItems
                                                                    });
                                                                }}
                                                                help={__('Skip to hide name', 'slider-blocks')}
                                                                placeholder={__('Enter name here…', 'slider-blocks')}
                                                            />
                                                            <TextControl
                                                                label={__('Designation', 'slider-blocks')}
                                                                value={item.designation && item.designation}
                                                                onChange={value => {
                                                                    const newSlideItems = [...slideItemsClone];
                                                                    newSlideItems[index].designation = value;
                                                                    setAttributes({
                                                                        slideItems: newSlideItems
                                                                    });
                                                                }}
                                                                help={__('Skip to hide designation', 'slider-blocks')}
                                                                placeholder={__('Enter designation here…', 'slider-blocks')}
                                                            />
                                                            <TextareaControl
                                                                label={__('Testimonial', 'slider-blocks')}
                                                                value={item.testimonial && item.testimonial}
                                                                onChange={value => {
                                                                    const newSlideItems = [...slideItemsClone];
                                                                    newSlideItems[index].testimonial = value;
                                                                    setAttributes({
                                                                        slideItems: newSlideItems
                                                                    });
                                                                }}
                                                                help={__('Skip to hide testimonial', 'slider-blocks')}
                                                                placeholder={__('Enter testimonial here…', 'slider-blocks')}
                                                                rows="6"
                                                            />
                                                            <ToggleControl
                                                                label={__('Show Social Profiles', 'slider-blocks')}
                                                                checked={item.showSocialIcons && item.showSocialIcons}
                                                                onChange={() => {
                                                                    const newSlideItems = [...slideItemsClone];
                                                                    newSlideItems[index].showSocialIcons = !item.showSocialIcons;
                                                                    setAttributes({
                                                                        slideItems: newSlideItems
                                                                    });
                                                                }}
                                                            />
                                                            {item?.showSocialIcons && (
                                                                <PopoverControl label={__('Add Social Profiles', 'slider-blocks')}>
                                                                    {item.showSocialIcons && (
                                                                        <Fragment>
                                                                            {item.socialIconLinks &&
                                                                                item.socialIconLinks.map(
                                                                                    (socialIconLink, socialIconIndex) => {
                                                                                        return (
                                                                                            <Fragment key={socialIconIndex}>
                                                                                                <LinkControl
                                                                                                    label={
                                                                                                        socialIconLink.label + ' ' +
                                                                                                        __('Profile Link', 'slider-blocks')
                                                                                                    }
                                                                                                    value={
                                                                                                        socialIconLink.link &&
                                                                                                        socialIconLink.link
                                                                                                    }
                                                                                                    onChange={value => {
                                                                                                        const newSlideItems = [
                                                                                                            ...slideItemsClone
                                                                                                        ];
                                                                                                        newSlideItems[
                                                                                                            index
                                                                                                        ].socialIconLinks[
                                                                                                            socialIconIndex
                                                                                                        ].link = value;
                                                                                                        setAttributes({
                                                                                                            slideItems: newSlideItems
                                                                                                        });
                                                                                                    }}
                                                                                                    openInNewTab={true}
                                                                                                    addNoFollow={false}
                                                                                                    addSponsored={false}
                                                                                                    help={__(
                                                                                                        'Skip to hide',
                                                                                                        'slider-blocks'
                                                                                                    )}
                                                                                                />
                                                                                            </Fragment>
                                                                                        );
                                                                                    }
                                                                                )}
                                                                        </Fragment>
                                                                    )}
                                                                </PopoverControl>
                                                            )}
                                                        </PopoverControl>
                                                        <PopoverControl label={__('Content Background', 'slider-blocks')}>
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
                                                                            title={__('Upload Author Photo', 'slider-blocks')}
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
                                                            {item.bgType !== 'gradient' && (
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
                                                                        <Fragment>
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
                                                                                __nextHasNoMarginBottom
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
                                                                        </Fragment>
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
                                                panelTitle: 'New Testimonial Item',
                                                designation: 'CEO, Gutslider',
                                                name: 'Mr. Gutslider',
                                                testimonial:
                                                    'Gutslider is a Gutenberg Slider Block that is easy to use and has many features. It is a great alternative to other slider blocks that are not as easy to use and have less features.',
                                                authorPhoto: {
                                                    id: '',
                                                    url: '',
                                                    alt: 'Author Profile'
                                                },
                                                bgType: 'classic',
                                                bgColor: '#efefef',
                                                bgGradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                                                enableOverlay: false,
                                                overlayType: 'classic',
                                                overlayColor: '#000000',
                                                overlayGradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
                                                overlayOpacity: 0.5,
                                                image: {
                                                    id: '',
                                                    url: '',
                                                    alt: 'Gutslider Logo'
                                                },
                                                showSocialIcons: false,
                                                rating: 5,
                                                socialIconLinks: [
                                                    {
                                                        label: 'Facebook',
                                                        link: {
                                                            url: 'https://facebook.com',
                                                            openInNewTab: true
                                                        }
                                                    },
                                                    {
                                                        label: 'Twitter',
                                                        link: {
                                                            url: 'https://twitter.com',
                                                            openInNewTab: true
                                                        }
                                                    },
                                                    {
                                                        label: 'Instagram',
                                                        link: {
                                                            url: 'https://instagram.com',
                                                            openInNewTab: true
                                                        }
                                                    },
                                                    {
                                                        label: 'Pinterest',
                                                        link: {
                                                            url: 'https://pinterest.com',
                                                            openInNewTab: true
                                                        }
                                                    },
                                                    {
                                                        label: 'Linkedin',
                                                        link: {
                                                            url: 'https://linkedin.com',
                                                            openInNewTab: true
                                                        }
                                                    }
                                                ]
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
                        <PanelBody title={__('Photo', 'slider-blocks')} initialOpen={false}>
                            {preset !== 'gutslider-preset-2' && (
                                <>
                                    <ButtonsGroupControl
                                        label={__('Style', 'slider-blocks')}
                                        value={imageStyle}
                                        options={IMG_STYLES}
                                        onChange={value => {
                                            setAttributes({
                                                imageStyle: value
                                            });
                                        }}
                                    />

                                    {imageStyle === 'inline' && (
                                        <>
                                            <ButtonsGroupControl
                                                label={__('Position', 'slider-blocks')}
                                                value={imagePosition}
                                                options={IMAGE_POSITIONS}
                                                onChange={value => {
                                                    setAttributes({ imagePosition: value });
                                                }}
                                            />
                                            {imagePosition !== 'top' && (
                                                <SelectControl
                                                    __nextHasNoMarginBottom
                                                    label={__('Vertical Align', 'slider-blocks')}
                                                    value={photoVPosition}
                                                    options={PHOTO_POSITIONS}
                                                    onChange={v => {
                                                        setAttributes({ photoVPosition: v });
                                                    }}
                                                />
                                            )}
                                        </>
                                    )}
                                </>
                            )}
                            {preset === 'gutslider-preset-2' && (
                                <>
                                    <ButtonsGroupControl
                                        label={__('Direction', 'slider-blocks')}
                                        value={photoDirection}
                                        options={PHOTO_DIRECTIONS}
                                        onChange={value => {
                                            setAttributes({ photoDirection: value });
                                        }}
                                    />
                                </>
                            )}
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
                            {preset !== 'gutslider-preset-2' && (
                                <>
                                    <ResButtonsGroup
                                        label={__('H. Position', 'slider-blocks')}
                                        controlName={CONTENT_HALIGN}
                                        objAttrs={objAttrs}
                                        options={HALIGNS}
                                    />
                                    {imageStyle !== 'inline' && (
                                        <AlignmentControl
                                            label={__('Photo Position', 'slider-blocks')}
                                            controlName={IMAGE_POSITION}
                                            objAttrs={objAttrs}
                                            flexAlign={true}
                                            flexVerticle={false}
                                        />
                                    )}
                                </>
                            )}
                            <AlignmentControl
                                label={__('Text Align', 'slider-blocks')}
                                controlName={CONTENT_ALIGN}
                                objAttrs={objAttrs}
                                flexAlign={false}
                                flexVerticle={false}
                            />
                            <SelectControl
                                __nextHasNoMarginBottom
                                label={__('Name Tag', 'slider-blocks')}
                                value={nameTag}
                                options={HEADING_TAGS}
                                onChange={v => {
                                    setAttributes({ nameTag: v });
                                }}
                            />
                            <SelectControl
                                __nextHasNoMarginBottom
                                label={__('Designation Tag', 'slider-blocks')}
                                value={designationTag}
                                options={HEADING_TAGS}
                                onChange={v => {
                                    setAttributes({ designationTag: v });
                                }}
                            />
                            <SelectControl
                                __nextHasNoMarginBottom
                                label={__('Testimonial Tag', 'slider-blocks')}
                                value={testimonialTag}
                                options={HEADING_TAGS}
                                onChange={v => {
                                    setAttributes({ testimonialTag: v });
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
                                __nextHasNoMarginBottom
                                label={__('Slide Effect', 'slider-blocks')}
                                value={slideEffect}
                                options={SLIDE_EFFECTS}
                                onChange={effect => setAttributes({ slideEffect: effect })}
                                help={__('Use background to see the effects properly.', 'slider-blocks')}
                            />
                            {slideEffect === 'creative' && (
                                <SelectControl
                                    __nextHasNoMarginBottom
                                    label={__('Creative Styles', 'slider-blocks')}
                                    value={creativeEffectStyle}
                                    options={CREATIVE_STYLES}
                                    onChange={effect => setAttributes({ creativeEffectStyle: effect })}
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
                            <ResBoxControl
                                label={__('Padding', 'slider-blocks')}
                                controlName={CONTENT_PADDING}
                                objAttrs={objAttrs}
                                min={0}
                                max={500}
                            />
                        </PanelBody>
                        <PanelBody title={__('Star Rating', 'slider-blocks')} initialOpen={false}>
                            <ResRangeControl
                                label={__('Size', 'slider-blocks')}
                                controlName={STAR_SIZE}
                                objAttrs={objAttrs}
                                min={1}
                                max={100}
                                units={['px', 'em', '%']}
                            />
                            <ResRangeControl
                                label={__('Spacing', 'slider-blocks')}
                                controlName={STAR_SPACING}
                                objAttrs={objAttrs}
                                min={0}
                                max={50}
                                units={['px', 'em', '%']}
                            />
                            <ColorControl
                                label={__('Color', 'slider-blocks')}
                                color={ratingColor}
                                onChange={v => {
                                    setAttributes({ ratingColor: v });
                                }}
                            />
                        </PanelBody>
                        <PanelBody title={__('Photo', 'slider-blocks')} initialOpen={false}>
                            <SelectControl
                                __nextHasNoMarginBottom
                                label={__('Animation', 'slider-blocks')}
                                value={photoAnimation}
                                options={ANIMATION_TYPES}
                                onChange={v => {
                                    setAttributes({ photoAnimation: v });
                                }}
                            />
                            {photoAnimation !== 'none' && photoAnimation !== '' && (
                                <>
                                    <SingleRangeControl
                                        label={__('Transition Delay', 'slider-blocks')}
                                        value={photoDelay}
                                        onChange={v => setAttributes({ photoDelay: v })}
                                        min={0}
                                        max={2}
                                        step={0.01}
                                        onClickReset={() => setAttributes({ photoDelay: null })}
                                    />
                                </>
                            )}
                            <ResRangeControl
                                label={__('Width', 'slider-blocks')}
                                controlName={IMAGE_SIZE}
                                objAttrs={objAttrs}
                                min={1}
                                max={1000}
                                units={['px', 'em', '%', 'vw']}
                            />
                            <ResRangeControl
                                label={__('Height', 'slider-blocks')}
                                controlName={IMAGE_HEIGHT}
                                objAttrs={objAttrs}
                                min={1}
                                max={1000}
                                units={['px', 'em', '%', 'vh']}
                            />
                            {preset === 'gutslider-preset-2' && (
                                <ResRangeControl
                                    label={__('Gap', 'slider-blocks')}
                                    controlName={IMAGE_GAP}
                                    objAttrs={objAttrs}
                                    min={0}
                                    max={500}
                                    units={['px', 'em']}
                                />
                            )}
                            <BorderControl controlName={IMAGE_BORDER} objAttrs={objAttrs} noHover={true} />
                            <ResBoxControl
                                label={__('Border Radius', 'slider-blocks')}
                                controlName={IMAGE_RADIUS}
                                objAttrs={objAttrs}
                                min={0}
                                max={100}
                            />
                            <ResBoxControl
                                label={__('Padding', 'slider-blocks')}
                                controlName={IMAGE_PADDING}
                                objAttrs={objAttrs}
                                min={0}
                                max={100}
                            />
                            <ResBoxControl
                                label={__('Margin', 'slider-blocks')}
                                controlName={IMAGE_MARGIN}
                                objAttrs={objAttrs}
                                min={-200}
                                max={200}
                            />
                        </PanelBody>
                        <PanelBody title={__('Name', 'slider-blocks')} initialOpen={false}>
                            <SelectControl
                                __nextHasNoMarginBottom
                                label={__('Animation', 'slider-blocks')}
                                value={nameAnimation}
                                options={ANIMATION_TYPES}
                                onChange={v => {
                                    setAttributes({ nameAnimation: v });
                                }}
                            />
                            {nameAnimation !== 'none' && nameAnimation !== '' && (
                                <>
                                    <SingleRangeControl
                                        label={__('Transition Delay', 'slider-blocks')}
                                        value={nameDelay}
                                        onChange={v => setAttributes({ nameDelay: v })}
                                        min={0}
                                        max={2}
                                        step={0.01}
                                        onClickReset={() => setAttributes({ nameDelay: null })}
                                    />
                                </>
                            )}
                            <ColorControl
                                label={__('Color', 'slider-blocks')}
                                color={nameColor}
                                onChange={v => {
                                    setAttributes({ nameColor: v });
                                }}
                            />
                            <TypographyControl label={__('Typography', 'slider-blocks')} controlName={NAME_TYPO} objAttrs={objAttrs} />
                            <ResBoxControl
                                label={__('Spacing', 'slider-blocks')}
                                controlName={NAME_SPACING}
                                objAttrs={objAttrs}
                                min={-200}
                                max={200}
                            />
                        </PanelBody>
                        <PanelBody title={__('Designation', 'slider-blocks')} initialOpen={false}>
                            <SelectControl
                                __nextHasNoMarginBottom
                                label={__('Animation', 'slider-blocks')}
                                value={designationAnimation}
                                options={ANIMATION_TYPES}
                                onChange={v => {
                                    setAttributes({ designationAnimation: v });
                                }}
                            />
                            {designationAnimation !== 'none' && designationAnimation !== '' && (
                                <>
                                    <SingleRangeControl
                                        label={__('Transition Delay', 'slider-blocks')}
                                        value={designationDelay}
                                        onChange={v => setAttributes({ designationDelay: v })}
                                        min={0}
                                        max={2}
                                        step={0.01}
                                        onClickReset={() => setAttributes({ designationDelay: null })}
                                    />
                                </>
                            )}
                            <ColorControl
                                label={__('Color', 'slider-blocks')}
                                color={designationColor}
                                onChange={v => {
                                    setAttributes({ designationColor: v });
                                }}
                            />
                            <TypographyControl
                                label={__('Typography', 'slider-blocks')}
                                controlName={DESIGNATION_TYPO}
                                objAttrs={objAttrs}
                            />
                            <ResBoxControl
                                label={__('Spacing', 'slider-blocks')}
                                controlName={DESIGNATION_SPACING}
                                objAttrs={objAttrs}
                                min={-200}
                                max={200}
                            />
                        </PanelBody>
                        <PanelBody title={__('Testimonial', 'slider-blocks')} initialOpen={false}>
                            <SelectControl
                                __nextHasNoMarginBottom
                                label={__('Animation', 'slider-blocks')}
                                value={testimonialAnimation}
                                options={ANIMATION_TYPES}
                                onChange={v => {
                                    setAttributes({ testimonialAnimation: v });
                                }}
                            />
                            {testimonialAnimation !== 'none' && testimonialAnimation !== '' && (
                                <>
                                    <SingleRangeControl
                                        label={__('Transition Delay', 'slider-blocks')}
                                        value={testimonialDelay}
                                        onChange={v => setAttributes({ testimonialDelay: v })}
                                        min={0}
                                        max={2}
                                        step={0.01}
                                        onClickReset={() => setAttributes({ testimonialDelay: null })}
                                    />
                                </>
                            )}
                            <ColorControl
                                label={__('Color', 'slider-blocks')}
                                color={testimonialColor}
                                onChange={v => {
                                    setAttributes({ testimonialColor: v });
                                }}
                            />
                            <TypographyControl
                                label={__('Typography', 'slider-blocks')}
                                controlName={TESTIMONIAL_TYPO}
                                objAttrs={objAttrs}
                            />
                            <ResBoxControl
                                label={__('Spacing', 'slider-blocks')}
                                controlName={TESTIMONIAL_SPACING}
                                objAttrs={objAttrs}
                                min={-200}
                                max={200}
                            />
                        </PanelBody>
                        <PanelBody title={__('Social Profiles', 'slider-blocks')} initialOpen={false}>
                            <SelectControl
                                __nextHasNoMarginBottom
                                label={__('Animation', 'slider-blocks')}
                                value={socialIconAnimation}
                                options={ANIMATION_TYPES}
                                onChange={v => {
                                    setAttributes({ socialIconAnimation: v });
                                }}
                            />
                            {socialIconAnimation !== 'none' && socialIconAnimation !== '' && (
                                <>
                                    <SingleRangeControl
                                        label={__('Transition Delay', 'slider-blocks')}
                                        value={socialDelay}
                                        onChange={v => setAttributes({ socialDelay: v })}
                                        min={0}
                                        max={2}
                                        step={0.01}
                                        onClickReset={() => setAttributes({ socialDelay: null })}
                                    />
                                </>
                            )}
                            <ResRangeControl
                                label={__('Size', 'slider-blocks')}
                                controlName={ICON_SIZE}
                                objAttrs={objAttrs}
                                min={1}
                                max={500}
                                units={['px', 'em', '%']}
                            />
                            <ResRangeControl
                                label={__('Items Spacing', 'slider-blocks')}
                                controlName={ICON_SPACING}
                                objAttrs={objAttrs}
                                min={1}
                                max={500}
                                units={['px', 'em', '%']}
                            />
                            <BorderControl controlName={ICON_BORDER} objAttrs={objAttrs} />
                            <ResBoxControl
                                label={__('Border Radius', 'slider-blocks')}
                                controlName={ICON_RADIUS}
                                objAttrs={objAttrs}
                                min={0}
                                max={100}
                            />
                            <ResBoxControl
                                label={__('Padding', 'slider-blocks')}
                                controlName={ICON_PADDING}
                                objAttrs={objAttrs}
                                min={0}
                                max={100}
                            />
                            <ResBoxControl
                                label={__('Margin', 'slider-blocks')}
                                controlName={ICON_MARGIN}
                                objAttrs={objAttrs}
                                min={0}
                                max={100}
                            />
                            <SwitcherControl
                                normal={
                                    <Fragment>
                                        <ColorControl
                                            label={__('Color', 'slider-blocks')}
                                            color={socialIconColors && socialIconColors.color}
                                            onChange={v => {
                                                const newBtnColors = {
                                                    ...socialIconColors,
                                                    color: v
                                                };
                                                setAttributes({
                                                    socialIconColors: newBtnColors
                                                });
                                            }}
                                        />
                                        <ColorControl
                                            label={__('Background', 'slider-blocks')}
                                            color={socialIconColors && socialIconColors.bgColor}
                                            onChange={v => {
                                                const newBtnColors = {
                                                    ...socialIconColors,
                                                    bgColor: v
                                                };
                                                setAttributes({
                                                    socialIconColors: newBtnColors
                                                });
                                            }}
                                        />
                                    </Fragment>
                                }
                                hover={
                                    <Fragment>
                                        <ColorControl
                                            label={__('Color', 'slider-blocks')}
                                            color={socialIconColors && socialIconColors.hoverColor}
                                            onChange={v => {
                                                const newBtnColors = {
                                                    ...socialIconColors,
                                                    hoverColor: v
                                                };
                                                setAttributes({
                                                    socialIconColors: newBtnColors
                                                });
                                            }}
                                        />
                                        <ColorControl
                                            label={__('Background', 'slider-blocks')}
                                            color={socialIconColors && socialIconColors.hoverBgColor}
                                            onChange={v => {
                                                const newBtnColors = {
                                                    ...socialIconColors,
                                                    hoverBgColor: v
                                                };
                                                setAttributes({
                                                    socialIconColors: newBtnColors
                                                });
                                            }}
                                        />
                                    </Fragment>
                                }
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
