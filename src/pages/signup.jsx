import { Link } from "react-router-dom"

function RegisterPage() {
    return (
        <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center'>
          <h1 className='text-[36px] font-[600] text-[#4F4F4F] mb-[53px]'>Welcome, Sign up</h1>
          <form className='w-[512px] pt-[72px] pb-[100px] px-[130px] bg-white text-center'>
            <p className='font-[500] text-[16px] text-[#667085] mb-[34px]'>It is our great pleasure to have you on board! </p>
            <input type="text" placeholder='Enter your Email' className='p-[13px] text-[#8A8A8A] font-[500] text-[14px] border-[0.5px] border-[#A7A7A7] w-full rounded-[4px] mb-[14px]' />
            <input type="text" placeholder='Create your password' className='p-[13px] text-[#8A8A8A] font-[500] text-[14px] border-[0.5px] border-[#A7A7A7] w-full rounded-[4px] mb-[14px]' />
            <input type="password" placeholder='Create your Password' className='p-[13px] text-[#8A8A8A] font-[500] text-[14px] border-[0.5px] border-[#A7A7A7] w-full rounded-[4px] mb-[34px]' />
            <button className='font-[700] text-[14px] text-[#fff] w-full py-[12px] bg-[#2D88D4] rounded-[4px] mb-[14px] cursor-pointer'>
            <Link className="font-[700] text-[14px] text-[#fff] rounded-[6px] w-full p-[10px] bg-[#2D88D4]" to={'/dashboard'}>Sign up</Link>
            </button>
            <Link className="font-[700] text-[14px]  text-[#2D88D4] block mb-[25px]" to={'/login'}>Log in</Link>
          </form>
        </div>
      )
  }
  
  export default RegisterPage