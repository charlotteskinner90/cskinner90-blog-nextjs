import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
  loading?: "eager" | "lazy"
  width?: number
  height?: number
}

const CoverImage = ({ title, src, slug, loading, width, height }: Props) => {
  const image = (
    <Image
      src={src}
      loading={loading || 'eager'}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-full rounded-md', {
        'hover:shadow-xl transition-shadow duration-200': slug,
      })}
      width={width}
      height={height}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
