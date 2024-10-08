import { useContext, useEffect, useState } from "react";
import Category from "../components/Common-components/CategoryIphones";
import SpecialHeader from "../components/Common-components/SpecialHeader";
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/Skeleton/Skeleton";
import NotFoundPage from "../components/Common-components/NotFoundPage";
import { useSelector } from "react-redux";
import {
  useGetAllProductsQuery,
  useGetCategoryProductsQuery,
} from "../store/api";

function Iphones() {
  const productToken = "iPhone";
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
    },
    { refetchOnMountOrArgChange: true }
  );

  return (
    <>
      <SpecialHeader></SpecialHeader>
      <div className="mainPhoneContainer">
        <div className="phoneContainer">
          <div className="categoryIphones">
            <Category></Category>
          </div>
          <div className="iphoneSection">
            <div className="iphoneContainer">
              {isLoading ? (
                [...new Array(6)].map((_, index) => (
                  <Skeleton key={index}></Skeleton>
                ))
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
                ? [...new Array(data.totalPages)].map((obj, index) => (
                    <button key={index} onClick={() => setPage(index)}>
                      {index + 1}
                    </button>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Iphones;
