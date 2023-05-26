import { useState } from "react";
import useProduct from "../hook/use-products";
import List from "./List";
import PageList from "./PageList";

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
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <input placeholder="Enter Search Here!" className="p-2" />
          </div>
          <div>
            {/* Vì đề bài không yêu cầu nên button sort chưa hoàn thiện chức năng chỉ tạo demo, tương tự button tới và lui trong list */}
            <button>
              Default sorting
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="pb-4">
          {!filter && <List onProduct={products} />}
          {filter && <List onProduct={filterList} />}
          {!filter && <PageList onProduct={products} />}
          {filter && <PageList onProduct={filterList} />}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
