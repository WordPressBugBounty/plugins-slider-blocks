const UnitsControl = ({ value, onChange, units }) => {
	return (
		<div className="gkits-units-wrapper">
			{units &&
				units.map((u, index) => {
					return (
						<button
							className={`unit-btn ${
								u === value ? 'gkits-active' : ''
							}`}
							key={index}
							onClick={() => onChange(u)}
						>
							{u}
						</button>
					);
				})}
		</div>
	);
};

export default UnitsControl;
