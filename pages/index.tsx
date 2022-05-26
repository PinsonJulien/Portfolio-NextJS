import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
import utilStyles from '../styles/utils.module.scss';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section
        className={`
          mx-10
          space-y-5
        `}
      >
        <p
          className={`
            text-gray-700
            text-md
          `}
        >
          Welcome to my website, I'm
        </p>

        <p
          className={`
          text-secondary-900
            text-5xl
          `}
        >
          Julien Pinson
        </p>

        <p
          className={`
          text-gray-700
            text-3xl
          `}
        >
          I work with web technologies and embedded systems.
        </p>

        <p
          className={`
          text-gray-900
            text-md
          `}
        >
          I'm a <span className='text-secondary-900'>Belgium</span> based <span className='text-secondary-900'>Business Computing degree student</span> (second year), first off <span className='text-secondary-900'>self-taught</span> on <span className='text-secondary-900'>web solutions</span> and integration with embedded systems.
        </p>

      </section>
    </Layout>
  )
}