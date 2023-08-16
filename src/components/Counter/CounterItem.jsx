import css from './CounterItem.module.css'
export default function CounterItem(props) {
    return (
        <div>
            <h2 className={css.value}>{props.value}</h2>
            <p className={css.title}>{props.title}</p>
        </div>
    )
}
