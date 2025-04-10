import { Link } from "react-router-dom"

function AddTeacher() {
    return (
        <div className="w-full md:w-[calc(100vw-241px)] px-[50px] lg:px-[50px] absolute right-0">
            <div className=" py-[10px] flex items-center justify-between">
                <p></p>
                <div className="flex justify-between gap-[48px]">
                    <img src="/public/assets/iconoir_bell-notification.svg" className="cursor-pointer" alt="bell" />
                    <button className="px-[35px] py-[11px] rounded-[8px]  cursor-pointer">Log out</button>
                </div>
            </div>
            <div className="py-[10px] flex items-center justify-between mb-[15px]">
                <p className="text-[20px] font-[500] leading-[100%] text-[#4F4F4F]">Add Teacher</p>
                <div className="flex justify-between gap-[48px]">
                    <Link to={'/add-teacher'} className="px-[35px] py-[11px] rounded-[8px] text-white bg-[#509CDB] cursor-pointer">Save</Link>
                </div>
            </div>
            <form className="grid grid-cols-2 gap-[52px]">
                <div>
                    <label htmlFor="name">
                        <span className="text-[#8A8A8A] mb-[5px] text-[14px] font-[500] leading-[100%]">Full Name</span>
                        <input type="text" placeholder="Full Name" className="w-full border-[0.5px] border-[#A7A7A7] rounded-[4px] py-[13px] px-[10px] text-[#8A8A8A] mb-[36px]"/>
                    </label> 
                    <label htmlFor="email">
                        <span className="text-[#8A8A8A] mb-[5px] text-[14px] font-[500] leading-[100%]">Email address</span>
                        <input type="email" placeholder="Email address" className="w-full border-[0.5px] border-[#A7A7A7] rounded-[4px] py-[13px] px-[10px] text-[#8A8A8A]  mb-[36px]"/>
                    </label> 
                    <label htmlFor="subject">
                        <span className="text-[#8A8A8A] mb-[5px] text-[14px] font-[500] leading-[100%]">Subject</span>
                        <select name="subject" id="subject" className="w-full border-[0.5px] border-[#A7A7A7] rounded-[4px] py-[13px] px-[10px] text-[#8A8A8A] mb-[36px]">
                            <option value="Subject">Subject</option>
                            <option value="Hemistery">Hemistery</option>
                            <option value="Math">Math</option>
                        </select>
                    </label> 
                    <label htmlFor="about">
                        <span className="text-[#8A8A8A] mb-[5px] text-[14px] font-[500] leading-[100%]">About</span>
                        <textarea name="about" id="about" rows={5} placeholder="About" className="w-full border-[0.5px] border-[#A7A7A7] rounded-[4px] py-[13px] px-[10px] text-[#8A8A8A] mb-[36px]"></textarea>
                    </label> 
                </div>
                <div>
                    <label htmlFor="class">
                        <span className="text-[#8A8A8A] mb-[5px] text-[14px] font-[500] leading-[100%]">Class</span>
                        <select name="class" id="class" className="w-full border-[0.5px] border-[#A7A7A7] rounded-[4px] py-[13px] px-[10px] text-[#8A8A8A] mb-[36px]">
                            <option value="Class" disabled>Class</option>
                            <option value="J SS 1">J SS 1</option>
                            <option value="J SS 2">J SS 2</option>
                            <option value="J SS 3">J SS 3</option>
                            <option value="J SS 4">J SS 4</option>
                        </select>
                    </label> 
                    <label htmlFor="gender">
                        <span className="text-[#8A8A8A] mb-[5px] text-[14px] font-[500] leading-[100%]">Gender</span>
                        <select name="gender"  id="gender" className="w-full border-[0.5px] border-[#A7A7A7] rounded-[4px] py-[13px] px-[10px] text-[#8A8A8A] mb-[36px]">
                            <option value="Gender" disabled>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label> 
                    <label htmlFor="age">
                        <span className="text-[#8A8A8A] mb-[5px] text-[14px] font-[500] leading-[100%]">Age</span>
                        <input type="number" placeholder="Age" className="w-full border-[0.5px] border-[#A7A7A7] rounded-[4px] py-[13px] px-[10px] text-[#8A8A8A]  mb-[36px]"/>
                    </label> 
                </div>
            </form>
        </div>
      )
  }
  
  export default AddTeacher
  
  