import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="text-light fst-italic pb-3">
            <h4>CUSTOMER SEVERVICES</h4>
          </div>
          <div>
            <Link to="/" className={classes.link}>
              Help & Contact Us
            </Link>
            <Link to="/" className={classes.link}>
              Returns & Refunds
            </Link>
            <Link to="/" className={classes.link}>
              Online Stores
            </Link>
            <Link to="/" className={classes.link}>
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="text-light fst-italic pb-3 ">
            <h4>COMPANY</h4>
          </div>
          <div className="text-secondary">
            <Link to="/" className={classes.link}>
              What we do
            </Link>
            <Link to="/" className={classes.link}>
              Available Services
            </Link>
            <Link to="/" className={classes.link}>
              Latest Posts
            </Link>
            <Link to="/" className={classes.link}>
              FAQs
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="text-light fst-italic pb-3">
            <h4>SOCIAL MEDIA</h4>
          </div>
          <div className="text-secondary">
            <Link to="/" className={classes.link}>
              Twitter
            </Link>
            <Link to="/" className={classes.link}>
              Instagram
            </Link>
            <Link to="/" className={classes.link}>
              Facebook
            </Link>
            <Link to="/" className={classes.link}>
              Pinterest
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
