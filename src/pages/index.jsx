import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [foo, setFoo] = useState(1);

  // component内でuseCallbackを使うことで再レンダリング時にメソッドの再生成を防止;
  const handleClick = (e) => {
    setFoo((foo) => foo + 1);
    setFoo((foo) => foo + 1);
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

      <h1>{foo}</h1>
      <Header />
      <button href="/about" onClick={handleClick}>
        button
      </button>
      <Main page="index" />
      <Footer />
    </div>
  );
}
