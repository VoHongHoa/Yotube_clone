import "./Signin.scss";
import { useState } from "react";
function Signin() {
  const [isSinginAction, setIsSigninAction] = useState(true);
  return (
    <div className="signin-container">
      <div className="title">
        <strong>Sign in</strong> <p>to continue to youtube</p>
      </div>
      <div className="signin">
        <form>
          <div className="form-group">
            <label htmlFor="username1">Username </label>
            <input
              type="text"
              className="form-control"
              id="username1"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="password1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password1"
              placeholder="Password"
            />
          </div>
          <div className="btn-signin">
            <button type="submit" className="btn btn-primary mt-2">
              Sign in
            </button>
            <span className="mt-2 ">OR</span>
          </div>
        </form>
      </div>

      <div className="signin">
        <form>
          <div className="form-group">
            <label htmlFor="username">Username </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="btn-signin">
            <button type="submit" className="btn btn-primary mt-2">
              Sign un
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
