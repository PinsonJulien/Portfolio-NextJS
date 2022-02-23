import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import Date from '../../components/time/time';
import Layout from '../../components/layout/layout';
import utilStyles from '../../styles/utils.module.scss'
import { MarkdownArray, MarkdownObject } from '../../lib/markdown/markdown';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { generatePaths } from '../../lib/paths/paths';
import { projectsFolderPath, ProjectsMetadata } from '../projects';
import Image from 'next/image';

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
          className={`
          `}
          components= {{
            h1: ({node, ...props}) => (
              <h1 
                {...props} 
                className={`
                  text-green-500
                  text-2xl
                  my-3
                  before:content-['>']
                  before:mr-2
                  before:inline-block
                `} 
              />
            ),
            p: ({...props}) => (
              <p 
                {...props} 
                className={`
                  py-5
                `}
              />
            ),
            img: ({...props}) => 
            (
              <div
                className={`
                  w-1/2
                  mx-auto
                `}
              >
                <Image
                  src={`/..${props.src}`}
                  layout="responsive"
                  width="100%"
                  height="100%" 
                  className={`
                  `}
                />
                {props.alt}
              </div>
            )
          }}
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async (): Promise<GetStaticPathsResult> => {
  // Return a list of possible value for id
  const markdowns = new MarkdownArray(projectsFolderPath);
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
  
  const data = new MarkdownArray<ProjectsMetadata>(projectsFolderPath)
  .getById(id as MarkdownObject<ProjectsMetadata>["id"])
  .getProperties();

  return {
    props: {
      data
    }
  }
} 