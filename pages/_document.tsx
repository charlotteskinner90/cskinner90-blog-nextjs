import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='min-h-screen bg-neutral-50 dark:bg-slate-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
