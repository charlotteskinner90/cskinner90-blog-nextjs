import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  tags: Array<string>
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  // author,
  slug,
  tags
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} loading="lazy" height={250} width={400} />
      </div>
      <h3 className="dark:text-neutral-50 text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="dark:text-neutral-50 text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="dark:text-neutral-50 text-lg leading-relaxed mb-4">{excerpt}</p>
      {/* <Avatar name={author.name} picture={author.picture} /> */}
      {tags && (
        <div className='flex'>
            {tags.map((tag, i) => (
              <span
                key={`${title}_tag_${i}`}
                className="px-4 py-2 mr-1.5 mt-1 rounded-full border border-gray-300 text-gray-500 dark:text-neutral-50 font-semibold text-sm flex align-center w-max">
                {tag}
              </span>
            ))}
        </div>
      )}
    </div>
  )
}

export default PostPreview
