import React from "react";

const Item = ({ item, onClick }) => {
  const iconUrlPrefix = "https://static.runelite.net/cache/item/icon/";

  return (
    <button
      className="min-h-[126px] min-w-[152px] bg-[url(./assets/button.gif)] bg-center bg-no-repeat"
      onClick={onClick}
    >
      <h1>{item.name}</h1>
      <p className="mt-2">{item.examine}</p>
      <img
        className="mx-auto mt-2 justify-center"
        src={`${iconUrlPrefix}${item.id}.png`}
        alt={item.name}
      />
    </button>
  );
};

export default Item;
