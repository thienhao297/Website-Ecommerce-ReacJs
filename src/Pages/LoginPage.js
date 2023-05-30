import { useDispatch, useSelector } from "react-redux";

import SignIn from "../Component/SignIn";
import SignUp from "../Component/SignUp";
import Bannerimg from "../img/banner1.jpg";

import { loginActions } from "../store/login";
import { useState } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(true);
  const isLogin = useSelector((state) => state.login.isLogin);

  function signUpHandler() {
    setIsSignUp(false);
  }
  function signInHandler() {
    setIsSignUp(true);
  }
  function loginHandler() {
    dispatch(loginActions.userlogin());
  }
  return (
    <div className="position-relative mb-5">
      <img src={Bannerimg} className="img-fluid imglogin" alt="banner" />
      <img src={Bannerimg} className="img-fluid imglogin" alt="banner" />
      {!isLogin && isSignUp && (
        <SignIn onSignup={signUpHandler} onLogin={loginHandler} />
      )}
      {!isLogin && !isSignUp && <SignUp onSignin={signInHandler} />}
      {isLogin && (
        <h4 className="position-absolute top-50 start-50 translate-middle">
          Welcome, Hao Nguyen
        </h4>
      )}
    </div>
  );
};

export default LoginPage;
