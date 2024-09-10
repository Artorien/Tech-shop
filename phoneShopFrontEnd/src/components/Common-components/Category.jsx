import { useState } from "react"

function Category() {
    const [modelCLick, setModelClick] = useState(false);
    const [memoryClick, memoryHeaderClick] = useState(false);
    const [sortClick, setSortCLick] = useState(false);
    const [cheked, setCheked] = useState(null);

    const handleCheck = (event) => {
        setCheked(event.target.value);
    }

    return (
        <div className="parent">
            <div className="item">
                <div className="item-header" onClick={() => setModelClick(!modelCLick)}>
                    <h3>Model</h3>
                    {!modelCLick && (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>)}
                    {modelCLick && (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>)}
                </div>
                {modelCLick && (
                    <div className="categoryChecks">
                        <div className="categoryChecksCildren">
                            <input type="checkBox" name="promax" />
                            <label htmlFor="promax">15 Pro Max</label>
                        </div>
                        <div className="categoryChecksCildren">
                            <input type="checkBox" name="pro" />
                            <label htmlFor="pro">15 Pro</label>
                        </div>
                        <div className="categoryChecksCildren">
                            <input type="checkBox" name="plus" />
                            <label htmlFor="modelType">15 Plus</label>
                        </div>
                        <div className="categoryChecksCildren">
                            <input type="checkBox" name="regular" />
                            <label htmlFor="modelType">15</label>
                        </div>
                    </div>
                )}
            </div>
            <div className="item">
                <div className="item-header" onClick={() => memoryHeaderClick(!memoryClick)}>
                    <h3>Memory</h3>
                    {!memoryClick && (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>)}
                    {memoryClick && (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>)}
                </div>
                {memoryClick && (
                    <div className="categoryChecks">
                        <div className="categoryChecksCildren">
                            <input type="checkBox" name="smallMemory" />
                            <label htmlFor="smallMemory">128 GB</label>
                        </div>
                        <div className="categoryChecksCildren">
                            <input type="checkBox" name="normalMemory" />
                            <label htmlFor="normalMemory">256 GB</label>
                        </div>
                        <div className="categoryChecksCildren">
                            <input type="checkBox" name="largeMemory" />
                            <label htmlFor="largeMemory">512 GB</label>
                        </div>
                        <div className="categoryChecksCildren">
                            <input type="checkBox" name="superLarge" />
                            <label htmlFor="superLarge">1 TB</label>
                        </div>
                    </div>
                )}
            </div>
            <div className="item">
                <div className="item-header" onClick={() => setSortCLick(!sortClick)}>
                    <h3>Sort</h3>
                    {!sortClick && (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>)}
                    {sortClick && (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>)}
                </div>
                {sortClick && (
                    <div className="categoryChecks">
                        <div className="categoryChecksCildren">
                            <input type="checkBox" name="highLow" value="highlow" checked={cheked === "highlow"} onChange={(event) => handleCheck(event)} />
                            <label htmlFor="highLow">High-Low</label>
                        </div>
                        <div className="categoryChecksCildren">
                            <input type="checkBox" name="lowHigh" value="lowhigh" checked={cheked === "lowhigh"} onChange={(event) => handleCheck(event)} />
                            <label htmlFor="lowHigh">Low-High</label>
                        </div>
                    </div>
                )}
            </div>
        </div>  
    )
}

export default Category;