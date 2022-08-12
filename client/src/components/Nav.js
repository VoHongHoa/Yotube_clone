import "./Nav.scss";
import { useNavigate } from "react-router-dom";
function Nav() {
  let navigate = useNavigate();
  const handleSignin = () => {
    navigate("/signin");
  };
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
      <div className="login col-4">
        <button className="btn btn-primary" onClick={() => handleSignin()}>
          {" "}
          Sign in
        </button>
      </div>
    </div>
  );
}
export default Nav;
