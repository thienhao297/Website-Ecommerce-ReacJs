import Bannerimg from "../img/banner1.jpg";

const Banner = (props) => {
  return (
    <>
      <div className="position-relative mb-5">
        <img src={Bannerimg} className="img-fluid" alt="banner" />
        <div className="position-absolute top-50 start-0 translate-middle-y ps-5 fst-italic">
          <p className="text-secondary">NEW INSPIRATION 2020</p>
          <h1>
            20% OFF ON NEW <br />
            SEASON
          </h1>
          <button
            onClick={props.onNavigate}
            className="btn btn-secondary fst-italic fs-5 rounded-0"
          >
            Browse collections
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
