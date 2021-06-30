import styles from '../styles/components/Image.module.css'

export default function Image(props) {

    return (
        <img className={styles.image} src={props.src} alt={props.alt} />
    );
    
}