import React from 'react'

const CheckBox = ({onClick, value}) => {
  return (
    <label className="flex items-center custom-checkbox cursor-pointer">
        <input
            type="checkbox"
            value={value}
            onChange={(e) => onClick(e.target.value)}
        />
        <span className="helping-el mr-2"></span>
    </label>
  )
}

export default CheckBox