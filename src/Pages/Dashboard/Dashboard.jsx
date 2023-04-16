import React from 'react'
import './Dashboard.css'
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Main from '../../Components/Main/Main';

function Dashboard() {

  return (
    <div className='grid grid-cols-[272px,1fr] grid-rows-[200px,1fr] w-screen h-screen'>
        <div className='bg-[#ffff] col-span-2 row-start-1'>
           <Header />
        </div>

        <div className='bg-[#1d1042] col-start-1 row-span-full'>
           <Sidebar />
        </div>
      
        <div className='bg-[#faf9fa] col-span-2 row-start-2'>
           <Main />
        </div>
    </div>
  )
}

export default Dashboard;
