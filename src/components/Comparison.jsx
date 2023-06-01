import React, { useEffect, useState } from "react";
import Item from "./Item";
import { parsePrice } from "../utils";
import Instructions from "./Instructions";

const Comparison = ({
  item1,
  item2,
  price1,
  price2,
  onCorrectAnswer,
  onWrongAnswer,
  fetchData,
  disabled,
}) => {
  const [isButtonClicked, setisButtonClicked] = useState(false);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    }
  };

  const handleItemClick = (itemPriceA, itemPriceB) => {
    const intA = parsePrice(itemPriceA);
    const intB = parsePrice(itemPriceB);
    if (intA > intB) {
      console.log("correct");
      onCorrectAnswer();
    } else {
      console.log("wrong");
      onWrongAnswer();
    }
    setisButtonClicked(true);
    setIsDataFetched(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsDataFetched(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [fetchData]);

  return (
    <div className="grid h-auto text-center font-bold">
      <Item
        item={item1}
        onClick={() => handleItemClick(price1, price2)}
        disabled={disabled}
      />

      {isButtonClicked && (
        <p className={isDataFetched ? "visible" : "invisible"}>
          Price: {price1} gp
        </p>
      )}

      <div className="flex">
        <button
          className="mx-auto my-8 flex h-[126px] w-[152px] items-center justify-center bg-[url(./assets/button.gif)] bg-center bg-no-repeat text-center text-xl text-white"
          onClick={openModal}
        >
          How to play
        </button>

        {isModalOpen && <Instructions closeModal={closeModal} />}

        <button className="mx-auto my-8 flex h-[126px] w-[152px] items-center justify-center bg-[url(./assets/button.gif)] bg-center bg-no-repeat text-center text-5xl text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-player-play-filled"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
              stroke-width="0"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>

      <Item
        item={item2}
        onClick={() => handleItemClick(price2, price1)}
        disabled={disabled}
      />
      <div className="mb-4">
        {isButtonClicked && (
          <p className={isDataFetched ? "visible" : "invisible"}>
            Price: {price2} gp
          </p>
        )}
      </div>
    </div>
  );
};

export default Comparison;
