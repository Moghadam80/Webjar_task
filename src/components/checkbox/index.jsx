import React from 'react'

const CheckBox = () => {
  return (
    <label className="flex items-center custom-checkbox cursor-pointer">
        <input
            type="checkbox"
            value="3"
            // onChange={(e) => setShowInput(e.target.value)}
        />
        <span className="helping-el mr-2"></span>
    </label>
  )
}

export default CheckBox