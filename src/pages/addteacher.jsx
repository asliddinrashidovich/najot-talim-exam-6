import { useState } from "react"
import { Link } from "react-router-dom"
import usePostData from "../hooks/postData"
import toast from "react-hot-toast"

function AddTeacher() {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const { postData, loading, error } = usePostData("https://api.ashyo.fullstackdev.uz/users/add");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postData({ fullname,  email, phone_number, password }).then(() => {
            if (!error) {
                toast.success(`User added seccessfuly`)
            } else {
                console.log(error)
                toast.error(`${error}`)
            }
        });
        setEmail("");
        setPassword("");
        setFullname("");
        setPhone("")

    };  
    return (
        <form onSubmit={handleSubmit} className="w-[calc(100vw-100px)] md:w-[calc(100vw-241px)] px-[20px] md:px-[50px] lg:px-[50px] absolute right-0">
            <div className=" py-[10px] flex items-center justify-between">
                <p></p>
                <div className="flex justify-between gap-[48px]">
                    <img src="/assets/iconoir_bell-notification.svg" className="cursor-pointer" alt="bell" />
                    <button className="px-[35px] py-[11px] rounded-[8px]  cursor-pointer">Log out</button>
                </div>
            </div>
            <div className="py-[10px] flex items-center justify-between mb-[15px]">
                <p className="text-[20px] font-[500] leading-[100%] text-[#4F4F4F]">Add Teacher</p>
                <div className="flex justify-between gap-[48px]">
                    <button disabled={loading} className="px-[35px] py-[11px] rounded-[8px] text-white bg-[#509CDB] cursor-pointer">Save</button>
                </div>
            </div>
            <div>
                <Link className="py-[5px] mb-[20px] px-[15px] bg-[#e5e5e5]  inline-block" to={'/teachers'}>Back</Link>
            </div>
            <div  className="grid grid-cols-1 md:grid-cols-2 md:gap-[52px]">
                <div>
                    <label htmlFor="name">
                        <span className="text-[#8A8A8A] mb-[5px] text-[14px] font-[500] leading-[100%]">Full Name</span>
                        <input required value={fullname} onChange={(e) => setFullname(e.target.value)} type="text" placeholder="Full Name" className="w-full border-[0.5px] border-[#A7A7A7] rounded-[4px] py-[13px] px-[10px] text-[#8A8A8A] mb-[36px]"/>
                    </label> 
                    <label htmlFor="email">
                        <span className="text-[#8A8A8A] mb-[5px] text-[14px] font-[500] leading-[100%]">Email address</span>
                        <input required value={email} onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="Email address" className="w-full border-[0.5px] border-[#A7A7A7] rounded-[4px] py-[13px] px-[10px] text-[#8A8A8A]  mb-[36px]"/>
                    </label> 
                </div>
                <div>
                    <label htmlFor="phone">
                        <span className="text-[#8A8A8A] mb-[5px] text-[14px] font-[500] leading-[100%]">Phone number</span>
                        <input required value={phone_number} onChange={(e) => setPhone(e.target.value)}  type="number" placeholder="phone number" className="w-full border-[0.5px] border-[#A7A7A7] rounded-[4px] py-[13px] px-[10px] text-[#8A8A8A]  mb-[36px]"/>
                    </label> 
                    <label htmlFor="password">
                        <span className="text-[#8A8A8A] mb-[5px] text-[14px] font-[500] leading-[100%]">Password</span>
                        <input required value={password} onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="Password" className="w-full border-[0.5px] border-[#A7A7A7] rounded-[4px] py-[13px] px-[10px] text-[#8A8A8A]  mb-[36px]"/>
                    </label> 
                </div>
            </div>
        </form>
      )
  }
  
  export default AddTeacher
  
  