import React, { useEffect, useState, useRef } from 'react';
// inspired by https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const useInterval = (callbackFn, delay) => {
  const intervalID = useRef(null);
  const currentCallback = useRef(callbackFn);

  useEffect(() => {
    currentCallback.current = callbackFn;
  });

  useEffect(() => {
    const tick = () => currentCallback.current();
    if (typeof delay === 'number') {
      intervalID.current = window.setInterval(tick, delay);
      return () => window.clearInterval(intervalID.current);
    }
  }, [delay]);
  return intervalID.current;
};
export default useInterval;
