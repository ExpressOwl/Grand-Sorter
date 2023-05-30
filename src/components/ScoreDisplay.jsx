import React from "react";

const ScoreDisplay = ({ score }) => {
  return (
    <div className="mx-4 mb-10 flex h-[90px] w-[90px] items-center justify-center bg-[url(./assets/button.gif)] bg-contain bg-center bg-no-repeat text-center text-md text-[#90c040]">
      Score: {score}
    </div>
  );
};

export default ScoreDisplay;
