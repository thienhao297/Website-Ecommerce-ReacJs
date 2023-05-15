const Shipping = () => {
  return (
    <>
      <div className="text-center fst-italic mb-5 d-flex p-5 justify-content-between bg-light">
        <div>
          <h3>FREE SHIPPING</h3>
          <p className="text-secondary">Free shipping worlwide</p>
        </div>
        <div>
          <h3>24X7 SERVICE</h3>
          <p className="text-secondary">Free shipping worlwide</p>
        </div>
        <div>
          <h3>FESTIVAL OFFER</h3>
          <p className="text-secondary ">Free shipping worlwide</p>
        </div>
      </div>
      <div className="d-flex justify-content-between mb-5">
        <div className="fst-italic">
          <h3 className="">LET'S BE FRIENDS</h3>
          <p className="text-secondary m-0">Free shipping worlwide</p>
        </div>
        <div className="email">
          <input
            type="email"
            className="form-control rounded-0"
            placeholder="Enter your email address"
          />
          <button className="btn btn-secondary rounded-0" type="button">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default Shipping;
