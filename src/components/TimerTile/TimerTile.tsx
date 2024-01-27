import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

type TimerTileProps = {
  value: number;
  isRunning: boolean;
  color?: string;
  isGlowing?: boolean;
  valueSetter: (value: number) => void;
};

enum SetterAction {
  Increment = 1,
  Decrement = -1,
}

const formatValue = (value: number) => {
  return value > 9 ? `${value}` : `0${value}`;
};

const TimerTile = ({
  value,
  isRunning,
  color,
  isGlowing,
  valueSetter,
}: TimerTileProps) => {
  return (
    <div className="font-koulen flex flex-col mx-1">
      <button
        onClick={() => valueSetter(SetterAction.Increment)}
        className={`bg-neutral-300 rounded-lg hover:bg-neutral-400 text-[45px] flex justify-center items-center ${
          isRunning ? "opacity-0 pointer-events-none" : ""
        }`}
      >
        <IoIosArrowUp />
      </button>

      <span
        className={`${
          isRunning
            ? "bg-transparent sm:text-[8rem] text-[5rem]"
            : "bg-neutral-200 sm:text-[5rem] text-[4rem]"
        }  ${isRunning && color ? `text-${color}` : ""} ${
          isRunning && isGlowing ? "drop-shadow-glow" : ""
        }  sm:w-[160px] w-[100px] px-2 rounded-lg my-1 text-center select-none transition-all duration-300`}
      >
        {formatValue(value)}
      </span>

      <button
        onClick={() => valueSetter(SetterAction.Decrement)}
        className={`bg-neutral-300 transition duration-150 rounded-lg hover:bg-neutral-400 text-[45px] flex justify-center items-center ${
          isRunning ? "opacity-0 pointer-events-none" : ""
        }`}
      >
        <IoIosArrowDown />
      </button>
    </div>
  );
};

export default TimerTile;
