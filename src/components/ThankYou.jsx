import React, { useContext } from 'react';
import thanks from "../assets/images/illustration-thank-you.svg";
import { DataRate } from '../App';

function ThankYou() {
  const{value} = useContext(DataRate)
  return (
    <div className='flex justify-center items-center w-full h-full '>
        <div className='bg-neutral-veryDarkBlue max-w-sm max-h-sm w-4/5 h-3/5 rounded-2xl p-6 flex flex-col justify-between items-center'>
          <img src={thanks} className='w-40 '/>
          <div className='w-fit px-4 py-2 font-bold bg-neutral-lightGrey rounded-3xl text-primary-orange '>You selected {value} out of 5</div>
          <h2 className='text-2xl text-neutral-white font-bold'>Thank You!</h2>
          <p className='text-neutral-lightGrey text-center'>
            we appreciate you taking the time to give
            a rating. If you ever need  more support, 
            don't hesitate to get in touch!
          </p>

        </div>
    </div>
  )
}

export default ThankYou