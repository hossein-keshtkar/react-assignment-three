import React, { useState } from "react";

import "../styles/Volume.css";
import { VOLUME } from "../constants/keywords";

const Volume = ({ state: { volume }, dispatch }) => {
  const [rangeValue, setRengeValue] = useState(volume * 100);

  const changeHandler = (e) => {
    const value = e.target.value;

    setRengeValue(value);

    dispatch({ type: VOLUME, payload: rangeValue / 100 });
  };

  return (
    <div className="volume">
      <label htmlFor="range">Volume</label>
      <input
        onChange={changeHandler}
        value={rangeValue}
        type="range"
        name="volume"
        id="range"
        max={100}
        min={0}
      />
    </div>
  );
};

export default Volume;