import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../button/button';
import { ExternalLink } from '../icons/externalLink/external-link';
import { Github } from '../icons/github/github';
import { Plus } from '../icons/plus/plus';
import { Tag } from '../tag/tag';
import styles from './project-card.module.scss';

export function ProjectCard(
  { thumbnail, title, description, tags, url, github, externalLink, className } : 
  {
    thumbnail: string;
    description: string;
    title: string;
    tags: string[];
    url: string;
    github: string;
    externalLink: string;
    className?: string;
  }) {
  return (
    <article
      className={`
        ${className}
        group
        grid
        grid-cols-1
        auto-rows-fr
        lg:grid-cols-2
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
          bg-secondary-900
          bg-opacity-60
          hover:bg-opacity-0
        `}
      >
        <Image 
          src={`/..${thumbnail}`} 
          layout="responsive"
          width="100%"
          height="100%"
          className='mix-blend-overlay group-hover:mix-blend-normal'
        />
      </div>

      <div
        className={`
          col-span-1
          w-full
          grid
          grid-rows-7
          grid-cols-1
        `}
      >
        {/* title */}
        <div
          className={`
            row-span-1
            mx-auto
            my-auto
          `}
        >
          <h2
            className={`
              text-2xl
              font-sans
            `}
          >
            {title}
          </h2>
        </div>

        {/* Description */}
        <div
          className={`
            row-span-2
            mx-auto
            text-center
            my-auto
            bg-primary-700
            text-gray-700
            rounded
            shadow-2xl
            p-3
          `}
        >
          {description}
        </div>

        {/* Learn more */}
        <div
          className={`
            row-span-1
            mx-auto
            my-auto
          `}
        > 
          <Button
            size={"XS"}
            className={`
              border-secondary-900
              text-secondary-900
              hover:bg-secondary-900
              text-2xl
            `}
          >
            <Link href={url} passHref>
                <a>
                  <Plus className='w-5' />
                </a>
            </Link>
          </Button>
        </div>
        
        {/* Tags */}
        <div
          className={`
            row-span-2
            flex
            flex-wrap
            items-start
            gap-2
            mx-auto
            my-auto
            text-gray-700
          `}
        >
          {
            (!tags)? "" : tags.map((data, key) => (
              <Tag
                key={key}
                className={`
                  bg-primary-500
                `}
              >
                {data}
              </Tag>
            ))
          }
        </div>

        {/* Links */}
        <div
          className={`
            flex
            gap-5
            mx-auto
            my-auto
          `}
        > 
          {
            (github) 
            ? 
              <a
                href={github}
                className={`
                  fill-gray-500
                  hover:fill-secondary-900
                `}
              >
                <Github></Github>
              </a>
            : ""
          }

          {
            (externalLink)
            ?
              <a
              href={externalLink}
              className={`
              fill-gray-500
              hover:fill-secondary-900
              `}
            >
              <ExternalLink></ExternalLink>
            </a>
            : ""
          }

          
        </div>
      </div>
    </article>
  )
}