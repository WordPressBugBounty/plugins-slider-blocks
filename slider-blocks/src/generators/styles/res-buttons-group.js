const generateResBtnsStyles = ({ controlName, attributes, propertyName = '', noProperty = false }) => {
    const { [`${controlName}`]: aligns } = attributes;

    let deskAlign, tabAlign, mobAlign;
    if (noProperty) {
        deskAlign = aligns && aligns.desk !== undefined && aligns.desk !== '' ? `${aligns.desk}` : '';
        tabAlign = aligns && aligns.tab !== undefined && aligns.tab !== '' ? `${aligns.tab}` : '';
        mobAlign = aligns && aligns.mob !== undefined && aligns.mob !== '' ? `${aligns.mob}` : '';
    } else {
        deskAlign = aligns && aligns.desk !== undefined && aligns.desk !== '' ? `${propertyName}:${aligns.desk};` : '';
        tabAlign = aligns && aligns.tab !== undefined && aligns.tab !== '' ? `${propertyName}:${aligns.tab};` : '';
        mobAlign = aligns && aligns.mob !== undefined && aligns.mob !== '' ? `${propertyName}:${aligns.mob};` : '';
    }

    return {
        deskAlign,
        tabAlign,
        mobAlign
    };
};

export default generateResBtnsStyles;
