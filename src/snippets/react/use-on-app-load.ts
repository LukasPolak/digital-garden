import { useEffect } from "react";

let didInit = false;

export const useOnAppLoad = (callback: () => void) => {
  useEffect(() => {
    if (!didInit) {
      didInit = true;

      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
