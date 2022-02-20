import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import Time from '../components/time/time';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <h1 className="text-3xl font-bold underline">lol</h1>

      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              <Link href={`/posts/`}>
                <a>{"title"}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Time dateString={"2020-01-01"} />
              </small>
            </li>
        </ul>
      </section>
    </Layout>
  )
}