import styles from '../../styles/components/Sections/Section3.module.css'

import Button from '../Button';

export default function Section3(){

    return (
        <section className={`section grid`}>
            <div className={`content-wrapper grid`}>
                <div className={`section-left`}>
                    <h1 className={`text-heading`}>WHAT WE OFFER</h1>
                    <p className={`text-heading ${styles.sectionDetails}`}>Paid Advertising</p>
                    <p className={`section-details`}>Just Ads? Yeah, you read that correct !<br /><br />
                    Being the Jack of all trades definitely distracts from focussing on advertising and doing it efficiently.<br /><br />
                    So we decided to be the Master of One!<br /><br />
                    Do you want to track your expenses and profits at all times? You are at the right place! Hit that button right now 👇</p>
                    <Button />
                </div>
                <div className={`section-right flex-column flex-centered`}>
                    <ul className={`section-details`} style={{listStyle : "none"}}>
                        <li><span style={{color : "red", fontWeight : 400}} className="material-icons">clear</span>Web Design</li>
                        <li><span style={{color : "red", fontWeight : 400}} className="material-icons">clear</span>SEO</li>
                        <li><span style={{color : "red", fontWeight : 400}} className="material-icons">clear</span>Social Media Handling</li>
                        <li><span style={{color : "red", fontWeight : 400}} className="material-icons">clear</span>Content Creation</li>
                        <li><span style={{color : "red", fontWeight : 400}} className="material-icons">clear</span>Email Marketing</li>
                    </ul>
                </div>
            </div>
        </section>
    );

}