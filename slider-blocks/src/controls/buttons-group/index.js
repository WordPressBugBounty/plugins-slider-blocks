/**
 * WordPress dependencies
 */
import { ButtonGroup, Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import ResLabelControl from '../res-label-control';

const ButtonsGroupControl = ({
	label = '',
	value,
	onChange,
	options,
	hasIcons = false,
}) => {
	return (
		<div className="gkits-control-container gkits-btns-group">
			{label && (
				<div className="gkits-mb-8">
					<ResLabelControl label={label} noResBtns={true} />
				</div>
			)}
			<ButtonGroup>
				{options &&
					options.map((btn, index) => {
						return (
							<Button
								key={index}
								className={`gkits-btn ${
									btn.value === value
										? 'gkits-btn-active'
										: ''
								}`}
								aria-pressed={btn.value === value}
								onClick={() => onChange(btn.value)}
								disabled={btn.disabled}
							>
								{hasIcons ? btn.icon : btn.label}
							</Button>
						);
					})}
			</ButtonGroup>
		</div>
	);
};

export default ButtonsGroupControl;
