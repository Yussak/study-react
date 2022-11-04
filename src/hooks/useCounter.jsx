import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

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

  return { count, isShow, handleClick, handleDisplay };
};
