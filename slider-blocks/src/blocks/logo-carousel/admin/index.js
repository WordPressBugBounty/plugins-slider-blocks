// import styles
import './style.scss';

/**
 * WordPress dependencies
 */

import { render } from '@wordpress/element';

import App from './components/app';
const GutSliderAdmin = () => {
    return <App />;
};

/**
 * Render GutSliderAdmin to #gutslider in the DOM
 */

window.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('gutslider');
    if (el) {
        render(<GutSliderAdmin />, el);
    }
});
