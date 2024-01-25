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
      className={`rounded-lg w-52 ${isRunning ? "bg-primary" : "bg-accent"} ${
        secondsLeft < 1 && "opacity-60 pointer-events-none"
      } text-[45px]`}
    >
      {isRunning ? "Pause" : "Start"}
    </button>
  );
};

export default StartStopButton;
