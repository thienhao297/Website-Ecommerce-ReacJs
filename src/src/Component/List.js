const List = (props) => {
  return (
    <div className="products">
      {props.onProduct.map((product) => (
        <div key={product.id} className="text-center">
          <img
            src={product.img1}
            width="100%"
            className="pb-3"
            alt={`${product.name}`}
          />
          <p className="fs-5">{product.name}</p>
          <p className="text-secondary">{product.price} VND</p>
        </div>
      ))}
    </div>
  );
};

export default List;
