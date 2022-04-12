import { useState } from "react";
import "./ToggleButton.Component.css";

const ToggleButton = ({ unitsSetter }: any) => {
  const [isToggled, setIsToggled] = useState<boolean>(true);

  const handleToggle = () => {
    setIsToggled(!isToggled);
    unitsSetter((previous: string) => {
      if (previous === "MIN") {
        return "HRS";
      } else {
        return "MIN";
      }
    });
  };

  const handleButtonClass = () => {
    const classBu = isToggled ? "button_min" : "button_hrs";
    return classBu;
  };

  return (
    <div className="toggle" onClick={handleToggle}>
      <div className={handleButtonClass()}></div>
    </div>
  );
};

export default ToggleButton;
