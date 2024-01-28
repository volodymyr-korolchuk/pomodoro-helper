import { useTimerContext } from "../../context/timerContext";
import Counter from "../Counter/Counter";

const SessionControl = () => {
  const { intervalCount, setIntervalCount, breakDuration, setBreakDuration } =
    useTimerContext();

  const setIntervalCountCallback = (value: number) => {
    if (
      (intervalCount <= 1 && value === -1) ||
      (intervalCount >= 10 && value === 1)
    ) {
      return;
    }

    setIntervalCount((prev) => prev + value);
  };

  const setBreakDurationCallback = (value: number) => {
    if (
      (breakDuration <= 1 && value === -1) ||
      (breakDuration >= 59 && value === 1)
    ) {
      return;
    }

    setBreakDuration((prev) => prev + value);
  };

  return (
    <div className="flex items-center justify-around w-full gap-4 bg-neutral-100 rounded-lg py-3 px-4 text-[32px] my-4">
      <div className="flex flex-col">
        <div className="text-center text-[20px] ">Intervals</div>
        <Counter value={intervalCount} valueSetter={setIntervalCountCallback} />
      </div>

      <div className="text-center text-[20px]">
        <p>Break (min.)</p>
        <Counter value={breakDuration} valueSetter={setBreakDurationCallback} />
      </div>
    </div>
  );
};

export default SessionControl;
