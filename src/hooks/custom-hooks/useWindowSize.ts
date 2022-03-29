import { useEffect, useState } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const windowResizeHandler = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    windowResizeHandler();

    window.addEventListener('resize', windowResizeHandler);

    return () => {
      window.removeEventListener('resize', windowResizeHandler);
    };
  }, []);

  return windowSize;
}

export { useWindowSize };
