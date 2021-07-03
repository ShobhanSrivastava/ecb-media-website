import styles from '../styles/components/Image.module.css'
import Image from 'next/image'

export default function Img(props) {

    return (
        <Image className={styles.image} src={props.src} alt={props.alt} />
    );
    
}