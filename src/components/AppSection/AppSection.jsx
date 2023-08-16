import Btn from "../UI/btn/Btn";
import SectionTitle from "../UI/sectionTitle/SectionTitle";
import css from './AppSection.module.css'

export default function AppSection() {
    return (
        <div className={css.appSection}>
            <SectionTitle
                pill='Application'
                title='Great work starts with your app'
                pillLight
            />
            <img className={css.laptopImg} src="/img/laptop.png" alt="laptop" />
            <p className={css.para}>Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.</p>
            <div className={css.btns} >
                <Btn>Learn More</Btn>
                <Btn secondary>About Us</Btn>
            </div>
        </div>
    )
}
