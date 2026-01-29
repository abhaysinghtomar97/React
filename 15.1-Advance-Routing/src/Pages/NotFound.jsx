import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white px-4">
      <h1 className="text-4xl font-extrabold text-sky-400">404</h1>

      <h2 className="mt-2 text-3xl font-semibold">
        Page Not Found
      </h2>


      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-sky-400 px-6 py-3 text-slate-900 font-medium hover:bg-sky-300 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default NotFound
