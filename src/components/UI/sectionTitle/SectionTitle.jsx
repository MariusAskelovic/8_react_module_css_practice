import css from './SectionTitle.module.css';

function SectionTitle(props) {
  const genClasses = props.left ? `${css.wrap} ${css.tal}` : css.wrap;

  return (
    <div className={genClasses}>
      <p className={css.pill}>{props.pill}</p>
      <h2 className={css.title}>{props.title}</h2>
      <h3 className={css.subtitle}>{props.subtitle}</h3>
    </div>
  );
}
export default SectionTitle;
