import { useEffect, useState } from "react";

type TimedImageProps = {
  interval: number;
  imagePathArray: string[];
};

const TimedImage = ({ interval, imagePathArray }: TimedImageProps) => {
  const [opacity, setOpacity] = useState(0);

  const [currentImage, setCurrentImage] = useState<string>();

  let imageIndex = 0;

  const fadeIn = () => {
    const id = setInterval(() => {
      setOpacity((prev) => prev + 0.01);
      if (opacity >= 1) clearInterval(id);
    }, 10);
  };

  useEffect(() => {
    setCurrentImage(imagePathArray[0]);
    fadeIn();

    const id = setInterval(() => {
      setCurrentImage(() => {
        if (imageIndex + 1 > imagePathArray.length - 1) {
          imageIndex = 0;
        } else {
          ++imageIndex;
        }
        return imagePathArray[imageIndex];
      });
    }, interval);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div
      className={`w-full h-full absolute z-0 overflow-hidden bg-neutral-900`}
    >
      <img
        style={{ opacity }}
        className={`w-full h-full object-cover transition-all duration-1000 ease-in-out outline-none`}
        src={currentImage}
      />
    </div>
  );
};

export default TimedImage;
