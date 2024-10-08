import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeDiagonal,
  removeMemory,
  removeModel,
  setModel,
  setMemory,
  setPrice,
  setDiagonal,
} from "../../store/SpecificationSlice";

function CategoryMacs() {
  const dispatch = useDispatch();

  const [modelCLick, setModelClick] = useState(false);
  const [memoryClick, memoryHeaderClick] = useState(false);
  const [sortClick, setSortCLick] = useState(false);
  const [diagonalClick, setDiagonalClick] = useState(false);
  const [cheked, setCheked] = useState(null);

  const handleModel = (event) => {
    if (event.target.checked) {
      dispatch(setModel(event.target.value));
    } else {
      dispatch(removeModel(event.target.value));
    }
  };

  const handleMemory = (event) => {
    if (event.target.checked) {
      dispatch(setMemory(event.target.value));
    } else {
      dispatch(removeMemory(event.target.value));
    }
  };

  const handlePrice = (event) => {
    dispatch(setPrice(event.target.value));
  };

  const handleDiagonal = (event) => {
    if (event.target.checked) {
      dispatch(setDiagonal(event.target.value));
    } else {
      dispatch(removeDiagonal(event.target.value));
    }
  };

  return (
    <div className="parent">
      <div className="item">
        <div className="item-header" onClick={() => setModelClick(!modelCLick)}>
          <h3>Model</h3>
          {!modelCLick && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-up"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          )}
          {modelCLick && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          )}
        </div>
        {modelCLick && (
          <div className="categoryChecks">
            <div className="categoryChecksCildren">
              <input
                type="checkBox"
                name="macair"
                value="MacBookAir"
                onChange={handleModel}
              />
              <label htmlFor="macair">MacBook Air</label>
            </div>
            <div className="categoryChecksCildren">
              <input
                type="checkBox"
                name="macpro"
                value="MacBookPro"
                onChange={handleModel}
              />
              <label htmlFor="macpro">MacBook Pro</label>
            </div>
          </div>
        )}
      </div>
      <div className="item">
        <div
          className="item-header"
          onClick={() => memoryHeaderClick(!memoryClick)}
        >
          <h3>Memory</h3>
          {!memoryClick && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-up"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          )}
          {memoryClick && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          )}
        </div>
        {memoryClick && (
          <div className="categoryChecks">
            <div className="categoryChecksCildren">
              <input
                type="checkBox"
                name="normalMemory"
                value="256"
                onChange={handleMemory}
              />
              <label htmlFor="normalMemory">256 GB</label>
            </div>
            <div className="categoryChecksCildren">
              <input
                type="checkBox"
                name="largeMemory"
                value="512"
                onChange={handleMemory}
              />
              <label htmlFor="largeMemory">512 GB</label>
            </div>
            <div className="categoryChecksCildren">
              <input
                type="checkBox"
                name="superLarge"
                value="1024"
                onChange={handleMemory}
              />
              <label htmlFor="superLarge">1 TB</label>
            </div>
          </div>
        )}
      </div>
      <div className="item">
        <div className="item-header" onClick={() => setSortCLick(!sortClick)}>
          <h3>Sort</h3>
          {!sortClick && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-up"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          )}
          {sortClick && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          )}
        </div>
        {sortClick && (
          <div className="categoryChecks">
            <div className="categoryChecksCildren">
              <input
                type="checkBox"
                name="highLow"
                value="desc"
                checked={cheked === "desc"}
                onChange={handlePrice}
              />
              <label htmlFor="highLow">High-Low</label>
            </div>
            <div className="categoryChecksCildren">
              <input
                type="checkBox"
                name="lowHigh"
                value="asc"
                checked={cheked === "asc"}
                onChange={handlePrice}
              />
              <label htmlFor="lowHigh">Low-High</label>
            </div>
          </div>
        )}
      </div>
      <div className="item">
        <div
          className="item-header"
          onClick={() => setDiagonalClick(!diagonalClick)}
        >
          <h3>Diagonal</h3>
          {!diagonalClick && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-up"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          )}
          {diagonalClick && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          )}
        </div>
        {diagonalClick && (
          <div className="categoryChecks">
            <div className="categoryChecksCildren">
              <input
                type="checkBox"
                name="13inch"
                value="13.6"
                onChange={handleDiagonal}
              />
              <label htmlFor="13inch">13.6 inch</label>
            </div>
            <div className="categoryChecksCildren">
              <input
                type="checkBox"
                name="14"
                value="14"
                onChange={handleDiagonal}
              />
              <label htmlFor="14">14 inch</label>
            </div>
            <div className="categoryChecksCildren">
              <input
                type="checkBox"
                name="16"
                value="16"
                onChange={handleDiagonal}
              />
              <label htmlFor="16">16 inch</label>
            </div>
            <div className="categoryChecksCildren">
              <input
                type="checkBox"
                name="24"
                value="24"
                onChange={handleDiagonal}
              />
              <label htmlFor="24">24 inch</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryMacs;
