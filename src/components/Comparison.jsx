import React from "react";
import Item from "./Item";

const Comparison = ({ item1, item2, price1, price2 }) => {
  return (
    <div className="text-white text-center">
      <Item item={item1} />
      <h2>Price: {price1} gp</h2>
      <span>VS</span>
      <Item item={item2} />
      <h2>Price: {price2} gp</h2>
    </div>
  );
};

export default Comparison;
