import SectionTitle from "../UI/sectionTitle/SectionTitle";
import css from './Counter.module.css'
import CounterItem from "./CounterItem";

export default function Counter() {
    return (
        <div className={css.flexCol}>
            <div className={css.titleSection}>
                <SectionTitle
                    light
                    big
                    bigSub
                    pill='NUMBERS'
                    title='We believe in the power of data'
                    subtitle=' Flex is the only business platform that lets you run your business on one platform, seamlessly across all digital channels.'
                />
            </div>
            <div className={`container ${css.flexData}`}>
                <CounterItem value='235.000' title='Projects completed' />
                <CounterItem value='$10m' title='APR' />
                <CounterItem value='+50.000' title='Hours Saved Annually' />
                <CounterItem value='3.500' title='Unique Users' />
            </div>
        </div>
    )
}
