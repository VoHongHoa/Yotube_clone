import "./Signin.scss";
import { useEffect, useState } from "react";
import { signinService } from "../service/userService";
function Signin() {
  const [isSinginAction, setIsSigninAction] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const handleSignin = async (e) => {
    e.preventDefault();
    let data = {
      name,
      password,
    };
    try {
      let res = await signinService(data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

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
              onChange={(event) => () => {
                setName(event.target.value);
                setIsSigninAction(true);
              }}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="password1">Password</label>
            <input
              type="password"
              className="form-control"
              id="password1"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="btn-signin">
            <button className="btn btn-primary mt-2" onClick={handleSignin}>
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
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
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
