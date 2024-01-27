type StartStopButtonProps = {
  secondsLeft: number;
  isRunning: boolean;
  startStop: () => void;
};

const StartStopButton = ({
  secondsLeft,
  isRunning,
  startStop,
}: StartStopButtonProps) => {
  return (
    <button
      onClick={startStop}
      className={`rounded-lg sm:w-52 flex-1 ${
        isRunning ? "bg-primary" : "bg-accent"
      } ${
        secondsLeft < 1 && "opacity-60 pointer-events-none"
      } sm:text-[45px] text-[40px] z-50`}
    >
      {isRunning ? "Pause" : "Start"}
    </button>
  );
};

export default StartStopButton;
