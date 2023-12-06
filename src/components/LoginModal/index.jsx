import React from 'react'
import Modal from '../Modal'
import Input from '../Input'
import GreenButton from '../GreenButton'

const LoginModal = ({onClick}) => {
  return (
    <Modal onclick={onClick} className=''>
        <div className="lg:w-[768px] lg:h-[500px] p-8 flex flex-col items-center justify-center">
            <p className='text-3xl font-semibold mb-8'>ورود به حساب کاربری</p>
            <form className='flex flex-col'>
              <Input label='نام کاربری' placeholder='نام کاربری خود را وارد کنید' icon='fa fa-user' type='text' required='true'/>
              <Input label='رمز عبور' placeholder='رمز عبور خود را وارد کنید' icon='fa fa-lock' type='password' required='true'/>
              <GreenButton type='submit'/>
            </form>
            
        </div>
    </Modal>
  )
}

export default LoginModal