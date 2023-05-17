import React from "react";

const Item = ({ item }) => {
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
