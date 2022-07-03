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
          className={`
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


        {/* Description */}
        <div
          className={`
            mt-5
            text-gray-700
          `}
        >
          <p>
            {description}
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
                Read more
              </a>
            </Link>
          </Button>
          <div className='flex gap-x-3 ml-auto lg:ml-5'>
            {
              (github) 
              ? 
                <a
                  href={github}
                  className={`
                    my-auto
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
                  my-auto
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
      </div>
    </article>
  )
}