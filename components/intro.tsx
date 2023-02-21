import { HEADLINE } from "../lib/constants"

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="dark:text-neutral-50 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight md:pr-8 text-center md:text-left">
        Charlotte Skinner
      </h1>
      <div className="flex-col md:flex-row flex items-center md:justify-between">
        <h2 className="dark:text-neutral-50 text-center md:text-right text-lg mt-5 md:mr-5 md:ml-0 lg:mr-5 lg:ml-0 md:pl-0 mx-12">
          {HEADLINE}
        </h2>
      </div>
    </section>
  )
}

export default Intro
