import { useCallback, useMemo, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  // component内でuseCallbackを使うことで再レンダリング時にメソッドの再生成を防止;
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => {
      return prevIsShow ? false : true;
    });
  }, []);

  return { count, doubleCount, isShow, handleClick, handleDisplay };
};
