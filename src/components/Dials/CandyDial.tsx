import TimerTile from "../TimerTile";
import { useEffect, useState } from "react";

type CandyDialProps = {
  hours: number;
  minutes: number;
  seconds: number;
  isRunning: boolean;
  setHours: (value: number) => void;
  setMinutes: (value: number) => void;
  setSeconds: (value: number) => void;
};

const CandyDial = ({
  hours,
  minutes,
  seconds,
  isRunning,
  setHours,
  setMinutes,
  setSeconds,
}: CandyDialProps) => {
  return (
    <div
      className={`flex-1 flex items-center justify-center w-full ${
        isRunning ? "text-[130px]" : "text-[100px]"
      }`}
    >
      <TimerTile value={hours} valueSetter={setHours} isRunning={isRunning} />
      <span className="text-center pb-5">:</span>
      <TimerTile
        value={minutes}
        valueSetter={setMinutes}
        isRunning={isRunning}
      />
      <span className="text-center pb-5">:</span>
      <TimerTile
        value={seconds}
        valueSetter={setSeconds}
        isRunning={isRunning}
      />
    </div>
  );
};

export default CandyDial;
