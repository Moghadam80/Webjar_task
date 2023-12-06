import React from 'react'

const WhiteButton = ({onClick, className}) => {
  return (
    <div>
        <button onClick={onClick} className={`${className} rounded-[15px] border border-[#00C853] hover:shadow-[#00C853] text-[#00C853] hover:shadow-sm active:border-2 active:border-[#00E15D]`}>
            ورود
        </button> 
    </div>
  )
}

export default WhiteButton