import { useState } from "react";
import "./App.css";
import Bottom from "./components/Bottom";
import Main from "./components/Main";
import pattern from "./assets/pattern-circles.svg";

function App() {
  const themes = {
    light: {
      backgroundColor: "whitesmoke",
      color: "#000",
    },

    dark: {
      backgroundImage: `url(${pattern})`,
      backgroundColor: "hsl(227, 35%, 25%)",
      color: "#fff",
    },
  };

  const [act, setAct] = useState(false);
  const [thm, setThm] = useState(themes.light);

  const clickHandler = () => {
    act ? setThm(themes.light) : setThm(themes.dark);
    setAct((prev) => !prev);
  };

  return (
    <div className="container" style={thm}>
      <div className="theme">
        <p className="themeSwatch">{act ? "Light" : "Dark"}</p>
        <div
          className={`btn ${act ? "active" : undefined}`}
          onClick={clickHandler}
        >
          <div className="inner_circle"></div>
        </div>
      </div>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required</p>
      <Main />
      <Bottom />
    </div>
  );
}

export default App;
