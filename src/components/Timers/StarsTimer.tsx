import { useTimerContext } from "../../TimerContext";
import TimerTile from "../TimerTile/TimerTile";
import ResetButton from "../Buttons/ResetButton";
import StartStopButton from "../Buttons/StartStopButton";

const StarsTimer = () => {
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
