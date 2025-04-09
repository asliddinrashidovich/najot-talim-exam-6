
function Teachers() {
    return (
        <div className="w-full relative">
            <div className="w-[241px] hidden md:block fixed top-0 left-0 bottom-0 bg-[#152259] text-center">
                <img src="/public/assets/Ellipse 6.png" alt="ellepse" className="mt-[30px] w-[65px] mx-auto mb-[22px]"/>
                <p className="text-[14px] font-[600] leading-[100%] text-[#fff] mb-[40px]" >Udemy Inter. school</p>
                <hr className="border-[#BDBDBD] mb-[16px]"/>
                <ul className="mb-[100px]">
                    {menuData.map(item => (
                        <li key={item.text} className={`cursor-pointer flex text-start mx-[23px] rounded-[4px] gap-[16px] ${item.active ? 'bg-[#509CDB]' : 'bg-transparent'} px-[16px] py-[12px] justify-start items-center mb-1`}>
                            <img src={item.img} alt={item.text} />
                            <span className="text-[#fff] text-[14px] font-[600] leading-[100%]">{item.text}</span>
                        </li>
                    ))}
                </ul>
                <div className={`cursor-pointer flex text-start mx-[23px] rounded-[4px] gap-[16px] bg-transparent px-[16px] py-[12px] justify-start items-center mb-1`}>
                    <img src="/public/assets/School Management Admin Dashboard UI (Community) (3)/vuesax/outline/bank.svg" alt="banking" />
                    <span className="text-[#fff] text-[14px] font-[600] leading-[100%]">Features</span>
                    <div className="py-[1px] px-[8px] text-[14px] font-[600] leading-[100%] bg-[#B9D7F1] rounded-[20px] ">NEW</div>
                </div>
            </div>
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
                        <button className="px-[35px] py-[11px] rounded-[8px] text-white bg-[#509CDB] cursor-pointer">Add Teachers</button>
                    </div>
                </div>
                <div className="flex items-center gap-[10px] mb-[10px]">
                    <img src="/assets/search.svg" alt="search" />
                    <input type="text" className="w-full" placeholder="Search for a student by name or email"/>
                </div>
                <table>

                </table>
            </div>
        </div>
      )
}

export default Teachers

const menuData = [
    {
      img: '/public/assets/School Management Admin Dashboard UI (Community)/vuesax/broken/home-2.svg',
      text: 'Dashboard',
      active: true
    },
    {
      img: '/public/assets/School Management Admin Dashboard UI (Community)/vuesax/broken/home-2.svg',
      text: 'Teachers',
      active: false
    },
    {
      img: '/public/assets/School Management Admin Dashboard UI (Community) (2)/vuesax/outline/teacher.svg',
      text: 'Students',
      active: false
    },
    {
      img: '/public/assets/School Management Admin Dashboard UI (Community) (3)/vuesax/outline/bank.svg',
      text: 'Billing',
      active: false
    },
    {
      img: '/public/assets/School Management Admin Dashboard UI (Community) (4)/vuesax/outline/setting-2.svg',
      text: 'Settings and profile',
      active: false
    },
    {
      img: '/public/assets/chart-square.svg',
      text: 'Exams',
      active: false
    },
  ]