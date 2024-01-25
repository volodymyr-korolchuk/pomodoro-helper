type ResetButtonProps = {
  secondsLeft: number;
  isRunning: boolean;
  resetTimer: () => void;
};

const ResetButton = ({
  secondsLeft,
  isRunning,
  resetTimer,
}: ResetButtonProps) => {
  return (
    <button
      onClick={resetTimer}
      className={`rounded-lg w-52 ${
        secondsLeft < 1 && !isRunning && "opacity-60 pointer-events-none"
      } bg-red-400 text-[45px]`}
    >
      {isRunning ? "Stop" : "Reset"}
    </button>
  );
};

export default ResetButton;
