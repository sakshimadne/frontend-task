import { createContext, useContext, useState } from 'react'
import {  PlusCircle } from 'lucide-react'
import { GrTemplate } from 'react-icons/gr'
import { FaPlus } from 'react-icons/fa'
import { MdAudiotrack } from 'react-icons/md'
import { MdSubtitles } from 'react-icons/md'
import { CiText } from 'react-icons/ci'
import { MdOutlineFindInPage } from 'react-icons/md'

const SidebarContext = createContext()

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true)

  const toggleSidebar = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <aside
        className={`h-screen ${
          expanded ? 'w-64' : 'w-16'
        } transition-all duration-300`}
      >
        <SidebarContext.Provider value={{ expanded }}>
          <button
            className='p-2 bg-blue-500 text-white font-medium text-md flex items-center w-full'
            onClick={toggleSidebar}
          >
            <span className={expanded ? 'block' : 'hidden'}>Settings</span>
            <PlusCircle className='w-4 h-4 ml-2' />
          </button>
        </SidebarContext.Provider>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className='mb-1'>
            <SidebarItem
              icon={<FaPlus className='text-xl mb-2' />}
              text='Media'
              active
            />
            <SidebarItem
              icon={<MdAudiotrack className='text-xl mb-2' />}
              text='Audio'
            />
            <SidebarItem
              icon={<MdSubtitles className='text-xl mb-2' />}
              text='SubTitle'
            />
            <SidebarItem
              icon={<CiText className='text-xl mb-2' />}
              text='Text'
            />
            <SidebarItem
              icon={<MdOutlineFindInPage className='text-xl mb-2' />}
              text='Elements'
            />
            <SidebarItem
              icon={<GrTemplate className='text-xl mb-2' />}
              text='Templates'
            />
          </ul>
        </SidebarContext.Provider>
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
