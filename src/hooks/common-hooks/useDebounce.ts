import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useDebounce(cb: (...args: any[]) => void, delay: number): (...args: any[]) => void {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [savedCallback, setSavedCallback] = useState<((...args: any[]) => void) | null>(null);
  let timer: ReturnType<typeof setTimeout>;

  useEffect(() => {
    timer = setTimeout(() => {
      setSavedCallback(cb);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [cb, delay]);

  // eslint-disable-next-line func-names
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  return savedCallback || function () {};
}

export { useDebounce };
