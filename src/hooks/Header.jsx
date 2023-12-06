import { useState,useEffect } from "react";

const useHeader = () => {
    const [show, setShow] = useState(true)
    const [showDrop, setShowDrop] = useState(false)

    const HeaderItems = [
        {name:'خانه',url:''},    
        {name:'محصولات',url:''},    
        {name:'خدمات',url:''},    
        {name:'وبلاگ',url:'/'},    
    ];

    const onResize = () => {
        if (window.innerWidth <= 767) {
          setShow(true)
        } else {
          setShow(false)
        }
      }
    
      useEffect(() => {
        if (typeof window !== "undefined") {
          window.addEventListener('resize', onResize)
          if (window.innerWidth <= 770) {
            setShow(true)
          } else {
            setShow(false)
          }
        }
        return () => {
          if (typeof window !== "undefined") {
            window.removeEventListener('resize', onResize)
          }
        }
      }, [])

    return {
        HeaderItems,
        show,
        showDrop, 
        setShowDrop
  }
    
  
}

export default useHeader