import { Theme, useAppContext } from "../../context/AppContext";

// @ts-ignore
import { themeButtons } from "../../constants";

const ThemeSelector = () => {
  const { theme, setAppTheme } = useAppContext();

  return (
    <div className="border-4 p-1 rounded-full w-[260px] border-neutral-700 bg-neutral-800 flex justify-between">
      {Object.keys(Theme).map((item, index) => (
        <button
          key={item.toString()}
          onClick={() => setAppTheme(Object.values(Theme)[index])}
        >
          <img
            src={themeButtons[item]}
            className={`object-contain h-14 rounded-full p-1 transition-all select-none duration-250 ease-in-out hover:p-0 border-white hover:border-3 ${
              item !== theme ? "grayscale p-2" : ""
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;
