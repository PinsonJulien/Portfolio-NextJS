import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { ProjectCard } from '../components/project-card/project-card';
import { MarkdownArray, MarkdownObject } from '../lib/markdown/markdown';
import { Tag } from '../components/tag/tag';
import React, { useEffect } from 'react';
import { StateProps } from './_app';

export default function Projects(
  props: StateProps & { data: MarkdownObject<ProjectsMetadata>[] }
) : JSX.Element {
  const [tags, setTags] = React.useState<{tag: string; active: boolean}[]>([]);
  const [projects, setProjects] = React.useState<MarkdownObject<ProjectsMetadata>[]>([...props.data]);
  
  props.data.forEach(el => {
    el.metadata.tags?.forEach(tag => {
      if (!tags.some((e) => e.tag === tag)) {
        const obj = { tag, active: true };
        tags.push(obj);
      }
    });
  });

  tags.sort((a, b) => {
    return a.tag.localeCompare(b.tag);
  });

  const toggleTag = (key: number) => {
    setTags(e => {
      return e.map((item, i) => {
        if (i === key) item.active = !item.active;
        return item;
      })
    })
  };

  const toggleTags = (state: boolean) => {
    setTags(e => {
      return e.map((item) => {
        item.active = state;
        return item;
      })
    })
  }

  useEffect(() => {
    // Shows any projects that matches at least one tag selected
    const activeTags: string[] = [];

    tags.forEach((tag) => {
      if (tag.active) activeTags.push(tag.tag);
    });

    const validProjects = [];

    props.data.forEach((e) => {
      const tags = e.metadata.tags;

      const hasTag = activeTags.some((tag) => {
        return tags.some((t) => t === tag);
      });

      if (!hasTag) return;

      validProjects.push(e);
    }); 

    setProjects(validProjects);
  }, [
    tags,
    props.data,
    setProjects
  ]);

  return (
    <Layout {...props}>
      <Head>
        <title>Projects - {siteTitle}</title>
      </Head>

      <div
        className={`
          w-full
          flex
          flex-col
          gap-y-10
        `}
      >
        <h1
          className={`
            text-gray-500
            text-3xl
            mx-auto
          `}
        >
          Projects
        </h1>

        <section
          className={`
            flex
            flex-col
            gap-6
          `}
        >
          <div
            className={`
              flex
              flex-wrap
              gap-5
              mx-auto
              items-start
              
            `}
          >
            {
              tags.map((tag, key) => 
                <Tag
                  key={key}
                  onClick = {() => toggleTag(key)}
                  className={`
                    text-gray-500
                    bg-primary-500
                    ${tag.active 
                      ? `
                        outline 
                        outline-2
                      outline-secondary-900
                      ` 
                      : ``
                    }
                  `}
                >
                  { tag.tag }
                </Tag>
              )
            }
          </div>
          <div
            className={`
              flex
              flex-wrap
              gap-5
              mx-auto
              items-start
            `}
          >
            {
              (() => {
                const actives = tags.some((e) => e.active);
                return (
                  <Tag
                    onClick = {() => toggleTags(!actives)}
                    className={`
                      text-gray-500
                      bg-primary-500
                      justify-self-center
                    `}
                  >
                    {
                      (actives) ? "Disable all" : "Enable all" 
                    }
                  </Tag>
                )
              })()
            }
          </div>
        </section>

        <section
          className={`
            grid
            grid-cols-1
            lg:w-full
            mx-auto
            gap-5
          `}
        >
          {
            (projects.length === 0) 
            ? 
              "Oops we found nothing !"
            :  
              projects.map((val, key) => (
                <ProjectCard
                  key={key}
                  url={`/projects/${val.id}`}
                  title={val.metadata.title}
                  description={val.metadata.description}
                  thumbnail={`/public/images/projects/${val.id}/thumbnail.jpg`}
                  tags={val.metadata.tags}
                  github={val.metadata.github}
                  externalLink = {val.metadata.externalLink}
                /> 
              ))
          }
        </section>
      </div>
      
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
  title: string;
  description: string;
  date: string;
  tags: string[];
  github: string;
  externalLink: string;
}