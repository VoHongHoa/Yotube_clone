import "./Nav.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import errVideo from "../image/videotest.jpg";
import { logout } from "../redux/userSlice";
function Nav() {
  let navigate = useNavigate();
  const handleSignin = () => {
    navigate("/signin");
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    try {
      dispatch(logout());
    } catch (e) {
      console.log(e);
    }
  };

  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="nav">
      <div className="search-input col-8">
        <form>
          <input type="text" placeholder="Search..." />
        </form>
        <div className="icon-search">
          <i className="fas fa-search"></i>
        </div>
      </div>
      {currentUser ? (
        <div className="user-login">
          <i className="fa-solid fa-video"></i>
          <div
            className="avatar"
            style={
              currentUser.img && currentUser.img !== ""
                ? { backgroundImage: `url(${currentUser.img})` }
                : { backgroundImage: `url(${errVideo}) ` }
            }
          ></div>
          <span>{currentUser.name}</span>
          <i
            className="fa-solid fa-right-from-bracket"
            onClick={() => handleLogout()}
          ></i>
        </div>
      ) : (
        <div className="login col-4">
          <button className="btn btn-primary" onClick={() => handleSignin()}>
            Sign in
          </button>
        </div>
      )}
    </div>
  );
}
export default Nav;
