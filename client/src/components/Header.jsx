import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div className='text-center mt-20 mb-8'>

        <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
          <p>New: AI feature Integrated</p>
          <img src={assets.star_icon} className='w-2.5' alt="" />
        </div>


        <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'>You Own <span className='text-blue-600'> Blogging </span> <br/>Platform </h1>
        <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>This user-friendly, responsive blogging platform empowers individuals to express ideas and stories with ease. Designed 
          for simplicity and performance, it enables seamless writing, editing, and management of blog posts.</p>


        <form className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden">
          <input type="text" placeholder="Search for blogs" required className='w-full pl-2 py-1  outline-none'/>
          <button type="submit" className='bg-blue-600 text-white w-32 px-5 py-3 m-2 rounded hover:scale-105 transition-all'>Search</button>
        </form>


      </div>
    <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50'/>
    </div>
  )
}

export default Header
