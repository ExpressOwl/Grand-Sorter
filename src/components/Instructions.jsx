import React from "react";

const Instructions = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="rounded-lg bg-white p-4 shadow-lg">
        <h2 className="mb-4 text-lg font-bold">Instructions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Instructions;
