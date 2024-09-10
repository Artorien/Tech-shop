import Category from "../components/Common-components/Category";
import SpecialHeader from "../components/Common-components/SpecialHeader";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import Skeleton from "../components/Skeleton/Skeleton";

function Iphones() {
  const [data, setData] = useState([]);
  const url = "http://localhost:8080/product";
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
            setIsLoading(true);
            fetch(url + "/all")
            .then((res) => {
              return res.json();
            })
            .then((array) => {
              setData(array);
              setIsLoading(false);
            });
          }, []
  );

  return (
    <>
      <SpecialHeader></SpecialHeader>
      <div className="mainPhoneContainer">
        <div className="phoneContainer">
          <div className="categoryIphones">
            <Category></Category>
          </div>
          <div className="iphoneContainer">
            {isLoading ? [... new Array(6)].map((_, index) => <Skeleton></Skeleton>) : data != null ? data.map((obj) => <ProductCard key={obj.id} {...obj}></ProductCard>) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Iphones;
