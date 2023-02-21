import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import PostType from '../interfaces/post'

const PostHeader = ({ title, coverImage, date, author, tags }: PostType) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} width={1300} height={630} priority={true} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="dark:text-neutral-50 mb-16 text-lg">
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
    </>
  )
}

export default PostHeader
