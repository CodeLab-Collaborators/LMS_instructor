
import { FaDoorOpen, FaDoorClosed, FaConnectdevelop, FaGraduationCap } from "react-icons/fa"
import { BsFillPersonFill, BsFillGearFill } from "react-icons/bs"
import { BiSolidChart, BiSolidInbox } from "react-icons/bi"
import { onToggle, } from "../../global/globalState"
import { useDispatch, useSelector } from "react-redux"
import { MdGroups2 } from "react-icons/md"
import { GoCommentDiscussion } from "react-icons/go"
import { NavLink } from "react-router-dom"
import { AiFillHome, AiOutlineAppstoreAdd } from "react-icons/ai"

const SideBar = () => {
    const dispatch = useDispatch()
    const toggle = useSelector((state: any) => state.toggle)
    // [${ toggle ?"200px": "80px"}] 
    return (
        <div>
            <div
                className={`w-[${toggle ? "200px" : "80px"}]  z-50 duration-300 transition-all h-[100vh] fixed flex flex-col  bg-white  medium:hidden `}

            style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
            }}
        >

            {
                toggle ? <div className="flex w-[40px] h-[40px] rounded-md hover:bg-slate-200 justify-center items-center hover:cursor-pointer duration-300 transition-all mt-5 ml-[15px]  "
                    onClick={() => {
                        dispatch(onToggle(false))
                    }}
                >
                    <FaDoorClosed className="text-[25px] " />

                </div> : <div className="flex w-[40px] h-[40px] rounded-md hover:bg-slate-200 justify-center items-center hover:cursor-pointer duration-300 transition-all mt-5 ml-[15px]  "
                    onClick={() => {
                        dispatch(onToggle(true))
                    }}
                >
                    <FaDoorOpen className="text-[25px] " />

                </div>
            }



            <div className="mt-[70px]" />

                <div className="ml-5 font-ath text-[silver] mb-5 " >


                    <NavLink to="/create-course"
                        className={({ isActive }) =>
                            isActive ? 'flex items-center  bg-slate-100 hover:cursor-pointer duration-300 h-[40px] transition-all rounded text-[black] mb-[5px] pb-[5px] ' : ''
                        }
                    >
                        <div className="flex items-center mt-2 pl-2 w-full hover:bg-slate-100 hover:cursor-pointer duration-300 transition-all py-3 rounded  " >
                            <div  >
                                <AiOutlineAppstoreAdd className="text-[20px] mr-2" />
                            </div>
                            <div className={`text-[#a1a0a0]  text-[14px] ${!toggle && "hidden"} duration-300 transition-all`} >Create Course</div>
                        </div>
                    </NavLink>


                    <div />

                </div>

                <div className="ml-5 font-ath text-[silver] mb-5 " >
                    {
                        toggle ? <div className={`
                uppercase 
                `} >Personal</div> : <div className="border-b border-[silver] w-[30px]   " />
                    }

                    <NavLink to="/"
                        className={({ isActive }) =>
                            isActive ? 'flex items-center  bg-slate-100 hover:cursor-pointer duration-300 h-[40px] transition-all rounded text-[black] mb-[5px] pb-[5px] ' : ''
                        }
                    >
                        <div className="flex items-center mt-2 pl-2 w-full hover:bg-slate-100 hover:cursor-pointer duration-300 transition-all py-3 rounded  " >
                            <div  >
                                <AiFillHome className="text-[20px] mr-2" />
                            </div>
                            <div className={`text-[#a1a0a0]  text-[14px] ${!toggle && "hidden"} duration-300 transition-all`} >Home</div>
                        </div>
                    </NavLink>

                    <NavLink to="/profile"
                        className={({ isActive }) =>
                            isActive ? 'flex items-center  bg-slate-100 hover:cursor-pointer duration-300 h-[40px] transition-all rounded text-[black] mb-[5px] pb-[5px] ' : ''
                        }
                    >
                        <div className="flex items-center mt-2 pl-2 w-full hover:bg-slate-100 hover:cursor-pointer duration-300 transition-all py-3 rounded  " >
                            <div  >
                                <BsFillPersonFill className="text-[20px] mr-2" />
                            </div>
                            <div className={`text-[#a1a0a0]  text-[14px] ${!toggle && "hidden"} duration-300 transition-all`} >My Profile</div>
                        </div>
                    </NavLink>


                    <NavLink to="/course-broke-down"
                        className={({ isActive }) =>
                            isActive ? 'flex items-center  bg-slate-100 hover:cursor-pointer duration-300 h-[40px] transition-all rounded text-[black] mb-[5px] pb-[5px] ' : ''
                        }
                    >
                        <div className="flex items-center mt-2 pl-2 w-full hover:bg-slate-50 hover:cursor-pointer duration-300 transition-all py-3 rounded " >
                            <div  >
                                <BiSolidChart className="text-[20px] mr-2" />
                            </div>
                            <div className={`text-[#a1a0a0]  text-[14px] ${!toggle && "hidden"} duration-300 transition-all`} >My Timeline</div>
                        </div>
                    </NavLink>

                    <NavLink to="/main-course"
                        className={({ isActive }) =>
                            isActive ? 'flex items-center  bg-slate-100 hover:cursor-pointer duration-300 h-[40px] transition-all rounded text-[black] mb-[5px] pb-[5px] ' : ''
                        }
                    >
                        <div className="flex items-center mt-2 pl-2 w-full hover:bg-slate-50 hover:cursor-pointer duration-300 transition-all py-3 rounded " >
                            <div  >
                                <BiSolidInbox className="text-[20px] mr-2" />
                            </div>
                            <div className={`text-[#a1a0a0]  text-[14px] ${!toggle && "hidden"} duration-300 transition-all `} >On-going Course</div>
                        </div>
                    </NavLink>
                    <div />

                </div>

            <div className="ml-5 font-ath text-[silver] mb-5 text-[14px] " >

                {
                    toggle ? <div className={`
                uppercase 
                `} >Community</div> : <div className="border-b border-[silver] w-[30px]   " />
                }


                    <NavLink to="/course-detail"
                        className={({ isActive }) =>
                            isActive ? 'flex items-center  bg-slate-100 hover:cursor-pointer duration-300 h-[40px] transition-all rounded text-[black] mb-[5px] pb-[5px] ' : ''
                        }
                    >
                        <div className="flex items-center mt-2 pl-2 w-full hover:bg-slate-50 hover:cursor-pointer duration-300 transition-all py-3 rounded " >
                    <div  >
                        <MdGroups2 className="text-[20px] mr-2" />
                    </div>
                    <div className={`text-[#a1a0a0]  text-[14px] ${!toggle && "hidden"} duration-300 transition-all`}>My Group</div>
                </div>
                    </NavLink>

                    <NavLink to="/connection"
                        className={({ isActive }) =>
                            isActive ? 'flex items-center  bg-slate-100 hover:cursor-pointer duration-300 h-[40px] transition-all rounded text-[black] mb-[5px] pb-[5px] ' : ''
                        }
                    >
                        <div className="flex items-center mt-2 pl-2 w-full hover:bg-slate-50 hover:cursor-pointer duration-300 transition-all py-3 rounded " >
                    <div  >
                        <FaConnectdevelop className="text-[20px] mr-2" />
                    </div>
                    <div className={`text-[#a1a0a0]  text-[14px] ${!toggle && "hidden"} duration-300 transition-all`} >My Connection</div>
                </div>
                    </NavLink>



                    <NavLink to="/discussion"
                        className={({ isActive }) =>
                            isActive ? 'flex items-center  bg-slate-100 hover:cursor-pointer duration-300 h-[40px] transition-all rounded text-[black] mb-[5px] pb-[5px]  ' : ''
                        }
                    >
                        <div className="flex items-center mt-2 pl-2 w-full hover:bg-slate-50 hover:cursor-pointer duration-300 transition-all py-3 rounded " >
                    <div  >
                        <GoCommentDiscussion className="text-[20px] mr-2" />
                    </div>
                    <div className={`text-[#a1a0a0]  text-[14px] ${!toggle && "hidden"} duration-300 transition-all`} >My Discussion</div>
                        </div>
                    </NavLink>


                    <NavLink to="/inside"
                        className={({ isActive }) =>
                            isActive ? 'flex items-center  bg-slate-100 hover:cursor-pointer duration-300 h-[40px] transition-all rounded text-[black] mb-[5px] pb-[5px] ' : ''
                        }
                    >
                        <div className="flex items-center mt-2 pl-2 w-full hover:bg-slate-50 hover:cursor-pointer duration-300 transition-all py-3 rounded " >
                    <div  >
                        <FaGraduationCap className="text-[20px] mr-2" />
                    </div>
                    <div className={`text-[#a1a0a0]  text-[14px] ${!toggle && "hidden"} duration-300 transition-all`} >My Course</div>
                </div>
                    </NavLink>

            </div>

            <div className="flex-1" />

            <div className="ml-5 font-ath text-[silver] mb-5 " >
                <div className="uppercase " ></div>



                    <NavLink to="/setting"
                        className={({ isActive }) =>
                            isActive ? 'flex items-center  bg-slate-100 hover:cursor-pointer duration-300 h-[40px] transition-all rounded text-[black]  pb-[15px] ' : ''
                        }
                    >
                        <div className="flex items-center mt-2 pl-2 w-full hover:bg-slate-100 hover:cursor-pointer duration-300 transition-all py-3 rounded " >
                    <div  >
                        <BsFillGearFill className="text-[20px] mr-2" />
                    </div>
                            <div className={`text-[#a1a0a0] text-[14px] ${!toggle && "hidden"}  `} >Account Settings</div>
                </div>
                    </NavLink>




            </div>

            </div>
        </div>
    )
}

export default SideBar
