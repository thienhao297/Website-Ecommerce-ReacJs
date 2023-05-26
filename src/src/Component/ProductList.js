import { useState } from "react";
import useProduct from "../hook/use-products";
import List from "./List";

const ProductList = () => {
  const products = useProduct();

  const [filter, setFilter] = useState(false);
  const [filterList, setFilterList] = useState([]);
  const [active, setActive] = useState("");

  const filterHanler = () => {
    setFilter(false);
    setActive("");
  };

  const iphoneHanler = () => {
    setFilter(true);
    setFilterList(products.filter((product) => product.category === "iphone"));
    setActive("iphone");
  };

  const ipadHanler = () => {
    setFilter(true);
    setFilterList(products.filter((product) => product.category === "ipad"));
    setActive("ipad");
  };
  const macbookHanler = () => {
    setFilter(true);
    setFilterList(products.filter((product) => product.category === "macbook"));
    setActive("macbook");
  };
  const airpodHanler = () => {
    setFilter(true);
    setFilterList(products.filter((product) => product.category === "airpod"));
    setActive("airpod");
  };
  const watchHanler = () => {
    setFilter(true);
    setFilterList(products.filter((product) => product.category === "watch"));
    setActive("watch");
  };
  const mouseHanler = () => {
    setFilter(true);
    setFilterList(products.filter((product) => product.category === "mouse"));
    setActive("mouse");
  };
  const keyboardHanler = () => {
    setFilter(true);
    setFilterList(
      products.filter((product) => product.category === "keyboard")
    );
    setActive("keyboard");
  };
  const otherHanler = () => {
    setFilter(true);
    setFilterList(products.filter((product) => product.category === "other"));
    setActive("other");
  };

  return (
    <div className="category fst-italic">
      <nav>
        <h4 className="mb-3">CATEGORIES</h4>
        <div className="bg-dark">
          <p className="text-white p-2 ps-4 m-0 fw-bold">APPLE</p>
        </div>
        <div>
          <p
            className={`p-2 ps-4 m-0 pointer ${active === "" ? "active" : ""}`}
            onClick={filterHanler}
          >
            All
          </p>
        </div>
        <div>
          <p className="p-2 ps-4 m-0 shop fw-bold">IPHONE & MAC</p>
        </div>
        <div>
          <p
            className={`p-2 ps-4 m-0 pointer ${
              active === "iphone" ? "active" : ""
            }`}
            onClick={iphoneHanler}
          >
            Iphone
          </p>
        </div>
        <div>
          <p
            className={`p-2 ps-4 m-0 pointer ${
              active === "ipad" ? "active" : ""
            }`}
            onClick={ipadHanler}
          >
            Ipad
          </p>
        </div>
        <div>
          <p
            className={`p-2 ps-4 m-0 pointer ${
              active === "macbook" ? "active" : ""
            }`}
            onClick={macbookHanler}
          >
            Macbook
          </p>
        </div>
        <div>
          <p className="p-2 ps-4 m-0 shop fw-bold">WIRELESS</p>
        </div>
        <div>
          <p
            className={`p-2 ps-4 m-0 pointer ${
              active === "airpod" ? "active" : ""
            }`}
            onClick={airpodHanler}
          >
            Airpod
          </p>
        </div>
        <div>
          <p
            className={`p-2 ps-4 m-0 pointer ${
              active === "watch" ? "active" : ""
            }`}
            onClick={watchHanler}
          >
            Watch
          </p>
        </div>
        <div>
          <p className="p-2 ps-4 m-0 shop fw-bold">OTHER</p>
        </div>
        <div>
          <p
            className={`p-2 ps-4 m-0 pointer ${
              active === "mouse" ? "active" : ""
            }`}
            onClick={mouseHanler}
          >
            Mouse
          </p>
        </div>
        <div>
          <p
            className={`p-2 ps-4 m-0 pointer ${
              active === "keyboard" ? "active" : ""
            }`}
            onClick={keyboardHanler}
          >
            Keyboard
          </p>
        </div>
        <div>
          <p
            className={`p-2 ps-4 m-0 pointer ${
              active === "other" ? "active" : ""
            }`}
            onClick={otherHanler}
          >
            Other
          </p>
        </div>
      </nav>
      <div>
        <div className="d-flex justify-content-between mb-5">
          <input placeholder="Enter Search Here!" className="p-2" />
          <button>Default sorting</button>
        </div>
        {!filter && <List onProduct={products} />}
        {filter && <List onProduct={filterList} />}
      </div>
    </div>
  );
};

export default ProductList;
