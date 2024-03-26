import React, { useState } from 'react'



import DurationTimeline from './Delete'

const Dashboard = () => {
  const [size, setSize] = useState('Original (16:9)')
  const [backgroundType, setBackgroundType] = useState('Color')
  const [backgroundColor, setBackgroundColor] = useState('#000000')
  const [removeBackgroundNoise, setRemoveBackgroundNoise] = useState(false)

  const handleSizeChange = (event) => {
    setSize(event.target.value)
  }

  const handleBackgroundTypeChange = (event) => {
    setBackgroundType(event.target.value)
  }

  const handleBackgroundColorChange = (event) => {
    setBackgroundColor(event.target.value)
  }

  const handleRemoveBackgroundNoiseChange = (event) => {
    setRemoveBackgroundNoise(event.target.checked)
  }
  return (
    <div className=''>
      <div className='grid grid-cols-2 gap-3 m-4 '>
        <div className='w-full h-full max-w-md  border border-gray-300 rounded-lg p-4'>
          <h2 className='font-bold mb-2  '>Project Settings</h2>

          {/* <div className='px-4 py-3 bg-white border-b border-gray-300 flex items-center justify-between'></div> */}

          <div className='mb-4'>
            <h3 className='text-xl  mb-2'>Size</h3>
            <select
              value={size}
              onChange={handleSizeChange}
              className='w-full p-2 border border-gray-300 rounded'
            >
              <option value='Original (16:9)'>Original (16:9)</option>
              <option value='Original (16:9)'>Original (15:9)</option>
              <option value='Original (16:9)'>Original (10:9)</option>
            </select>
          </div>

          <div className='mb-4 border border-gray-300 rounded p-4'>
            <h3 className='font-bold mb-2 mb-2'>Background</h3>
            <div className='flex items-center mb-2'>
              <label className='mr-2'>
                <input
                  type='radio'
                  value='Color'
                  checked={backgroundType === 'Color'}
                  onChange={handleBackgroundTypeChange}
                  className='mr-1'
                />
                Color
              </label>
              <input
                type='color'
                value={backgroundColor}
                onChange={handleBackgroundColorChange}
                disabled={backgroundType !== 'Color'}
                className='ml-2'
              />
            </div>
            <div className='flex items-center'>
              <label className='mr-2'>
                <input
                  type='radio'
                  value='Image'
                  checked={backgroundType === 'Image'}
                  onChange={handleBackgroundTypeChange}
                  className='mr-1'
                />
                Image
              </label>
            </div>
          </div>

          <div className='mb-4 border border-gray-300 rounded p-4'>
            <h3 className='text-md font-bold mb-2'>Audio</h3>
            <label className='flex items-center'>
              <input
                type='checkbox'
                checked={removeBackgroundNoise}
                onChange={handleRemoveBackgroundNoiseChange}
                className='mr-2'
              />
              <span>Clean Audio</span>
              <span className='ml-1 text-gray-500'>
                Remove background noise
              </span>
            </label>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-2'>Duration</h3>
            {/* Add duration settings */}
          </div>

          {/* <button className='px-4 py-2 bg-blue-500 text-white rounded mt-6'>
            Done
          </button> */}
        </div>

        <div className='border-2 border-gray-300 rounded-lg overflow-hidden w-full'>
          <div className='px-4 py-3 bg-white border-2 border-gray-300 flex items-center justify-between'>
            <h2 className='text-xl  text-gray-400'>Project Name</h2>

            <div className='flex items-center space-x-3'>
              <button className='p-2 bg-gray-200 text-gray-800 rounded-md flex items-center'>
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
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
              </button>
              <button className='p-2 bg-gray-200 text-gray-800 rounded-md flex items-center ml-2'>
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
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </button>
              <button className='px-4 py-2 bg-gray-200 text-gray-800 rounded-md flex items-center'>
                <span>Invite</span>
                <svg
                  className='w-5 h-5 ml-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z' />
                </svg>
              </button>

              <button className='px-4 py-2 bg-gray-900 text-white rounded-md flex items-center'>
                <span>Done</span>
                <svg
                  className='w-5 h-5 ml-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule=''
                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='relative w-full h-96'>
            <img
              src='/assets/images1.jpeg'
              alt='Beach with waves'
              className='absolute inset-0 w-full h-full object-cover'
            />
            <div className='absolute bottom-4 right-4 px-2 py-1 bg-opacity-60 bg-slate-200 text-black text-sm rounded'>
              00:46
            </div>
          </div>
        </div>

        
      </div>
          <DurationTimeline />
    </div>
  )
}

export default Dashboard
