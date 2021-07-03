import styles from '../../styles/components/Sections/Section5.module.css';

import Button from '../Button';

export default function Section5(){

    return (
        <section className={`grid ${styles.section5}`}>
            <div className={`content-wrapper grid`}>
                <div className={`${styles.content} flex-column flex-centered`}>
                    <h1 className={`text-heading ${styles.heading}`}>This is your defining moment!</h1><br />
                    <p className={`section-details ${styles.details}`}>We are a Zero Loss Agency and we guarantee to give 20% profit minimum on Ad Spends or <br />
                    we return you the Service Fee. So, what do you lose?</p><br /><br />
                    <div className={`section-details`} style={{color : "white"}}>Click the button below and let's get started!</div>
                    <div className={`button-wrapper-section-5`}><Button /></div>
                </div>
            </div>
        </section>
    );

}