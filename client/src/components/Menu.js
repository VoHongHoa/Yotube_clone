import "./Menu.scss";
import logo from "../image/logo.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Menu(props) {
  let navigate = useNavigate();
  const handleChangeModeMenu = () => {
    props.handleChangeMode();
  };
  const handleChangepage = (page) => {
    if (page === "signin") {
      navigate("/signin");
      return;
    }
  };
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="menu">
      <div className="logo" onClick={() => handleChangepage("home")}>
        <img src={logo} alt="Youtue logo" height="35px" />
        <span className="logo-title">YouTube</span>
      </div>
      <div className="menu-item mt-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-child-item" : "child-item"
          }
        >
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/trend"
          className={({ isActive }) =>
            isActive ? "active-child-item" : "child-item"
          }
        >
          <i className="fa-solid fa-compass"></i>
          <span>Explore</span>
        </NavLink>

        <NavLink
          to="/sub"
          className={({ isActive }) =>
            isActive ? "active-child-item" : "child-item"
          }
        >
          <i className="fa-solid fa-video"></i>
          <span>Subscriptions</span>
        </NavLink>
        <div className="child-item">
          <i className="fa-solid fa-compact-disc"></i>
          <span>Short</span>
        </div>
        <hr></hr>
        {currentUser ? (
          <div></div>
        ) : (
          <div className="sign-in">
            <p>Sign in to like videos, comment and subscrise.</p>
            <button
              className="btn btn-primary"
              onClick={() => handleChangepage("signin")}
            >
              Sign in
            </button>
            <hr></hr>
          </div>
        )}

        <div className="child-item">
          <i className="fas fa-photo-video"></i>
          <span>Library</span>
        </div>
        <div className="child-item">
          <i className="fas fa-cog"></i>
          <span>Setting</span>
        </div>
        <div className="child-item" onClick={() => handleChangeModeMenu()}>
          <i className="fas fa-lightbulb"></i>
          <span>{props.isDarkMode ? "Light mode" : "Dark mode"} </span>
        </div>
        <div className="child-item">
          <i className="fas fa-question-circle"></i>
          <span>Help</span>
        </div>
        <hr></hr>
        <div className="child-item">
          <i className="fas fa-question-circle"></i>
          <span>Help</span>
        </div>
        <div className="child-item">
          <i className="fas fa-question-circle"></i>
          <span>History</span>
        </div>
        <div className="child-item">
          <i className="fas fa-question-circle"></i>
          <span>Like</span>
        </div>
        <div className="child-item">
          <i className="fas fa-question-circle"></i>
          <span>Watch later</span>
        </div>
        <div className="child-item">
          <i className="fas fa-question-circle"></i>
          <span>Music</span>
        </div>
        <div className="child-item">
          <i className="fas fa-question-circle"></i>
          <span>Sports</span>
        </div>
      </div>
    </div>
  );
}
export default Menu;
