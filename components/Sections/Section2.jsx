import styles from '../../styles/components/Sections/Section2.module.css';

import LeadMagnet from '../../assets/SVG/LeadMagnet';
import Button from '../Button';

export default function Section2() {
    
    return (
        <section className={`${styles.section2} grid`}>
            <div className={`${styles.contentWrapper} grid`}>
                <div className={styles.sectionImage}>
                    <LeadMagnet size="80%"/>
                </div>
                <div className={styles.sectionText}>
                    <h1 className={`${styles.sectionHeading} sectionHeading`}>OUR PHILOSOPHY</h1>
                    <p className={`${styles.sectionDetails} ${styles.sectionHeading}`}>Here, at ECB Media we believe in giving our clients atleast 20% profit on the ad spend in the span of atleast 3 months or we return the service fee.<sup><span className={styles.terms}>No strings attached!</span></sup></p>
                    <p className={styles.sectionDetailText}>If you are tired of spending your hard earned money on inefficient ad campaigns, give us a chance to serve you with absolutely <span className={styles.zero}>0</span> risk of losing your money!</p>
                    <Button />
                </div>
            </div>
        </section>
    );

}