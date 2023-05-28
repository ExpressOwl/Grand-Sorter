import React from "react";

const Item = ({ item, onClick }) => {
  const iconUrlPrefix = "https://static.runelite.net/cache/item/icon/";

  return (
    <>
      <button
        className="relative mt-6 mx-4 min-h-[126px] min-w-[152px] rounded-md border-[5px] border-solid border-[#382418] bg-black p-2 text-[#90c040]"
        onClick={onClick}
      >
        <h1 className="absolute left-0 top-[-20px] flex w-full min-w-[152px] justify-center whitespace-nowrap text-center text-xl text-white">
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

// bg-[url(./assets/button.gif)] bg-center bg-no-repeat
