import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import usePostData from "../hooks/postData";
import toast from "react-hot-toast";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const { postData, loading, error } = usePostData("https://api.ashyo.fullstackdev.uz/auth/login");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postData({ email, password });
    setEmail("");
    setPassword("");
    if (!error) {
      navigate('/dashboard')
    } else {
      console.log(error)
      toast.error(`${error}`)
    }
  };
    return (
        <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center'>
          <h1 className='text-[36px] font-[600] text-[#4F4F4F] mb-[53px]'>Welcome, Log into you account</h1>
          <form onSubmit={handleSubmit} className='w-[512px] pt-[72px] pb-[100px] px-[130px] bg-white text-center'>
            <p className='font-[500] text-[16px] text-[#667085] mb-[34px]'>It is our great pleasure to have you on board! </p>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter your login' className='p-[13px] text-[#8A8A8A] font-[500] text-[14px] border-[0.5px] border-[#A7A7A7] w-full rounded-[4px] mb-[14px]' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Password' className='p-[13px] text-[#8A8A8A] font-[500] text-[14px] border-[0.5px] border-[#A7A7A7] w-full rounded-[4px] mb-[34px]' />
            <button disabled={loading} type="submit" className='font-[700] text-[14px] text-[#fff] w-full py-[12px] bg-[#2D88D4] rounded-[4px] mb-[14px] cursor-pointer'>
              <p className="font-[700] text-[14px] text-[#fff] rounded-[6px] w-full p-[10px] bg-[#2D88D4]">Sign in</p>
            </button>
            <Link className="font-[700] text-[14px]  text-[#2D88D4]" to={'/'}>Sign up</Link>
            {error && <p>Xatolik: {error}</p>}
          </form>
        </div>
      )
}

export default LoginPage