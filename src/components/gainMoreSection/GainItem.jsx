import css from './GainItem.module.css'
import Icon from '../UI/icon/Icon';

export default function GainItem(props) {
  return <div className={css.grid}>
    <div className={css.rowSpan2}>
      <div className={css.icon}><Icon>envelope</Icon></div>
    </div>
    <h3>{props.title}</h3>
    <p>{props.text}</p>
  </div>;
}
