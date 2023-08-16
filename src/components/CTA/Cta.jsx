import Btn from '../UI/btn/Btn';
import css from './style.module.css';

export default function Cta() {
  return (
    <section>
      <div className={`container ${css.cta}`}>
        <div className='left'>
          <h2 className={css.title}>
            The fastest way from <br /> idea to live site. Period.
          </h2>
          <p className={css.text}>
            Flex is a Small SaaS Business. Flex isn't a traditional company.
          </p>
        </div>
        <div className={css.right}>
          <Btn className={css.mr24}>Get started</Btn>
          <Btn secondary>Learn more</Btn>
        </div>
      </div>
    </section>
  );
}
