import React from 'react'
import {
  FaSearch,
  FaUserPlus,
  FaQuestionCircle,
  FaBell,
} from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { AiFillThunderbolt } from 'react-icons/ai'

const Nav = () => {
  return (
    <header className='flex items-center justify-between px-4 py-2 bg-white '>
      <div className='flex items-center'>
        <div className='relative mr-4'>
          <input
            type='text'
            placeholder='Search'
            className='bg-gray-100 text-gray-800 rounded-md py-1 px-3 pl-8 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <FaSearch className='absolute left-2 top-2 text-gray-400' />
        </div>
      </div>
      <div className='flex items-center '>
        <button className='bg-yellow-100 rounded-md px-4 py-2 mr-4'>
          Upgrade
          <AiFillThunderbolt className='inline-block ml-2 text-yellow-400 text-xl' />
        </button>
        <button className='bg-gray-100 rounded-md px-4 py-2 mr-4'>
          Invite
          <FaUserPlus className='inline-block ml-2' />
        </button>
        <div className='flex items-center ml-4'>
          <FaQuestionCircle className='text-gray-400 hover:text-gray-600 mr-4 cursor-pointer text-3xl' />
          <FaBell className='text-gray-400 hover:text-gray-600 mr-4 cursor-pointer text-3xl' />
          <AiOutlineUser className='text-gray-400 hover:text-gray-600 mr-4 cursor-pointer text-3xl' />
        </div>
      </div>
    </header>
  )
}

export default Nav
