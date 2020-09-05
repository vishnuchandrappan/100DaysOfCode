import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

import { getSortedPostsData } from "../lib/posts";
import Date from "../components/Date";
import Link from "next/link";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Researcher | Writer | Nomad</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
          accusamus sed laborum, dolorum corporis eligendi amet sit, rerum
          repellendus inventore provident libero nulla dolor? Illo voluptates
          neque beatae sequi praesentium.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <div className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <Link href={`posts/${id}`} key={id}>
              <a className={utilStyles.listItem}>
                <h3>{title}</h3>
                <Date dateString={date} />
              </a>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
