import { Link, useNavigate } from "react-router-dom"
import useGetData from "../hooks/getData"
import { ScaleLoader } from "react-spinners"

function Teachers() {
  const navigate = useNavigate()
  function handleClick() {
    navigate('/teachers/teacher')
  }
  const { data: users, loading, error } = useGetData("https://api.ashyo.fullstackdev.uz/users")
  console.log(users)
  if (loading) return <div className="max-w-[100%] h-[100vh] flex justify-center items-center">
      <ScaleLoader color="#17a2b7"/>
    </div>;
  if (error) return <p>Xatolik: {error}</p>;
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
            <p className="text-[20px] font-[500] leading-[100%] text-[#4F4F4F]">Teachers</p>
            <div className="flex justify-between gap-[48px]">
                <Link to={'/teachers/add-teacher'} className="px-[35px] py-[11px] rounded-[8px] text-white bg-[#509CDB] cursor-pointer">Add Teachers</Link>
            </div>
        </div>
        <div className="flex items-center gap-[10px] mb-[10px] py-[12px]">
            <img src="/assets/search.svg" className="w-[24px] h-[24px] rounded-full" alt="search" />
            <input type="text" className="w-full text-[14px] font-[500] leading-[100%]" placeholder="Search for a student by name or email"/>
        </div>
        <div className="overflow-x-auto overflow-y-hidden min-h-[calc(100vh-205px)]">
          <table className="border-separate relative  border-spacing-y-[10px] w-full">
              <thead>
                <tr>
                  <th className="text-[#424242] px-[8px] py-[16px] font-[700] text-[12px] leading-[100%] min-w-[180px] text-start">Name</th>
                  <th className="text-[#424242] px-[8px] py-[16px] font-[700] text-[12px] leading-[100%] min-w-[135px] text-start">Subject</th>
                  <th className="text-[#424242] px-[8px] py-[16px] font-[700] text-[12px] leading-[100%] min-w-[170px] text-start">Class</th>
                  <th className="text-[#424242] px-[8px] py-[16px] font-[700] text-[12px] leading-[100%] min-w-[300px] text-start">Email address</th>
                  <th className="text-[#424242] px-[8px] py-[16px] font-[700] text-[12px] leading-[100%] min-w-[280px] text-start">Gender</th>
                </tr>
              </thead>
              <tbody>
                {users.map(({ fullname, email, phone_number, role, createdAt }) => (
                  <tr key={email} onClick={handleClick} className="cursor-pointer">
                    <td className="px-[8px] py-[16px] text-[#4F4F4F] font-[500] text-[12px] leading-[100%] flex justify-start items-center gap-[7px]">
                      <img src="/assets/person.png" alt="" />
                      <p>{fullname}</p>
                    </td>
                    <td className="px-[8px] py-[16px] text-[#4F4F4F] font-[500] text-[12px] leading-[100%] ">{phone_number ? phone_number : 'unknown'}</td>
                    <td className="px-[8px] py-[16px] text-[#4F4F4F] font-[500] text-[12px] leading-[100%] ">{role}</td>
                    <td className="px-[8px] py-[16px] text-[#4F4F4F] font-[500] text-[12px] leading-[100%] ">{email}</td>
                    <td className="px-[8px] py-[16px] text-[#4F4F4F] font-[500] text-[12px] leading-[100%] ">{createdAt}</td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
    </div>
      )
}

export default Teachers
