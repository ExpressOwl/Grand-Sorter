import React from "react";

const ScoreDisplay = ({ score }) => {
  return (
    <div className="mx-auto mb-10 flex h-[80px] w-[80px] items-center justify-center bg-[url(./assets/button.gif)] bg-contain bg-center bg-no-repeat text-center text-lg text-[#90c040]">
      Score: {score}
    </div>
  );
};

export default ScoreDisplay;
