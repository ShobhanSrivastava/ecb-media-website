import styles from '../../styles/components/Sections/Section1.module.css'

import Header from '../Header'
import PeopleWorking from '../../assets/SVG/PeopleWorking';
import Button from '../Button'

export default function Section1() {
    return(
        <section className={`section grid`}>
            <div className={`content-wrapper grid`}>
                <Header />
                <div className={`section-left flex-centered`}>
                    <div className={`text-heading`}>THE ZERO LOSS AGENCY</div><br /><br />
                    <div className={`text-heading ${styles.textHeadingLine2}`}>We help <span style={{textTransform : "uppercase", color : "white"}}>healthcare & wellness</span> businesses </div>
                    <div className={`text-heading ${styles.textHeadingLine2}`}>ferociously scale to multiple 6-7 figures through scientific Advertising.</div>
                    <br />
                    <div className={`section-details`}>Stop wasting time and money on faulty and ineffective ad campaigns.<br /><br />It’s time to make your ad-budget count,<br /> scale your business and blow
                    up your sales.
                    </div>
                    <br />
                    <Button />
                </div>
                <div className={`section-right flex-centered ${styles.imageWrapper}`}>
                    <PeopleWorking size="100%"/>
                </div>
            </div>
        </section>
    );
}