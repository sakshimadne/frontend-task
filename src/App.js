// // import Nav from './components/Nav'
// // import {
// //   Home,
// //   LayoutDashboard,
// //   StickyNote,
// //   Calendar,
// //   Layers,
// //   Flag,
// //   Settings,
// //   LifeBuoy,
// // } from 'lucide-react'
// // import Sidebar, { SidebarItem } from './components/Sidebar'
// // import Dashboard from './components/Dashboard'
// // import Sidebar1 from './components/Sidebar1'
// // import Nav1 from './components/Nav1'
// // import Dashboard1 from './components/Dashboard1'
// // function App() {
// //   return (
// //     <>
// //       <div className='flex'>
// //         {/* <Sidebar>
// //           <SidebarItem
// //             icon={<LayoutDashboard size={20} />}
// //             text='Dashboard'
// //             active
// //           />
// //           <SidebarItem icon={<Home size={20} />} text='Home' />
// //           <SidebarItem icon={<StickyNote size={20} />} text='Templates' />
// //           <SidebarItem icon={<Layers size={20} />} text='All Videos' />
// //           <SidebarItem icon={<Flag size={20} />} text='Podcasts & Shows' />
// //           <SidebarItem icon={<LifeBuoy size={20} />} text='Brand Kit' />
// //         </Sidebar> */}
// //         <Sidebar1>
// //           <SidebarItem
// //             icon={<LayoutDashboard size={20} />}
// //             text='Settings'
// //             active
// //           />
// //           <SidebarItem icon={<Home size={20} />} text='Media' />
// //           <SidebarItem icon={<StickyNote size={20} />} text='Audio' />
// //           <SidebarItem icon={<Layers size={20} />} text='Subtitle' />
// //           <SidebarItem icon={<Flag size={20} />} text='Text' />
// //           <SidebarItem icon={<LifeBuoy size={20} />} text='Elements' />
// //         </Sidebar1>
// //         <div className='flex-1'>
// //           <Nav />
// //           <Dashboard />
// //           {/* <Nav1 /> */}
// //           {/* <Dashboard1 /> */}
// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// // export default App

// ///////////////////////////////////
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Nav from './components/Nav';
// import { Home, LayoutDashboard, StickyNote, Calendar, Layers, Flag, Settings, LifeBuoy } from 'lucide-react';
// import Sidebar, { SidebarItem } from './components/Sidebar';
// import Dashboard from './components/Dashboard';
// import Sidebar1 from './components/Sidebar1';
// import Nav1 from './components/Nav1';
// import Dashboard1 from './components/Dashboard1';

// function App() {
//   return (
//     <Router>
//       <div className='flex'>
//         <Sidebar1>
//           <SidebarItem icon={<LayoutDashboard size={20} />} text='Settings' active />
//           <SidebarItem icon={<Home size={20} />} text='Media' />
//           <SidebarItem icon={<StickyNote size={20} />} text='Audio' />
//           <SidebarItem icon={<Layers size={20} />} text='Subtitle' />
//           <SidebarItem icon={<Flag size={20} />} text='Text' />
//           <SidebarItem icon={<LifeBuoy size={20} />} text='Elements' />
//         </Sidebar1>
//         <div className='flex-1'>
//           <Nav />
//           <Switch>
//             <Route exact path='/' component={Dashboard} />
//             <Route path='/videoedit' component={Dashboard1} />
//           </Switch>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

// /

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import {
  Home,
  LayoutDashboard,
  StickyNote,
  Layers,
  Flag,
  LifeBuoy,
} from 'lucide-react'
import  { SidebarItem } from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Sidebar1 from './components/Sidebar1'

import Dashboard1 from './components/Dashboard1'

function App() {
  return (
    <Router>
      <div className='flex'>
        <Sidebar1>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text='Settings'
            active
          />
          <SidebarItem icon={<Home size={20} />} text='Media' />
          <SidebarItem icon={<StickyNote size={20} />} text='Audio' />
          <SidebarItem icon={<Layers size={20} />} text='Subtitle' />
          <SidebarItem icon={<Flag size={20} />} text='Text' />
          <SidebarItem icon={<LifeBuoy size={20} />} text='Elements' />
        </Sidebar1>
        <div className='flex-1'>
          <Nav />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/videoedit' element={<Dashboard1 />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
