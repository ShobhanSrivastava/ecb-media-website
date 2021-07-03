import styles from '../styles/components/Button.module.css'

//Wrap inside a div to position it! 

function Button(props) {
    return (
        <a href="#section4">
            <button className={styles.button}>
                <h3>Speak to our team today</h3>
                <p>Schedule a FREE audit call now!</p>
            </button>
        </a>
    );
}

export default Button;