import { useEffect, useState, useCallback } from "react";
import List from "./List";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProductsHandler = useCallback(async () => {
    try {
      const response = await fetch(
        `https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const fixPrice = data.map((product) => {
        let priceArr = product.price.split("");
        const length = priceArr.length;
        const indexFix = [3, 6, 9, 12];
        for (const index of indexFix)
          if (index < length) priceArr.splice(length - index, 0, ".");
        return { ...product, price: priceArr };
      });

      const loadedProducts = [];

      for (const key in fixPrice) {
        if (key <= 7) {
          loadedProducts.push({
            id: fixPrice[key]._id.$oid,
            name: fixPrice[key].name,
            price: fixPrice[key].price,
            category: fixPrice[key].category,
            short_desc: fixPrice[key].short_desc,
            long_desc: fixPrice[key].long_desc,
            img1: fixPrice[key].img1,
            img2: fixPrice[key].img2,
            img3: fixPrice[key].img3,
            img4: fixPrice[key].img4,
          });
        }
      }

      setProducts(loadedProducts);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  return (
    <div className="category fst-italic">
      <List />
      <div>
        <div className="d-flex justify-content-between mb-5">
          <input placeholder="Enter Search Here!" className="p-2" />
          <button>Default sorting</button>
        </div>
        <div>
          <div className="products">
            {products.map((product) => (
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
        </div>
      </div>
    </div>
  );
};

export default ProductList;
