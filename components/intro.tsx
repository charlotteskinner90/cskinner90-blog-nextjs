import { HEADLINE } from "../lib/constants"

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="dark:text-neutral-50 text-6xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight md:pr-8 text-center md:text-left">
        Charlotte Skinner
      </h1>
      <div className="flex-col md:flex-row flex items-center md:justify-between">
        <h4 className="dark:text-neutral-50 text-right text-lg mt-5 md:mr-5 lg:mr-5 md:pl-0">
          {HEADLINE}
        </h4>
      </div>
    </section>
  )
}

export default Intro
