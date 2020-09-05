import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/Date";

export default function Post({ postData: { title, date, contentHtml } }) {
  return (
    <Layout>
      <Head>{title}</Head>
      <h2>{title}</h2>
      <Date dateString={date} />
      <hr />
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
