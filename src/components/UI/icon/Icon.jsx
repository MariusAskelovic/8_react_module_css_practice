import css from './style.module.css';

export default function Icon(props) {
  return (
    <div className={css.wrap}>
      <i className={`fa fa-${props.children}`} aria-hidden='true'></i>
    </div>
  );
}
