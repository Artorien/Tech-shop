import { createContext, useState, useEffect } from "react";
import SpecialHeader from "../components/Common-components/SpecialHeader";
import CategoryIpads from "../components/Common-components/CategoryIpads";
import Skeleton from "../components/Skeleton/Skeleton";
import ProductCard from "../components/ProductCard";
import NotFoundPage from "../components/Common-components/NotFoundPage";
import { useGetCategoryProductsQuery } from "../store/api";
import { useSelector } from "react-redux";

function Ipads() {
  const productToken = "iPad";
  const [page, setPage] = useState(0);
  const memory = useSelector((state) => state.memory.memory);
  const model = useSelector((state) => state.model.model);
  const price = useSelector((state) => state.price.price);
  const diagonal = useSelector((state) => state.diagonal.diagonal);

  const { data, error, isLoading } = useGetCategoryProductsQuery(
    {
      page: page,
      token: productToken,
      memory: memory,
      diagonal: diagonal,
      model: model,
      price: price,
    }
    // { refetchOnMountOrArgChange: true }
  );
  if (!isLoading) {
    console.log("Data content: " + data.content);
    console.log("Data: " + data);
    console.log(data.content.length == 0);
  }

  return (
    <>
      <SpecialHeader></SpecialHeader>
      <div className="mainPhoneContainer">
        <div className="phoneContainer">
          <div className="categoryIphones">
            <CategoryIpads></CategoryIpads>
          </div>
          <div className="iphoneSection">
            <div className="iphoneContainer">
              {isLoading ? (
                [...new Array(6)].map((_) => <Skeleton></Skeleton>)
              ) : data.content.length != 0 ? (
                data.content.map((obj) => (
                  <ProductCard
                    key={obj.id}
                    {...obj}
                    isAppleWatch={productToken == "Applewatch"}
                  ></ProductCard>
                ))
              ) : (
                <NotFoundPage></NotFoundPage>
              )}
            </div>
            <div className="pagination">
              {!isLoading && data.totalPages !== 0
                ? [...new Array(data.totalPages)].map((_, index) => (
                    <button onClick={() => setPage(index)}>{index + 1}</button>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ipads;
