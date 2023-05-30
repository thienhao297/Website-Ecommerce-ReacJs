import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import AddToCart from "../Component/AddToCart";
import Desc from "../Component/Desc";
import List from "../Component/List";

import { useDispatch } from "react-redux";

import { cartActions } from "../store/cart";

const DetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);
  const [desc, setDesc] = useState([]);
  const [related, setRelated] = useState([]);

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

      const productDetail = loadedProducts.filter(
        (product) => product.id === params.productId
      );

      const productRelated = loadedProducts.filter(
        (product) =>
          product.category === productDetail[0].category &&
          product.id !== productDetail[0].id
      );

      setProduct(productDetail[0]);
      setRelated(productRelated);

      const descArr = productDetail[0].long_desc.split("\n");
      const descObj = descArr.map((de, i) => ({ id: i, lode: de }));

      setDesc(descObj);
    } catch (error) {}
  }, [params.productId]);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  const addToCartHandler = (amount) => {
    dispatch(
      cartActions.addcart({
        id: product.id,
        img: product.img1,
        name: product.name,
        price: product.price,
        amount: amount,
      })
    );
  };

  return (
    <div className="fst-italic">
      <div className="popup mb-5 mt-5">
        <div className="img-detail">
          <div>
            <img src={product.img1} alt={product.name} className="pb-1" />
            <img src={product.img2} alt={product.name} className="pb-1" />
            <img src={product.img3} alt={product.name} className="pb-1" />
            <img src={product.img4} alt={product.name} className="pb-1" />
          </div>
          <img src={product.img1} alt={product.name} />
        </div>
        <div className="p-4">
          <h2>{product.name}</h2>
          <p className="text-secondary fs-6">{product.price} VND</p>
          <p className="text-secondary ">{product.short_desc}</p>
          <p>
            CATEGORY:{" "}
            <span className="text-secondary">{product.category}s</span>
          </p>
          <AddToCart onAddToCart={addToCartHandler} />
        </div>
      </div>
      <p className="btn btn-secondary rounded-0 p-3 ps-4 pe-4">DESCRIPTION</p>
      <h3 className="mb-4">PRODUCT DESCRIPTION</h3>
      <Desc desc={desc} />
      <h3 className="mb-4">RELATED PRODUCTS</h3>
      <List onProduct={related} />
    </div>
  );
};

export default DetailPage;
