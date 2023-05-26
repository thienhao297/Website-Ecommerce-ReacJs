import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/counter";

export default function AddToCart() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="d-flex">
        <div className="d-flex border">
          <p className="counter text-secondary p-2 pe-5">QUANTITY</p>
          <button className="add" onClick={decrementHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
            </svg>
          </button>
          <p className="counter">{counter}</p>
          <button className="add" onClick={incrementHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
              <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
            </svg>
          </button>
        </div>
        <button
          type="submit"
          className="btn btn-secondary fst-italic rounded-0"
        >
          Add to cart
        </button>
      </div>
    </form>
  );
}
