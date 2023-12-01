import React from 'react'

function ButtonRate({setValue, value,indexControls }) {
  const {index, activeIndex, setActiveIndex} = indexControls
  const handleRate = ()=>{
   console.log(index, value)
   setActiveIndex(activeIndex == index ? -1 : index)
   setValue(value)
  }
  

  // const styleOne = `rounded-full active:bg-primary-orange hover:bg-gray-300 text-neutral-white bg-neutral-darkBlue text-center p-3 w-12 h-12`
  return (
    <div
     onClick={handleRate} 
     className={`${activeIndex == index ? `bg-primary-orange`:`bg-neutral-darkBlue`} cursor-pointer rounded-full active:bg-primary-orange hover:bg-gray-300 text-neutral-white text-center p-3 w-12 h-12`} 
    >{value}</div>
  )
}

export default ButtonRate