import React from "react";

const Mute = ({ isMuted, onToggleMute }) => {
  return (
    <button
      className="text-md mx-4 mb-10 flex h-[90px] w-[90px] items-center justify-center bg-[url(./assets/button.gif)] bg-contain bg-center bg-no-repeat text-center text-[#90c040]"
      onClick={onToggleMute}
    >
      {isMuted ? "Unmute" : "Mute"}
    </button>
  );
};

export default Mute;
