import React, { useEffect, useState } from "react";
import Item from "./Item";
import { parsePrice } from "../utils";

const Comparison = ({
  item1,
  item2,
  price1,
  price2,
  onCorrectAnswer,
  onWrongAnswer,
  fetchData,
  disabled,
}) => {
  const [isButtonClicked, setisButtonClicked] = useState(false);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const handleItemClick = (itemPriceA, itemPriceB) => {
    const intA = parsePrice(itemPriceA);
    const intB = parsePrice(itemPriceB);
    if (intA > intB) {
      console.log("correct");
      onCorrectAnswer();
    } else {
      console.log("wrong");
      onWrongAnswer();
    }
    setisButtonClicked(true);
    setIsDataFetched(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsDataFetched(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [fetchData]);

  return (
    <div className="grid h-auto text-center font-bold">
      <Item
        item={item1}
        onClick={() => handleItemClick(price1, price2)}
        disabled={disabled}
      />

      {isButtonClicked && (
        <p className={isDataFetched ? "visible" : "invisible"}>
          Price: {price1} gp
        </p>
      )}

      <div>
        <span className="mx-auto my-8 flex h-[126px] w-[152px] cursor-default items-center justify-center bg-[url(./assets/button.gif)] bg-center bg-no-repeat text-center text-5xl text-white">
          VS
        </span>
      </div>
      <Item
        item={item2}
        onClick={() => handleItemClick(price2, price1)}
        disabled={disabled}
      />
      <div className="mb-4">
        {isButtonClicked && (
          <p className={isDataFetched ? "visible" : "invisible"}>
            Price: {price2} gp
          </p>
        )}
      </div>
    </div>
  );
};

export default Comparison;
