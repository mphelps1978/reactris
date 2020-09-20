import { useEffect, useRef } from "react";

export function useInterval(callback, delay) {
  const savedCallback = useRef();
  // We want to remember the latest callback here

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Now we need to set up the interval
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay]);
}
