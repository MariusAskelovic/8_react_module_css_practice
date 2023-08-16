import Btn from "../UI/btn/Btn";
import SectionTitle from "../UI/sectionTitle/SectionTitle";
import css from './Features.module.css'

export default function Features() {
    return (
        <div className={`container ${css.grid}`} >
            <img src="/img/gainMore.jpg" alt="gain more" />
            <div>
                <SectionTitle
                    left
                    light
                    big
                    bigSub
                    pill='features'
                    title='Gain more insight into how people use your'
                    subtitle='With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.'
                />
                <Btn>Get Started</Btn>
            </div>
        </div >
    )
}
