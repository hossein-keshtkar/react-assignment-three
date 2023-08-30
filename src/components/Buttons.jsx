import React, { useRef, useState } from "react";

import "../styles/Buttons.css";
import RowOfBtns from "./RowOfBtns";

const Buttons = () => {
  const data = {
    soundLinks: [
      [
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      ],
      [
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      ],
      [
        "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      ],
    ],
    instruments: [
      ["Heater 1", "Heater 2", "Heater 3"],
      ["Heater 4", "Clap", "Open HH"],
      ["Kick n' Hat", "Kick", "Closed HH"],
    ],
    keys: [
      ["Q", "W", "E"],
      ["A", "S", "D"],
      ["Z", "X", "C"],
    ],
  };

  return (
    <div className="buttons">
      <RowOfBtns data={data} rowNum={0} />
      <RowOfBtns data={data} rowNum={1} />
      <RowOfBtns data={data} rowNum={2} />
    </div>
  );
};

export default Buttons;
