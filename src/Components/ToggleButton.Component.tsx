import React, { Dispatch, useState } from "react";
import "./ToggleButton.Component.css";

interface ToggleButtonProps {
  unitsSetter: Dispatch<string>;
  units: string;
}

const ToggleButton = ({
  unitsSetter,
  units,
}: ToggleButtonProps): React.ReactElement => {
  const [isToggled, setIsToggled] = useState<boolean>(true);

  const handleToggle = (): void => {
    setIsToggled(!isToggled);
    if (units === "MIN") {
      unitsSetter("HRS");
    } else {
      unitsSetter("MIN");
    }
  };

  const handleButtonClass = (): string => {
    return isToggled ? "button_min" : "button_hrs";
  };

  return (
    <div className="toggle" onClick={handleToggle}>
      <div className={handleButtonClass()}></div>
    </div>
  );
};

export default ToggleButton;
