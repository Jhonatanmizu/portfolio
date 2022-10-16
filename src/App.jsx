import { useState } from "react";
import "./App.css";

import Navigation from "./components/Navigation";

function App() {
  const [count, setCount] = useState(0);
  const [isMenu, setIsMenu] = useState(false);
  const handleToggleMenu = () => {
    setIsMenu(!isMenu);
    console.log("STATUS MENU", isMenu);
  };
  return (
    <div className="App">
      <Navigation />
      <section id="home">
        <a href="https://jacinto.design" target="_blank">
          Jhonatan Jesus
        </a>
      </section>
      <section id="about">
        <h1>Learn More About Me</h1>
      </section>
      <section id="skills">
        <h1>These Are My Strengths</h1>
      </section>
      <section id="projects">
        <h1>These Are My Results</h1>
      </section>
      <section id="contact">
        <h1>Available Anytime</h1>
      </section>
    </div>
  );
}

export default App;
