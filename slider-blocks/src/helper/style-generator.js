const styleGenerator = ($selector, $styles = []) => {
    let styles = '';
    $styles.forEach($style => {
        if ($style?.v !== '' && $style?.v !== undefined && $style?.v !== null && $style?.v !== false && $style?.v !== '-null') {
            if ($style?.p) {
                styles += `${$style.p}:${$style.v};`;
            } else {
                styles += `${$style.v}`;
            }
        }
    });
    return styles ? `${$selector}{${styles}}` : '';
};

export default styleGenerator;
