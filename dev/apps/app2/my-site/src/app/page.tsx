// app/page.tsx
'use client'
import styles from "../styles/Home.module.css";
import { useRouter } from "next/navigation";
import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


const Home: React.FC = () => {

  const router = useRouter();

  const handleArticleClick = (path: string) => {
    router.push(path);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to D.Node Portal Site</h1>

      <p className={styles.description}>
        このサイトはD.Nodeの組織構成とメンバーの
        ポストを紹介しています。
      </p>

      <section className={styles.cardContainer}>
        <article className={styles.card}
         onClick={() => handleArticleClick('/organization')}
         onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleArticleClick('/organization');
          }
         }} 
        >
          <h2>組織構成 &rarr;</h2>
          <p>D.Nodeの組織構成を紹介します。</p>
        </article>

        <article className={styles.card}
         onClick={() => handleArticleClick('/posts')}
         onKeyDown={(e) => {
          handleArticleClick('/posts');
         }}
        >
          <h2>メンバーポスト &rarr;</h2>
          <p>メンバーの技術的なポストを閲覧します。</p>
        </article>
      </section>

      <section className={styles.cardContainer}>
        <article className={styles.card}
          onClick={() => {
            handleArticleClick('/drsite');
          }}
          onKeyDown={(e) => {
            handleArticleClick('/drsite');
          }}
        >
          <h2>Deloitte DR Site &rarr;</h2>
          <p>Deloitteグループのポータルサイトを閲覧します。</p>
        </article>

        <article className={styles.card}
         onClick={() => handleArticleClick('/tips')}
         onKeyDown={(e) => {
          handleArticleClick('/tips');
         }}
        >
          <h2>各種手続き&Tips &rarr;</h2>
          <p>組織内の各種手続きやTipsについて確認します。</p>
        </article>
      </section>
    </div>
  );
};

export default Home;
