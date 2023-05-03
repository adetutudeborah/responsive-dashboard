import React from 'react'
import Header from '../../Components/Header/Header';
import MainSidebar from '../../Components/MainSidebar/MainSidebar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Main from '../../Components/Main/Main';
import Media from 'react-media';

function Dashboard() {

  return (
    <div className='grid grid-cols-[272px,1fr] grid-rows-[221px,1fr] w-full h-[100vh] md:grid-cols-[1fr] md:grid-row-[1fr,1fr]'>
      
        <div className='bg-[#ffff] col-span-2 row-start-1'>
           <Header />
        </div>

   <Media queries={{ large: "(min-width: 1150px)" }}>
    {matches =>
    matches.large ? (
        <div className=' col-start-1 row-span-full'>
           <MainSidebar />
        </div>
      ) : (
         <div>
         <Sidebar />
        </div>
    )
    }
    </Media>
      
        <div className='bg-[#faf9fa] col-span-2 row-start-2'>
           <Main />
        </div>
    </div>
  )
}

export default Dashboard;
