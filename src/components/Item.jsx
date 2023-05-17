import React from "react";

const Item = ({ item }) => {
  // const baseURL = "https://prices.runescape.wiki/api/v1/osrs/mapping";
  const iconUrlPrefix = "https://static.runelite.net/cache/item/icon/";

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.examine}</p>
      <img src={`${iconUrlPrefix}${item.id}.png`} alt={item.name} />
    </div>
  );
};

export default Item;
