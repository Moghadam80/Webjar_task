import React from 'react'

const GreenButton = ({type = 'button',Click, className, text}) => {
  return (
    <div>
        <button type={type} onClick={Click} className={`${className} my-6 rounded-[15px] bg-[#00C853] hover:shadow-md active:border-2 active:border-[#00712F] text-white`}>
            {text}
        </button> 
    </div>
  )
}

export default GreenButton