import Btn from "./components/UI/btn/Btn";

export default function App() {
  return (
    <div className="container">
      <h1>Module Css</h1>

      <Btn>Get started</Btn>
      <Btn secondary>Learn more</Btn>

      <button className="btn">Simple button</button>
    </div>
  )
}