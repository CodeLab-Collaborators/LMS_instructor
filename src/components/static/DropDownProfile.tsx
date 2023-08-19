import React from 'react'
import img from "../../assets/pi.jpg"
import { FaDoorOpen, FaGraduationCap } from "react-icons/fa"
import { BsFillPersonFill, BsPersonCircle } from "react-icons/bs"
import { BiSolidChart } from "react-icons/bi"

import { AiOutlineBell } from "react-icons/ai"


interface iProps {
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    state: boolean;
}

const DropDownProfile: React.FC<iProps> = ({ setState, state }) => {

    return (
        <div className='w-[200px] bg-white h-[80vh] rounded-md p-2' >
            <div className='flex p-2 bg-slate-100 rounded-md items-center ' >
                <img
                    className='w-[40px] h-[40px] rounded-[50%] object-cover mr-2 '
                    src={img}
                />
                <div >
                    <div>name</div>
                    <div className='text-[12px] mt-[-5px] text-[silver]  ' >@userName</div>
                </div>
            </div>

            <div className=" font-ath text-[silver] mb-5 text-[14px] flex flex-col h-[90%] " >


                <div className="flex items-center mt-8
                  w-full hover:bg-slate-50 hover:cursor-pointer duration-300 transition-all py-3 rounded pl-2 "
                    onClick={() => {
                        setState(!state)
                    }}
                >
                    <div  >
                        <BsFillPersonFill className="text-[16px] mr-2" />
                    </div>
                    <div className={`text-[#a1a0a0]  text-[12px]  duration-300 transition-all`} >My Profile</div>
                </div>

                <div className="flex items-center mt-2 pl-2 w-full hover:bg-slate-50 hover:cursor-pointer duration-300 transition-all py-3 rounded  "
                    onClick={() => {
                        setState(!state)
                    }} >
                    <div  >
                        <BiSolidChart className="text-[20px] mr-2" />
                    </div>
                    <div className={`text-[#a1a0a0]  text-[12px]  duration-300 transition-all`} >My Timelne</div>
                </div>

                <div className="flex items-center mt-2 pl-2 w-full hover:bg-slate-50 hover:cursor-pointer duration-300 transition-all py-3 rounded "
                    onClick={() => {
                        setState(!state)
                    }}
                >
                    <div  >
                        <AiOutlineBell className="text-[20px] mr-2" />
                    </div>
                    <div className={`text-[#a1a0a0]  text-[12px]  duration-300 transition-all `} >Notification</div>
                </div>



                <div className="flex items-center mt-2 pl-2 w-full hover:bg-slate-50 hover:cursor-pointer duration-300 transition-all py-3 rounded " onClick={() => {
                    setState(!state)
                }}>
                    <div  >
                        <BsPersonCircle className="text-[20px] mr-2" />
                    </div>
                    <div className={`text-[#a1a0a0]  text-[12px]  duration-300 transition-all`}>Account</div>
                </div>


                <div className="flex items-center mt-2 p-2 w-full hover:bg-slate-50 hover:cursor-pointer duration-300 transition-all py-3 rounded " onClick={() => {
                    setState(false)
                }}>
                    <div  >
                        <FaGraduationCap className="text-[20px] mr-2" />
                    </div>
                    <div className={`text-[#a1a0a0]  text-[12px]  duration-300 transition-all`} >My Course</div>
                </div>

                <div className="flex-1" />


                <div className="border-b border-[silver] w-full   " />


                <div className="flex items-center mt-2 pl-2 w-full hover:bg-slate-50 hover:cursor-pointer duration-300 transition-all py-3 rounded " >
                    <div  >
                        <FaDoorOpen className="text-[20px] mr-2" />
                    </div>
                    <div className={`text-[#a1a0a0] text-[14px] $`} >Log Out</div>
                </div>

            </div>
        </div>
    )
}

export default DropDownProfile

// { !toggle && "hidden" }
// { !toggle && "hidden" }
// { !toggle && "hidden" }
// { !toggle && "hidden" }
// { !toggle && "hidden" }
// { !toggle && "hidden" }
// { !toggle && "hidden" }