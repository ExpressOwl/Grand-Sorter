import React from "react";

const Item = ({ item, onClick, }) => {
  const iconUrlPrefix = "https://static.runelite.net/cache/item/icon/";

  return (
    <>
      <button
        className="relative mx-4 mt-6 min-h-[126px] min-w-[152px] rounded-md border-[4px] border-solid border-[#382418] bg-black p-2 text-[#90c040]"
        onClick={onClick}
      >
        <h1 className="absolute left-0 top-[-18px] flex w-full min-w-[152px] justify-center whitespace-nowrap text-center text-lg text-[#f5f5f5]">
          {item.name}
        </h1>
        <p className="mt-2">{item.examine}</p>
        <img
          className="mx-auto mt-2 justify-center"
          src={`${iconUrlPrefix}${item.id}.png`}
          alt={item.name}
        />
      </button>
    </>
  );
};

export default Item;