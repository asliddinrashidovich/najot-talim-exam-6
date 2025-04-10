
function TeacherPage() {
  return (
    <div className="w-full md:w-[calc(100vw-241px)] px-[50px] lg:px-[50px] absolute right-0">
        <div className=" py-[10px] flex items-center justify-between">
            <p></p>
            <div className="flex justify-between gap-[48px]">
                <img src="/public/assets/iconoir_bell-notification.svg" className="cursor-pointer" alt="bell" />
                <button className="px-[35px] py-[11px] rounded-[8px]  cursor-pointer">Log out</button>
            </div>
        </div>
        <div className="flex justify-center pt-[66px]">
          <div className="w-[50%] text-center">
            <div className="w-[280px] mx-auto mb-[50px]">
              <img src="/assets/big-person.png" className="w-full" alt="" />
            </div>
            <h3 className="text-[#1A1A1A] text-[16px] font-[700] leading-[100%] mb-[10px]">Kristin Watson</h3>
            <p className="text-[#4F4F4F] text-[12px] font-[500] leading-[100%] mb-[40px]">tim.jennings@example.com</p>
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
            <div className="grid grid-cols-2 gap-[30px]">
              <div>
                <h5 className="font-[600] text-[12px] mb-[7px] text-[#1A1A1A] leading-[100%]">Subject</h5>
                <p className="font-[500] text-[14px] text-[#A7A7A7] leading-[100%]">English</p>
              </div>
              <div>
                <h5 className="font-[600] text-[12px] mb-[7px] text-[#1A1A1A] leading-[100%]">Class</h5>
                <p className="font-[500] text-[14px] text-[#A7A7A7] leading-[100%]">J SS 1</p>
              </div>
              <div>
                <h5 className="font-[600] text-[12px] mb-[7px] text-[#1A1A1A] leading-[100%]">Age</h5>
                <p className="font-[500] text-[14px] text-[#A7A7A7] leading-[100%]">34</p>
              </div>
              <div>
                <h5 className="font-[600] text-[12px] mb-[7px] text-[#1A1A1A] leading-[100%]">Gender</h5>
                <p className="font-[500] text-[14px] text-[#A7A7A7] leading-[100%]">Male</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}

export default TeacherPage
