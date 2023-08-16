import css from './GainItem.module.css'

export default function GainItem(props) {
  return <div className={css.grid}>
    <div className={css.rowSpan2}>
      <div className={css.icon}></div>
    </div>
    <h3>{props.title}</h3>
    <p>{props.text}</p>
  </div>;
}
