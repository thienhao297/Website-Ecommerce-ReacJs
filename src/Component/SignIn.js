import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";

export default function SignIn(props) {
  let userArr = [];

  if (localStorage.getItem("userArr")) {
    userArr = JSON.parse(localStorage.getItem("userArr"));
  }

  const [formInputsValidity, setFormInputsValidity] = useState({
    email: true,
    password: true,
  });

  const [accExist, setAccExist] = useState(true);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const signInHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const isExist = userArr.filter(
      (user) => user.email === enteredEmail && user.password === enteredPassword
    );

    const enteredEmailIsValid = !isEmpty(enteredPassword);
    const enteredPasswordIsValid = !isEmpty(enteredPassword);

    const formIsValid = enteredEmailIsValid && enteredPasswordIsValid;

    setFormInputsValidity({
      email: enteredEmailIsValid,
      password: enteredPasswordIsValid,
    });

    if (!formIsValid) {
      return;
    }
    if (isExist.length === 0) {
      setAccExist(false);
      return;
    }
    props.onLogin();
  };

  return (
    <form
      className="position-absolute top-50 start-50 translate-middle shadow-sm p-3 mb-5 bg-body-tertiary rounded signup d-grid"
      onSubmit={signInHandler}
    >
      <p className="fst-italic fs-4 text-secondary text-center p-4">Sign In</p>
      <div className="form-floating">
        <input
          type="email"
          className="form-control rounded-0"
          id="floatingInput"
          placeholder="name@example.com"
          ref={emailInputRef}
        />
        <label className="text-secondary" htmlFor="floatingInput">
          Email
        </label>
        {!formInputsValidity.email && <p>Please enter a valid email!</p>}
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control rounded-0 border border-top-0"
          id="floatingPassword"
          placeholder="Password"
          ref={passwordInputRef}
        />
        <label className="text-secondary" htmlFor="floatingInput">
          Password
        </label>
        {!formInputsValidity.password && <p>Please enter a valid password!</p>}
        {!accExist && <p>Wrong account, please re-enter!</p>}
      </div>

      <button className="btn btn-secondary rounded-0 p-3 bg-dark">
        SIGN IN
      </button>
      <p className="text-secondary fst-italic text-center p-4 m-0">
        Create an account?{" "}
        <span onClick={props.onSignup} className="navlogin">
          Sign up
        </span>
      </p>
    </form>
  );
}
