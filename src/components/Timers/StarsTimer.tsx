import TimerTile from "../TimerTile/TimerTile";
import ResetButton from "../Buttons/ResetButton";
import StartStopButton from "../Buttons/StartStopButton";
import { useTimerContext } from "../../context/TimerContext";
import { useEffect, useState } from "react";
import SessionControl from "../SessionControl/SessionControl";

const StarsTimer = () => {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [currentQuote, setCurrentQuote] = useState<string>("");

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

  const setNextQuote = () => {
    if (!quotes.length || quotes.length < 1) return;

    setCurrentQuote((prev) => {
      const index = quotes.indexOf(prev);

      if (index + 1 > quotes?.length - 1 || index === -1) {
        return quotes[0];
      } else {
        return quotes[index + 1];
      }
    });
  };

  useEffect(() => {
    const fetchQuotes = async () => {
      const url = "https://type.fit/api/quotes";

      try {
        const response = await fetch(url);
        const result = await response
          .json()
          .then((entries) => entries.map((entry: any) => entry.text));

        setQuotes(result);
      } catch (error) {
        console.error(error);
      } finally {
        setNextQuote();
      }
    };

    fetchQuotes();

    const id = setInterval(() => {
      setNextQuote();
    }, 12000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center w-full text-[100px]">
      <div
        className={`flex flex-col items-center justify-center z-10 transition-all duration-300 ease-in-out`}
      >
        <div className={`flex items-center`}>
          <TimerTile
            value={hours}
            valueSetter={updateHours}
            isRunning={isRunning}
            color="white"
            isGlowing={true}
          />
          <span className="text-center text-white pb-5">:</span>

          <TimerTile
            value={minutes}
            valueSetter={updateMinutes}
            isRunning={isRunning}
            color="white"
            isGlowing={true}
          />
          <span className="text-center text-white pb-5">:</span>

          <TimerTile
            value={seconds}
            valueSetter={updateSeconds}
            isRunning={isRunning}
            color="white"
            isGlowing={true}
          />
        </div>
        {isRunning ? (
          <p
            className={`transition-all duration-500 ease-in text-neutral-100 text-[20px] drop-shadow-glow`}
          >
            {currentQuote}
          </p>
        ) : (
          <section className="flex w-full items-center justify-center px-1">
            <SessionControl />
          </section>
        )}
      </div>
      <div className="absolute sm:w-[570px] sm:bottom-3 bottom-1 p-4 gap-4 w-full flex items-center justify-center">
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
  );
};

export default StarsTimer;
