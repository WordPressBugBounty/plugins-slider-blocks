/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, TextControl, TextareaControl, GradientPicker, ToggleControl, RangeControl, SelectControl } = wp.components;
const { Fragment } = wp.element;
const { useSelect } = wp.data;

/**
 * Internal dependencies
 */
import * as Constants from './constants';

const {
    QUERY_TYPES,
    POST_ORDER,
    ORDER_BY,
    SLIDER_TYPES,
    BACKGROUND_TYPES,
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
    ResRangeControl,
    SingleRangeControl,
    ResBoxControl,
    ColorControl,
    AlignmentControl,
    TypographyControl,
    BorderControl,
    ButtonsGroupControl,
    SwitcherControl,
    FooterNotice,
    IconPickerControl,
    TipControl,
    Preview,
    UploadBtn,
    CustomSelectControl,
    ProLink,
    ProLock,
    ResButtonsGroup
} = window.gutSliderModules;
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
    BTN_BORDER,
    BTN_RADIUS,
    BTN_MARGIN,
    BTN_PADDING,
    BTN_TYPO,
    TITLE_SPACING,
    TITLE_TYPO,
    CAT_SPACING,
    CAT_TYPO,
    EXPT_SPACING,
    EXPT_TYPO,
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
    FI_HEIGHT
} = Constants;

import objAttributes from './attributes';

