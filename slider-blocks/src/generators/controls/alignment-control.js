const generateAlignmentAttributes = ({ controlName }) => {
	return {
		[`${controlName}Aligns`]: {
			type: 'object',
			default: {
				desk: '',
				tab: '',
				mob: '',
			},
		},
	};
};

export default generateAlignmentAttributes;
