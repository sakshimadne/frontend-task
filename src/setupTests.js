// import React, { useState, useRef, useEffect } from 'react'
// import WaveSurfer from 'wavesurfer.js'
// import axios from 'axios'
// import Nouislider from 'nouislider-react'
// import 'nouislider/distribute/nouislider.css'
// // import './App.css'

// let ffmpeg

// const DurationTimeline = () => {
//   const [isPlaying, setIsPlaying] = useState(false)
//   const [currentTime, setCurrentTime] = useState(0)
//   const [trackInfo, setTrackInfo] = useState(null)
//   const [videoDuration, setVideoDuration] = useState(0)
//   const [endTime, setEndTime] = useState(0)
//   const [startTime, setStartTime] = useState(0)
//   const [videoSrc, setVideoSrc] = useState('')
//   const [videoFileValue, setVideoFileValue] = useState('')
//   const [isScriptLoaded, setIsScriptLoaded] = useState(false)
//   const [videoTrimmedUrl, setVideoTrimmedUrl] = useState('')
//   const waveformRef = useRef(null)
//   const videoRef = useRef()
//   const wavesurfer = useRef(null)
//   let initialSliderValue = 0

//   const loadScript = (src) => {
//     return new Promise((onFulfilled, _) => {
//       const script = document.createElement('script')
//       let loaded
//       script.async = 'async'
//       script.defer = 'defer'
//       script.setAttribute('src', src)
//       script.onreadystatechange = script.onload = () => {
//         if (!loaded) {
//           onFulfilled(script)
//         }
//         loaded = true
//       }
//       script.onerror = function () {
//         console.log('Script failed to load')
//       }
//       document.getElementsByTagName('head')[0].appendChild(script)
//     })
//   }

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0]
//     const blobURL = URL.createObjectURL(file)
//     setVideoFileValue(file)
//     setVideoSrc(blobURL)
//   }

//   const convertToHHMMSS = (val) => {
//     const secNum = parseInt(val, 10)
//     let hours = Math.floor(secNum / 3600)
//     let minutes = Math.floor((secNum - hours * 3600) / 60)
//     let seconds = secNum - hours * 3600 - minutes * 60

//     if (hours < 10) {
//       hours = '0' + hours
//     }
//     if (minutes < 10) {
//       minutes = '0' + minutes
//     }
//     if (seconds < 10) {
//       seconds = '0' + seconds
//     }
//     let time
//     if (hours === '00') {
//       time = minutes + ':' + seconds
//     } else {
//       time = hours + ':' + minutes + ':' + seconds
//     }
//     return time
//   }

//   useEffect(() => {
//     loadScript(
//       'https://cdn.jsdelivr.net/npm/@ffmpeg/ffmpeg@0.11.2/dist/ffmpeg.min.js'
//     ).then(() => {
//       if (typeof window !== 'undefined') {
//         ffmpeg = window.FFmpeg.createFFmpeg({ log: true })
//         ffmpeg.load()
//         setIsScriptLoaded(true)
//       }
//     })
//   }, [])

//   useEffect(() => {
//     if (videoRef && videoRef.current) {
//       const currentVideo = videoRef.current
//       currentVideo.onloadedmetadata = () => {
//         setVideoDuration(currentVideo.duration)
//         setEndTime(currentVideo.duration)
//       }
//     }
//   }, [videoSrc])

//   useEffect(() => {
//     const fetchTrackInfo = async () => {
//       const options = {
//         method: 'GET',
//         url: 'https://deezerdevs-deezer.p.rapidapi.com/track/3135556',
//         headers: {
//           'X-RapidAPI-Key':
//             '8aa024de11msh55e3424e304192dp19a450jsn7da694adfd7f',
//           'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
//         },
//       }

//       try {
//         const response = await axios.request(options)
//         setTrackInfo(response.data)
//       } catch (error) {
//         console.error(error)
//       }
//     }

//     fetchTrackInfo()
//   }, [])

//   useEffect(() => {
//     if (trackInfo) {
//       wavesurfer.current = WaveSurfer.create({
//         container: waveformRef.current,
//         waveColor: 'rgba(0, 0, 255, 0.5)',
//         progressColor: 'rgba(255, 255, 255, 0.5)',
//         barWidth: 2,
//         barRadius: 3,
//         cursorWidth: 1,
//         height: 50,
//         barGap: 2,
//       })

//       wavesurfer.current.load(trackInfo.preview)

