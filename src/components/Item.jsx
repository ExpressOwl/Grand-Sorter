import React from "react";

const Item = ({ item }) => {
  const iconUrlPrefix = "https://static.runelite.net/cache/item/icon/";

  return (
    <div className="">
      <h1>{item.name}</h1>
      <p className="mt-4">{item.examine}</p>
      <img className="justify-center mx-auto mt-8" src={`${iconUrlPrefix}${item.id}.png`} alt={item.name} />
    </div>
  );
};

export default Item;
