import { Link } from "react-router-dom";
import iphone from "./images/iphone.png";

function ProductCard(properties) {
    return (
        <div className="cardContainerIphone">
            <Link to={"/product"}>
                <img src={properties.image}></img>
            </Link>
            <h4>{properties.name}</h4>
            <p>{properties.memory} GB</p>
            <p id="price">{properties.price} €</p>
            <Link className="buttonLink"><button>Buy</button></Link>
        </div>
    )
}

export default ProductCard;