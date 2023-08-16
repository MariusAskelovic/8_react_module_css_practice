import Cta from './components/CTA/CTA';
import Features from './components/Features/Features';
import Features2 from './components/Features2/Features2';
import Btn from './components/UI/btn/Btn';
import GainMore from './components/gainMoreSection/GainMore';

export default function App() {
  return (
    <div className='container'>
      <h1>Module Css</h1>

      <Cta />
      <GainMore />
      <Features />
      <Features2 />
    </div>
  );
}
