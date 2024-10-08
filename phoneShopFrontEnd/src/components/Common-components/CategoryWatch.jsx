import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeDiagonal,
  removeModel,
  setModel,
  setPrice,
  setDiagonal,
} from "../../store/SpecificationSlice";

function CategoryWatch() {
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
                name="watch9"
                value="AppleWatch9"
                onChange={handleModel}
              />
              <label htmlFor="watch9">AppleWatch 9</label>
            </div>
            <div className="categoryChecksCildren">
              <input
                type="checkBox"
                name="watchUltra"
                value="AppleWatchUltra"
                onChange={handleModel}
              />
              <label htmlFor="watchUltra">AppleWatch Ultra</label>
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
                name="45"
                value="45"
                onChange={handleDiagonal}
              />
              <label htmlFor="45">45 mm</label>
            </div>
            <div className="categoryChecksCildren">
              <input
                type="checkBox"
                name="49"
                value="49"
                onChange={handleDiagonal}
              />
              <label htmlFor="49">49 mm</label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoryWatch;
