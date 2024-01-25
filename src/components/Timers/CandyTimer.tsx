import ResetButton from "../Buttons/ResetButton";
import StartStopButton from "../Buttons/StartStopButton";
import TimerTile from "../TimerTile/TimerTile";

type CandyTimerProps = {
  secondsLeft: number;
  hours: number;
  minutes: number;
  seconds: number;
  isRunning: boolean;
  updateHours: (value: number) => void;
  updateMinutes: (value: number) => void;
  updateSeconds: (value: number) => void;
  resetTimer: () => void;
  startStop: () => void;
};

const CandyTimer = ({
  secondsLeft,
  hours,
  minutes,
  seconds,
  isRunning,
  updateHours,
  updateMinutes,
  updateSeconds,
  resetTimer,
  startStop,
}: CandyTimerProps) => {
  return (
    <div className="w-[680px] h-[620px] bg-white/30 border-[1px] pt-4 px-8  border-white rounded-xl">
      <div className="w-full h-full flex flex-col items-center justify-between">
        <h4 className="uppercase text-[64px]">Time Left</h4>
        <div
          className={`bg-neutral-100 flex-1 flex items-center justify-center w-full h-full rounded-lg`}
        >
          <TimerTile
            value={hours}
            valueSetter={updateHours}
            isRunning={isRunning}
          />
          <span className="text-center pb-5 text-[100px] select-none">:</span>
          <TimerTile
            value={minutes}
            valueSetter={updateMinutes}
            isRunning={isRunning}
          />
          <span className="text-center pb-5 text-[100px] select-none">:</span>
          <TimerTile
            value={seconds}
            valueSetter={updateSeconds}
            isRunning={isRunning}
          />
        </div>

        <div className="p-4 gap-4 w-full flex items-center justify-center ">
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
