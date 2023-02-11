import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

const Footer = () => {
  return (
    <footer className="dark:bg-slate-800 bg-neutral-50 border-t border-neutral-200 dark:border-slate-900">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center justify-center">
          <div className='flex lg:flex-row justify-end'>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
              <a
                href="https://github.com/charlotteskinner90"
                className="mx-3 bg-black hover:bg-neutral-50 hover:text-black border border-black text-neutral-50 font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              >
                GitHub
              </a>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
              <a
                href="https://www.linkedin.com/in/charlotteskinner90"
                className="mx-3 bg-black hover:bg-neutral-50 hover:text-black border border-black text-neutral-50 font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
