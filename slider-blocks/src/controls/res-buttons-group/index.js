/**
 * WordPress dependencies
 */
import { withInstanceId } from '@wordpress/compose';

// Internal dependencies
import ButtonsGroupControl from '../buttons-group';
import ResLabelControl from '../res-label-control';

const ResButtonsGroup = ({ instanceId, label, controlName, objAttrs, options }) => {
    const { attributes, setAttributes } = objAttrs;
    const { resMode } = attributes;

    const { [`${controlName}`]: aligns } = attributes;

    const id = `btns-group-${instanceId}`;

    return (
        <div className="gkits-control-container">
            <div className="gkits-mb-8">
                <ResLabelControl
                    id={id}
                    label={label}
                    requiredProps={{
                        id,
                        resMode,
                        setAttributes
                    }}
                />
            </div>
            {resMode === 'Desktop' && (
                <ButtonsGroupControl
                    value={aligns && aligns.desk}
                    onChange={value =>
                        setAttributes({
                            [`${controlName}`]: {
                                ...aligns,
                                desk: value
                            }
                        })
                    }
                    options={options}
                    hasIcons={true}
                />
            )}
            {resMode === 'Tablet' && (
                <ButtonsGroupControl
                    value={aligns && aligns.tab}
                    onChange={value =>
                        setAttributes({
                            [`${controlName}`]: {
                                ...aligns,
                                tab: value
                            }
                        })
                    }
                    options={options}
                    hasIcons={true}
                />
            )}
            {resMode === 'Mobile' && (
                <ButtonsGroupControl
                    value={aligns && aligns.mob}
                    onChange={value =>
                        setAttributes({
                            [`${controlName}`]: {
                                ...aligns,
                                mob: value
                            }
                        })
                    }
                    options={options}
                    hasIcons={true}
                />
            )}
        </div>
    );
};

export default withInstanceId(ResButtonsGroup);
