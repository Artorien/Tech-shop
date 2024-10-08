
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
        <img src="/images/apple_watch_9.jpeg" alt="watch_logo" />
      </div>
      <div className="categories">
        <h1>Categories</h1>
        <div className="categoriesImages">
          <Link to="/iPhones">
            <span className="item">
              <img src="/images/iphone.png" alt="iphone" />
              <p>iPhone</p>
            </span>
          </Link>
          <Link to="/iPads">
            <div className="item">
              <img src="/images/ipad.png" alt="ipad" />
              <p>iPad</p>
            </div>
          </Link>
          <Link to="/macs">
            <div className="item">
              <img src="/images/mac.png" alt="mac" />
              <p>Mac</p>
            </div>
          </Link>
          <Link to="/applewatches">
            <div className="item">
              <img src="/images/watch.png" alt="applewatch" />
              <p>Watch</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Body;
