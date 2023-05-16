import ProductList from "../Component/ProductList";

const ShopPage = () => {
  return (
    <>
      <div className="shop d-flex justify-content-between align-items-center text-center p-5 fst-italic mb-4">
        <h1 className="m-0">SHOP</h1>
        <p className="m-0 text-secondary">SHOP</p>
      </div>
      <ProductList />
    </>
  );
};

export default ShopPage;
