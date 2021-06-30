import styles from '../../styles/components/Sections/Section5.module.css';

import Button from '../Button';

export default function Section5(){

    return (
        <section className={`${styles.section5} grid`}>
            <div className={`${styles.contentWrapper} grid`}>
                <div className={styles.content}>
                    <h1 className={styles.heading}>This is your defining moment!</h1><br />
                    <p className={styles.details}>We are a Zero Loss Agency and we guarantee to give 20% profit minimum on Ad Spends or <br />
                    we return you the Service Fee. So, what do you lose?<br /> 
                    <span style={{color : "white"}}>Click the button below and let's get started!</span></p>
                    <div className={styles.buttonWrapper}><Button /></div>
                </div>
            </div>
        </section>
    );

}