import { add } from "lodash";
import { useEffect, useRef, useState } from "react";
export const isFalsy = (val: unknown) => (val === 0 ? false : !val);

export const cleanObject = (obj: object) => {
  const result = { ...obj };
  Object.keys(result).forEach((key: string) => {
    //@ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      //@ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <V>(val: V, delay?: number) => {
  const [debouncedVal, setDebounceVal] = useState(val);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceVal(val), delay);
    return () => clearTimeout(timeout);
  }, [val, delay]);

  return debouncedVal;
};
export const useMountedRef = () => {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  });

  return mountedRef;
};
