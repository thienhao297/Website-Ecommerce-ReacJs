import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isEight = (value) => value.trim().length <= 8;

export default function SignUp(props) {
  let userArr = [];
  let emailList = [];

  if (localStorage.getItem("userArr")) {
    userArr = JSON.parse(localStorage.getItem("userArr"));
    for (const id in userArr) {
      emailList.push({
        email: userArr[id].email,
      });
    }
  }

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    email: true,
    password: true,
    phone: true,
    exist: false,
  });

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const phoneInputRef = useRef();

  const signUpHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    const isExist = emailList.filter((email) => email === enteredEmail);

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredPasswordIsValid = !isEight(enteredPassword);
    const enteredPhoneIsValid = !isEmpty(enteredPhone);

    setFormInputsValidity({
      name: enteredNameIsValid,
      email: enteredEmailIsValid,
      password: enteredPasswordIsValid,
      phone: enteredPhoneIsValid,
      exist: isExist,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredEmailIsValid &&
      enteredPasswordIsValid &&
      enteredPhoneIsValid;

    if (!formIsValid) {
      return;
    }

    const user = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      phone: enteredPhone,
    };

    userArr.push(user);
    localStorage.setItem("userArr", JSON.stringify(userArr));
    props.onSignin();
  };

  return (
    <form
      className="position-absolute top-50 start-50 translate-middle shadow-sm p-3 mb-5 bg-body-tertiary rounded signup d-grid"
      onSubmit={signUpHandler}
    >
      <p className="fst-italic fs-4 text-secondary text-center p-4">Sign Up</p>
      <div className="form-floating">
        <input
          type="text"
          className="form-control rounded-0"
          id="floatingInput"
          placeholder="Fullname"
          ref={nameInputRef}
        />
        <label className="text-secondary" htmlFor="floatingInput">
          Full Name
        </label>
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className="form-floating">
        <input
          type="email"
          className="form-control rounded-0 border border-top-0"
          id="floatingInput"
          placeholder="name@example.com"
          ref={emailInputRef}
        />
        <label className="text-secondary" htmlFor="floatingInput">
          Email
        </label>
        {!formInputsValidity.email && <p>Please enter a valid email!</p>}
        {formInputsValidity.email && formInputsValidity.exist && (
          <p>Email already exists!</p>
        )}
      </div>
      <div className="form-floating">
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
        {!formInputsValidity.password && (
          <p>Password must be more than 8 characters!</p>
        )}
      </div>
      <div className="form-floating mb-4">
        <input
          type="text"
          className="form-control rounded-0 border border-top-0"
          id="floatingInput"
          placeholder="PhoneNumber"
          ref={phoneInputRef}
        />
        <label className="text-secondary" htmlFor="floatingInput">
          Phone
        </label>
        {!formInputsValidity.phone && <p>Please enter a valid phone!</p>}
      </div>
      <button className="btn btn-secondary rounded-0 p-3 bg-dark">
        SIGN UP
      </button>
      <p className="text-secondary fst-italic text-center p-4 m-0">
        Login?{" "}
        <span onClick={props.onSignin} className="navlogin">
          Click
        </span>
      </p>
    </form>
  );
}
