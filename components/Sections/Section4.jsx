import styles from '../../styles/components/Sections/Section4.module.css'

import Calendly from "../Calendly";

export default function Section4() {
    return (
        <section id="section4" className={`grid section`}>
            <div className={`${styles.contentWrapper} grid`}>
                <div className={`section-left ${styles.sectionLeft}`}>
                    <div className={`calendly-wrapper`}><Calendly /></div>
                </div>
                <div className={`section-right`}>
                    <p className={`${styles.subHeading} text-heading`}>SCHEDULE A FREE CALL TODAY</p>
                    <h2 className={`${styles.heading} text-heading`}>Free 15-minute Demo call</h2>
                    <p className={`${styles.subHeading} section-details`}>Find a time in the team's calendar to schedule a call.<br />
                    We look forward to speaking to you!</p>
                    <h2 className={`${styles.heading} text-heading`}>This call is perfect for</h2>
                    <ul className={`${styles.sectionUL} section-details`}>
                        <li><span style={{color : "#39ff14"}} class="material-icons">check</span>Businesses looking to convert their current website into a <strong className={`${styles.highlight} section-details`}>high quality & streamlined funnel format.</strong></li>
                        <li><span style={{color : "#39ff14"}} class="material-icons">check</span>Businesses looking to take their offline business <strong className={styles.highlight}>online</strong></li>
                        <li><span style={{color : "#39ff14"}} class="material-icons">check</span>Businesses looking to <strong className={styles.highlight}>maximize their conversion rates & average order value.</strong></li>
                        <li><span style={{color : "#39ff14"}} class="material-icons">check</span>Businesses looking for a reliable agency that can <strong className={styles.highlight}>make their company a priority.</strong></li>
                        <li><span style={{color : "#39ff14"}} class="material-icons">check</span>Businesses looking to understand their <strong className={styles.highlight}>increased revenue potential </strong>with funnels & conversion rate optimization.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}