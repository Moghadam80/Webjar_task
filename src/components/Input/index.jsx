import {React, useState} from 'react'
import styles from './Style.module.scss';

const Input = ({label, placeholder, icon, type, required=false}) => {
  const [isInputFilled, setIsInputFilled] = useState(false);

  return (
        <div className={`flex flex-col my-2 justify-center focus-within:text-green-500`}>
            <label className='text-sm'>{label}</label>
            <div className={`${isInputFilled ? 'border-black' : 'text-gray-500'} flex items-center border  p-4 mt-1 w-[270px] h-[40px] rounded-[12px] focus-within:border-[#00C853] fill-black focus-within:text-green-500`}>
                <i className={`${icon} ml-4`}/>
                <input className={`outline-none w-full placeholder:text-xs focus:placeholder:text-green-500 `}
                  type={type}
                  required={required}
                  placeholder={placeholder}
                  onChange={(event) => setIsInputFilled(event.target.value !== '')}
                />
            </div>
        </div>
      )
}

export default Input