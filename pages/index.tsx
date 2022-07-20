import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
import utilStyles from '../styles/utils.module.scss';

export default function Home(props) {
  return (
    <Layout {...props}>
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
            text-neutral-600
            text-md
          `}
        >
          Welcome to my website, I'm
        </p>

        <p
          className={`
          text-cyan-700
            text-5xl
          `}
        >
          Julien Pinson
        </p>

        <p
          className={`
          text-neutral-600
            text-3xl
          `}
        >
          I work with web technologies and embedded systems.
        </p>

        <p
          className={`
          text-neutral-600
            text-md
          `}
        >
          I'm a <span className='text-cyan-600'>Belgium</span> based <span className='text-cyan-600'>Business Computing degree student</span> (second year), first off <span className='text-cyan-600'>self-taught</span> on <span className='text-cyan-600'>web solutions</span> and integration with embedded systems.
        </p>

      </section>
    </Layout>
  )
}