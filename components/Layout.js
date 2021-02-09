import React from 'react'
import Head from 'next/Head'

const Layout = ({ title, children }) => {
  return (
    <div className="bg-gray-300 dark:bg-black dark">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      header
      <main className="container mx-auto max-w-xl pt-8 min-h-screen ">
        {children}
      </main>
      footer
    </div>
  )
}

export default Layout
