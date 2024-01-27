import { useEffect, useState } from "react";
import ResetButton from "../Buttons/ResetButton";
import StartStopButton from "../Buttons/StartStopButton";
import TimerTile from "../TimerTile/TimerTile";
import { useTimerContext } from "../../TimerContext";

const CandyTimer = () => {
  const [quotes, setQuote] = useState<any[]>();
  const [isLoading, setIsLoading] = useState(true);

  const {
    secondsLeft,
    hours,
    minutes,
    seconds,
    isRunning,
    updateHours,
    updateMinutes,
    updateSeconds,
    startStop,
    resetTimer,
  } = useTimerContext();

  useEffect(() => {
    const fetchQuote = async () => {
      const url = "https://type.fit/api/quotes";

      try {
        const response = await fetch(url);
        const result = await response.json();
        setQuote(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="sm:w-[680px] sm:h-[620px] z-50 border-[1px] pt-4 px-8 backdrop-blur-lg border-neutral-300 from-neutral-200/70 to-neutral-200/50 bg-gradient-to-br rounded-xl">
      <div className="w-full sm:h-full flex flex-col items-center justify-between">
        <h4 className="uppercase sm:text-[64px] text-[45px]">Time Left</h4>
        <div
          className={`bg-neutral-100 flex-1 flex items-center justify-center w-full h-full px-1 py-4 rounded-lg`}
        >
          <TimerTile
            value={hours}
            valueSetter={updateHours}
            isRunning={isRunning}
          />
          <span className="text-center sm:pb-5 pb-2 sm:text-[100px] text-[70px] select-none">
            :
          </span>
          <TimerTile
            value={minutes}
            valueSetter={updateMinutes}
            isRunning={isRunning}
          />
          <span className="text-center sm:pb-5 pb-2 sm:text-[100px] text-[70px] select-none">
            :
          </span>
          <TimerTile
            value={seconds}
            valueSetter={updateSeconds}
            isRunning={isRunning}
          />
        </div>

        <div className="py-4 sm:gap-4 gap-2 w-full flex items-center justify-between">
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
      </div>
    </div>
  );
};

export default CandyTimer;
