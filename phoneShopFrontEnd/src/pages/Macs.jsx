import SpecialHeader from "../components/Common-components/SpecialHeader";
import CategoryMacs from "../components/Common-components/CategoryMacs";
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/Skeleton/Skeleton";
import NotFoundPage from "../components/Common-components/NotFoundPage";
import { useEffect, useState } from "react";
import { useGetCategoryProductsQuery } from "../store/api";
import { useSelector } from "react-redux";

function Macs() {
  const productToken = "MacBook";
  const [page, setPage] = useState(0);
  const memory = useSelector((state) => state.memory.memory);
  const model = useSelector((state) => state.model.model);
  const price = useSelector((state) => state.price.price);
  const diagonal = useSelector((state) => state.diagonal.diagonal);

  const { data, isLoading } = useGetCategoryProductsQuery({
    page: page,
    memory: memory,
    model: model,
    price: price,
    diagonal: diagonal,
    token: productToken,
  });

  return (
    <>
      <SpecialHeader></SpecialHeader>
      <div className="mainPhoneContainer">
        <div className="phoneContainer">
          <div className="categoryIphones">
            <CategoryMacs></CategoryMacs>
          </div>
          <div className="iphoneSection">
            <div className={productToken}>
              {isLoading ? (
                [...new Array(6)].map((_, index) => <Skeleton></Skeleton>)
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

export default Macs;
