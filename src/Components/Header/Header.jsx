import React from 'react'
import './Header.css'
import image from "../../assets/image";

function Header() {

  return (
    <div className='font-sans mt-10 mb-6 mx-16'> 

          <div className='flex flex-row justify-between'>

              <div>
                  <h1 className='text-black font-semibold text-4xl pb-2'>New Campaign Run</h1>
                  <p className='text-[#B8B9BD] font-normal text-sm'>A new campaign launch work for brand new feature in May month</p>
              </div>

              <div>
                  <button className='bg-black text-white py-3 px-7 rounded uppercase text-sm font-normal'>Add members</button>
              </div>

          </div>

          <div className='mt-14 flex flex-row justify-between'>

              <div className='flex flex-row'>
                  <div>
                      <div className=''> <img src={image.profilestack} alt="" className='rounded-full'/> </div>
                  </div>

                  <div className='mt-1 pl-3'>
                    <p className='text-[#B8B9BD] font-normal text-sm'>8 member</p> 
                  </div>
              </div>

              <div className='flex flex-row'>
                   <div className='pr-5' >
                      <img src={image.particpants} alt='participants-icon' className='inline pr-2 pb-1'/>
                      <h4 className='text-[#7D8088] inline text-sm font-normal'>Particpants View</h4>
                    </div>

                    <div className='pr-5' >
                      <img src={image.board} alt='board-icon' className='inline pr-2 pb-1'/>
                      <h4 className='text-[#7D8088] inline text-sm font-normal'>Board View</h4>
                    </div>

                    <div className='pr-5' >
                      <img src={image.listview} alt='list-view-icon' className='inline pr-2 pb-1'/>
                      <h4 className='text-[#7D8088] inline text-sm font-normal'>List View</h4>
                    </div>

                    <div className='pr-5' >
                      <img src={image.powerview} alt='power-view-icon' className='inline pr-2 pb-1'/>
                      <h4 className='text-[#7D8088] inline text-sm font-normal'>Power View</h4>
                    </div>

                    <div className='' >
                      <img src={image.plusview} alt='plus-view-icon' className='inline pr-2 pb-1'/>
                    </div>
              </div>
                
          </div>
        
    </div>
  )
}

export default Header;