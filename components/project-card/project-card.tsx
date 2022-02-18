import Image from 'next/image';
import Link from 'next/link';
import { Tag } from '../tag/tag';
import styles from './project-card.module.scss';

export function ProjectCard(
  { imgPath, title, tags, url, className } : 
  {
    imgPath: string;
    title: string;
    tags: string[];
    url: string;
    className?: string;
  }) {
  return (
    <article
      className={`
        ${className}
      `}
    >
      <Link
        href={url}
        passHref
      >
        <a
          className={`
            group
            relative
            block
          `}
        >
          <Image 
            src={`/..${imgPath}`} 
            layout="responsive"
            width="100%"
            height="100%" 
            className={`
              group-hover:blur-sm
            `}
          />
          <h2
            className={`
              text-black
              absolute
              top-1/2
              left-1/2
              -translate-y-1/2
              -translate-x-1/2
              opacity-0
              group-hover:opacity-100
            `}
          >
            {title}
          </h2>
        </a>
      </Link>

      <div
        className={`
        text-white
          flex
          flex-wrap
          justify-center
          gap-2
          p-2.5
        `}
      >
        {
          (!tags)? "" : tags.map((data, key) => (
            <Tag
              key={key}
              className={`
                bg-gray-500
              `}
            >
              {data}
            </Tag>
          ))
        }
        
      </div>
    </article>
  )
}