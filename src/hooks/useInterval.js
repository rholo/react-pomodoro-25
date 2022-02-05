import { useEffect, useRef, useLayoutEffect } from 'react';
// inspired by https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callbackFn, delay) {
  const currentCallback = useRef(callbackFn);

  useLayoutEffect(() => {
    currentCallback.current = callbackFn;
  }, [callbackFn]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }
    const id = setInterval(() => currentCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}
export default useInterval;
