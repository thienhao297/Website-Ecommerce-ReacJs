import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/cart";

const CartPage = () => {
  const dispatch = useDispatch();
  dispatch(cartActions.update());

  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  const navigate = useNavigate();
  function coutinueHandler() {
    navigate("/shop");
  }
  function checkoutHandler() {
    navigate("/checkout");
  }

  return (
    <>
      <div className="shop d-flex justify-content-between align-items-center text-center p-5 fst-italic mb-4">
        <h1 className="m-0">CART</h1>
        <p className="m-0 text-secondary">CART</p>
      </div>
      <h3 className="fw-normal">SHOPPING CART</h3>
      <div className="shopping fst-italic">
        <div>
          <table className="table table-borderless align-items-center text-center table align-middle">
            <thead className="shop">
              <tr>
                <th scope="col" className="p-3">
                  IMAGE
                </th>
                <th scope="col" className="p-3">
                  PRODUCT
                </th>
                <th scope="col" className="p-3">
                  PRICE
                </th>
                <th scope="col" className="p-3">
                  QUANTITY
                </th>
                <th scope="col" className="p-3">
                  TOTAL
                </th>
                <th scope="col" className="p-3">
                  REMOVE
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((product, index) => (
                <tr key={index}>
                  <th scope="row">
                    <img src={product.img} alt={product.name} />
                  </th>
                  <td className="fw-bold align-items-center text-center">
                    {product.name}
                  </td>
                  <td className="text-secondary">{product.price} VND</td>
                  <td>{product.amount}</td>
                  <td className="text-secondary">{product.total} VND</td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      role="button"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-between align-items-center text-center shop p-4">
            <div className="p-2" onClick={coutinueHandler} role="button">
              <p className="mb-0">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                  </svg>
                </span>
                Continue shopping
              </p>
            </div>
            <div
              className="p-2 border border-secondary"
              onClick={checkoutHandler}
              role="button"
            >
              <p className="mb-0">
                Proceed to checkout{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="shop p-5 cart-total">
          <h3 className="fw-normal">CART TOTAL</h3>
          <div className="d-flex justify-content-between border-bottom pt-3">
            <p>SUBTOTAL</p>
            <p className="text-secondary">{total} VND</p>
          </div>
          <div className="d-flex justify-content-between pt-3">
            <p>TOTAL</p>
            <h4 className="text-secondary">{total} VND</h4>
          </div>
          <div className="pt-3">
            <input
              type="text"
              placeholder="Enter your coupon"
              className="coupon border border-secondary"
            />
            <button className="btn btn-dark rounded-0 coupon" type="button">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
                </svg>
              </span>
              {"  "}
              Apply coupon
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
