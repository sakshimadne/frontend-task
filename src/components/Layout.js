import React from 'react'
import {
  FaSearch,
  FaArrowUp,
  FaUserPlus,
  FaQuestionCircle,
  FaBell,
  FaUser,
} from 'react-icons/fa'
import Nav from './Nav'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
     
      <div className='bg-gray-800 text-white py-4 px-3'>
        <div className='flex flex-col space-y-2'>
          <a
            href='#'
            className='flex items-center px-2 py-1 rounded-md hover:bg-gray-700'
          >
            <span className='mr-2'>K</span>
            <span>Home</span>
          </a>
          <a
            href='#'
            className='flex items-center px-2 py-1 rounded-md bg-blue-500 hover:bg-blue-600'
          >
            <span className='mr-2'>
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
            </span>
            <span>Dashboard</span>
          </a>
          {/* Add remaining sidebar links */}
        </div>
      </div>

      {/* Main Content Area */}
      <div className='flex-1 bg-gray-900 p-4'>
        {/* Navbar */}
        
        <div className='flex items-center justify-between mb-4'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search'
              className='bg-gray-800 text-white rounded-md py-1 px-3 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <FaSearch className='absolute left-2 top-2 text-gray-400' />
          </div>
          <div className='flex items-center'>
            <button className='bg-yellow-500 hover:bg-yellow-600 text-white rounded-md px-4 py-1 mr-4'>
              <FaArrowUp className='inline-block mr-2' />
              Upgrade
            </button>
            <button className='bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-1 mr-4'>
              <FaUserPlus className='inline-block mr-2' />
              Invite
            </button>
            <div className='flex items-center ml-4'>
              <FaQuestionCircle className='text-gray-400 hover:text-white mr-4 cursor-pointer' />
              <FaBell className='text-gray-400 hover:text-white mr-4 cursor-pointer' />
              <FaUser className='text-gray-400 hover:text-white mr-4 cursor-pointer' />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className='bg-gray-800 rounded-md p-4'>
          {/* Your main content goes here */}
        </div>
      </div>
    </div>
  )
}

export default Layout
