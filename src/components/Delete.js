import React, { useState, useRef, useEffect } from 'react'
import WaveSurfer from 'wavesurfer.js'
import axios from 'axios'
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import { AiFillSound } from 'react-icons/ai'
import { AiOutlineZoomOut } from 'react-icons/ai'
import { AiFillMessage } from 'react-icons/ai'
import { HiScissors } from 'react-icons/hi2'
import { GoFileMedia } from 'react-icons/go'
import { FaMicrophone } from 'react-icons/fa6'
import { AiOutlineZoomIn } from 'react-icons/ai'

const DurationTimeline = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [trackInfo, setTrackInfo] = useState(null)
  const [volume, setVolume] = useState(0.5)
  const waveformRef = useRef(null)
  const wavesurfer = useRef(null)

  useEffect(() => {
    const fetchTrackInfo = async () => {
      const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/track/3135556',
        headers: {
          'X-RapidAPI-Key':
            '8aa024de11msh55e3424e304192dp19a450jsn7da694adfd7f',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        },
      }

      try {
        const response = await axios.request(options)
        setTrackInfo(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchTrackInfo()
  }, [])

  useEffect(() => {
    if (trackInfo) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: 'rgba(0, 0, 255, 0.5)',
        progressColor: 'rgba(255, 255, 255, 0.5)',
        barWidth: 2,
        barRadius: 3,
        cursorWidth: 1,
        height: 50,
        barGap: 2,
        interact: true,
        cursorColor: 'red',
      })

      wavesurfer.current.load(trackInfo.preview)

      wavesurfer.current.on('audioprocess', () => {
        setCurrentTime(wavesurfer.current.getCurrentTime())
        const progress =
          wavesurfer.current.getCurrentTime() / wavesurfer.current.getDuration()
        updateProgressColor(progress)
      })

      wavesurfer.current.on('seek', () => {
        setCurrentTime(wavesurfer.current.getCurrentTime())
      })

      return () => {
        wavesurfer.current.destroy()
      }
    }
  }, [trackInfo])

  useEffect(() => {
    if (wavesurfer.current) {
      wavesurfer.current.setVolume(volume)
    }
  }, [volume])

  const updateProgressColor = (progress) => {
    const waveform = waveformRef.current
    const gradientColor = `linear-gradient(to right, rgba(255, 255, 255, 0.5) ${
      progress * 100
    }%, rgba(0, 0, 255, 0.5) ${progress * 100}%)`
    waveform.style.backgroundImage = gradientColor
  }

  const handlePlayPause = () => {
    if (isPlaying) {
      wavesurfer.current.pause()
    } else {
      wavesurfer.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value)
    setVolume(newVolume)
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  if (!trackInfo) {
    return <div>Loading...</div>
  }

  return (
    <div className='relative'>
      <div className='flex justify-between items-center mb-4 gap-4'>
        <div className='flex flex-1 gap-4 space-x-5'>
          <button className='px-4 py-2 text-gray rounded-md focus:outline-none mr-4'>
            <HiScissors />
            <span>Split</span>
          </button>
          <button className='px-4 py-2 text-gray rounded-md focus:outline-none mr-4'>
            <GoFileMedia />
            <span>Add media</span>
          </button>
          <button className='px-4 py-2 text-gray rounded-md focus:outline-none mr-4'>
            <FaMicrophone />
            <span>Voice over</span>
          </button>
        </div>

        <div className='flex flex-1 gap-4  space-x-5 item-center'>
          <button
            className='px-4 py-2  text-gray rounded-md focus:outline-none'
            onClick={() => wavesurfer.current.skip(-10)}
          >
            <MdOutlineKeyboardDoubleArrowLeft />
          </button>
          <button
            className='px-4 py-2  text-gray rounded-md focus:outline-none'
            onClick={handlePlayPause}
          >
            {isPlaying ? 'pause' : 'play'}
          </button>
          <button
            className='px-4 py-2 bg-gray-500 text-white rounded-md focus:outline-none'
            onClick={() => wavesurfer.current.skip(10)}
          >
            <MdOutlineKeyboardDoubleArrowRight />
          </button>
        </div>

        <div className='flex flex-1 gap-4 justify-end  space-x-5'>
          <button
            className='px-4 py-2  text-gray rounded-md focus:outline-none ml-4'
            onClick={() => wavesurfer.current.skip(10)}
          >
            <AiFillSound />
          </button>
          <button
            className='px-4 py-2  text-gray rounded-md focus:outline-none ml-4'
            onClick={() => wavesurfer.current.skip(10)}
          >
            <AiOutlineZoomOut className='text-xl' />
          </button>
          <button>
            <div>
              <input
                type='range'
                min='0'
                max='1'
                step='0.01'
                value={volume}
                onChange={handleVolumeChange}
              />
            </div>
          </button>
          <button
            className='px-4 py-2  text-gray rounded-md focus:outline-none ml-4'
            onClick={() => wavesurfer.current.skip(10)}
          >
            <AiOutlineZoomIn className='text-xl' />
          </button>
          <button
            className='px-4 py-2  text-gray rounded-md focus:outline-none ml-4'
            onClick={() => wavesurfer.current.skip(10)}
          >
            <span>Fit</span>
          </button>
          <button className='px-4 py-2 rounded-md focus:outline-none ml-4'>
            <AiFillMessage className='text-xl text-gray' />
          </button>

          <div className=' px-4 py-2 text-gray rounded-md focus:outline-none ml-4'>
            {formatTime(currentTime)} /
            {formatTime(wavesurfer.current?.getDuration() || 0)}
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center mb-4 gap-4 w-full '>
        <div ref={waveformRef} className='w-full h-10 w-full '></div>
      </div>
    </div>
  )
}

export default DurationTimeline
