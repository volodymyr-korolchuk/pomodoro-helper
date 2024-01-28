import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useTimeFunctions from "../hooks/useTimeFunctions";

type TimerContext = {
  secondsLeft: number;
  hours: number;
  minutes: number;
  seconds: number;

  intervalCount: number;
  breakDuration: number;
  isBreakActive: boolean;

  initialTime: number;
  isRunning: boolean;

  updateHours: (value: number) => void;
  updateMinutes: (value: number) => void;
  updateSeconds: (value: number) => void;

  updateTimer: () => void;
  startStop: () => void;
  resetTimer: () => void;

  setIntervalCount: React.Dispatch<React.SetStateAction<number>>;
  setBreakDuration: React.Dispatch<React.SetStateAction<number>>;
};

type TimerContextProviderProps = {
  children: ReactNode;
};

const TimerContext = createContext({} as TimerContext);

export function useTimerContext() {
  return useContext(TimerContext);
}

export function TimerContextProvider({ children }: TimerContextProviderProps) {
  const {
    SECONDS_IN_HOUR,
    SECONDS_IN_MINUTE,
    getHoursPart,
    getMinutesPart,
    getSecondsPart,
  } = useTimeFunctions();

  const [intervalCount, setIntervalCount] = useState(2);
  const [breakDuration, setBreakDuration] = useState(5);

  const [isBreakActive, setBreakActive] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(5);
  const [isRunning, setRunning] = useState(false);
  const [intervalId, setIntervalId] = useState<number>(0);

  const hours = getHoursPart(secondsLeft);
  const minutes = getMinutesPart(secondsLeft);
  const seconds = getSecondsPart(secondsLeft);

  const [initialTime, setInitialTime] = useState<number>(secondsLeft);

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
        clearInterval(intervalId);
        setSecondsLeft(0);
        setRunning(false);
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

  useEffect(() => {
    // timer is running or was reset
    if (secondsLeft !== 0 || isRunning || initialTime === 0) {
      return;
    }

    // no study intervals left
    if (intervalCount <= 1) {
      return;
    }

    setBreakActive(true);

    setIntervalCount((prev) => {
      // if there is more than one interval left - set interval count as n - 1, else set interval count as 1;
      return prev > 0 ? prev - 1 : 1;
    });

    // calculate duration in ms
    const timeout = breakDuration * SECONDS_IN_MINUTE * 1000;

    // initiate the next study interval after the break
    setTimeout(() => {
      setSecondsLeft(initialTime);
      setBreakActive(false);
      setRunning(true);
    }, timeout);
  }, [isRunning]);

  return (
    <TimerContext.Provider
      value={{
        secondsLeft,
        hours,
        minutes,
        seconds,
        initialTime,

        intervalCount,
        breakDuration,
        isBreakActive,

        isRunning,

        updateHours,
        updateMinutes,
        updateSeconds,

        updateTimer,
        startStop,
        resetTimer,

        setIntervalCount,
        setBreakDuration,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}
