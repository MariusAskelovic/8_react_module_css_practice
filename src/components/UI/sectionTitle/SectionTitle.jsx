import css from './SectionTitle.module.css';

function SectionTitle(props) {
  const genClasses = props.left ? `${css.wrap} ${css.tal}` : css.wrap;
  const pillStyle = props.light ? `${css.pill} ${css.light}` : css.pill;
  const big = props.big ? `${css.bigTitle} ${css.title}` : css.title;
  const bigSub = props.bigSub ? `${css.subtitle} ${css.bigSub}` : css.subtitle;

  return (
    <div className={genClasses}>
      <p className={pillStyle}>{props.pill}</p>
      <h2 className={big}>{props.title}</h2>
      <h3 className={bigSub}>{props.subtitle}</h3>
    </div>
  );
}
export default SectionTitle;
