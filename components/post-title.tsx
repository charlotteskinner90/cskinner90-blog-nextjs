import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="dark:text-neutral-50 text-5xl md:text-7xl lg:text-8xl font-bold tracking-normal leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle
