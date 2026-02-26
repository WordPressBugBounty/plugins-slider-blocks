/**
 * External dependencies
 */
import Select from 'react-select';

/**
 * WordPress dependencies
 */
import { withInstanceId } from '@wordpress/compose';
import { BaseControl } from '@wordpress/components';

const CustomSelectControl = ({
    label,
    value,
    options,
    onChange,
    searchable = true,
    clearable = true,
    placeholder = '',
    multiple = false,
    instanceId
}) => {
    const id = `select-control-${instanceId}`;
    return (
        <BaseControl id={id} label={label}>
            <Select
                id={id}
                classNamePrefix="gkits"
                value={value}
                onChange={data => onChange(data)}
                options={options}
                unstyled={true}
                isSearchable={searchable}
                isClearable={clearable}
                placeholder={placeholder}
                isMulti={multiple}
            />
        </BaseControl>
    );
};

export default withInstanceId(CustomSelectControl);
