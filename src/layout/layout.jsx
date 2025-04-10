import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { menuData } from "../data/data"
import { Toaster } from "react-hot-toast";

function Layout() {
  const location = useLocation();
  const toliq = location.pathname.split('/');
  const params = toliq[1];
  const token = localStorage.getItem('token')

  const navigate = useNavigate()
  function handleClick(text) {
    navigate(`/${text.toLowerCase().split(' ')[0]}`)
  }
  return (
    <div className="w-full relative">
        <div><Toaster/></div>
        {token && <div className="w-[100px] md:w-[241px] fixed top-0 left-0 bottom-0 bg-[#152259] text-center">
            <img src="/public/assets/Ellipse 6.png" alt="ellepse" className="mt-[30px] w-[65px] mx-auto mb-[22px]"/>
            <p className="text-[14px] font-[600] leading-[100%] text-[#fff] mb-[40px]" >Udemy Inter. school</p>
            <hr className="border-[#BDBDBD] mb-[16px]"/>
            <ul className="mb-[100px]">
              {menuData.map(item => (
                  <li onClick={() => handleClick(item.text)} key={item.text} className={`cursor-pointer flex text-start mx-[23px] rounded-[4px] gap-[16px] ${item.text.toLowerCase().split(' ')[0] == params ? 'bg-[#509CDB]' : 'bg-transparent'} px-[16px] py-[12px] justify-start items-center mb-1`}>
                      <img src={item.img} alt={item.text} />
                      <span className="text-[#fff] text-[14px] font-[600] leading-[100%] hidden md:flex">{item.text}</span>
                  </li>
              ))}
            </ul>
            <div className={`cursor-pointer flex text-start mx-[23px] rounded-[4px] gap-[16px] bg-transparent px-[16px] py-[12px] justify-start items-center mb-1`}>
                <img src="/public/assets/School Management Admin Dashboard UI (Community) (3)/vuesax/outline/bank.svg" alt="banking" />
                <span className="text-[#fff] hidden md:flex text-[14px] font-[600] leading-[100%]">Features</span>
                <div className="py-[1px] px-[8px] text-[14px] font-[600] hidden md:flex leading-[100%] bg-[#B9D7F1] rounded-[20px] ">NEW</div>
            </div>
        </div>}
        <div>
          <Outlet/>
        </div>
    </div>
  )
}

export default Layout