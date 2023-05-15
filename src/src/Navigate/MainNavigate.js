import { NavLink } from "react-router-dom";

import classes from "./MainNavigate.module.css";

// Sử dụng NavLink hoặc Link trong trường hợp này thuận tiện hơn useNavigate() và có thể thêm active để người dùng biết đang ở trang nào.

function MainNavigation() {
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
        <nav className={classes.nav}>
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
                Cart
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Login
              </NavLink>
            </li>
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
