import React from 'react'
import image from "../../assets/image";


function MainSidebar() {

  return (
    <>

    <div className='bg-[#1d1042] py-9 px-7 font-sans h-[100%]'>

        <div className='h-[96%]'> 

          <div>
              <button className='bg-[#45269c] text-white py-3 px-6 rounded-lg text-center inline font-normal text-base'>
                <img src={image.lightning} alt='lightning-icon' className='inline pr-2 text-sm'/>
                Welcome Keerthi
              </button>
          </div>

          <div className='py-10'>
                <div className='pb-6'>
                  <img src={image.dashboard} alt='dashboard-icon' className='inline pr-3 pb-1'/>
                  <h4 className='text-white inline text-sm'>Dashboard</h4>
                </div>

                <div className='pb-6'>
                  <img src={image.settings} alt='settings-icon' className='inline pr-3 pb-1'/>
                  <h4 className='text-white inline text-sm'>Settings</h4>
                </div>

                <div className='pb-6'>
                  <img src={image.activities} alt='activities-icon' className='inline pr-3 pb-1'/>
                  <h4 className='text-white inline text-sm'>Activities</h4>
                </div>

                <div className='pb-6'>
                  <img src={image.users} alt='users-icon' className='inline pr-3 pb-1'/>
                  <h4 className='text-white inline text-sm'>Users</h4>
                </div>

                <div className='pb-6'>
                  <img src={image.addeduser} alt='added-user-icon' className='inline pr-3 pb-1'/>
                  <h4 className='text-white inline text-sm'>Added user</h4>
                </div>

                <div className='pb-6'>
                  <img src={image.affiliate} alt='affiliate-icon' className='inline pr-3 pb-1'/>
                  <h4 className='text-white inline text-sm'>Affiliate</h4>
                </div>


                <div className='pb-6 pt-6 opacity-50 border-t-2 border-white'>
                  <img src={image.profile} alt='profile-icon' className='inline pr-3 pb-1'/>
                  <h4 className='text-white inline text-sm font-normal'>Profile</h4>
                </div>

                <div className='pb-6 opacity-50'>
                  <img src={image.logout} alt='logout-icon' className='inline pr-2 pb-1'/>
                  <h4 className='text-white inline text-sm font-normal'>Logout</h4>
                </div>
          </div>
        </div>

        <div className='h-[4%]'>
          <button className='bg-[#703EFE] text-white text-base py-3 px-7 rounded-lg text-center inline uppercase font-normal tracking-wide'>
            <img src={image.plus} alt='plus-icon' className='inline pr-2 pb-1 text-sm text-white'/>
             New Project
          </button>
        </div>
    </div>

    </>
  )
}

export default MainSidebar;