import Link from "../../components/Link";
import Layout from "../../components/Layout";
import Head from "next/head";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link to="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
