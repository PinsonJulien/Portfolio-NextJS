import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout/layout';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { MarkdownArray, MarkdownObject } from '../lib/markdown/markdown';
import { Tag } from '../components/tag/tag';
import React, { useEffect } from 'react';
import { StateProps } from './_app';
import Image from 'next/image';
import { Button } from '../components/button/button';
import Link from 'next/link';
import SvgLink from '../components/SVG/SvgLink/SvgLink';
import { Github } from '../components/SVG/icons/github/github';
import { ExternalLink } from '../components/SVG/icons/externalLink/externalLink';

export const projectsFolderPath = "/data/projects";

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
                <ProjectTag 
                  key = {key}
                  active = {tag.active}
                  onClick = {() => toggleTag(key)}
                  text = {tag.tag}
                />
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
                  <ProjectTag 
                    onClick = {() => toggleTags(!actives)}
                    text = {(actives) ? "Disable all" : "Enable all"}
                    className = {`
                      justify-self-center
                    `}
                  />
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
            divide-y-2
            divide-neutral-400
            dark:divide-neutral-600
          `}
        >
          {
            (projects.length !== 0) && (
              projects.map((val, key) => (
                <ProjectCard 
                  key = { key }
                  data = { val }
                  className = {`py-3`}
                />
              ))
            )
          }
        </section>
      </div>
      
    </Layout>
  )
}

/* Data fetching from all markdown files */

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

  // props will be used by the page
  return {
    props: {
      data
    }
  }
}

export type ProjectsMetadata = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  github: string;
  externalLink: string;
}

/* COMPONENTS */

const ProjectTag = (
  {
    active = true,
    onClick,
    text,
    className
  } : {
    active?: boolean;
    onClick?: () => any;
    text: string;
    className?: string;
  }
) => {
  return (
    <Tag
      onClick = {onClick}
      className={`
        ${className}
        ${active 
          ? `
            text-neutral-200
            bg-blue-700
          ` 
          : `
            text-neutral-900
            bg-neutral-300
          `
        }
      `}
      >
      { text }
    </Tag>

  );

};

const ProjectCard = (
  {
    data,
    className
  } : {
    data: MarkdownObject<ProjectsMetadata>;
    className?: string;
  }
) => {
  const thumbnailPath = `/public/images/projects/${data.id}/thumbnail.jpg`;
  const url = `/projects/${data.id}`;

  return (
    <article
      className={`
        ${className}
        group
        grid
        grid-cols-1
        auto-rows-fr
        sm:grid-cols-2
        lg:grid-cols-3
        lg:auto-col-fr
        gap-y-5
        lg:gap-y-0
        lg:gap-x-5
      `}
    >
      {/* Image */}
      <div
        className={`
          w-full
          mx-auto
          rounded
        `}
      >
        <Image 
          src={`/..${thumbnailPath}`} 
          layout="responsive"
          width="100%"
          height="100%"
          className=''
        />
      </div>

      <div
        className={`
          col-span-1
          lg:col-span-2
          w-full
          flex
          flex-col
          px-5
          py-3
        `}
      >
        {/* title */}
        <div
          className={``}
        >
          <h2
            className={`
              text-2xl
              font-sans
            `}
          >
            {data.metadata.title}
          </h2>
        </div>

        {/* Tags */}
        <div
          className={`
            py-6
            flex
            flex-wrap
            items-start
            gap-2
            text-gray-700
          `}
        >
          {
            data.metadata.tags && data.metadata.tags.map((tag, key) => (
              <ProjectTag 
                key = {key}
                text = {tag}
              />
            ))
          }
        </div>


        {/* Description */}
        <div
          className={`
            mt-5
            text-neutral-700
            dark:text-neutral-300
          `}
        >
          <p>
            {data.metadata.description}
          </p>
        </div>
        

        {/* Links */}
        <div
          className={`
            flex
            gap-5
            mt-auto
          `}
        >
          <Link href={url} passHref>
              <a
                className= {`
                  bg-orange-600
                  hover:bg-orange-500
                  rounded-lg
                  p-3
                  text-xl
                  text-neutral-100
                `}
              >
                {"Read more"}
              </a>
          </Link>

          <div className='flex gap-x-3 ml-auto lg:ml-5'>
            {
              data.metadata.github && (
                <CardSvgLink
                  href = {data.metadata.github}
                >
                  <Github/>
                </CardSvgLink>
              )
            }

            {
              data.metadata.externalLink && (
                <CardSvgLink
                  href = {data.metadata.externalLink}
                >
                  <ExternalLink />
                </CardSvgLink>
              )
            }

          </div>
        </div>
      </div>
    </article>
  );
};

const CardSvgLink = (
  {
    href,
    children
  } : {
    href: string;
    children: JSX.Element
  }
) => {
  return (
    <SvgLink
      href={href}
      className={`
        my-auto
        fill-neutral-800
        dark:fill-neutral-200
        hover:fill-orange-600
      `}
      newTab
    >
      {children}
    </SvgLink>
  );
};