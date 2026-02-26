/**
 * Internal dependencies
 */
import Icons from '../../helper/icons';

const DisplayIcon = ({ icon, iconsList = null }) => {
    const options = iconsList ? iconsList : Icons;
    return <>{options[icon]}</>;
};

export default DisplayIcon;
