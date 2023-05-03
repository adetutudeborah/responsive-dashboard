import React from 'react'
import image from "../../assets/image";

function Main() {

  return (
    <div className='font-sans my-12 mx-16 md:mx-5 md:mb-6'> 
        
        <div className='grid grid-cols-[1fr,1fr,1fr] grid-rows-[1fr] gap-x-10 w-full h-full lg:grid-cols-[1fr] lg:grid-rows[1fr,1fr,1fr]'>

            {/* First design */}

            <div className='col-start-1 lg:col-start-1 lg:row-start-1 md:pb-12 lg:pb-12'> 

                 {/* Task update */}

                <div className='bg-[#F4F6F8] flex flex-row justify-between py-2 px-4 rounded-lg'>
                    <p className='text-[#858A93] font-medium text-base pt-2'>To Do</p>
                    <p className='bg-black py-1.5 px-4 rounded text-white text-lg font-medium'>3</p>
                </div>

                {/* First task */}

                <div className='bg-white mt-4 p-4 rounded-xl'>

                    <div className='bg-[#FBC7E0] w-[100%] h-[168px] flex items-center justify-center'>
                         <img src={image.designone} alt="design-one"/>
                    </div>

                    <div className='flex flex-row justify-between pt-4'>

                        <div className=''>                   
                          <h3 className='text-black text-base font-semibold pt-2'>Highfidelity Design</h3>
                          <p className='text-[#B8B9BD] text-sm font-normal pt-1'>Make clear design and color</p>
                       </div>

                       <div className='mt-2'>
                          <img src={image.threedot} alt="three-dot" className=''/>
                       </div>
                    </div>

                    <div className='flex flex-row justify-between pt-4 pb-2'>
                        <div className=''>
                          <img src={image.progress} alt='progress-icon' className='inline pr-2 pb-1'/>
                          <h4 className='text-[#B8B9BD] inline text-sm'>Progress</h4>
                       </div>

                       <div>
                         <p className='text-black font-medium text-sm mt-1'>2/10</p>
                       </div>
                    </div>
                  
                    {/* Progress bar */}
                    <div className='bg-[#EBEBEB] rounded-3xl w-full'>
                        <div className='bg-[#EBEBEB] rounded-3xl w-[100%] h-2'></div>
                    </div>
                    {/* Progress bar */}

                    <div className='flex flex-row justify-between pt-2'>
                       
                        <div className=''>  
                          <span className='text-[#B8B9BD] inline text-sm mr-4'><img src={image.comment} alt='comment-icon' className='inline mr-1'/>7</span>
                          <span className='text-[#B8B9BD] inline text-sm mr-4'><img src={image.link} alt='link-icon' className='inline mr-1'/>2</span>
                       </div>

                       <div>
                          <img src={image.mainprofilestack} alt='main-profile-stack'/>
                       </div>

                    </div>
 
                </div>
                
                {/* Second task */}

                <div className='bg-white mt-4 p-4 rounded-xl'>

                    <div className='flex flex-row justify-between pt-4'>

                        <div className=''>                   
                          <h3 className='text-black text-base font-semibold pt-2'>Usability testing</h3>
                          <p className='text-[#B8B9BD] text-sm font-normal pt-1'>Make clear design and color</p>
                       </div>

                       <div className='mt-2'>
                          <img src={image.threedot} alt="three-dot" className=''/>
                       </div>
                    </div>

                    <div className='flex flex-row justify-between pt-4 pb-2'>
                        <div className=''>
                          <img src={image.progress} alt='progress-icon' className='inline pr-2 pb-1'/>
                          <h4 className='text-[#B8B9BD] inline text-sm'>Progress</h4>
                       </div>

                       <div>
                         <p className='text-black font-medium text-sm mt-1'>2/10</p>
                       </div>
                    </div>

                     {/* Progress bar */}
                     <div className='bg-[#EBEBEB] rounded-3xl w-full'>
                        <div className='bg-[#EBEBEB] rounded-3xl w-[100%] h-2'></div>
                    </div>
                    {/* Progress bar */}

                    <div className='flex flex-row justify-between pt-2'>
                       
                        <div className=''>  
                          <span className='text-[#B8B9BD] inline text-sm mr-4'><img src={image.comment} alt='comment-icon' className='inline mr-1'/>7</span>
                          <span className='text-[#B8B9BD] inline text-sm mr-4'><img src={image.link} alt='link-icon' className='inline mr-1'/>2</span>
                       </div>

                       <div>
                          <img src={image.mainprofilestack} alt='main-profile-stack'/>
                       </div>

                    </div>
 
                </div>
               
                 {/* Add task */}
                 
                <div className='bg-[#f2f4f5] flex flex-row justify-center mt-8 py-3 px-3 rounded-xl border-dashed border-2 border-[#D5D5D5]'>
                    <img src={image.addtask} alt='add-task-icon' className='inline pr-3  h-[18px] mt-1'/>
                    <p className='text-[#7D8088] font-medium text-base inline'>Add Task</p>
                </div>
              
            </div>

            {/* Second design */}

            <div className='col-start-2 lg:col-start-1 lg:row-start-2 md:pb-12 lg:pb-12'>

                <div className='bg-[#F4F6F8] flex flex-row justify-between py-2 px-4 rounded-lg'>
                    <p className='text-[#858A93] font-medium text-base pt-2'>In progress</p>
                    <p className='bg-black py-1.5 px-4 rounded text-white text-lg font-medium'>1</p>
                </div>

                 {/* First task */}

                <div className='bg-white mt-4 p-4 rounded-xl'>

                    <div className='bg-[#D9D3CE] w-[100%] h-[168px] flex items-center justify-center'>
                         <img src={image.designtwo} alt="design-two"/>
                    </div>

                    <div className='flex flex-row justify-between pt-4'>

                        <div className=''>                   
                          <h3 className='text-black text-base font-semibold pt-2'>Highfidelity Design</h3>
                          <p className='text-[#B8B9BD] text-sm font-normal pt-1'>Make clear design and color</p>
                       </div>

                       <div className='mt-2'>
                          <img src={image.threedot} alt="three-dot" className=''/>
                       </div>
                    </div>

                    <div className='flex flex-row justify-between pt-4 pb-2'>
                        <div className=''>
                          <img src={image.progress} alt='progress-icon' className='inline pr-2 pb-1'/>
                          <h4 className='text-[#B8B9BD] inline text-sm'>Progress</h4>
                       </div>

                       <div>
                         <p className='text-black font-medium text-sm mt-1'>2/10</p>
                       </div>
                    </div>

                    {/* Progress bar */}

                    <div class="w-full bg-[#EBEBEB] rounded-3xl h-2">
                          <div class="bg-[#FF5F37] h-2 rounded-3xl w-[75%]"></div>
                     </div>
                    {/* Progress bar */}

                    <div className='flex flex-row justify-between pt-2'>
                       
                        <div className=''>  
                          <span className='text-[#B8B9BD] inline text-sm mr-4'><img src={image.comment} alt='comment-icon' className='inline mr-1'/>7</span>
                          <span className='text-[#B8B9BD] inline text-sm mr-4'><img src={image.link} alt='link-icon' className='inline mr-1'/>2</span>
                       </div>

                       <div>
                          <img src={image.mainprofilestack} alt='main-profile-stack'/>
                       </div>

                    </div>
 
                </div>
              
               
                 {/* Add task */}
                 
                <div className='bg-[#f2f4f5] flex flex-row justify-center mt-6 py-3 px-3 rounded-xl border-dashed border-2 border-[#D5D5D5]'>
                    <img src={image.addtask} alt='add-task-icon' className='inline pr-3  h-[18px] mt-1'/>
                    <p className='text-[#7D8088] font-medium text-base inline'>Add Task</p>
                </div>

            </div>

            {/* Third design */}
          
            <div className='col-start-3 lg:col-start-1 lg:row-start-3 md:pb-12 lg:pb-12'>

                <div className='bg-[#F4F6F8] flex flex-row justify-between py-2 px-4 rounded-lg'>
                    <p className='text-[#858A93] font-medium text-base pt-2'>Completed</p>
                    <p className='bg-black py-1.5 px-4 rounded text-white text-lg font-medium'>2</p>
                </div>

                {/* Second task */}

                <div className='bg-white mt-4 p-4 rounded-xl'>

                    <div className='flex flex-row justify-between pt-4'>

                        <div className=''>                   
                          <h3 className='text-black text-base font-semibold pt-2'>Usability testing</h3>
                          <p className='text-[#B8B9BD] text-sm font-normal pt-1'>Make clear design and color</p>
                       </div>

                       <div className='mt-2'>
                          <img src={image.threedot} alt="three-dot" className=''/>
                       </div>
                    </div>

                    <div className='flex flex-row justify-between pt-4 pb-2'>
                        <div className=''>
                          <img src={image.progress} alt='progress-icon' className='inline pr-2 pb-1'/>
                          <h4 className='text-[#B8B9BD] inline text-sm'>Progress</h4>
                       </div>

                       <div>
                         <p className='text-black font-medium text-sm mt-1'>2/10</p>
                       </div>
                    </div>

                      {/* Progress bar */}
                    <div className='bg-[#EBEBEB] rounded-3xl w-full'>
                           <div className='bg-[#8BC488] rounded-3xl w-[100%] h-2'></div>
                    </div>
                    {/* Progress bar */}

                    <div className='flex flex-row justify-between pt-2'>
                       
                        <div className=''>  
                          <span className='text-[#B8B9BD] inline text-sm mr-4'><img src={image.comment} alt='comment-icon' className='inline mr-1'/>7</span>
                          <span className='text-[#B8B9BD] inline text-sm mr-4'><img src={image.link} alt='link-icon' className='inline mr-1'/>2</span>
                       </div>

                       <div>
                          <img src={image.mainprofilestack} alt='main-profile-stack'/>
                       </div>

                    </div>
 
                </div>

                 {/* First task */}

                <div className='bg-white mt-4 p-4 rounded-xl'>

                    <div className='bg-[#597474] w-[100%] h-[168px] flex items-center justify-center'>
                         <img src={image.designthree} alt="design-three"/>
                    </div>

                    <div className='flex flex-row justify-between pt-4'>

                        <div className=''>                   
                          <h3 className='text-black text-base font-semibold pt-2'>Highfidelity Design</h3>
                          <p className='text-[#B8B9BD] text-sm font-normal pt-1'>Make clear design and color</p>
                       </div>

                       <div className='mt-2'>
                          <img src={image.threedot} alt="three-dot" className=''/>
                       </div>
                    </div>

                    <div className='flex flex-row justify-between pt-4 pb-2'>
                        <div className=''>
                          <img src={image.progress} alt='progress-icon' className='inline pr-2 pb-1'/>
                          <h4 className='text-[#B8B9BD] inline text-sm'>Progress</h4>
                       </div>

                       <div>
                         <p className='text-black font-medium text-sm mt-1'>2/10</p>
                       </div>
                    </div>

                    {/* Progress bar */}
                    <div className='bg-[#EBEBEB] rounded-3xl w-full'>
                           <div className='bg-[#8BC488] rounded-3xl w-[100%] h-2'></div>
                    </div>
                    {/* Progress bar */}

                    <div className='flex flex-row justify-between pt-2'>
                       
                        <div className=''>  
                          <span className='text-[#B8B9BD] inline text-sm mr-4'><img src={image.comment} alt='comment-icon' className='inline mr-1'/>7</span>
                          <span className='text-[#B8B9BD] inline text-sm mr-4'><img src={image.link} alt='link-icon' className='inline mr-1'/>2</span>
                       </div>

                       <div>
                          <img src={image.mainprofilestack} alt='main-profile-stack'/>
                       </div>

                    </div>
 
                </div>
              
               
                 {/* Add task */}
                 
                <div className='bg-[#f2f4f5] flex flex-row justify-center mt-8 py-3 px-3 rounded-xl border-dashed border-2 border-[#D5D5D5]'>
                    <img src={image.addtask} alt='add-task-icon' className='inline pr-3  h-[18px] mt-1'/>
                    <p className='text-[#7D8088] font-medium text-base inline'>Add Task</p>
                </div>


            </div>
            
        
        </div>

    </div>
  )
}

export default Main;