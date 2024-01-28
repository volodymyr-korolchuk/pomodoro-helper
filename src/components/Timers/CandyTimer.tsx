import { useEffect, useState } from "react";
import ResetButton from "../Buttons/ResetButton";
import StartStopButton from "../Buttons/StartStopButton";
import TimerTile from "../TimerTile/TimerTile";
import { useTimerContext } from "../../context/TimerContext";
import SessionControl from "../SessionControl/SessionControl";

const CandyTimer = () => {
  const [quotes, setQuote] = useState<any[]>();
  const [isLoading, setIsLoading] = useState(true);

  const {
    secondsLeft,
    hours,
    minutes,
    seconds,
    isRunning,
    isBreakActive,
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

        <div className="flex flex-col w-full h-full bg-neutral-100 rounded-lg p-2">
          <div
            className={`bg-neutral-300 flex flex-col items-center justify-center p-4 w-full h-full rounded-lg`}
          >
            {isBreakActive ? (
              <div className="uppercase text-neutral-800 bg-neutral-200/50 py-4 px-16 rounded-lg text-[80px]">
                break
              </div>
            ) : (
              <>
                <div className="flex items-center justify-center mt-4">
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
                {!isRunning && (
                  <section className="flex w-full  px-6">
                    <SessionControl />
                  </section>
                )}
              </>
            )}
          </div>
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