//       wavesurfer.current.on('audioprocess', () => {
//         setCurrentTime(wavesurfer.current.getCurrentTime())
//       })

//       return () => {
//         wavesurfer.current.destroy()
//       }
//     }
//   }, [trackInfo])

//   const updateOnSliderChange = (values, handle) => {
//     setVideoTrimmedUrl('')
//     let readValue
//     if (handle) {
//       readValue = values[handle] | 0
//       if (endTime !== readValue) {
//         setEndTime(readValue)
//       }
//     } else {
//       readValue = values[handle] | 0
//       if (initialSliderValue !== readValue) {
//         initialSliderValue = readValue
//         if (videoRef && videoRef.current) {
//           videoRef.current.currentTime = readValue
//           setStartTime(readValue)
//         }
//       }
//     }
//   }

//   const handlePlay = () => {
//     if (videoRef && videoRef.current) {
//       videoRef.current.play()
//     }
//   }

//   const handlePauseVideo = (e) => {
//     const currentTime = Math.floor(e.currentTarget.currentTime)

//     if (currentTime === endTime) {
//       e.currentTarget.pause()
//     }
//   }

//   const handleTrim = async () => {
//     if (isScriptLoaded) {
//       const { name, type } = videoFileValue
//       ffmpeg.FS(
//         'writeFile',
//         name,
//         await window.FFmpeg.fetchFile(videoFileValue)
//       )
//       const videoFileType = type.split('/')[1]
//       await ffmpeg.run(
//         '-i',
//         name,
//         '-ss',
//         `${convertToHHMMSS(startTime)}`,
//         '-to',
//         `${convertToHHMMSS(endTime)}`,
//         '-acodec',
//         'copy',
//         '-vcodec',
//         'copy',
//         `out.${videoFileType}`
//       )
//       const data = ffmpeg.FS('readFile', `out.${videoFileType}`)
//       const url = URL.createObjectURL(
//         new Blob([data.buffer], { type: videoFileValue.type })
//       )
//       setVideoTrimmedUrl(url)
//     }
//   }

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       wavesurfer.current.pause()
//     } else {
//       wavesurfer.current.play()
//     }
//     setIsPlaying(!isPlaying)
//   }

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60)
//     const seconds = Math.floor(time % 60)
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
//   }

//   if (!trackInfo) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className='App'>
//       <input type='file' onChange={handleFileUpload} />
//       <br />
//       {videoSrc.length ? (
//         <React.Fragment>
//           <video src={videoSrc} ref={videoRef} onTimeUpdate={handlePauseVideo}>
//             <source src={videoSrc} type={videoFileValue.type} />
//           </video>
//           <br />
//           <Nouislider
//             behaviour='tap-drag'
//             step={1}
//             margin={3}
//             limit={30}
//             range={{ min: 0, max: videoDuration || 2 }}
//             start={[0, videoDuration || 2]}
//             connect
//             onUpdate={updateOnSliderChange}
//           />
//           <br />
//           Start duration: {convertToHHMMSS(startTime)} &nbsp; End duration:{' '}
//           {convertToHHMMSS(endTime)}
//           <br />
//           <button onClick={handlePlay}>Play</button> &nbsp;
//           <button onClick={handleTrim}>Trim</button>
//           <br />
//           {videoTrimmedUrl && (
//             <video controls>
//               <source src={videoTrimmedUrl} type={videoFileValue.type} />
//             </video>
//           )}
//         </React.Fragment>
//       ) : (
//         ''
//       )}
//       <div className='relative'>
//         <div className='w-full h-2 bg-gray-300 rounded-full overflow-hidden'>
//           <div
//             className='h-full bg-yellow-500 rounded-full'
//             style={{
//               width: `${
//                 (currentTime / wavesurfer.current?.getDuration() || 0) * 100
//               }%`,
//             }}
//           ></div>
//         </div>
//         <div ref={waveformRef} className='w-full h-12 mt-2'></div>
//         <div className='mt-2 flex justify-between text-sm text-gray-600'>
//           <div>{formatTime(currentTime)}</div>
//           <div>{formatTime(wavesurfer.current?.getDuration() || 0)}</div>
//         </div>
//         <button
//           className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none'
//           onClick={handlePlayPause}
//         >
//           {isPlaying ? 'Pause' : 'Play'}
//         </button>
//       </div>
//     </div>
//   )
// }

// export default DurationTimeline
