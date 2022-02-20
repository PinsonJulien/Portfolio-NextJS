import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import Date from '../../components/time/time';
import Layout from '../../components/layout/layout';
import utilStyles from '../../styles/utils.module.scss'
import { MarkdownArray, MarkdownObject } from '../../lib/markdown/markdown';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { generatePaths } from '../../lib/paths/paths';
import { ProjectsMetadata } from '../projects';

export default function Project({ 
  data
} : {
  data: MarkdownObject<ProjectsMetadata>
}): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>{data.metadata.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{data.metadata.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={data.metadata.date} />
        </div>

        <ReactMarkdown
          children = {data.content}
          components= {{
            h1: ({node, ...props}) => (
              <h1 className='text-green-500' {...props}/>
            )
          }}
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async (): Promise<GetStaticPathsResult> => {
  // Return a list of possible value for id
  const markdowns = new MarkdownArray("projects");
  const paths = generatePaths(markdowns.getArrayOfId());

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ 
  params: {
    id
  } 
} : {
  params: {
    id: MarkdownObject<ProjectsMetadata>["id"]
  } 
}) : Promise<GetStaticPropsResult<{ 
  data: MarkdownObject<ProjectsMetadata> 
}>> => {
  // Fetch necessary data for the blog post using params.id
  
  const data = new MarkdownArray<ProjectsMetadata>("projects")
  .getById(id as MarkdownObject<ProjectsMetadata>["id"])
  .getProperties();

  return {
    props: {
      data
    }
  }
} 