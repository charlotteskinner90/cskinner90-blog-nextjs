import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import PostType from '../interfaces/post'

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  tags
}: PostType) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} width={1300} height={630} priority={true} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="dark:text-neutral-50 mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="dark:text-neutral-50 mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
            {tags && (
              <div className='flex'>
                  {tags.map((tag, i) => (
                    <span
                      key={`${title}_tag_${i}`}
                      className="px-4 py-2 mr-1.5 mt-3 rounded-full border border-gray-300 text-gray-500 dark:text-neutral-50 font-semibold text-sm flex align-center w-max">
                      {tag}
                    </span>
                  ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <p className="dark:text-neutral-50 text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  )
}

export default HeroPost
