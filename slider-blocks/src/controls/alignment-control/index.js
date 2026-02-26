import { withInstanceId } from '@wordpress/compose';
import { FLEX_HORIZONTAL_ALIGNS, FLEX_VERTICAL_ALIGNS, TEXT_ALIGNS } from '../../constants';
import ButtonsGroupControl from '../buttons-group';
import ResLabelControl from '../res-label-control';

const AlignmentControl = ({ instanceId, label, controlName, objAttrs, flexAlign = false, flexVerticle = false }) => {
    const { attributes, setAttributes } = objAttrs;
    const { resMode, [`${controlName}Aligns`]: aligns } = attributes;

    const id = `alignment-control-${instanceId}`;

    const flexAlignOptions = flexVerticle ? FLEX_VERTICAL_ALIGNS : FLEX_HORIZONTAL_ALIGNS;

    const alignmentOptions = flexAlign ? flexAlignOptions : TEXT_ALIGNS;

    // Map resMode to corresponding property name
    const resModeMap = {
        Desktop: 'desk',
        Tablet: 'tab',
        Mobile: 'mob'
    };

    const currentMode = resModeMap[resMode];

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
            {currentMode && (
                <ButtonsGroupControl
                    value={aligns?.[currentMode]}
                    onChange={value =>
                        setAttributes({
                            [`${controlName}Aligns`]: {
                                ...aligns,
                                [currentMode]: value
                            }
                        })
                    }
                    options={alignmentOptions}
                    hasIcons={true}
                />
            )}
        </div>
    );
};

export default withInstanceId(AlignmentControl);
