import Link from "../components/Link";
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <h1>Hello World</h1>
      <Link to="/posts/first-post">First Post</Link>
      </>
  );
}
