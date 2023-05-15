import Product1 from "../img/product_1.png";
import Product2 from "../img/product_2.png";
import Product3 from "../img/product_3.png";
import Product4 from "../img/product_4.png";
import Product5 from "../img/product_5.png";

const Categories = (props) => {
  return (
    <>
      <div className="text-center fst-italic mb-5">
        <p className="text-secondary mb-2">CAREFULLY CREATED COLLECTIONS</p>
        <h3 className="mb-4">BROWSE OUR CATEGORIES</h3>
        <div className="d-flex flex-column">
          <div className="list-item pb-3">
            <img onClick={props.onNavigate} src={Product1} alt="product1" />
            <img onClick={props.onNavigate} src={Product2} alt="product2" />
          </div>
          <div className="list-item2">
            <img onClick={props.onNavigate} src={Product3} alt="product3" />
            <img onClick={props.onNavigate} src={Product4} alt="product4" />
            <img onClick={props.onNavigate} src={Product5} alt="product5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
