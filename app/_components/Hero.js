import React from 'react'

function Hero() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 text-gray-500 dark:text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Upload, Save and easily Share your files in one place

        <span className="sm:block">  </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Drag and drop your files on our cloud and share it with your friends and family securely with password protection
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-500 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/sign-in"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded border text-blue-600  dark:border-blue-600  dark:bg-transperent px-12 py-3 text-sm font-medium dark:text-white hover:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
