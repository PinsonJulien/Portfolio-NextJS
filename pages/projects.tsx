import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Tag } from '../components/tag/tag';
import { ProjectCard } from '../components/project-card/project-card';
import { text } from 'stream/consumers';
import { getAllMetadata } from '../lib/markdown/markdown';

export default function Home({ allProjectsMetadata }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <h1 className="text-3xl font-bold underline">Projects</h1>
      <section
        className={`
          grid
          grid-cols-1
          lg:grid-cols-3
          w-9/12
          mx-auto
        `}
      >
        {
          allProjectsMetadata.map((data, key) => (
            <ProjectCard
              key={key}
              url={`/projects/${data.id}`}
              title={data.title}
              imgPath={`/public/images/projects/${data.id}/${"thumbnail"}.jpg`}
              tags={data.tags}
            /> 
          ))
        }
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // Get external data from the file system, API, DB, etc.
  //const allPostsData = getSortedPostsData()

  const allProjectsMetadata = getAllMetadata<{
    title: string,
    date: string,
    tags: string[]
  }>({
    directory: "projects",
    sortBy: "date"
  });

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      allProjectsMetadata
    }
  }
}