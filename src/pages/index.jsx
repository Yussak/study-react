import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);

  // component内でuseCallbackを使うことで再レンダリング時にメソッドの再生成を防止;
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

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

      <h1>{count}</h1>
      <Header />
      <button href="/about" onClick={handleClick}>
        button
      </button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
