import React, { useEffect, useState } from "react";
import Item from "./Item";
import { parsePrice } from "../utils";
import Instructions from "./Instructions";
import StartButton from "./StartButton";

const Comparison = ({
  item1,
  item2,
  price1,
  price2,
  onCorrectAnswer,
  onWrongAnswer,
  fetchData,
  disabled,
  setScore,
}) => {
  const [isButtonClicked, setisButtonClicked] = useState(false);
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const [startButtonClicked, setStartButtonClicked] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
    setStartButtonClicked(true);
  };

  useEffect(() => {
    let timerId;

    if (isRunning) {
      timerId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    if (countdown === 0) {
      clearInterval(timerId);
      setIsRunning(false);
      setStartButtonClicked(false);
      setCountdown(60);
      setScore(0);
    }

    return () => clearInterval(timerId);
  }, [isRunning, countdown]);

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
      {startButtonClicked && (
        <Item
          item={item1}
          onClick={() => handleItemClick(price1, price2)}
          disabled={disabled}
        />
      )}

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

        {isRunning ? (
          <button className="mx-auto my-8 flex h-[126px] w-[152px] items-center justify-center bg-[url(./assets/button.gif)] bg-center bg-no-repeat text-center text-5xl text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="animate-spin"
              viewBox="0 0 16 16"
            >
              <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
              <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
              <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
            </svg>
            <span className="ml-4 font-mono text-4xl">{countdown}</span>
          </button>
        ) : (
          <StartButton startTimer={startTimer} />
        )}
      </div>

      {startButtonClicked && (
        <Item
          item={item2}
          onClick={() => handleItemClick(price2, price1)}
          disabled={disabled}
        />
      )}

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
