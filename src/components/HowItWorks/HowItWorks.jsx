import SectionTitle from "../UI/sectionTitle/SectionTitle";
import css from './HowItWorks.module.css'

export default function HowItWorks() {
    return (
        <div className={css.background}>
            <div className={css.wideContainer}>
                <div className={css.grid}>
                    <SectionTitle
                        left
                        bigW
                        bigSubW
                        pillLight2
                        pill='How it Works'
                        title='Gain more insight into how people use your'
                        subtitle='With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage your business in one secure platform.'

                    />
                    <img src="/img/FemaleAtDesk.png" alt="female at desk" /></div>
            </div>

        </div>
    )
}
