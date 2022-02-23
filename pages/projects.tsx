import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { ProjectCard } from '../components/project-card/project-card';
import { MarkdownArray, MarkdownObject } from '../lib/markdown/markdown';

export default function Projects({ 
  data 
} : { 
  data : MarkdownObject<ProjectsMetadata>[]
}): JSX.Element {
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
          data.map((val, key) => (
            <ProjectCard
              key={key}
              url={`/projects/${val.id}`}
              title={val.metadata.title}
              imgPath={`/public/images/projects/${val.id}/${"thumbnail"}.jpg`}
              tags={val.metadata.tags}
            /> 
          ))
        }
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () : Promise<GetStaticPropsResult<{ 
  data: MarkdownObject<ProjectsMetadata>[]
}>> => {
  // Get data sorted by most recent date.
  const data = new MarkdownArray<ProjectsMetadata>(projectsFolderPath)
  .getArrayOfObjects().sort( (a, b) => {
    return (a.metadata.date < b.metadata.date) 
    ? 1
    : (a.metadata.date > b.metadata.date)
      ? -1
      : 0
    ;
  });

  // The value of the `props` key will be passed to the `Home` component
  return {
    props: {
      data
    }
  }
}

export const projectsFolderPath = "/data/projects"

export type ProjectsMetadata = {
  title: string,
  date: string,
  tags: string[]
}