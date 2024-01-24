import { useAppContext } from "../appContext";
import DialContainer from "./DialContainer";
import { useEffect, useState } from "react";
import CandyDial from "./Dials/CandyDial";
import { Theme } from "../appContext";
import TomatoDial from "./Dials/TomatoDial";

{
  /*TODO: add fade out when mouse is not moving for 5 seconds*/
}

const Timer = () => {
  const { theme } = useAppContext();

  const [remainingSeconds, setRemainingSeconds] = useState(5);
  const [isRunning, setRunning] = useState(false);

  // maybe move those into dials
  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor(remainingSeconds / 60) % 60;
  const seconds = remainingSeconds % 60;

  const [intervalId, setIntervalId] = useState<number>(0);

  const setHours = (value: number) => {
    if (hours < 1 && value === -1) return;
    setRemainingSeconds((prev) => prev + value * 3600);
  };

  const setMinutes = (value: number) => {
    if (hours < 1 && minutes < 1 && value === -1) return;
    setRemainingSeconds((prev) => prev + value * 60);
  };

  const setSeconds = (value: number) => {
    if (minutes < 1 && seconds < 1 && value === -1) return;
    setRemainingSeconds((prev) => prev + (value % 60));
  };

  const updateTimer = () => {
    setRemainingSeconds((prev) => {
      if (prev <= 1) {
        resetTimer();
        return 0;
      }
      return prev - 1;
    });
  };

  useEffect(() => {
    isRunning
      ? setIntervalId(setInterval(updateTimer, 1000))
      : clearInterval(intervalId);
  }, [isRunning]);

  const startStop = () => {
    if (remainingSeconds <= 0) return;
    setRunning((prev) => !prev);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setRemainingSeconds(0);
    setRunning(false);
  };

  return (
    <section className="w-[680px] h-[590px] bg-white/30 border-[1px] p-8 border-white rounded-xl">
      <section className="w-full h-full flex flex-col items-center justify-between text-[64px] font-koulen">
        <h4>Time Left</h4>
        <div className="bg-neutral-100 rounded-lg w-full h-full flex flex-col items-center ">
          {/* timer */}

          {theme === Theme.Candy && (
            <CandyDial
              hours={hours}
              minutes={minutes}
              seconds={seconds}
              isRunning={isRunning}
              setHours={setHours}
              setMinutes={setMinutes}
              setSeconds={setSeconds}
            />
          )}
          {theme === Theme.Tomato && (
            <TomatoDial remainingSeconds={remainingSeconds} />
          )}
          {/* control buttons */}
          <div className="p-4 gap-4 w-full flex items-center justify-center ">
            <button
              onClick={resetTimer}
              className={`rounded-lg w-52 ${
                remainingSeconds < 1 && !isRunning
                  ? "opacity-[60%] pointer-events-none"
                  : ""
              } bg-danger text-[45px]`}
            >
              {isRunning ? "Stop" : "Reset"}
            </button>

            <button
              onClick={startStop}
              className={`rounded-lg w-52 ${
                isRunning ? "bg-primary" : "bg-accent"
              } text-[45px]`}
            >
              {isRunning ? "Pause" : "Start"}
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Timer;
