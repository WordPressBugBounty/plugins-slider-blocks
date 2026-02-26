const generateResBoxStyles = ({
	controlName,
	attributes,
	propertyName,
	forRadius = false,
}) => {
	const {
		[`${controlName}Values`]: deskValues,
		[`${controlName}LinkedStatus`]: deskLinkedStatus,
		[`${controlName}LinkedValue`]: deskLinkedValue,

		[`${controlName}TabValues`]: tabValues,
		[`${controlName}TabLinkedStatus`]: tabLinkedStatus,
		[`${controlName}TabLinkedValue`]: tabLinkedValue,

		[`${controlName}MobValues`]: mobValues,
		[`${controlName}MobLinkedStatus`]: mobLinkedStatus,
		[`${controlName}MobLinkedValue`]: mobLinkedValue,

		[`${controlName}Units`]: units,
	} = attributes;

	let boxDeskStyles = '';
	let boxTabStyles = '';
	let boxMobStyles = '';

	if (deskLinkedStatus) {
		boxDeskStyles =
			deskLinkedValue !== undefined &&
			deskLinkedValue !== '' &&
			isNaN(deskLinkedValue) === false
				? `
            ${propertyName}: ${deskLinkedValue}${units.desk};
        `
				: '';
	} else {
		boxDeskStyles = `
            ${
				deskValues &&
				deskValues.top !== undefined &&
				deskValues.top !== '' &&
				isNaN(deskValues.top) === false
					? `${
							forRadius
								? 'border-top-left-radius'
								: propertyName + '-top'
					  }: ${deskValues.top}${units.desk};`
					: ''
			}
            ${
				deskValues &&
				deskValues.right !== undefined &&
				deskValues.right !== '' &&
				isNaN(deskValues.right) === false
					? `${
							forRadius
								? 'border-top-right-radius'
								: propertyName + '-right'
					  }: ${deskValues.right}${units.desk};`
					: ''
			}
            ${
				deskValues &&
				deskValues.bottom !== undefined &&
				deskValues.bottom !== '' &&
				isNaN(deskValues.bottom) === false
					? `${
							forRadius
								? 'border-bottom-right-radius'
								: propertyName + '-bottom'
					  }: ${deskValues.bottom}${units.desk};`
					: ''
			}
            ${
				deskValues &&
				deskValues.left !== undefined &&
				deskValues.left !== '' &&
				isNaN(deskValues.left) === false
					? `${
							forRadius
								? 'border-bottom-left-radius'
								: propertyName + '-left'
					  }: ${deskValues.left}${units.desk};`
					: ''
			}
        `;
	}

	if (tabLinkedStatus) {
		boxTabStyles =
			tabLinkedValue !== undefined &&
			tabLinkedValue !== '' &&
			isNaN(tabLinkedValue) === false
				? `
            ${propertyName}: ${tabLinkedValue}${units.tab};
        `
				: '';
	} else {
		boxTabStyles = `
            ${
				tabValues &&
				tabValues.top !== undefined &&
				tabValues.top !== '' &&
				isNaN(tabValues.top) === false
					? `${
							forRadius
								? 'border-top-left-radius'
								: propertyName + '-top'
					  }: ${tabValues.top}${units.tab};`
					: ''
			}
            ${
				tabValues &&
				tabValues.right !== undefined &&
				tabValues.right !== '' &&
				isNaN(tabValues.right) === false
					? `${
							forRadius
								? 'border-top-right-radius'
								: propertyName + '-right'
					  }: ${tabValues.right}${units.tab};`
					: ''
			}
            ${
				tabValues &&
				tabValues.bottom !== undefined &&
				tabValues.bottom !== '' &&
				isNaN(tabValues.bottom) === false
					? `${
							forRadius
								? 'border-bottom-right-radius'
								: propertyName + '-bottom'
					  }: ${tabValues.bottom}${units.tab};`
					: ''
			}
            ${
				tabValues &&
				tabValues.left !== undefined &&
				tabValues.left !== '' &&
				isNaN(tabValues.left) === false
					? `${
							forRadius
								? 'border-bottom-left-radius'
								: propertyName + '-left'
					  }: ${tabValues.left}${units.tab};`
					: ''
			}
        `;
	}

	if (mobLinkedStatus) {
		boxMobStyles =
			mobLinkedValue !== undefined &&
			mobLinkedValue !== '' &&
			isNaN(mobLinkedValue) === false
				? `
            ${propertyName}: ${mobLinkedValue}${units.mob}; 
        `
				: '';
	} else {
		boxMobStyles = `
            ${
				mobValues &&
				mobValues.top !== undefined &&
				mobValues.top !== '' &&
				isNaN(mobValues.top) === false
					? `${
							forRadius
								? 'border-top-left-radius'
								: propertyName + '-top'
					  }: ${mobValues.top}${units.mob};`
					: ''
			}
            ${
				mobValues &&
				mobValues.right !== undefined &&
				mobValues.right !== '' &&
				isNaN(mobValues.right) === false
					? `${
							forRadius
								? 'border-top-right-radius'
								: propertyName + '-right'
					  }: ${mobValues.right}${units.mob};`
					: ''
			}
            ${
				mobValues &&
				mobValues.bottom !== undefined &&
				mobValues.bottom !== '' &&
				isNaN(mobValues.bottom) === false
					? `${
							forRadius
								? 'border-bottom-right-radius'
								: propertyName + '-bottom'
					  }: ${mobValues.bottom}${units.mob};`
					: ''
			}
            ${
				mobValues &&
				mobValues.left !== undefined &&
				mobValues.left !== '' &&
				isNaN(mobValues.left) === false
					? `${
							forRadius
								? 'border-bottom-left-radius'
								: propertyName + '-left'
					  }: ${mobValues.left}${units.mob};`
					: ''
			}
        `;
	}

	return {
		boxDeskStyles,
		boxTabStyles,
		boxMobStyles,
	};
};

export default generateResBoxStyles;
