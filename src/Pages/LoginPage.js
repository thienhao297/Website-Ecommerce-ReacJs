import { useState } from "react";
import SignIn from "../Component/SignIn";
import SignUp from "../Component/SignUp";
import Bannerimg from "../img/banner1.jpg";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  function signUpHandler() {
    setIsLogin(false);
  }
  function signInHandler() {
    setIsLogin(true);
  }

  return (
    <div className="position-relative mb-5">
      <img src={Bannerimg} className="img-fluid imglogin" alt="banner" />
      <img src={Bannerimg} className="img-fluid imglogin" alt="banner" />
      {isLogin && <SignIn onSignup={signUpHandler} />}
      {!isLogin && <SignUp onSignin={signInHandler} />}
    </div>
  );
};

export default LoginPage;
