import Menu from "./components/Menu.js";
import "./App.scss";
import Nav from "./components/Nav.js";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./page/Homepage.js";
import Video from "./page/Video.js";
import Signin from "./page/Signin.js";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleChangeMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <BrowserRouter>
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
            <div
              className="nav-container"
              style={
                isDarkMode
                  ? { backgroundColor: "black", color: "white" }
                  : { backgroundColor: "white" }
              }
            >
              <Nav />
            </div>
            <div className="content-container mt-4">
              <Routes>
                <Route path="/">
                  <Route index element={<Homepage />} />
                  <Route path="/signin" element={<Signin />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </div>
            <div style={{ height: "100px" }}></div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
