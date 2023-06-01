import React from "react";

const Instructions = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="rounded-md border-[20px] border-solid border-[#382418] bg-[#937d54]">
        <h2 className="mb-4 text-lg font-bold underline">How to play</h2>
        <p className="mx-4 mb-4 w-[300px] lg:w-96">
          Once you press the play button you will have 60 seconds to determine
          which item out of the two shown is most expensive. <br /> <br /> Each
          correct answer gives 1 point while an incorrect answer takes away a
          point, you cannot go less than 0.
        </p>
        <button onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-12 w-12 rounded-[50%] border-[2px] border-solid border-black text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Instructions;
