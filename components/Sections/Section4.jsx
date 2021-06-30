import styles from '../../styles/components/Sections/Section4.module.css'

import Tick from '../../assets/SVG/Tick';

import Calendly from "../Calendly";

export default function Section4() {
    return (
        <section className={`${styles.section4} grid section4`}>
            <div className={`${styles.contentWrapper} grid`}>
                <div className={styles.leftSide}>
                    <div className={styles.calendlyWrapper}><Calendly /></div>
                </div>
                <div className={styles.rightSide}>
                    <p className={styles.subHeading}>SCHEDULE A FREE CALL TODAY</p>
                    <h2 className={styles.heading}>Free 15-minute Demo call</h2>
                    <p className={styles.subHeading}>Find a time in the team's calendar to schedule a call.<br />
                    We look forward to speaking to you!</p>
                    <h2 className={styles.heading}>This call is perfect for</h2>
                    <ul className={styles.sectionUL}>
                        <li><i className={styles.tick}><Tick /></i>Businesses looking to convert their current website into a <strong className={styles.highlight}>high quality & streamlined funnel format.</strong></li>
                        <li><i className={styles.tick}><Tick /></i>Businesses looking to take their offline business <strong className={styles.highlight}>online</strong></li>
                        <li><i className={styles.tick}><Tick /></i>​Businesses looking to <strong className={styles.highlight}>maximize their conversion rates & average order value.</strong></li>
                        <li><i className={styles.tick}><Tick /></i>Businesses looking for a reliable agency that can <strong className={styles.highlight}>make their company a priority.</strong></li>
                        <li><i className={styles.tick}><Tick /></i>Businesses looking to understand their <strong className={styles.highlight}>increased revenue potential </strong>with funnels & conversion rate optimization.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}