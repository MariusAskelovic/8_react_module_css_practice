import css from './SectionTitle.module.css';

function SectionTitle(props) {
  const genClasses = props.left ? `${css.wrap} ${css.tal}` : css.wrap;
  // const pillStyle = props.light ? `${css.pill} ${css.light}` : css.pill;
  // const big = props.big ? `${css.bigTitle} ${css.title}` : css.title;
  // const bigSub = props.bigSub ? `${css.subtitle} ${css.bigSub}` : css.subtitle;

  let pillClasses = css.pill;
  if (props.pillLight) {
    pillClasses = `${css.pill} ${css.light}`
  } else if (props.pillLight2) {
    pillClasses = `${css.pill} ${css.light2}`
  }

  let titleClasses = css.title;
  if (props.big) {
    titleClasses = `${css.bigTitle} ${css.title}`
  } else if (props.bigW) {
    titleClasses = `${css.bigTitleWhite} ${css.title}`
  }

  let subtitleClasses = css.subtitle;
  if (props.bigSub) {
    subtitleClasses = `${css.subtitle} ${css.bigSub}`
  } else if (props.bigSubW) {
    subtitleClasses = `${css.subtitle} ${css.bigSubW}`
  }

  return (
    <div className={genClasses}>
      <p className={pillClasses}>{props.pill}</p>
      <h2 className={titleClasses}>{props.title}</h2>
      <h3 className={subtitleClasses}>{props.subtitle}</h3>
    </div>
  );
}
export default SectionTitle;
