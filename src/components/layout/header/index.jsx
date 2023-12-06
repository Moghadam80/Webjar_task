import HeaderSvg, { MenuSvg } from '@/components/Svg';
import useHeader from '@/hooks/Header'
import { React, useState } from "react";
import Link from 'next/link'
import ModalMenu from '@/components/ModalMenu';
import WhiteButton from '@/components/WhiteButton';
import Modal from '@/components/Modal';
import LoginModal from '@/components/LoginModal';


const Header = () => {
  const { show, HeaderItems, showDrop, setShowDrop } = useHeader();
  const [showModal, setShowModal] = useState(false);
  return (
    <header className='fixed w-full z-[5] top-0 shadow-[0px_0px_40px_0px_#0000000D] bg-white'>
        {!show
            ?
            <div className='container grid grid-cols-2'>
                
                <div className='col-span-2 flex justify-between items-center lg:px-[170px] md:px-[25px]'>
                    <div className='flex justify-end items-center h-full'>
                        <Link href='/' className='ml-6 w-32'>
                            <div className='w-[64px] h-[74px]  flex justify-center items-center'>
                                <HeaderSvg/>
                            </div>
                        </Link>
                        {HeaderItems?.map((item, i) => {
                            return (
                                <Link href={item.url} key={i} className={`${item.url === '/' ? 'text-[#00C853] flex items-center h-full border-b-4 border-[#00C853] font-semibold': ''} hover:text-[#00C853] my-0 md:mx-4 mx-0`}>
                                    <p className='text-base lg:px-3 px-1 py-2 cursor-pointer'>{item.name}</p>
                                </Link>
                            )
                        })}
                    </div>
                    <div className='flex justify-between items-center'>
                        <WhiteButton className='w-[140px] h-[45px]' onClick={() => setShowModal(true)} />
                    </div>
                </div>
                
                

            </div>
            :
            <>
                <div className='grid grid-cols-3'>
                    <div className='col-span-3'>
                        <div className='flex justify-between items-center p-2 bg-white'>
                            <Link href='/'>
                                <div className='w-[43px] h-[30px] flex justify-center items-center'>
                                    <HeaderSvg/>
                                </div>
                            </Link>
                            <div className='flex justify-between items-center'>
                            <div className='flex justify-between items-center'>
                                <WhiteButton className='w-[100px] h-[40px] ml-4' onClick={() => setShowModal(true)} />
                            </div>
                            <div onClick={() => setShowDrop(true)}>
                                <div className='px-1'>
                                   <MenuSvg/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                
                <ModalMenu visable={showDrop} onHide={() => setShowDrop(false)}>
                    <div className=''>
                        {HeaderItems?.map((item, i) => {
                            return (
                                <Link onClick={() => setShowDrop(false)} href={item.href || '/'} key={i}>
                                    <div className='bg-[#F6F6F6] rounded-md py-2 px-4 flex justify-between items-center my-2'>
                                        <p>{item.name}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                            <path d="M7.54508 0.533895C7.79347 0.777394 7.81605 1.15843 7.61282 1.42694L7.54508 1.50386L1.93882 6.99967L7.54508 12.4955C7.79347 12.739 7.81605 13.12 7.61282 13.3885L7.54508 13.4655C7.2967 13.709 6.90802 13.7311 6.63413 13.5319L6.55566 13.4655L0.454916 7.48466C0.206533 7.24116 0.183953 6.86012 0.387175 6.59162L0.454916 6.51469L6.55566 0.533895C6.82888 0.266045 7.27186 0.266045 7.54508 0.533895Z" fill="#00C853" />
                                        </svg>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </ModalMenu>
            </>
            }
            {showModal && 
                   <LoginModal onClick={() => setShowModal(false)}/>
                }
    
    </header>
  )
}

export default Header