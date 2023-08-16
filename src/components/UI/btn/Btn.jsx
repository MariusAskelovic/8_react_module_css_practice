import css from './style.module.css';

export default function Btn(props) {
  console.log('css ===', css);
  const genClasses = props.secondary
    ? `${css.btn} ${css.gray} ${props.className}`
    : `${css.btn} ${props.className}`;
  return <button className={genClasses}>{props.children}</button>;
}
