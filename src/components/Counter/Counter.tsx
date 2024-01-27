import { HiMinus, HiPlus } from "react-icons/hi";

type CounterPropsType = {
  value: number;
  valueSetter: (value: number) => void;
};

const Counter = ({ value, valueSetter }: CounterPropsType) => {
  return (
    <div className="flex items-center gap-3 justify-center text-[32px]">
      <button onClick={() => valueSetter(1)}>
        <HiPlus
          size={40}
          className="bg-neutral-600 hover:bg-neutral-500 hover:scale-110 p-1 transition-all duration-100 ease-in-out rounded-lg"
        />
      </button>

      <p className="select-none bg-neutral-400 text-center rounded-lg w-12 h-12">
        {value}
      </p>

      <button onClick={() => valueSetter(-1)}>
        <HiMinus
          size={40}
          className="bg-neutral-600 hover:bg-neutral-500 hover:scale-110 p-1 transition-all duration-100 ease-in-out rounded-lg"
        />
      </button>
    </div>
  );
};

export default Counter;
