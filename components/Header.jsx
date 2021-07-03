import styles from '../styles/components/Header.module.css'

export default function Header(){
    return(
        <header className={`${styles.header} header`}>
            <div className={`${styles.logoText} logo-text`}>ECB Media</div>
        </header>
    );
}