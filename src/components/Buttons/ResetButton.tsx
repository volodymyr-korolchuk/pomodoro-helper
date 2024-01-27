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
      className={`rounded-lg sm:w-52 flex-1 ${
        secondsLeft < 1 && !isRunning && "opacity-60 pointer-events-none"
      } bg-red-400 sm:text-[40px] text-[35px] z-50`}
    >
      {isRunning ? "Stop" : "Reset"}
    </button>
  );
};

export default ResetButton;
