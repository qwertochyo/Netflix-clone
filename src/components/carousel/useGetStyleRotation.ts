import { useEffect, useState } from "react";

interface WindowDimensions {
  width: number;
  height: number;
  isMobile: boolean;
  isTable: boolean;
  isDesktop: boolean;
}

export const useGetStyleRotation = (index: number, total: number, isPlayer?: boolean) => {
  const { isTable, isMobile } = useWindowDimensions();

  const middle = (total - 1) / 2;
  const rotate = (index - middle) * (isTable ? 5 : 10);

  const distanceFromMiddle = Math.abs(index - middle);
  const translateY = Math.pow(distanceFromMiddle, isTable ? 1.55 : isMobile ? 1.8 : 2) * (isTable ? 5 : 7);

  return (
    {
      rotate: isPlayer ? rotate : -rotate,
      translateY: isPlayer ? translateY : -translateY
    }
  );
}

export function useWindowDimensions(): WindowDimensions {
  const getWindowDimensions = (): WindowDimensions => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return {
      width,
      height,
      isMobile: width <= 480,
      isTable: width > 480 && width <= 768,
      isDesktop: width > 768,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}