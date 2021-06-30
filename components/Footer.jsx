import styles from '../styles/components/Footer.module.css';

var year = new Date().getFullYear();

export default function Footer(){

    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>
                <p>© {year} Copyright | All Rights Reserved | <span>ECB Media</span></p>
            </div>
        </footer>
    );

}