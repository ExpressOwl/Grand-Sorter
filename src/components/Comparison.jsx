import React, { useState } from "react";
import Item from "./Item";
import { parsePrice } from "../utils";

const Comparison = ({
  item1,
  item2,
  price1,
  price2,
  onCorrectAnswer,
  onWrongAnswer,
}) => {
  const [isButtonClicked, setisButtonClicked] = useState(false);

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
  };

  return (
    <div className="grid h-auto text-center font-bold">
      <Item item={item1} onClick={() => handleItemClick(price1, price2)} />
      {isButtonClicked && <h2>Price: {price1} gp</h2>}
      <div>
        <span className="mx-auto my-8 flex h-[126px] w-[152px] items-center justify-center bg-[url(./assets/button.gif)] bg-center bg-no-repeat text-center text-5xl text-white">
          VS
        </span>
      </div>
      <Item item={item2} onClick={() => handleItemClick(price2, price1)} />
      <div className="mb-4">
        {isButtonClicked && <h2>Price: {price2} gp</h2>}
      </div>
    </div>
  );
};

export default Comparison;
