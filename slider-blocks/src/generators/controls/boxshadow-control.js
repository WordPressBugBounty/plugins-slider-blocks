const generateBoxShadowAttributes = ({ controlName, defaults = {} }) => {
	const {
		[`${controlName}BoxShadowPosition`]: boxShadowPosition = 'outset',
		[`${controlName}BoxShadowColor`]: boxShadowColor,
		[`${controlName}BoxShadowHorizontal`]: boxShadowHorizontal,
		[`${controlName}BoxShadowVertical`]: boxShadowVertical,
		[`${controlName}BoxShadowBlur`]: boxShadowBlur,
		[`${controlName}BoxShadowSpread`]: boxShadowSpread,
	} = defaults;

	return {
		[`${controlName}BoxShadowPosition`]: {
			type: 'string',
			default: boxShadowPosition,
		},
		[`${controlName}BoxShadowColor`]: {
			type: 'string',
			default: boxShadowColor,
		},
		[`${controlName}BoxShadowHorizontal`]: {
			type: 'number',
			default: boxShadowHorizontal,
		},
		[`${controlName}BoxShadowVertical`]: {
			type: 'number',
			default: boxShadowVertical,
		},
		[`${controlName}BoxShadowBlur`]: {
			type: 'number',
			default: boxShadowBlur,
		},
		[`${controlName}BoxShadowSpread`]: {
			type: 'number',
			default: boxShadowSpread,
		},
	};
};
export default generateBoxShadowAttributes;
