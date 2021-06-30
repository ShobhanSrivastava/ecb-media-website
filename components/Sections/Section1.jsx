import styles from '../../styles/components/Sections/Section1.module.css'

import PeopleWorking from '../../assets/SVG/PeopleWorking';
import Button from '../Button'

export default function Section1() {
    return(
        <section className={`${styles.section1} grid`}>
            <div className={`${styles.contentWrapper} grid`}>
                <div className={styles.sectionTextWrapper}>
                    <span className={styles.textHeading}>THE ZERO LOSS AGENCY</span><br /><br />
                    <span className={`${styles.textHeading} ${styles.textHeadingLine2}`}>We help <span style={{textTransform : "uppercase"}}>healthcare & wellness</span> businesses </span>
                    <span className={`${styles.textHeading} ${styles.textHeadingLine2}`}>ferociously scale to multiple 6-7 figures through scientific Advertising.</span>
                    <br />
                    <br />
                    <div className={styles.sectionDetails}>Stop wasting time and money on faulty and ineffective ad campaigns.<br /><br />It’s time to make your ad-budget count,<br /> scale your business and blow
                    up your sales.
                    </div>
                    <div className={styles.buttonWrapper}>
                        <Button className={styles.button}/>
                    </div>
                </div>
                <div className={styles.sectionImageWrapper}>
                    <PeopleWorking size="100%"/>
                </div>
            </div>
        </section>
    );
}