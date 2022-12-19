import { HEADLINE } from "../lib/constants"
import useDarkMode from "../lib/useDarkMode"

const Intro = () => {
  const [colorTheme, setTheme] = useDarkMode()

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="dark:text-white text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 text-center md:text-left">
        Charlotte Skinner
      </h1>
      <div className="flex-col md:flex-row flex items-center md:justify-between">
        <h4 className="dark:text-white text-center md:text-left text-lg mt-5 md:mr-5 lg:mr-5 md:pl-8">
          {HEADLINE}
        </h4>
        {colorTheme === "light" ? (
          <svg
            onClick={() => setTheme("light")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-5 dark:text-white cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setTheme("dark")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mt-5 dark:text-white cursor-pointer rounded-full hover:shadow-lg transition-shadow duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </div>
    </section>
  )
}

export default Intro
