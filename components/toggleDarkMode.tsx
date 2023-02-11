import useDarkMode from "../lib/useDarkMode"

const DarkModeToggle = () => {
    const [colorTheme, setTheme] = useDarkMode()
    return (
        <button
            onClick={() => {
                colorTheme === 'light' ? setTheme('light') : setTheme('dark')
            }}
            title="Toggle dark mode"
            className="fixed z-90 lg:bottom-10 lg:right-10 bottom-4 right-4 bg-pink-600 lg:w-16 lg:h-16 w-14 h-14 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-pink-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
        >
            {colorTheme === 'light' ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 dark:text-neutral-50 cursor-pointer"
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
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 dark:text-neutral-50 cursor-pointer rounded-full hover:shadow-lg transition-shadow duration-200"
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
        </button>
    )}


export default DarkModeToggle;