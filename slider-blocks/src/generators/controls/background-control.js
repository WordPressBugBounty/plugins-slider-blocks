const generateBackgroundAttributes = ({ controlName, defaults = {} }) => {
	const {
		[`${controlName}bgType`]: bgType,
		[`${controlName}bgColor`]: bgColor,
		[`${controlName}bgGradient`]: bgGradient,
	} = defaults;

	return {
		[`${controlName}bgType`]: {
			type: 'string',
			default: bgType,
		},
		[`${controlName}bgColor`]: {
			type: 'string',
			default: bgColor,
		},
		[`${controlName}bgGradient`]: {
			type: 'string',
			default: bgGradient,
		},
	};
};

export default generateBackgroundAttributes;
