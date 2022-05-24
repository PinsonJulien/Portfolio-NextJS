import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, GetStaticPropsResult } from 'next';
import Head from 'next/head';
import Time from '../../components/time/time';
import Layout from '../../components/layout/layout';
import utilStyles from '../../styles/utils.module.scss'
import { MarkdownArray, MarkdownObject } from '../../lib/markdown/markdown';

import { generatePaths } from '../../lib/paths/paths';
import { projectsFolderPath, ProjectsMetadata } from '../projects';
import Image from 'next/image';
import rehypeRaw from 'rehype-raw';
import ReactMarkdown from 'react-markdown';

export default function Project({ 
  data
} : {
  data: MarkdownObject<ProjectsMetadata>
}): JSX.Element {

  const headerClasses: string = `
    text-secondary-900
    my-3
    before:content-['>']
    before:mr-2
    before:inline-block
  `;

  return (
    <Layout>
      <Head>
        <title>{data.metadata.title}</title>
      </Head>

      <article>
        <h1 className={utilStyles.headingXl}>{data.metadata.title}</h1>
        <div className={utilStyles.lightText}>
          <Time dateString={data.metadata.date} />
        </div>
        
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          children = {data.content}
          className={`
          `}
          components= {{
            iframe: ({...props}) => (
              <iframe 
                {...props} 
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className={`
                  aspect-video
                  w-1/2
                  mx-auto
                `}
              />
            ),
            h1: ({node, ...props}) => (
              <h1 
                {...props} 
                className={`
                  ${headerClasses}
                  text-2xl
                `} 
              />
            ),
            h2: ({node, ...props}) => (
              <h2 
                {...props} 
                className={`
                  ${headerClasses}
                  text-xl
                `} 
              />
            ),
            h3: ({node, ...props}) => (
              <h3 
                {...props} 
                className={`
                  ${headerClasses}
                  text-lg
                `} 
              />
            ),
            h4: ({node, ...props}) => (
              <h4 
                {...props} 
                className={`
                  ${headerClasses}
                  text-base
                `} 
              />
            ),
            h5: ({node, ...props}) => (
              <h5
                {...props} 
                className={`
                  ${headerClasses}
                  text-sm
                `} 
              />
            ),
            h6: ({node, ...props}) => (
              <h6
                {...props} 
                className={`
                  ${headerClasses}
                  text-xs
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
              <span
                className={`
                  block
                  w-1/2
                  mx-auto
                `}
              >             
                <Image
                  src={`/..${props.src}`}
                  layout="responsive"
                  width="100%"
                  height="100%" 
                  alt={props.alt}
                  className={`
                  `}
                />
              </span>
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