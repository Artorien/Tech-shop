import SpecialHeader from "../components/Common-components/SpecialHeader";
import ProductCard from "../components/ProductCard";
import Skeleton from "../components/Skeleton/Skeleton";
import NotFoundPage from "../components/Common-components/NotFoundPage";
import { useState } from "react";
import CategoryWatch from "../components/Common-components/CategoryWatch";
import { useSelector } from "react-redux";
import { useGetCategoryProductsQuery } from "../store/api";

function Applewatch() {
  const productToken = "AppleWatch";
  const [page, setPage] = useState(0);
  const memory = useSelector((state) => state.memory.memory);
  const model = useSelector((state) => state.model.model);
  const price = useSelector((state) => state.price.price);
  const diagonal = useSelector((state) => state.diagonal.diagonal);

  const { data, isLoading } = useGetCategoryProductsQuery(
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
            <CategoryWatch></CategoryWatch>
          </div>
          <div className="iphoneSection">
            <div className="iphoneContainer">
              {isLoading ? (
                [...new Array(6)].map((_, index) => <Skeleton></Skeleton>)
              ) : data.length != 0 ? (
                data.content.map((obj) => (
                  <ProductCard
                    key={obj.id}
                    {...obj}
                    isAppleWatch={productToken == "AppleWatch"}
                  ></ProductCard>
                ))
              ) : (
                <NotFoundPage></NotFoundPage>
              )}
            </div>
            <div className="pagination">
              {!isLoading && data.totalPages !== 0
                ? [...new Array(data.totalPages)].map((_, index) => (
                    <button onClick={() => setPage(index)}>
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

export default Applewatch;
