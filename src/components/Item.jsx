import React from "react";

const Item = ({ item, onClick }) => {
  const iconUrlPrefix = "https://static.runelite.net/cache/item/icon/";

  return (
    <button className="bg-red-500" onClick={onClick}>
      <h1>{item.name}</h1>
      <p className="mt-4">{item.examine}</p>
      <img
        className="mx-auto mt-8 justify-center"
        src={`${iconUrlPrefix}${item.id}.png`}
        alt={item.name}
      />
    </button>
  );
};

export default Item;
