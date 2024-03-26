import React from 'react'

function VideoEditor() {
  return (
    <div className='flex'>
      <div className='w-64 bg-gray-100'>
        <div className='border-b border-gray-300'>
          <div className='p-4'>Settings</div>
          <div className='p-4'>
            {/* settings content */}
            <div>Video Size: 1920x1080</div>
            <div>Background Color: #000000</div>
          </div>
        </div>
        <div className='border-b border-gray-300'>
          <div className='p-4'>Media</div>
          <div className='p-4'>
            {/* media content */}
            <div>Audio: song.mp3</div>
            <div>Image: image.jpg</div>
          </div>
        </div>
        <div className='border-b border-gray-300'>
          <div className='p-4'>Audio</div>
          <div className='p-4'>
            {/* audio content */}
            <div>Clean Audio</div>
            <div>Remove Background Noise</div>
          </div>
        </div>
        <div className='border-b border-gray-300'>
          <div className='p-4'>Subtitles</div>
          <div className='p-4'>
            {/* subtitles content */}
            <div>Add Subtitles</div>
          </div>
        </div>
      </div>
      <div className='flex-1'>
        <div className='h-96 bg-black'>
          {/* video preview */}
          <img
            src='path/to/video-preview.jpg'
            alt='Video Preview'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='relative h-40 bg-white'>
          <div className='absolute inset-0 bottom-12 bg-gray-100'>
            {/* audio waveform */}
            <img
              src='path/to/audio-waveform.png'
              alt='Audio Waveform'
              className='w-full h-full object-cover'
            />
          </div>
          <div
            className='absolute inset-0 bottom-12 w-0.5 bg-red-500'
            style={{ left: '50%' }}
          >
            {/* playhead */}
          </div>
          <div className='absolute bottom-0 inset-x-0 h-12 bg-gray-300 flex items-center justify-center space-x-4'>
            <button className='px-4 py-2 bg-blue-500 text-white'>Split</button>
            <button className='px-4 py-2 bg-blue-500 text-white'>
              Add Media
            </button>
            <button className='px-4 py-2 bg-blue-500 text-white'>
              Voiceover
            </button>
          </div>
          <div className='absolute right-4 bottom-4'>00:01:05</div>
        </div>
      </div>
    </div>
  )
}

export default VideoEditor
