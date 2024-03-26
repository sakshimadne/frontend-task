import { createContext, useContext, useState } from 'react'
import {  Home, PlusCircle, Video } from 'lucide-react'
import { FaRegUser } from 'react-icons/fa'
import { GrTemplate } from 'react-icons/gr'
import { SiPodcastindex } from 'react-icons/si'
import { TbBrandFramerMotion } from 'react-icons/tb'
import { AiFillThunderbolt } from 'react-icons/ai'

const SidebarContext = createContext()

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true)
  return (
    <>
      <aside className='h-screen'>
        <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
          <div className='p-4 flex justify-between items-center mb-0'>
            <span
              className={`font-bold text-2xl text-black-500 ${
                expanded ? 'block' : 'hidden'
              }`}
            >
              VEED.IO
            </span>
          </div>
          <div className='p-4 flex items-center '>
            <FaRegUser className='bg-blue-600 text-white text-3xl rounded mr-2 p-2' />
            <div className='mt-1'>
              <span
                className={` text-sm block ${expanded ? 'block' : 'hidden'}`}
              >
                Dhammarath D...
              </span>
              <span
                className={`text-xs text-gray-500 ${
                  expanded ? 'block' : 'hidden'
                }`}
              >
                Free Plan
              </span>
            </div>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <button className='p-2 bg-blue-500 text-white font-medium text-md flex items-center w-full'>
              <span className={expanded ? 'block' : 'hidden'}>New Video</span>
              <PlusCircle className='w-4 h-4 ml-2' />
            </button>
          </SidebarContext.Provider>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className='flex-1 py-2'>
              <SidebarItem icon={<Home />} text='Home' active />
              <SidebarItem
                icon={<GrTemplate className='text-xl' />}
                text='Templates'
              />
              <SidebarItem icon={<Video />} text='All Videos' />
              <SidebarItem
                icon={<SiPodcastindex className='text-xl' />}
                text='Podcasts & Shows'
              />
              <div className='flex'>
                <div>
                  <SidebarItem
                    icon={<TbBrandFramerMotion className='text-xl' />}
                    text='Brand Kit'
                  />
                </div>

                <div>
                  <SidebarItem
                    icon={
                      <AiFillThunderbolt className='text-2xl bg-yellow-300 text-white  rounded mr-2 p-1' />
                    }
                  />
                </div>
              </div>
            </ul>
          </SidebarContext.Provider>
        </nav>
      </aside>
    </>
  )
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext)
  return (
    <li
      className={`flex items-center py-3 px-4 my-1 font-medium text-sm rounded-md cursor-pointer transition-colors ${
        active ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100 text-gray-700'
      }`}
    >
      {icon}
      <span className={`ml-4 ${expanded ? 'block' : 'hidden'}`}>{text}</span>
      {alert && (
        <div
          className={`w-2 h-2 rounded-full bg-yellow-500 ml-auto ${
            expanded ? 'block' : 'hidden'
          }`}
        ></div>
      )}
    </li>
  )
}
