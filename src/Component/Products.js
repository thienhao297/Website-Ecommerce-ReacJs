import useProduct from "../hook/use-products";

const Products = (props) => {
  const products = useProduct();

  return (
    <div className="fst-italic mb-5">
      <p className="text-secondary mb-2">MADE THE HARD WAY</p>
      <h3 className="mb-4">TOP TRENDING PRODUCTS</h3>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <img
              src={product.img1}
              width="100%"
              className="pb-3"
              alt={`${product.name}`}
              onClick={(e) =>
                props.onShowPopup(
                  e,
                  product.name,
                  product.price,
                  product.img1,
                  product.short_desc
                )
              }
            />
            <p className="fs-5">{product.name}</p>
            <p className="text-secondary">{product.price} VND</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
