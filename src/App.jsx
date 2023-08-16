import { Fragment } from 'react';
import Cta from './components/CTA/CTA';
import Counter from './components/Counter/Counter';
import Features from './components/Features/Features';
import Features2 from './components/Features2/Features2';
import HowItWorks from './components/HowItWorks/HowItWorks';
import GainMore from './components/gainMoreSection/GainMore';
import AppSection from './components/AppSection/AppSection';

export default function App() {
  return (
    <Fragment>
      <div className='container'>
        <h1>Module Css</h1>
        {true && <Cta />}
        {true && <GainMore />}
        {true && <Features />}
        {true && <Features2 />}
        {true && <Counter />}

      </div>
      {true && <HowItWorks />}
      {true && <AppSection />}
    </Fragment>
  );
}
