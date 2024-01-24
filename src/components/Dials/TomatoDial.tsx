type TomatoDialProps = {
  // hours: number;
  // minutes: number;
  // seconds: number;
  // isRunning: boolean;
  // setHours: (value: number) => void;
  // setMinutes: (value: number) => void;
  // setSeconds: (value: number) => void;
  remainingSeconds: number;
};

const convertTo360 = (value: number, upperBound: number) => {
  if (value < 0 || value > upperBound) {
    return 0;
  }

  const convertedValue = (value / upperBound) * 360;
  return convertedValue;
};

const TomatoDial = ({ remainingSeconds }: TomatoDialProps) => {
  const radius = 151;
  const centerX = 151;
  const centerY = 151;
  const startAngle = -90; // Starting angle of the sector in degrees
  const endAngle = convertTo360(-remainingSeconds, 360); // Ending angle of the sector in degrees

  const startRadians = (startAngle * Math.PI) / 180;
  const endRadians = (endAngle * Math.PI) / 180;

  // Calculate the start and end points of the sector
  const startX = centerX + radius * Math.cos(startRadians);
  const startY = centerY + radius * Math.sin(startRadians);
  const endX = centerX + radius * Math.cos(endRadians);
  const endY = centerY + radius * Math.sin(endRadians);

  // Create the path data for the sector
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const pathData = `
    M ${centerX} ${centerY}
    L ${startX} ${startY}
    A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}
    Z
  `;
  return (
    <div className="flex-1 flex items-center justify-center w-full text-[100px]">
      <div className="w-full flex items-center justify-center">
        <svg
          className="absolute"
          width="302"
          height="302"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Draw the white circle */}
          <circle cx={centerX} cy={centerY} r={radius} fill="transparent" />

          {/* Draw the blue sector */}
          <path d={pathData} fill="rgb(245 245 245)" />
        </svg>

        <img
          src="/images/dials/Tomato.png"
          alt="Tomato Dial"
          className="w-[300px]"
        />
      </div>
    </div>
  );
};

export default TomatoDial;
