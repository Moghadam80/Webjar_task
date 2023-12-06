import { useEffect, useRef } from "react";

const Modal = ({ children, width, align, className, justify, onclick, zIndex, style, padding }) => {

    const modal = useRef()

    useEffect(() => {
        function handleClickOutside(event) {
            if (modal.current && !modal.current.contains(event.target)) {
                if (onclick) {
                    onclick();
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modal]);

    return (
        <div className={`fixed inset-0 ${zIndex || 'z-40'} bg-black_2`}>
            <div className={`${className} ${align ? align : 'items-center'} flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}>
                <div ref={modal} className={`relative ${width ? width : 'w-auto'} ${justify ? justify : 'mx-auto'} max-w-3xl`}>
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none" style={style}>
                        <div className={`${padding || 'p-4'} relative flex-auto`}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal