import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-[#32414A] flex justify-center">
      <Player
        src="src/assets/pC3X6uP0R9.json"
        className="player"
        loop
        autoplay
        style={{ width: "800px", height: "auto" }}
      />
    </div>
  );
};

export default NotFound;
