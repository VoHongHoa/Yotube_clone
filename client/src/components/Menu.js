import "./Menu.scss";
import logo from "../image/logo.webp";
import { useNavigate } from "react-router-dom";
function Menu(props) {
  let navigate = useNavigate();
  const handleChangeModeMenu = () => {
    props.handleChangeMode();
  };
  const handleGoHomepage = () => {
    navigate("/");
  };
  const handleSignin = () => {
    navigate("/signin");
  };
  return (
    <div className="menu">
      <div className="logo" onClick={() => handleGoHomepage()}>
        <img src={logo} alt="Youtue logo" height="35px" />
        <span className="logo-title">YouTube</span>
      </div>
      <div className="menu-item mt-2">
        <div className="child-item">
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </div>
        <div className="child-item">
          <i className="fa-solid fa-compass"></i>
          <span>Explore</span>
        </div>
        <div className="child-item">
          <i className="fa-solid fa-video"></i>
          <span>Subscriptions</span>
        </div>
        <div className="child-item">
          <i className="fa-solid fa-compact-disc"></i>
          <span>Short</span>
        </div>
        <hr></hr>

        <div className="sign-in">
          <p>Sign in to like videos, comment and subscrise.</p>
          <button className="btn btn-primary" onClick={() => handleSignin()}>
            Sign in
          </button>
        </div>
        <hr></hr>
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
