import CandyTimer from "../Timers/CandyTimer";
import TomatoTimer from "../Timers/TomatoTimer";
import NatureTimer from "../Timers/NatureTimer";
import TimedImage from "../TimedImage/TimedImage";
import StarsTimer from "../Timers/StarsTimer";

// @ts-ignore
import { backgrounds } from "../../constants";
import { Theme, useAppContext } from "../../context/appContext";
import { TimerContextProvider } from "../../context/timerContext";

const TimerWrapper = () => {
  const { theme } = useAppContext();

  const Nature = [backgrounds.Nature01, backgrounds.Nature02];

  const Stars = [backgrounds.Stars01];

  return (
    <>
      <TimerContextProvider>
        {theme === Theme.Nature && (
          <TimedImage imagePathArray={Nature} interval={5000} />
        )}
        {theme === Theme.Stars && (
          <TimedImage imagePathArray={Stars} interval={5000} />
        )}
        <div className="font-koulen">
          {theme === Theme.Candy && <CandyTimer />}
          {theme === Theme.Tomato && <TomatoTimer />}
          {theme === Theme.Nature && <NatureTimer />}
          {theme === Theme.Stars && <StarsTimer />}
        </div>
      </TimerContextProvider>
    </>
  );
};

export default TimerWrapper;
