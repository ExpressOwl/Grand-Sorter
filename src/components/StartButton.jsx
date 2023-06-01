import React from "react";

const StartButton = ({ startTimer }) => {
  return (
    <button
      className="mx-auto my-8 flex h-[126px] w-[152px] items-center justify-center bg-[url(./assets/button.gif)] bg-center bg-no-repeat text-center text-5xl text-white"
      onClick={startTimer}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke="#2c3e50"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default StartButton;
