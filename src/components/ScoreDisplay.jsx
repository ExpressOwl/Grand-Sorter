import React from "react";

const ScoreDisplay = ({ score, highScore }) => {
  return (
    <>
      <div className="text-md mx-4 mb-10 flex h-[90px] w-[90px] items-center justify-center bg-[url(./assets/button.gif)] bg-contain bg-center bg-no-repeat text-center text-[#90c040]">
        Score: {score}
      </div>
      <div className="text-md mx-4 mb-10 flex h-[90px] w-[90px] items-center justify-center bg-[url(./assets/button.gif)] bg-contain bg-center bg-no-repeat text-center text-[#90c040]">
        High Score: {highScore}
      </div>

    </>
  );
};

export default ScoreDisplay;