const Inspector = ({ attributes, setAttributes }) => {
    const {
        queryType,
        specificPosts,
        specificCategories,
        totalPosts,
        postOrderBy,
        postOrder,
        sliderType,
        addNewSlide,
        showCat,
        showTitle,
        showExcerpt,
        excerptLength,
        showBtn,
        linkTitle,
        catColor,
        titleTag,
        titleColor,
        excerptColor,
        btnLabel,
        btnColors,
        titleAnimation,
        catAnimation,
        exptAnimation,
        btnAnimation,
        bgType,
        bgColor,
        bgGradient,
        bgImage,
        enableOverlay,
        overlayType,
        overlayColor,
        overlayGradient,
        overlayOpacity,
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
        carouselEffect,
        creativeEffectStyle,
        // animation delay
        titleDelay,
        catDelay,
        exptDelay,
        btnDelay,
        queryPosts,
        focusPoints,
        // content
        detachContent,
        // remote navigation
        enableRemoteNav,
        remotePrevSelector,
        remoteNextSelector
    } = attributes;
    const objAttrs = { attributes, setAttributes, objAttributes };

    // all post categories
    const allCategories = useSelect(select => {
        const { getEntityRecords } = select('core');
        const query = {
            per_page: -1,
            orderby: 'name',
            order: 'asc',
            _embed: true,
            hide_empty: true,
            parent: 0
        };
        return getEntityRecords('taxonomy', 'category', query);
    }, []);

    // all posts
    const allPosts = useSelect(select => {
        const { getEntityRecords } = select('core');
        const query = {
            per_page: -1,
            orderby: 'date',
            order: 'desc',
            _embed: true
        };
        return getEntityRecords('postType', 'post', query);
    }, []);

    // selected posts [Latest Posts]
    const allSelectedPosts = useSelect(
        select => {
            const { getEntityRecords } = select('core');
            const query = {
                per_page: totalPosts || -1,
                orderby: postOrderBy || 'date',
                order: postOrder || 'desc',
                _embed: true
            };
            return getEntityRecords('postType', 'post', query);
        },
        [totalPosts, postOrderBy, postOrder]
    );

    // selected posts [Specific Posts]
    const selectedPosts = useSelect(
        select => {
            const { getEntityRecords } = select('core');
            const query = {
                per_page: -1,
                orderby: postOrderBy || 'date',
                order: postOrder || 'desc',
                _embed: true,
                include: specificPosts && specificPosts.map(post => post.value).join(',')
            };
            return getEntityRecords('postType', 'post', query);
        },
        [specificPosts, postOrderBy, postOrder]
    );

    // selected posts [Specific Categories]
    const selectedPostsByCategories = useSelect(
        select => {
            const { getEntityRecords } = select('core');
            const query = {
                per_page: totalPosts || -1,
                orderby: postOrderBy || 'date',
                order: postOrder || 'desc',
                _embed: true,
                categories: specificCategories && specificCategories.map(category => category.value).join(',')
            };
            return getEntityRecords('postType', 'post', query);
        },
        [specificCategories, postOrderBy, postOrder, totalPosts]
    );

    // set query posts
    let newQueryPosts;
    if (queryType === 'specific_posts' && specificPosts && specificPosts.length > 0) {
        newQueryPosts = selectedPosts;
    } else if (queryType === 'specific_categories' && specificCategories && specificCategories.length > 0) {
        newQueryPosts = selectedPostsByCategories;
    } else {
        newQueryPosts = allSelectedPosts;
    }

    if (newQueryPosts && newQueryPosts.length > 0) {
        setAttributes({ queryPosts: newQueryPosts });
    }

    return (
        <InspectorControls>
            <HeaderTabs
                settingTabContent={
                    <Fragment>
                        <PanelBody title={__('General', 'slider-blocks')} initialOpen={true}>
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
                                    label={__('Detach Content', 'slider-blocks')}
                                    checked={detachContent}
                                    onChange={() => {
                                        setAttributes({ detachContent: !detachContent });
                                    }}
                                />
                            </ProLock>
                            <ToggleControl
                                label={__('Show Post Category', 'slider-blocks')}
                                checked={showCat}
                                onChange={() => {
                                    setAttributes({ showCat: !showCat });
                                }}
                            />
                            <ToggleControl
                                label={__('Show Post Title', 'slider-blocks')}
                                checked={showTitle}
                                onChange={() => {
                                    setAttributes({ showTitle: !showTitle });
                                }}
                            />
                            {showTitle && (
                                <ToggleControl
                                    label={__('Link Post Title', 'slider-blocks')}
                                    checked={linkTitle}
                                    onChange={() => {
                                        setAttributes({ linkTitle: !linkTitle });
                                    }}
                                />
                            )}
                            <ToggleControl
                                label={__('Show Post Excerpt', 'slider-blocks')}
                                checked={showExcerpt}
                                onChange={() => {
                                    setAttributes({ showExcerpt: !showExcerpt });
                                }}
                            />
                            <ToggleControl
                                label={__('Show Read More Button', 'slider-blocks')}
                                checked={showBtn}
                                onChange={() => {
                                    setAttributes({ showBtn: !showBtn });
                                }}
                            />
                            <ProLock>
                                <ToggleControl
                                    label={__('Enable Remote Navigation', 'slider-blocks')}
                                    checked={enableRemoteNav}
                                    onChange={() => setAttributes({ enableRemoteNav: !enableRemoteNav })}
                                    __nextHasNoMarginBottom={true}
                                />
                            </ProLock>
                        </PanelBody>
                        <PanelBody title={__('Posts Query', 'slider-blocks')} initialOpen={false}>
                            <ButtonsGroupControl
                                label={__('Query Type', 'slider-blocks')}
                                value={queryType}
                                options={QUERY_TYPES}
                                onChange={value => {
                                    setAttributes({ queryType: value });
                                }}
                            />
                            {queryType === 'specific_categories' && (
                                <CustomSelectControl
                                    label={__('Categories', 'slider-blocks')}
                                    placeholder={__('select categories', 'slider-blocks')}
                                    options={
                                        allCategories &&
                                        allCategories.map(category => {
                                            return {
                                                label: category.name,
                                                value: category.id
                                            };
                                        })
                                    }
                                    value={specificCategories}
                                    multiple={true}
                                    onChange={value => {
                                        setAttributes({ specificCategories: value });
                                        setAttributes({ addNewSlide: !addNewSlide });
                                    }}
                                />
                            )}
                            {queryType === 'specific_posts' && (
                                <CustomSelectControl
                                    label={__('Posts', 'slider-blocks')}
                                    placeholder={__('select posts', 'slider-blocks')}
                                    options={
                                        allPosts &&
                                        allPosts.map(post => {
                                            return {
                                                label: post.title.raw,
                                                value: post.id
                                            };
                                        })
                                    }
                                    value={specificPosts}
                                    multiple={true}
                                    onChange={value => {
                                        setAttributes({ specificPosts: value });
                                        setAttributes({ addNewSlide: !addNewSlide });
                                    }}
                                />
                            )}
                            {queryType !== 'specific_posts' && (
                                <SingleRangeControl
                                    label={__('Total Posts', 'slider-blocks')}
                                    value={totalPosts}
                                    onChange={v => setAttributes({ totalPosts: v })}
                                    min={2}
                                    max={30}
                                    onClickReset={() => {
                                        setAttributes({ totalPosts: 3 });
                                        setAttributes({
                                            addNewSlide: !addNewSlide
                                        });
                                    }}
                                />
                            )}

                            <ButtonsGroupControl
                                label={__('Order By', 'slider-blocks')}
                                value={postOrder}
                                options={POST_ORDER}
                                onChange={value => {
                                    setAttributes({ postOrder: value });
                                }}
                            />
                            <SelectControl
                                label={__('Order By', 'slider-blocks')}
                                value={postOrderBy}
                                options={ORDER_BY}
                                onChange={value => {
                                    setAttributes({ postOrderBy: value });
                                }}
                            />
                            <TipControl message={__('Changes not visible? Save and reload.', 'slider-blocks')} />
                        </PanelBody>
                        {queryPosts && queryPosts.length > 0 && (
                            <PanelBody title={__('Featured Images', 'slider-blocks')} initialOpen={false}>
                                {queryPosts.map((post, index) => {
                                    // featured image
                                    const featuredImage = post._embedded['wp:featuredmedia']
                                        ? post._embedded['wp:featuredmedia'][0]
                                        : false;
                                    return (
                                        <div className="single-focuspoint" key={index}>
                                            {featuredImage && featuredImage.source_url && (
                                                <Preview
                                                    url={featuredImage.source_url}
                                                    id={featuredImage.id}
                                                    alt={featuredImage.alt_text}
                                                    focalPoint={true}
                                                    focalValue={
                                                        focusPoints && focusPoints[index] !== null ? focusPoints[index] : { x: 0.5, y: 0.5 }
                                                    }
                                                    onFocalPointChange={value => {
                                                        const newFocusPoints = [...focusPoints];
                                                        newFocusPoints[index] = value;
                                                        setAttributes({ focusPoints: newFocusPoints });
                                                    }}
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                            </PanelBody>
                        )}
                        {!detachContent && (
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
                        )}
                        {detachContent && (
                            <PanelBody title={__('Image Height', 'slider-blocks')} initialOpen={false}>
                                <ResRangeControl
                                    label={__('Height', 'slider-blocks')}
                                    controlName={FI_HEIGHT}
                                    objAttrs={objAttrs}
                                    min={1}
                                    max={1000}
                                    units={['px', 'em', 'vh']}
                                />
                            </PanelBody>
                        )}

                        <PanelBody title={__('Post Content', 'slider-blocks')} initialOpen={false}>
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
                                label={__('Title Tag', 'slider-blocks')}
                                value={titleTag}
                                options={HEADING_TAGS}
                                onChange={v => {
                                    setAttributes({ titleTag: v });
                                }}
                            />
                            <SingleRangeControl
                                label={__('Excerpt Length', 'slider-blocks')}
                                value={excerptLength}
                                onChange={v => setAttributes({ excerptLength: v })}
                                min={0}
                                max={100}
                                onClickReset={() => setAttributes({ excerptLength: 25 })}
                            />
                            <TextControl
                                label={__('Read More Label', 'slider-blocks')}
                                value={btnLabel}
                                onChange={v => setAttributes({ btnLabel: v })}
                                placeholder={__('Enter read more label', 'slider-blocks')}
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
                        <PanelBody title={__('Container', 'slider-blocks')} initialOpen={false}>
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
                            <ButtonsGroupControl
                                label={__('Background Type', 'slider-blocks')}
                                value={bgType}
                                options={BACKGROUND_TYPES}
                                onChange={value => {
                                    setAttributes({ bgType: value });
                                }}
                            />
                            {bgType === 'classic' && (
                                <Fragment>
                                    <ColorControl
                                        label={__('Background Color', 'slider-blocks')}
                                        color={bgColor}
                                        onChange={value => {
                                            setAttributes({ bgColor: value });
                                        }}
                                    />
                                    {bgImage && bgImage.url ? (
                                        <Fragment>
                                            <Preview
                                                url={bgImage.url}
                                                id={bgImage.id}
                                                alt={bgImage.alt}
                                                onSelect={media => {
                                                    setAttributes({
                                                        bgImage: media
                                                    });
                                                }}
                                                onClick={() => {
                                                    setAttributes({
                                                        bgImage: {
                                                            id: '',
                                                            url: '',
                                                            alt: ''
                                                        }
                                                    });
                                                }}
                                                // focalPoint={true}
                                                // focalValue={focusPoint}
                                                // onFocalPointChange={value => {
                                                //     setAttributes({
                                                //         focusPoint: value
                                                //     });
                                                // }}
                                            />
                                        </Fragment>
                                    ) : (
                                        <UploadBtn
                                            title={__('Upload Image', 'slider-blocks')}
                                            onSelect={media => {
                                                setAttributes({
                                                    bgImage: media
                                                });
                                            }}
                                            id={bgImage && bgImage.id}
                                        />
                                    )}
                                </Fragment>
                            )}
                            {bgType === 'gradient' && (
                                <GradientPicker
                                    __nextHasNoMargin={true}
                                    value={bgGradient}
                                    onChange={currentGradient => {
                                        setAttributes({ bgGradient: currentGradient });
                                    }}
                                    gradients={GRADIENT_PALETTES}
                                />
                            )}
                        </PanelBody>
                        <PanelBody title={__('Container Overlay', 'slider-blocks')} initialOpen={false}>
                            <ToggleControl
                                label={__('Enable Overlay', 'slider-blocks')}
                                checked={enableOverlay}
                                onChange={() => {
                                    setAttributes({ enableOverlay: !enableOverlay });
                                }}
                            />
                            {enableOverlay && (
                                <Fragment>
                                    <ButtonsGroupControl
                                        label={__('Overlay Type', 'slider-blocks')}
                                        value={overlayType}
                                        options={OVERLAY_TYPES}
                                        onChange={value => {
                                            setAttributes({ overlayType: value });
                                        }}
                                    />
                                    {overlayType === 'classic' && (
                                        <ColorControl
                                            label={__('Overlay Color', 'slider-blocks')}
                                            color={overlayColor}
                                            onChange={value => {
                                                setAttributes({ overlayColor: value });
                                            }}
                                        />
                                    )}
                                    {overlayType === 'gradient' && (
                                        <GradientPicker
                                            __nextHasNoMargin={true}
                                            value={overlayGradient}
                                            onChange={currentGradient => {
                                                setAttributes({ overlayGradient: currentGradient });
                                            }}
                                            gradients={GRADIENT_PALETTES}
                                        />
                                    )}
                                    <RangeControl
                                        label={__('Overlay Opacity', 'slider-blocks')}
                                        value={overlayOpacity}
                                        onChange={v => {
                                            setAttributes({ overlayOpacity: v });
                                        }}
                                        min={0.01}
                                        max={1}
                                        step={0.01}
                                    />
                                </Fragment>
                            )}
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
                        {showCat && (
                            <PanelBody title={__('Categories', 'slider-blocks')} initialOpen={false}>
                                {sliderType === 'slider' && (
                                    <>
                                        <SelectControl
                                            label={__('Animation', 'slider-blocks')}
                                            value={catAnimation}
                                            options={ANIMATION_TYPES}
                                            onChange={v => {
                                                setAttributes({ catAnimation: v });
                                            }}
                                        />
                                        {catAnimation !== 'none' && catAnimation !== '' && (
                                            <SingleRangeControl
                                                label={__('Transition Delay', 'slider-blocks')}
                                                value={catDelay}
                                                onChange={v => setAttributes({ catDelay: v })}
                                                min={0}
                                                max={2}
                                                step={0.01}
                                                onClickReset={() => setAttributes({ catDelay: '' })}
                                            />
                                        )}
                                    </>
                                )}
                                <TypographyControl label={__('Typography', 'slider-blocks')} controlName={CAT_TYPO} objAttrs={objAttrs} />
                                <ColorControl
                                    label={__('Color', 'slider-blocks')}
                                    color={catColor}
                                    onChange={v => {
                                        setAttributes({ catColor: v });
                                    }}
                                />
                                <ResBoxControl
                                    label={__('Margin', 'slider-blocks')}
                                    controlName={CAT_SPACING}
                                    objAttrs={objAttrs}
                                    min={-200}
                                    max={200}
                                />
                            </PanelBody>
                        )}
                        {showTitle && (
                            <PanelBody title={__('Title', 'slider-blocks')} initialOpen={false}>
                                {sliderType === 'slider' && (
                                    <>
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
                                                onClickReset={() => setAttributes({ titleDelay: '' })}
                                            />
                                        )}
                                    </>
                                )}
                                <TypographyControl label={__('Typography', 'slider-blocks')} controlName={TITLE_TYPO} objAttrs={objAttrs} />
                                <ColorControl
                                    label={__('Color', 'slider-blocks')}
                                    color={titleColor}
                                    onChange={v => {
                                        setAttributes({ titleColor: v });
                                    }}
                                />
                                <ResBoxControl
                                    label={__('Margin', 'slider-blocks')}
                                    controlName={TITLE_SPACING}
                                    objAttrs={objAttrs}
                                    min={-200}
                                    max={200}
                                />
                            </PanelBody>
                        )}
                        {showExcerpt && (
                            <PanelBody title={__('Excerpt', 'slider-blocks')} initialOpen={false}>
                                {sliderType === 'slider' && (
                                    <>
                                        <SelectControl
                                            label={__('Animation', 'slider-blocks')}
                                            value={exptAnimation}
                                            options={ANIMATION_TYPES}
                                            onChange={v => {
                                                setAttributes({ exptAnimation: v });
                                            }}
                                        />
                                        {exptAnimation !== 'none' && exptAnimation !== '' && (
                                            <SingleRangeControl
                                                label={__('Transition Delay', 'slider-blocks')}
                                                value={exptDelay}
                                                onChange={v => setAttributes({ exptDelay: v })}
                                                min={0}
                                                max={2}
                                                step={0.01}
                                                onClickReset={() => setAttributes({ exptDelay: '' })}
                                            />
                                        )}
                                    </>
                                )}
                                <TypographyControl label={__('Typography', 'slider-blocks')} controlName={EXPT_TYPO} objAttrs={objAttrs} />
                                <ColorControl
                                    label={__('Color', 'slider-blocks')}
                                    color={excerptColor}
                                    onChange={v => {
                                        setAttributes({ excerptColor: v });
                                    }}
                                />
                                <ResBoxControl
                                    label={__('Margin', 'slider-blocks')}
                                    controlName={EXPT_SPACING}
                                    objAttrs={objAttrs}
                                    min={-200}
                                    max={200}
                                />
                            </PanelBody>
                        )}
                        {showBtn && (
                            <PanelBody title={__('Button', 'slider-blocks')} initialOpen={false}>
                                {sliderType === 'slider' && (
                                    <>
                                        <SelectControl
                                            label={__('Animation', 'slider-blocks')}
                                            value={btnAnimation}
                                            options={ANIMATION_TYPES}
                                            onChange={v => {
                                                setAttributes({ btnAnimation: v });
                                            }}
                                        />
                                        {btnAnimation !== 'none' && btnAnimation !== '' && (
                                            <SingleRangeControl
                                                label={__('Transition Delay', 'slider-blocks')}
                                                value={btnDelay}
                                                onChange={v => setAttributes({ btnDelay: v })}
                                                min={0}
                                                max={2}
                                                step={0.01}
                                                onClickReset={() => setAttributes({ btnDelay: '' })}
                                            />
                                        )}
                                    </>
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
