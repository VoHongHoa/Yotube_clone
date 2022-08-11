import "./Nav.scss";
import { useState } from "react";

function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleChangeMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className="nav">
      <div className="search-input col-8">
        <form>
          <input type="text" placeholder="Search..." />
        </form>
        <div className="icon-search">
          <i class="fas fa-search"></i>
        </div>
      </div>
      <div className="login col-4">
        <button className="btn btn-primary"> Sign in</button>
      </div>
    </div>
  );
}
export default Nav;
