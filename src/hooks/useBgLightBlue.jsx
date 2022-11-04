import { useEffect } from "react";

export const useBgLightBlue = () => {
  useEffect(() => {
    // マウント時
    document.body.style.backgroundColor = "lightblue";

    // アンマウント時
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
