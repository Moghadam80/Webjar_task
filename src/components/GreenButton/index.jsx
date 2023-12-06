import React from 'react'

const GreenButton = ({type = 'button'}) => {
  return (
    <div>
        <button type={type} className='w-[270px] h-[40px] my-6 rounded-[15px] bg-[#00C853] hover:shadow-md active:border-2 active:border-[#00712F] text-white'>
            ورود
        </button> 
    </div>
  )
}

export default GreenButton