import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
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
    });
  };

  useEffect(() => {
    // マウント時
    document.body.style.backgroundColor = "lightblue";

    // アンマウント時
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>

      {isShow ? <h1>{count}</h1> : null}
      <Header />
      <button onClick={handleClick}>button</button>
      <button href="/about" onClick={handleDisplay}>
        {isShow ? "非表示" : "表示"}
      </button>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          if (text.length >= 5) {
            return;
          }
          setText(e.target.value);
        }}
      />
      <Main page="index" />
      <Footer />
    </div>
  );
}
