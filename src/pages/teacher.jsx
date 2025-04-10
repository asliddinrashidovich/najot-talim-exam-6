import { Link, useNavigate, useParams } from "react-router-dom"
import useGetData from "../hooks/getData"
import { ScaleLoader } from "react-spinners"

function TeacherPage() {
  const navigate = useNavigate()
  const {id} = useParams()

  function handleLogout() {
    localStorage.clear()
    navigate('/')
  }
  const { data: user, loading, error } = useGetData(`https://api.ashyo.fullstackdev.uz/users/${id}`)
  console.log(user)
  if (loading) return <div className="w-[calc(100vw-100px)] right-0 ml-auto h-[100vh] flex justify-center items-center">
    <ScaleLoader color="#17a2b7"/>
  </div>;
  if (error) return <p>Xatolik: {error}</p>;

  return (
    <div className="w-[calc(100vw-100px)] md:w-[calc(100vw-241px)] px-[50px] lg:px-[50px] absolute right-0">
        <div className=" py-[10px] flex items-center justify-between">
            <p></p>
            <div className="flex justify-between gap-[48px]">
                <img src="/assets/iconoir_bell-notification.svg" className="cursor-pointer" alt="bell" />
                <button onClick={handleLogout} className="px-[35px] py-[11px] rounded-[8px]  cursor-pointer">Log out</button>
            </div>
        </div>
        <div>
            <Link className="py-[5px] mb-[20px] px-[15px] bg-[#e5e5e5]  inline-block" to={'/teachers'}>Back</Link>
        </div>
        <div className="flex justify-center md:flex-row flex-col pt-[66px] py-[50px]">
          <div className="w-[50%] px-[20px] mx-auto text-center">
            <div className="w-[280px] mx-auto mb-[50px]">
              <img src="/assets/big-person.png" className="w-full" alt="" />
            </div>
            <h3 className="text-[#1A1A1A] text-[16px] font-[700] leading-[100%] mb-[10px]">{user.fullname}</h3>
            <p className="text-[#4F4F4F] text-[12px] font-[500] leading-[100%] mb-[40px]">{user.email}</p>
            <div className="flex justify-center gap-[25px]">
              <div className="min-w-[60px] h-[60px] flex justify-center items-center bg-[#EFF3FA] rounded-[8px]">
                <img className="cursor-pointer" src="/assets/teacher.svg" alt="" />
              </div>
              <div className="min-w-[60px] h-[60px] flex justify-center items-center bg-[#EFF3FA] rounded-[8px]">
                <img className="cursor-pointer" src="/assets/call-calling.svg" alt="" />
              </div>
              <div className="min-w-[60px] h-[60px] flex justify-center items-center bg-[#EFF3FA] rounded-[8px]">
                <img className="cursor-pointer" src="/assets/sms.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="w-[50%] pt-[35px]"> 
            <h4 className="text-[#1A1A1A] font-[600] text-[16px] leading-[100%] mb-[10px]">About</h4>
            <p className="font-[500] text-[16px] leading-[21px] text-[#A7A7A7] mb-[17px]">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
            <div className="grid  grid-cols-1 gap-[30px]">
              <div>
                <h5 className="font-[600] text-[12px] mb-[7px] text-[#1A1A1A] leading-[100%]">password</h5>
                <p className="font-[500] text-[14px] text-[#A7A7A7] leading-[100%]">{user.password}</p>
              </div>
              <div>
                <h5 className="font-[600] text-[12px] mb-[7px] text-[#1A1A1A] leading-[100%]">Role</h5>
                <p className="font-[500] text-[14px] text-[#A7A7A7] leading-[100%]">{user.role}</p>
              </div>
              <div>
                <h5 className="font-[600] text-[12px] mb-[7px] text-[#1A1A1A] leading-[100%]">Phone</h5>
                <p className="font-[500] text-[14px] text-[#A7A7A7] leading-[100%]">{user.phone ? user.phone : 'unknown'}</p>
              </div>
              <div>
                <h5 className="font-[600] text-[12px] mb-[7px] text-[#1A1A1A] leading-[100%]">Createdat</h5>
                <p className="font-[500] text-[14px] text-[#A7A7A7] leading-[100%]">{user.createdAt.slice(0,10)}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}

export default TeacherPage
