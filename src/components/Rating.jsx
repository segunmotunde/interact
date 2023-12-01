import React, { useContext, useState } from 'react'
import ButtonRate from './ButtonRate'
import { FaStar } from "react-icons/fa";
import { DataRate } from '../App';
import { useNavigate } from 'react-router-dom';
// import ButtonRate from './ButtonRate'

function Rating() {
  const { activeIndex, setActiveIndex,value, rate, setValue} = useContext(DataRate)
  const navigate = useNavigate()
 
  return (
    <div className='flex justify-center items-center w-full h-full '>
        <div className='bg-neutral-veryDarkBlue max-w-sm max-h-sm w-4/5 h-3/5 rounded-2xl p-6 flex flex-col justify-between'>
          <div className='p-2 bg-gray-400 w-fit rounded-full text-primary-orange'>
          <FaStar />
          </div>
            <h1 className='font-semibold text-2xl text-neutral-white'>How did we do?</h1>
            <p className='text-gray-400'>
               please let us know we did with your support
               request. All feedback is appreciated to help us
               improve our offerring! 
            </p>
            <div className='flex justify-between '>
            {rate.map((item, index)=>{
            return(  <ButtonRate 
              key={index} 
              setValue={setValue} 
              value={item}
              indexControls={{index, activeIndex, setActiveIndex}} />)
            })}

            </div>
            <button 
            onClick={()=> navigate('/thankyou')}
            className={`${activeIndex ==-1?`bg-gray-500 cursor-not-allowed`:` bg-primary-orange` } w-full  rounded-3xl font-bold text-neutral-white text-center p-2`}>Submit</button>
        </div>
    </div>
  )
}

export default Rating