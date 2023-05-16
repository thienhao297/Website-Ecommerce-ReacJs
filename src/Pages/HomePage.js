import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Popup from "../Popup/Popup";
import Banner from "../Component/Banner";
import Categories from "../Component/Categories";
import Products from "../Component/Products";
import Shipping from "../Component/Shipping";

import { popupActions } from "../store/popup";
import { useState } from "react";

const HomePage = () => {
  const dispatch = useDispatch();

  const isPopup = useSelector((state) => state.popup.isPopup);

  const [productDetail, setProductDetail] = useState();

  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/shop");
  };

  const showPopupHandler = (e, name, price, img1, short_desc) => {
    e.preventDefault();
    dispatch(popupActions.show());
    setProductDetail({ name: name, price: price, img: img1, desc: short_desc });
  };

  const hidePopupHandler = (e) => {
    e.preventDefault();
    dispatch(popupActions.hide());
  };

  return (
    <div>
      {isPopup && <Popup onClose={hidePopupHandler} onDetail={productDetail} />}
      <Banner onNavigate={navigateHandler} />
      <Categories onNavigate={navigateHandler} />
      <Products onShowPopup={showPopupHandler} />
      <Shipping />
    </div>
  );
};

export default HomePage;
