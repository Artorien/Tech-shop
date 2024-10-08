import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductCard(properties) {
  const [memory, setMemory] = useState("");

  useEffect(() => {
    properties.memory == 1024
      ? setMemory("1 TB")
      : setMemory(properties.memory + " GB");
  }, [properties.memory]);

  return (
    <div className="cardContainerIphone">
      <Link to={`/product?name=${properties.name.replace(/\s+/g, "")}}`}>
        <img src={properties.image}></img>
      </Link>
      <h4>{properties.name}</h4>
      {!properties.isAppleWatch && <p>{memory}</p>}
      <p id="price">€ {properties.price},- </p>
      <Link className="buttonLink">
        <button>Buy</button>
      </Link>
    </div>
  );
}

export default ProductCard;
