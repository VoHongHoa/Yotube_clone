import Menu from "./components/Menu.js";
import "./App.scss";
import Nav from "./components/Nav.js";
import { useState } from "react";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleChangeMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div
      className="App container-fluid"
      style={
        isDarkMode
          ? { backgroundColor: "black", color: "white" }
          : { backgroundColor: "white" }
      }
    >
      <div className="row">
        <div className="col-2 left-container">
          <Menu isDarkMode={isDarkMode} handleChangeMode={handleChangeMode} />
        </div>
        <div className="col-10 right-container">
          <div className="nav-container">
            <Nav />
          </div>
          <div className="videos">video 1</div>
        </div>
      </div>
    </div>
  );
}

export default App;
