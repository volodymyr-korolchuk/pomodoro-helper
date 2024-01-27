import { useAppContext } from "../appContext";
import { TimerContextProvider } from "../TimerContext";
import { Theme } from "../appContext";
import CandyTimer from "./Timers/CandyTimer";
import TomatoTimer from "./Timers/TomatoTimer";
import NatureTimer from "./Timers/NatureTimer";
import TimedImage from "./TimedImage/TimedImage";

{
  /*TODO: add fade out when mouse is not moving for 5 seconds*/
}

const TimerWrapper = () => {
  const { theme } = useAppContext();

  const NatureImagePathArray = [
    "/images/backgrounds/Nature.jpg",
    "/images/backgrounds/Nature2.jpg",
  ];

  return (
    <>
      <TimerContextProvider>
        {theme === Theme.Nature && (
          <TimedImage imagePathArray={NatureImagePathArray} interval={2000} />
        )}
        <div className="font-koulen">
          {theme === Theme.Candy && <CandyTimer />}
          {theme === Theme.Tomato && <TomatoTimer />}
          {theme === Theme.Nature && <NatureTimer />}
        </div>
      </TimerContextProvider>
    </>
  );
};

export default TimerWrapper;
