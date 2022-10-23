import { ThemeProvider } from "styled-components";
import "./App.css";
import Main from "./components/Main";

import Navigation from "./components/Navigation";
import dark from "./styles/theme/dark";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <div className="App">
        <Navigation />
        <Main />
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
    </ThemeProvider>
  );
}

export default App;
