import "./Signin.scss";
import { useEffect, useState } from "react";
import { googleAuth, signinService } from "../service/userService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginFailed, loginStart, loginSuccess } from "../redux/userSlice";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
function Signin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    let data = {
      name,
      password,
    };
    try {
      let res = await signinService(data);
      dispatch(loginSuccess(res.data));
    } catch (e) {
      console.log(e);
      dispatch(loginFailed());
    }
  };

  const googleSignIn = () => {
    dispatch(loginStart());
    signInWithPopup(auth, provider)
      .then(async (result) => {
        let data = {
          name: result.user.displayName,
          email: result.user.email,
          img: result.user.photoURL,
        };
        console.log(result);
        let res = await googleAuth(data);
        dispatch(loginSuccess(res.data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginFailed());
      });
  };

  useEffect(() => {
    const redirectPage = () => {
      if (currentUser !== null) {
        navigate("/");
      }
    };
    redirectPage();
  }, [currentUser]);

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
              onChange={(event) => setName(event.target.value)}
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
            <div className="btn btn-primary mt-2" onClick={googleSignIn}>
              Sign in with Google
            </div>
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
