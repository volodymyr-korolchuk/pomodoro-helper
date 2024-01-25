const useTimeFunctions = () => {
  const SECONDS_IN_HOUR = 3600;
  const SECONDS_IN_MINUTE = 60;

  function getHoursPart(seconds: number) {
    return Math.floor(seconds / SECONDS_IN_HOUR);
  }

  function getMinutesPart(seconds: number) {
    return Math.floor((seconds / SECONDS_IN_MINUTE) % SECONDS_IN_MINUTE);
  }

  function getSecondsPart(seconds: number) {
    return Math.floor(seconds % SECONDS_IN_MINUTE);
  }

  return {
    SECONDS_IN_HOUR,
    SECONDS_IN_MINUTE,
    getHoursPart,
    getMinutesPart,
    getSecondsPart,
  };
};

export default useTimeFunctions;
