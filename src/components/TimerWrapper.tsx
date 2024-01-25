import { useAppContext } from "../appContext";
import { useEffect, useState } from "react";
import CandyTimer from "./Timers/CandyTimer";
import { Theme } from "../appContext";
import TomatoTimer from "./Timers/TomatoTimer";
import useTimeFunctions from "../hooks/useTimeFunctions";

{
  /*TODO: add fade out when mouse is not moving for 5 seconds*/
}

const TimerWrapper = () => {
  const { theme } = useAppContext();
  const {
    SECONDS_IN_HOUR,
    SECONDS_IN_MINUTE,
    getHoursPart,
    getMinutesPart,
    getSecondsPart,
  } = useTimeFunctions();

  const [secondsLeft, setSecondsLeft] = useState(5);
  const [isRunning, setRunning] = useState(false);

  const hours = getHoursPart(secondsLeft);
  const minutes = getMinutesPart(secondsLeft);
  const seconds = getSecondsPart(secondsLeft);

  const [initialTime, setInitialTime] = useState<number>(secondsLeft);

  const [intervalId, setIntervalId] = useState<number>(0);

  function updateHours(value: number) {
    if (hours < 1 && value === -1) {
      return;
    }
    setSecondsLeft((prev) => {
      const newValue = prev + value * SECONDS_IN_HOUR;
      setInitialTime(newValue);
      return newValue;
    });
  }

  function updateMinutes(value: number) {
    if (hours < 1 && minutes < 1 && value === -1) {
      return;
    }
    setSecondsLeft((prev) => {
      const newValue = prev + value * SECONDS_IN_MINUTE;
      setInitialTime(newValue);
      return newValue;
    });
  }

  function updateSeconds(value: number) {
    if (minutes < 1 && seconds < 1 && value === -1) {
      return;
    }
    setSecondsLeft((prev) => {
      const newValue = prev + (value % SECONDS_IN_MINUTE);
      setInitialTime(newValue);
      return newValue;
    });
  }

  function updateTimer() {
    setSecondsLeft((prev) => {
      if (prev <= 1) {
        resetTimer();
        return 0;
      }
      return prev - 1;
    });
  }

  function startStop() {
    if (secondsLeft > 0) {
      setRunning((prev) => !prev);
    }
  }

  function resetTimer() {
    clearInterval(intervalId);
    setSecondsLeft(0);
    setInitialTime(0);
    setRunning(false);
  }

  useEffect(() => {
    isRunning
      ? setIntervalId(setInterval(updateTimer, 1000))
      : clearInterval(intervalId);
  }, [isRunning]);

  return (
    <>
      <div className="font-koulen">
        {theme === Theme.Candy && (
          <CandyTimer
            secondsLeft={secondsLeft}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            isRunning={isRunning}
            updateHours={updateHours}
            updateMinutes={updateMinutes}
            updateSeconds={updateSeconds}
            resetTimer={resetTimer}
            startStop={startStop}
          />
        )}
        {theme === Theme.Tomato && (
          <TomatoTimer
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            secondsLeft={secondsLeft}
            initialTime={initialTime}
            isRunning={isRunning}
            updateHours={updateHours}
            updateMinutes={updateMinutes}
            updateSeconds={updateSeconds}
            resetTimer={resetTimer}
            startStop={startStop}
          />
        )}
      </div>
    </>
  );
};

export default TimerWrapper;
