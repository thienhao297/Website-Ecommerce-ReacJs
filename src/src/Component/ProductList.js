import { useEffect, useState, useCallback } from "react";

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
      <div>
        <h4>CATEGORIES</h4>
        <p>APPLE</p>
        <p>All</p>
        <p>IPHONE & MAC</p>
        <p>Iphone</p>
        <p>Ipad</p>
        <p>Macbook</p>
        <p>WIRELESS</p>
        <p>Airpod</p>
        <p>Watch</p>
        <p>OTHER</p>
        <p>Mouse</p>
        <p>Keyboard</p>
        <p>Other</p>
      </div>
      <div>
        <p>List</p>
      </div>
    </div>
  );
};

export default ProductList;
