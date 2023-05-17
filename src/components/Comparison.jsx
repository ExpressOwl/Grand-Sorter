import React from "react";
import Item from "./Item";

const Comparison = ({ item1, item2 }) => {
  return (
    <main>
      <Item item={item1} />
      <span>VS</span>
      <Item item={item2} />
    </main>
  );
};

export default Comparison;
