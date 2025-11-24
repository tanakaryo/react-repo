
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import thumbnail from "./gcp-terraform.png";

export default function Page() {
    return (

        <div className={styles.container}>
      <h1 className={styles.title}>Developer's Post</h1>

      <p className={styles.description}>
        メンバーがポストした技術的話題
      </p>

      <section className={styles.cardContainer}>
        <article className={styles.card}>
          <Image src={thumbnail} width={100} height={80} alt="thumbnail" />
          <div style={{float:'right'}}>
          <a style={{fontSize:'25px'}}>GCPでTerraformを使う</a><br/>
          <a style={{fontSize: '12px'}}>GCPでTerraformを使用する際の準備やTipsを紹介</a>
          </div>
        </article>

        <article className={styles.card}>
          <Image src={thumbnail} width={100} height={80} alt="thumbnail" />
          <div style={{float:'right'}}>
          <a style={{fontSize:'25px'}}>GCPでTerraformを使う</a><br/>
          <a style={{fontSize: '12px'}}>GCPでTerraformを使用する際の準備やTipsを紹介</a>
          </div>
        </article>

        <article className={styles.card}>
          <Image src={thumbnail} width={100} height={80} alt="thumbnail" />
          <div style={{float:'right'}}>
          <a style={{fontSize:'25px'}}>GCPでTerraformを使う</a><br/>
          <a style={{fontSize: '12px'}}>GCPでTerraformを使用する際の準備やTipsを紹介</a>
          </div>
        </article>

        <article className={styles.card}>
          <Image src={thumbnail} width={100} height={80} alt="thumbnail" />
          <div style={{float:'right'}}>
          <a style={{fontSize:'25px'}}>GCPでTerraformを使う</a><br/>
          <a style={{fontSize: '12px'}}>GCPでTerraformを使用する際の準備やTipsを紹介</a>
          </div>
        </article>

        <article className={styles.card}>
          <Image src={thumbnail} width={100} height={80} alt="thumbnail" />
          <div style={{float:'right'}}>
          <a style={{fontSize:'25px'}}>GCPでTerraformを使う</a><br/>
          <a style={{fontSize: '12px'}}>GCPでTerraformを使用する際の準備やTipsを紹介</a>
          </div>
        </article>

        <article className={styles.card}>
          <Image src={thumbnail} width={100} height={80} alt="thumbnail" />
          <div style={{float:'right'}}>
          <a style={{fontSize:'25px'}}>GCPでTerraformを使う</a><br/>
          <a style={{fontSize: '12px'}}>GCPでTerraformを使用する際の準備やTipsを紹介</a>
          </div>
        </article>

        <article className={styles.card}>
          <Image src={thumbnail} width={100} height={80} alt="thumbnail" />
          <div style={{float:'right'}}>
          <a style={{fontSize:'25px'}}>GCPでTerraformを使う</a><br/>
          <a style={{fontSize: '12px'}}>GCPでTerraformを使用する際の準備やTipsを紹介</a>
          </div>
        </article>

        <article className={styles.card}>
          <Image src={thumbnail} width={100} height={80} alt="thumbnail" />
          <div style={{float:'right'}}>
          <a style={{fontSize:'25px'}}>GCPでTerraformを使う</a><br/>
          <a style={{fontSize: '12px'}}>GCPでTerraformを使用する際の準備やTipsを紹介</a>
          </div>
        </article>

        <article className={styles.card}>
          <Image src={thumbnail} width={100} height={80} alt="thumbnail" />
          <div style={{float:'right'}}>
          <a style={{fontSize:'25px'}}>GCPでTerraformを使う</a><br/>
          <a style={{fontSize: '12px'}}>GCPでTerraformを使用する際の準備やTipsを紹介</a>
          </div>
        </article>

        <article className={styles.card}>
          <Image src={thumbnail} width={100} height={80} alt="thumbnail" />
          <div style={{float:'right'}}>
          <a style={{fontSize:'25px'}}>GCPでTerraformを使う</a><br/>
          <a style={{fontSize: '12px'}}>GCPでTerraformを使用する際の準備やTipsを紹介</a>
          </div>
        </article>
      </section>
      </div>
    )
}