import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

type TimerTileProps = {
  value: number;
  isRunning: boolean;
  valueSetter: (value: number) => void;
};

const formatValue = (value: number) => {
  return value > 9 ? `${value}` : `0${value}`;
};

const TimerTile = ({ value, valueSetter, isRunning }: TimerTileProps) => {
  return (
    <div className="flex flex-col mx-1 transition-all ease-in-out duration-250">
      <button
        onClick={() => valueSetter(1)}
        className={`bg-neutral-300 rounded-lg hover:bg-neutral-400 text-[45px] flex justify-center items-center ${
          isRunning ? "opacity-0 pointer-events-none" : ""
        }`}
      >
        <IoIosArrowUp />
      </button>

      <span
        className={`${isRunning ? "w-[150px]" : "w-[120px]"} ${
          isRunning ? "bg-neutral-100" : "bg-neutral-200"
        } px-2 rounded-lg my-1 text-center`}
      >
        {formatValue(value)}
      </span>

      <button
        onClick={() => valueSetter(-1)}
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
