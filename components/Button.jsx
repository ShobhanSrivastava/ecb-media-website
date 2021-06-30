import styles from '../styles/components/Button.module.css'

import { scroller } from 'react-scroll'

//Wrap inside a div to position it! 

function Button() {
    return (
        <button className={styles.button} onClick={scrollToSection} href="#">
            <h3>Speak to our team today</h3>
            <p>Schedule a FREE audit call now!</p>
        </button>
    );
}

export default Button;