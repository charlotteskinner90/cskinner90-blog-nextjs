import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex flex-row justify-between'>
      <h2 className="dark:text-neutral-50 text-2xl md:text-4xl font-bold tracking-tight leading-tight mb-20 mt-8">
        <Link href="/" className="hover:underline">
          Charlotte Skinner
        </Link>
      </h2>
    </div>
  )
}

export default Header
