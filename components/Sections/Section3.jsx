import styles from '../../styles/components/Sections/Section3.module.css'

import Image from '../Image';
import Button from '../Button';

export default function Section3(){

    return (
        <section className={`${styles.section3} grid`}>
            <div className={`${styles.contentWrapper} grid`}>
                <div className={styles.leftSide}>
                    <h1 className={`${styles.sectionHeading} sectionHeading`}>WHAT WE OFFER</h1>
                    <p className={`${styles.sectionDetails} ${styles.sectionHeading}`}>Paid Advertising</p>
                    <p className={styles.sectionDetailText}>Just Ads? Yeah, you read that correct !<br /><br />
                    Being the Jack of all trades definitely distracts from focussing on advertising and doing it efficiently.<br /><br />
                    So we decided to be the Master of One!<br /><br />
                    Do you want to track your expenses and profits at all times? You are at the right place! Hit that button right now 👇</p>
                    <Button />
                </div>
                <div className={styles.rightSide}>
                    <Image src="/Adspng.png" />
                </div>
            </div>
        </section>
    );

}