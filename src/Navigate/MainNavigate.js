import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../store/login";

import classes from "./MainNavigate.module.css";

const shoppingCart = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 icon-nav"
  >
    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
  </svg>
);
const iconUser = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 icon-nav"
  >
    <path
      fillRule="evenodd"
      d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
      clipRule="evenodd"
    />
  </svg>
);

// Sử dụng NavLink hoặc Link trong trường hợp này thuận tiện hơn useNavigate() và có thể thêm active để người dùng biết đang ở trang nào.

function MainNavigation() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLogin);

  function logoutHandler() {
    dispatch(loginActions.userlogout());
  }
  return (
    <div className="container p-0">
      <header className={classes.header}>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Shop
              </NavLink>
            </li>
          </ul>
        </nav>
        <nav className="position-absolute top-50 start-50 translate-middle">
          <h2>BOUTIQUE</h2>
        </nav>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <span>{shoppingCart}</span> Cart
              </NavLink>
            </li>
            {!isLogin && (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  <span>{iconUser}</span> Login
                </NavLink>
              </li>
            )}
            {isLogin && (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  <span>{iconUser}</span> Hao
                </NavLink>
              </li>
            )}
            {isLogin && (
              <li>
                <p role="button" onClick={logoutHandler}>
                  (Logout)
                </p>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;

// .main {
//   margin: 3rem auto;
//   width: 90%;
//   max-width: 40rem;
// }
