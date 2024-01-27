import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useTimeFunctions from "./hooks/useTimeFunctions";

type TimerContext = {
  secondsLeft: number;
  hours: number;
  minutes: number;
  seconds: number;

  intervalCount: number;
  breakDuration: number;

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
    <TimerContext.Provider
      value={{
        secondsLeft,
        hours,
        minutes,
        seconds,
        initialTime,

        intervalCount,
        breakDuration,

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
