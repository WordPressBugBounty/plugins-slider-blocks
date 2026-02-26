/* eslint-disable @wordpress/no-base-control-with-label-without-id */
/* eslint-disable @wordpress/no-unsafe-wp-apis */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-undef */
/* eslint-disable camelcase */

import { BaseControl, SelectControl, TextControl, __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import Select2 from 'react-select';
import { SORT_ORDER, ORDER_BY, PRINT_TAXONOMY } from '../../constants';

const QueryControl = ({ attributes, setAttributes }) => {
    const { postQuery } = attributes;

    const allTermList = gutslider_blocks.all_term_list;
    const allTaxonomyList = gutslider_blocks.get_taxonomies;

    let tpgAllTaxonomies = new Set();
    for (const tax in allTaxonomyList) {
        const value = allTaxonomyList[tax];
        if (postQuery && postQuery.postType && postQuery.postType === value.object_type[0]) {
            tpgAllTaxonomies.add({
                value: value.name,
                name: value.label
            });
        }
    }
    tpgAllTaxonomies = [...tpgAllTaxonomies];

    const changeTaxonomy = (terms, name) => {
        const postTaxonomies = {
            ...postQuery.postTaxonomies,
            [name]: {
                name,
                options: terms
            }
        };
        setAttributes({ postQuery: { ...postQuery, postTaxonomies } });
    };

    //get post types
    const PostType = [];
    const getPostType = gutslider_blocks.post_types;
    for (const p in getPostType) {
        PostType.push({ value: p, label: getPostType[p] });
    }
    const POSTS_TYPE = PostType;
    //get authors
    const AUTHOR_LISTS = gutslider_blocks.get_users;

    return (
        <>
            <SelectControl
                label={__('Source', 'slider-blocks')}
                value={postQuery && postQuery.postType ? postQuery.postType : 'post'}
                options={POSTS_TYPE}
                onChange={postType => setAttributes({ postQuery: { ...postQuery, postType } })}
            />

            <BaseControl label={__('By Author', 'slider-block')}>
                <Select2
                    options={AUTHOR_LISTS}
                    value={postQuery && postQuery.postAuthors}
                    onChange={postAuthors => setAttributes({ postQuery: { ...postQuery, postAuthors } })}
                    isMulti={true}
                    closeMenuOnSelect={false}
                />
            </BaseControl>

            <TextControl
                label={__('Include Only', 'slider-blocks')}
                value={postQuery && postQuery.postInclude}
                onChange={postInclude => setAttributes({ postQuery: { ...postQuery, postInclude } })}
                autocomplete="off"
            />

            <TextControl
                label={__('Exclude', 'slider-blocks')}
                autocomplete="off"
                value={postQuery && postQuery.postExclude}
                onChange={postExclude => {
                    setAttributes({ postQuery: { ...postQuery, postExclude } });
                }}
            />

            {tpgAllTaxonomies.map((tax, index) => (
                <BaseControl label={__('By ', 'slider-blocks') + tax.name} key={index}>
                    <Select2
                        options={PRINT_TAXONOMY(allTermList[tax.value])}
                        value={
                            Object.keys(postQuery.postTaxonomies).length > 0
                                ? postQuery.postTaxonomies[tax.value] !== undefined
                                    ? postQuery.postTaxonomies[tax.value].options
                                    : []
                                : []
                        }
                        onChange={value => changeTaxonomy(value, tax.value)}
                        isMulti={true}
                        closeMenuOnSelect={false}
                    />
                </BaseControl>
            ))}

            <NumberControl
                isShiftStepEnabled
                label={__('Post Per Page', 'slider-blocks')}
                max={100}
                min={-1}
                value={postQuery && postQuery.postPerPage}
                onChange={postPerPage => {
                    setAttributes({ postQuery: { ...postQuery, postPerPage } });
                }}
                shiftStep={10}
                step={1}
            />

            <NumberControl
                isShiftStepEnabled
                label={__('Offset', 'slider-blocks')}
                max={100}
                min={0}
                value={postQuery && postQuery.postOffset}
                onChange={postOffset => {
                    setAttributes({ postQuery: { ...postQuery, postOffset } });
                }}
                shiftStep={10}
                step={1}
            />

            <SelectControl
                label={__('Order By', 'slider-blocks')}
                value={postQuery && postQuery.postOrderby}
                onChange={postOrderby => {
                    setAttributes({ postQuery: { ...postQuery, postOrderby } });
                }}
                options={ORDER_BY}
            />

            <SelectControl
                label={__('Sort Order', 'slider-blocks')}
                value={postQuery && postQuery.postOrder}
                onChange={postOrder => {
                    setAttributes({ postQuery: { ...postQuery, postOrder } });
                }}
                options={SORT_ORDER}
            />
        </>
    );
};

export default QueryControl;
