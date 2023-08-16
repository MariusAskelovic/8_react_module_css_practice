import Btn from "../UI/btn/Btn";
import SectionTitle from "../UI/sectionTitle/SectionTitle";
import css from './Features2.module.css'

export default function Features2() {
    return (
        <div className="container">
            <div className={css.grid}>
                <div className={css.left}>
                    <SectionTitle
                        left
                        pillLight
                        big
                        bigSub
                        pill='features'
                        title='Gain more insight into how people use your'
                        subtitle='With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.'
                    />
                    <Btn>Get Started</Btn>
                </div>
                <img src="/img/gainMore.jpg" alt="gain more" />
            </div>
        </div>
    )
}
