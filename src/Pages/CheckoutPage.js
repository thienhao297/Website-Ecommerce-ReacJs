import { useSelector } from "react-redux";
const CheckoutPage = () => {
  // Đối với trang check out không cần update data vì trước khi vào trang checkout phải vào cartpage, trang cart page sẽ cập nhật sẵn

  const items = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);

  return (
    <>
      <div className="shop d-flex justify-content-between align-items-center text-center p-5 fst-italic mb-4">
        <h1 className="m-0">CART</h1>
        <p className="m-0">
          HOME / CART / <span className="text-secondary">CHECKOUT</span>
        </p>
      </div>
      <h3 className="fst-italic pt-4 fw-normal">BILLING DETAILS</h3>
      <div className="checkout fst-italic pt-4">
        <form>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label ps-1"
            >
              FULL NAME:
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="exampleFormControlInput1"
              placeholder="Enter Your Full Name Here!"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label ps-1"
            >
              EMAIL:
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="exampleFormControlInput1"
              placeholder="Enter Your Full Name Here!"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label ps-1"
            >
              PHONE NUMBER:
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="exampleFormControlInput1"
              placeholder="Enter Your Full Name Here!"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label ps-1"
            >
              ADDRESS:
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="exampleFormControlInput1"
              placeholder="Enter Your Full Name Here!"
            />
          </div>
          <button className="btn btn-secondary rounded-0 bg-dark fst-italic mb-5">
            Place order
          </button>
        </form>
        <div className="shop p-5 cart-total">
          <h3 className="fw-normal pb-4">YOUR ORDER</h3>

          {items.map((product, index) => (
            <div key={index} className="order border-bottom pt-2">
              <p>{product.name}</p>
              <p className="text-secondary">
                {product.price} VND x <span>{product.amount}</span>
              </p>
            </div>
          ))}

          <div className="order pt-2">
            <p className="fw-bold">TOTAL</p>
            <h5 className="text-secondary fw-normal">{total} VND</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
