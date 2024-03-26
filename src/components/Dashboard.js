import React from 'react'
import { AiOutlineScissor } from 'react-icons/ai'
import { CiVideoOn } from 'react-icons/ci'
import { IoMicOutline } from 'react-icons/io5'
import { SiPodcastindex } from 'react-icons/si'

const Dashboard = () => {
  return (
    <div className='p-6'>
      <span className='text-2xl  mb-6'>Let's create some </span>
      <span className='font-bold text-2xl'>Videos!</span>
      <div className='grid grid-cols-4 gap-4 w-[1000px] h-[80px]'>
        <div className='bg-white rounded-lg shadow-md p-3 flex  mt-6  gap-6'>
          {/* <Play className='text-blue-500 mb-2' size={40} /> */}
          <div>
            <AiOutlineScissor className='bg-purple-100 text-purple-600 text-4xl p-2  rounded' />
          </div>
          <div>
            <button className='text-blue-500 font-semibold '>
              Create Project
            </button>
          </div>
        </div>
        <div className='bg-white rounded-lg shadow-md p-3 flex  mt-6  gap-6'>
          {/* <Camera className='text-blue-500 mb-2' size={40} /> */}
          <CiVideoOn className='bg-red-100 text-red-600 text-4xl p-2  rounded' />
          <button className='text-blue-500 font-semibold '>Record Video</button>
        </div>
        <div className='bg-white rounded-lg shadow-md p-3 flex  mt-6  gap-6'>
          <SiPodcastindex className='bg-blue-100 text-blue-500 text-4xl p-2  rounded' />
          <button className='text-blue-500 font-semibold'>Go Live</button>
        </div>
        <div className='bg-white rounded-lg shadow-md p-3 flex  mt-6  gap-6'>
          {/* <Podcast className='text-blue-500 mb-2' size={40} /> */}
          <IoMicOutline className='bg-yellow-100 text-yellow-600 text-4xl p-2  rounded' />
          <button className='text-blue-500 font-semibold '>
            Record Podcast
          </button>
        </div>
      </div>

      <div className='mt-8'>
        <h2 className='text-xl  mb-4'>My Recent Videos</h2>
        <div className='grid grid-cols-3 '>
          <div className='bg-gray-200 rounded-lg aspect-video relative '>
            <img src='/assets/images1.jpeg' alt='Draft' className='w-full' />
            <span className='absolute bottom-3 right-3 text-white bg-gray-900 rounded-md px-2 py-1 text-xs'>
              00:46
            </span>
          </div>

          {/* Add more video thumbnails */}
        </div>
      </div>

      <div className='mt-4 text-center'>
        <a href='/' className='text-blue-500 font-semibold'>
          See All &gt;
        </a>
      </div>

      <div className='mt-8'>
        <h3 className='text-xl mb-4'>Start with popular template</h3>

        <div className='grid grid-cols-3 gap-4'>
          <div className='bg-gray-200 rounded-lg aspect-video relative'>
            <img
              src='.\weather.jpg'
              alt='weather'
              className='absolute top-3 left-3'
            />
          </div>
          <div className='bg-gray-200 rounded-lg aspect-video relative'>
            <img
              src='weather.jpg'
              alt='weather'
              className='absolute top-3 left-3'
            />
          </div>
          <div className='bg-gray-200 rounded-lg aspect-video relative'>
            <img
              src='weather.jpg'
              alt='weather'
              className='absolute top-3 left-3'
            />
          </div>
          {/* Add more video thumbnails */}
        </div>

        <div className='grid grid-cols-4 gap-4'>
          {/* Add template thumbnails */}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
