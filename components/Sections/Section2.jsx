import styles from '../../styles/components/Sections/Section2.module.css';

import LeadMagnet from '../../assets/SVG/LeadMagnet';
import Button from '../Button';

export default function Section2() {
    
    return (
        <section className={`section grid`}>
            <div className={`content-wrapper grid`}>
                <div className={`section-left`}>
                    <LeadMagnet size="80%"/>
                </div>
                <div className={`section-right`}>
                    <h1 className={`text-heading`}>OUR PHILOSOPHY</h1>
                    <p className={`${styles.sectionDetails} text-heading`}>Here, at ECB Media we believe in giving our clients atleast 20% profit on the ad spend in the span of atleast 3 months or we return the service fee.<sup><span className={`terms`}>No strings attached!</span></sup></p>
                    <p className={`section-details`}>If you are tired of spending your hard earned money on inefficient ad campaigns, give us a chance to serve you with absolutely <span className={styles.zero}>0</span> risk of losing your money!</p>
                    <br />
                    <Button />
                </div>
            </div>
        </section>
    );

}