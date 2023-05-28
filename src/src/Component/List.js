import { Link } from "react-router-dom";

const List = (props) => {
  return (
    <div className="products">
      {props.onProduct.map((product) => (
        <Link
          to={`/detail/${product.id}`}
          key={product.id}
          className="text-center text-decoration-none"
        >
          <img
            src={product.img1}
            width="100%"
            className="pb-3"
            alt={`${product.name}`}
          />
          <p className="fs-5 text-dark">{product.name}</p>
          <p className="text-secondary">{product.price} VND</p>
        </Link>
      ))}
    </div>
  );
};

export default List;
