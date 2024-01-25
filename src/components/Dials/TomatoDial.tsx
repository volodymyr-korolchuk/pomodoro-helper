type TomatoDialProps = {
  remainingSeconds: number;
  initialTime: number;
};

const convertTo360 = (value: number, upperBound: number) => {
  if (value <= 0 || value > upperBound) {
    return 0;
  }

  const convertedValue = (value / upperBound) * 360;
  return convertedValue;
};

const TomatoDial = ({ remainingSeconds, initialTime }: TomatoDialProps) => {
  const radius = 156;
  const centerX = 155;
  const centerY = 153;

  const convertedValue = -convertTo360(remainingSeconds, initialTime);
  const startAngle = -90;
  const endAngle =
    convertedValue < -180 ? convertedValue - 90 : convertedValue + 270;

  const startRadians = (startAngle * Math.PI) / 180;
  const endRadians = (endAngle * Math.PI) / 180;

  const startX = centerX + radius * Math.cos(startRadians);
  const startY = centerY + radius * Math.sin(startRadians);
  const endX = centerX + radius * Math.cos(endRadians);
  const endY = centerY + radius * Math.sin(endRadians);

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
          width="310"
          height="310"
          xmlns="http://www.w3.org/2000/svg"
        >
          <image
            href="/images/dials/Tomato.png"
            className="w-[310px] transition-all duration-200"
          />
          <circle cx={centerX} cy={centerY} r={radius} fill="transparent" />

          <path d={pathData} fill="rgb(245 245 245)" />
        </svg>
      </div>
    </div>
  );
};

export default TomatoDial;
