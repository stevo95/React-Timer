import React, { useEffect, useState } from "react";
import "./Clock.Component.css";
import ButtonUp from "./ButtonUp.Component";
import ButtonDown from "./ButtonDown.Component";
import ClockIcon from "./ClockIcon.Component";
import ToggleButton from "./ToggleButton.Component";
import SliderScale from "./SliderScale.Component";

const Clock = (): React.ReactElement => {
  const [isPwrOn, setIsPwrOn] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  const [units, setUnits] = useState<string>("MIN");
  let timer: any;

  useEffect(() => {
    let interval: number;

    if (units === "MIN") {
      interval = 1000 * 60;
    } else {
      interval = 1000 * 3600;
    }

    if (isPwrOn && time > 0) {
      const timer = setTimeout(() => {
        calculateTime();
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      return () => clearTimeout(timer);
    }
  }, [isPwrOn, units, time]);

  const calculateTime = (): void => {
    if (time <= 0) return;
    setTime((previous: number) => {
      const value = previous - 1;
      return value;
    });
  };

  const handlePowerButtonClick = (): void => {
    if (isPwrOn) {
      clearInterval(timer);
      timer = null;
    }
    setIsPwrOn(!isPwrOn);
  };

  const renderClockIcon = (): React.ReactElement => {
    const iconClass = isPwrOn ? "large" : "hidden";
    return <ClockIcon sizeClass={iconClass} />;
  };

  const handleClockDisplayClass = (): string => {
    return isPwrOn ? "clock_display_right_on" : "clock_display_right_off";
  };

  const handleTimeChangeWithButton = (operation: string): void => {
    if (operation === "up") {
      setTime((previous: number) => {
        return previous + 1;
      });
    }
    if (operation === "down" && time > 0) {
      setTime((previous: number) => {
        return previous - 1;
      });
    }
  };

  const handleTimeChangeWithSlider = (
    event: React.FormEvent<HTMLDivElement>
  ): void => {
    const value = (event.target as HTMLInputElement).value;
    setTime(parseInt(value));
  };

  const handlePwrLightClass = (): string => {
    return isPwrOn ? "light_on" : "light_off";
  };

  return (
    <div className="Clock_container">
      <div className="clock_topPart">
        <div className="clock_display">
          <div className="clock_display_left">{renderClockIcon()}</div>
          <div className={handleClockDisplayClass()}>
            <div className="clock_display_time">
              {isPwrOn ? time : "000 000"}
            </div>
            <div className="clock_display_units">{isPwrOn ? units : ""}</div>
          </div>
        </div>
        <div className="clock_buttons">
          <div className="clock_buttons_top">
            <div
              className="clock_buttonSmall"
              onClick={() => handleTimeChangeWithButton("up")}
            >
              <ButtonUp />
            </div>
            <div
              className="clock_buttonSmall"
              onClick={() => handleTimeChangeWithButton("down")}
            >
              <ButtonDown />
            </div>
          </div>
          <div className="clock_buttons_bottom">
            <div className="clock_buttonLarge" onClick={handlePowerButtonClick}>
              <div className={handlePwrLightClass()} />
              PWR
            </div>
          </div>
        </div>
      </div>
      <div className="clock_bottomPart">
        <div className="clock_switchContainer">
          MIN
          <ToggleButton unitsSetter={setUnits} units={units} />
          HRS
        </div>
        <div className="clock_sliderContainer">
          <div className="clock_sliderContainer_slider">
            <input
              type="range"
              min="1"
              max="1000"
              step="1"
              value={time}
              className="slider"
              id="myRange"
              onChange={handleTimeChangeWithSlider}
            />
          </div>
          <div className="clock_sliderContainer_slider_scale">
            <SliderScale />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
