const useTrigonometry = () => {
  function to360(value: number, upperBound: number) {
    if (value <= 0 || value > upperBound) {
      return 0;
    }
    return (value / upperBound) * 360;
  }

  function toRadians(angle: number) {
    return (angle * Math.PI) / 180;
  }

  function getArcFlag(startAngle: number, endAngle: number) {
    return endAngle - startAngle <= 180 ? "0" : "1";
  }

  return {
    to360,
    toRadians,
    getArcFlag,
  };
};

export default useTrigonometry;
