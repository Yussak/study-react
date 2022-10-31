import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { useCallback, useEffect } from "react";

export default function Home() {
  const foo = 1;

  // component内でuseCallbackを使うことで再レンダリング時にメソッドの再生成を防止;
  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

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

      <Header />
      <a href="/about" onClick={handleClick}>
        button
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}
