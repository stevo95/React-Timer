import React from "react";
import "./SliderScale.Component.css";

const SliderScale = (): React.ReactElement => {
  const renderLines = () => {
    let arraySize = window.innerWidth <= 600 ? 51 : 101;

    const array = new Array(arraySize).fill(0);
    return array.map((el, idx) => {
      if (idx === 0 || idx % 5 === 0) {
        return <div className="line_large" key={idx}></div>;
      } else {
        return <div className="line_small" key={idx}></div>;
      }
    });
  };

  return <div className="scale_container">{renderLines()}</div>;
};

export default SliderScale;
