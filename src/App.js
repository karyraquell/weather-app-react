import './App.css';
import Weather from "./Weather"
function App() {
  return (
    <div className="App">
      <Weather defaultCity="Parma" /> 
      <footer>
        Coded by Karina Palomeque.{" "}
      <a href="https://github.com/karyraquell/weather-app-react" target="blank">Open-sourced project on GitHub</a>
      </footer>
    </div>
  );
}

export default App;
