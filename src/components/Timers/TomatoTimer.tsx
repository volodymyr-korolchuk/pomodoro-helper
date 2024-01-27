import { useTimerContext } from "../../TimerContext";
import useTrigonometry from "../../hooks/useTrigonometry";
import ResetButton from "../Buttons/ResetButton";
import StartStopButton from "../Buttons/StartStopButton";
import TimerTile from "../TimerTile/TimerTile";

import { useEffect } from "react";
// @ts-ignore
import { dials } from "../../constants";

const TomatoTimer = () => {
  const dimensions = {
    width: window.innerWidth < 600 ? 340 : 570,
    height: window.innerWidth < 600 ? 340 : 570,
  };

  useEffect(() => {
    console.log(dials.Tomato);
  }, []);

  let CIRCLE_RADIUS = dimensions.width / 2;
  let CIRCLE_CENTER_X = dimensions.width / 2;
  let CIRCLE_CENTER_Y = dimensions.height / 2;

  const {
    secondsLeft,
    hours,
    minutes,
    seconds,
    isRunning,
    initialTime,
    updateHours,
    updateMinutes,
    updateSeconds,
    startStop,
    resetTimer,
  } = useTimerContext();

  const { startX, startY, endX, endY, largeArcFlag } =
    calculateCircleCoordinates(
      secondsLeft,
      initialTime,
      CIRCLE_CENTER_X,
      CIRCLE_CENTER_Y,
      CIRCLE_RADIUS
    );

  const pathData = `
  M ${CIRCLE_CENTER_X} ${CIRCLE_CENTER_Y}
  L ${startX} ${startY}
  A ${CIRCLE_RADIUS} ${CIRCLE_RADIUS} 0 ${largeArcFlag} 1 ${endX} ${endY}
  Z `;

  return (
    <div className="flex-1 flex items-center justify-center w-full text-[100px]">
      <div
        className={`sm:w-[570px] sm:h-[570px] w-[340px] h-[340px] flex flex-col items-center justify-center z-10 rounded-full  ${
          isRunning ? "" : "backdrop-blur-xl bg-neutral-200/10"
        } transition-all duration-300 ease-in-out`}
      >
        <div className={`flex items-center ${isRunning ? "opacity-0" : ""}`}>
          <TimerTile
            value={hours}
            valueSetter={updateHours}
            isRunning={isRunning}
          />
          <span className="text-center pb-5">:</span>

          <TimerTile
            value={minutes}
            valueSetter={updateMinutes}
            isRunning={isRunning}
          />
          <span className="text-center pb-5">:</span>

          <TimerTile
            value={seconds}
            valueSetter={updateSeconds}
            isRunning={isRunning}
          />
        </div>
      </div>
      <div className="absolute sm:w-[570px] sm:bottom-3 bottom-1 z-50 p-4 gap-4 w-full flex items-center justify-center">
        <ResetButton
          secondsLeft={secondsLeft}
          isRunning={isRunning}
          resetTimer={resetTimer}
        />
        <StartStopButton
          secondsLeft={secondsLeft}
          isRunning={isRunning}
          startStop={startStop}
        />
      </div>

      <div className="w-full absolute flex items-center justify-center">
        <svg
          className="absolute"
          width={dimensions.width}
          height={dimensions.height}
          xmlns="http://www.w3.org/2000/svg"
        >
          <image href={dials.TomatoDial} className={`sm:w-[570px] w-[340px]`} />
          <circle
            cx={CIRCLE_CENTER_X}
            cy={CIRCLE_CENTER_Y}
            r={CIRCLE_RADIUS}
            fill="transparent"
          />

          <path d={pathData} fill="rgb(252 165 165)" />
        </svg>
      </div>
    </div>
  );
};

const calculateCircleCoordinates = (
  secondsLeft: number,
  initialTime: number,
  radius: number,
  centerX: number,
  centerY: number
) => {
  const { to360, toRadians, getArcFlag } = useTrigonometry();

  const convertedValue = -1 * to360(secondsLeft, initialTime);
  const startAngle = -90;
  const endAngle =
    convertedValue < -180 ? convertedValue - 90 : convertedValue + 270;

  const startRadians = toRadians(startAngle);
  const endRadians = toRadians(endAngle);

  const startX = centerX + radius * Math.cos(startRadians);
  const startY = centerY + radius * Math.sin(startRadians);
  const endX = centerX + radius * Math.cos(endRadians);
  const endY = centerY + radius * Math.sin(endRadians);

  const largeArcFlag = getArcFlag(startAngle, endAngle);

  return { startX, startY, endX, endY, largeArcFlag };
};

export default TomatoTimer;
