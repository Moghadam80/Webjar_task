import { useState } from 'react';
import styles from './Style.module.scss';


const SearchBox = ({search}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isInputFilled, setIsInputFilled] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`${isFocused ? styles.searchBoxFocused : ''} ${isInputFilled ? 'text-[#7B7B7B]' : ''} flex justify-center items-center w-[760px] h-[60px] relative focus-within:border shadow-[0px_0px_20px_0px_#0000000D] focus-within:border-[#0094FF1A] rounded-[15px] p-4`}>
      <i className={`fa fa-search  ml-4 ${styles.searchIcon}`}></i>
      
      <input
        type="text"
        placeholder="جستجو کنید ..."
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`outline-none px-6 focus:text-[#00C853] w-full h-full`}
        onChange={(event) => {setIsInputFilled(event.target.value !== ''); search(event)}}
      />
      <i className={`fa fa-search  ml-4 ${styles.searchIconSecond}`}></i>

    </div>
  );
}

export default SearchBox