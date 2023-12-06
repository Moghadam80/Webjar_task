import React, { useEffect, useRef } from 'react'

function useOutSide(ref, action) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                action();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const ModalMenu = ({ children, visable, onHide = () => { } }) => {

    const menu = useRef()

    useOutSide(menu, onHide)

    useEffect(() => {
        if (visable) {
            window.document.body.style.overscrollBehaviorY = "contain";
            window.document.body.style.overflowY = "hidden";
        } else {
            window.document.body.style.overscrollBehaviorY = "unset";
            window.document.body.style.overflowY = "auto";
        }
        return () => {
            window.document.body.style.overscrollBehaviorY = "unset";
            window.document.body.style.overflowY = "auto";
        }
    }, [visable])

    let arrowMove = [];
    const onMoveSuggest = ({ changedTouches }) => {
        let changedTouch = changedTouches[0];
        const menu = window.document.getElementById('menu');
        window.document.body.style.overflow = "hidden"
        if (arrowMove.length > 3) {
            arrowMove = [];
            arrowMove.push(changedTouch.clientY)
        } else {
            arrowMove.push(changedTouch.clientY)
        }
        if (menu && changedTouch.clientY >= window.innerHeight - (window.innerHeight / 1.5) && changedTouch.clientY <= window.innerHeight - (window.innerHeight / 6)) {
            menu.style.top = changedTouch.clientY + "px"
        }

    }

    const onEndSuggest = () => {

        const menu = window.document.getElementById('menu');
        window.document.body.style.overflow = "auto"
        if (arrowMove[arrowMove.length - 1] > arrowMove[arrowMove.length - 2]) {
            onHide()
            menu.style.top = window.innerHeight - (window.innerHeight / 6) + "px"
        } else {
            menu.style.top = window.innerHeight - (window.innerHeight / 1.5) + "px"
        }

    }

    return (
        <>

            {visable ?
                <>
                    <div style={{backgroundColor: 'rgba(16, 21, 26, 0.50)'}} className='top-0 left-0 w-full h-[100vh] z-20 absolute'>
                        <div id='menu' ref={menu} className='bg-white p-4 z-30 absolute bottom-0 left-0 w-full rounded-tl-[28px] rounded-tr-[28px]'>
                            <div onTouchMove={onMoveSuggest} onTouchEnd={onEndSuggest} className='menu-toggle mb-4 py-3'>
                                <div className='mx-auto w-[32px] h-[4px] rounded-[100px] bg-slate-400' />
                            </div>
                            <div className='h-[50vh] overflow-y-scroll'>
                                {children}
                            </div>
                        </div>
                    </div>
                </>
                :
                null
            }
        </>
    )
}

export default ModalMenu