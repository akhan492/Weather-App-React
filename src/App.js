import "./styles.css";
import Weather from "./component/Weather";
import HeadShake from "react-reveal/HeadShake";

export default function App() {
  return (
    <>
      <div className="App">
        <HeadShake>
          <h1>Weather App</h1>
        </HeadShake>
      </div>
      <Weather />
    </>
  );
}
