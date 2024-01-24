import { Theme, useAppContext } from "../appContext";
import CandyDial from "./Dials/CandyDial";
import TomatoDial from "./Dials/TomatoDial";

const DialContainer = () => {
  const { theme } = useAppContext();

  return <>{theme === Theme.Candy ? <CandyDial /> : <TomatoDial />}</>;
};

export default DialContainer;
