import React from "react";
import Item from "./Item";
import { parsePrice } from "../utils";

const Comparison = ({ item1, item2, price1, price2 }) => {
  const handleItemClick = (itemPriceA, itemPriceB) => {
    const intA = parsePrice(itemPriceA);
    const intB = parsePrice(itemPriceB);
    if (intA > intB) {
      console.log("correct");
    } else {
      console.log("wrong");
    }
  };

  return (
    <div className="text-center font-bold text-black p-4">
      <Item item={item1} onClick={() => handleItemClick(price1, price2)} />
      <h2>Price: {price1} gp</h2>
      <span className="mx-auto my-8 flex min-h-[126px] min-w-[152px] items-center justify-center bg-[url(./assets/button.gif)] bg-center bg-no-repeat text-center text-5xl">
        VS
      </span>
      <Item item={item2} onClick={() => handleItemClick(price2, price1)} />
      <h2>Price: {price2} gp</h2>
    </div>
  );
};

export default Comparison;
