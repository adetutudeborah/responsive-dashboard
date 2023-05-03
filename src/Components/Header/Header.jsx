import React from 'react'
import image from "../../assets/image";
import Media from 'react-media';
import 'flowbite';

function Header() {

  return (
    <div className='font-sans mt-10 mb-6 mx-16 md:mt-16 md:mx-6 lg:mt-16'> 

          <div className='flex flex-row justify-between md:flex-none sm:flex-none'>

              <div className=''>
                  <h1 className='text-black font-semibold text-4xl pb-2 md:text-2xl md:mr-8'>New Campaign Run</h1>
                  <p className='text-[#B8B9BD] font-normal text-sm md:text-xs'>A new campaign launch work for brand new feature in May month</p>
              </div>

              <div>
                  <button className='bg-black text-white py-3 px-7 rounded uppercase text-sm font-normal md:px-3 md:py-2 md:text-[10px] whitespace-nowrap'>Add members</button>
              </div>

          </div>

          <div className='mt-12 flex flex-row justify-between md:mt-5'>

              <div className='flex flex-row'>
                  <div>
                      <div className=''> <img src={image.profilestack} alt="" className='rounded-full md:max-w-[80px]'/> </div>
                  </div>

                  <div className='mt-1 pl-3'>
                    <p className='text-[#B8B9BD] font-normal text-sm md:text-xs'>8 member</p> 
                  </div>
              </div>

              <div className='flex flex-row'>

                
              <Media queries={{ large: "(min-width: 1150px)" }}>
                  {matches =>
                    matches.large ? (

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
                      ) : (

                        <div className='mb-5 md:mb-[150px] lg:mb-[200px]'>
                              {/* Drop down menu */}
                          <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className=" inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
                            <svg className="w-6 h-6 md:w-4 md:h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                          </button>

                          <div id="dropdownDots" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            
                              <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">

                                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:text-xs"> 
                                    <img src={image.particpants} alt='participants-icon' className='inline pr-2 pb-1'/>
                                    <h4 className='text-[#7D8088] inline text-sm font-normal'>Particpants View</h4>
                                </li>

                                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:text-xs"> 
                                    <img src={image.board} alt='board-icon' className='inline pr-2 pb-1'/>
                                    <h4 className='text-[#7D8088] inline text-sm font-normal pl-1'>Board View</h4>
                                </li>

                                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:text-xs"> 
                                    <img src={image.listview} alt='list-view-icon' className='inline pr-2 pb-1'/>
                                    <h4 className='text-[#7D8088] inline text-sm font-normal'>List View</h4>
                                </li>

                                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white md:text-xs"> 
                                  <img src={image.powerview} alt='power-view-icon' className='inline pr-2 pb-1'/>
                                  <h4 className='text-[#7D8088] inline text-sm font-normal'>Power View</h4>
                                </li>

                                <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-center md:text-xs"> 
                                    <img src={image.plusview} alt='plus-view-icon' className='inline pr-2 pb-1'/>
                                </li>
          
                              </ul>
                            </div>
                          {/* Drop down menu */}
                        </div>
                        )
                      }
                </Media>
                        
              </div>
        
           </div>
      </div>
  )
}

export default Header;