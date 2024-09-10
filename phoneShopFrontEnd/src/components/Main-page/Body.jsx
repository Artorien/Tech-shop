import watch from "../images/apple_watch_9.jpeg";
import iphone from "../images/iphone.png";
import ipad from "../images/ipad.png";
import mac from "../images/mac.png";
import applewatch from "../images/watch.png";
import { Link } from "react-router-dom";

function Body() {
  return (
    <>
      <div className="bodyImageWrapper">
        <div className="watchInfoWrapper">
          <h2>Learn about new Apple Watch</h2>
          <Link to="https://www.apple.com/nl/apple-watch-series-9/">
            <button>Find out more</button>
          </Link>
        </div>
        <img src={watch} alt="watch_logo" />
      </div>
      <div className="categories">
        <h1>Categories</h1>
        <div className="categoriesImages">
          <Link to="/iPhones">
            <span className="item">
              <img src={iphone} alt="iphone" />
              <p>Iphone</p>
            </span>
          </Link>
          <Link to="/iPads">
            <div className="item">
              <img src={ipad} alt="ipad" />
              <p>iPad</p>
            </div>
          </Link>
          <Link to="/macs">
            <div className="item">
              <img src={mac} alt="mac" />
              <p>Mac</p>
            </div>
          </Link>
          <Link to="/applewatches">
            <div className="item">
              <img src={applewatch} alt="applewatch" />
              <p>Watch</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Body;
