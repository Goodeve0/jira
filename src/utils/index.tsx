import { useEffect, useState } from "react";
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

//后面用泛型

export const useDebounce = (val: unknown, delay?: number): any => {
  const [debouncedVal, setDebounceVal] = useState(val);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceVal(val), delay);
    return () => clearTimeout(timeout);
  }, [val, delay]);

  return debouncedVal;
};
