/**
 * Internal dependencies
 */
import ResBtn from '../res-btn';

const ResLabelControl = ({ label, requiredProps = {}, noResBtns = false }) => {
	const { id, resMode, setAttributes } = requiredProps;
	return (
		<div className="gkits-res-label-control">
			<label className="gkits-label" htmlFor={id ? id : ''}>
				{label}
			</label>
			{!noResBtns && (
				<ResBtn resMode={resMode} setAttributes={setAttributes} />
			)}
		</div>
	);
};

export default ResLabelControl;
