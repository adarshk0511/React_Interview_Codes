import { useRef, useEffect } from "react";
const isEqual = (prevDeps, nextDeps) => {
  if (prevDeps === null) return false;
  if (prevDeps.length !== nextDeps.length) return false;

  for (let i = 0; i < prevDeps.length; i++) {
    if (prevDeps[i] !== nextDeps[i]) {
      return false;
    }
  }

  return true;
};
const useCustomMemo = (cb, deps) => {
  //store the val
  const memoizedRef = useRef(null);

  // to check change in deps
  if (!memoizedRef.current || !isEqual(memoizedRef.current.deps, deps)) {
    memoizedRef.current = {
      value: cb(),
      deps,
    };
  }

  //cleanup logic
  useEffect(() => {
    (react) => {
      memoizedRef.current = null;
    };
  }, []);

  return memoizedRef.current.value;
};

export default useCustomMemo;
