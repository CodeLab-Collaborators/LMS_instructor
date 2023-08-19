import { AiOutlineBell, AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import logo from "../../assets/logo.png"
import img from "../../assets/pi.jpg"
import { useDispatch, useSelector } from "react-redux"
import { onToggleLeft } from "../../global/globalState"
import { useState } from "react"
import DropDownProfile from "./DropDownProfile"
import LeftDropSider from "./LeftDropSider"

const Header = () => {


    const toggleLeft = useSelector((state: any) => state.toggleLeft)
    const toggle = useSelector((state: any) => state.toggle)
    const dispatch = useDispatch()

    const [state, setState] = useState<boolean>(false)
    const onState = () => {
        setState(!state)
    }
    // [${toggle ? "calc(100vw-200px)" : "calc(100vw-80px)" }]
    return (

        <div className={` w-[${toggle ? "calc(100vw-200px)" : "calc(100vw-80px)" }] flex justify-center fixed  bg-white items-center h-[70px] duration-300 transition-all 
        medium:w-[100vw] z-20
        `}
            style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
            }}
        >
            <div className="w-[95%] flex justify-between items-center" >
                {
                    !toggleLeft ? <div className="hidden medium:flex w-[40px] h-[40px] rounded-md hover:bg-slate-200 justify-center items-center hover:cursor-pointer duration-300 transition-all  "
                        onClick={() => {
                            dispatch(onToggleLeft(!toggleLeft))

                        }}
                    >
                        <AiOutlineClose className="text-[25px] " />
                    </div> : <div className="hidden medium:flex w-[40px] h-[40px] rounded-md hover:bg-slate-200 justify-center items-center hover:cursor-pointer duration-300 transition-all  "
                        onClick={() => {
                            dispatch(onToggleLeft(!toggleLeft))

                        }}
                        >
                        <AiOutlineMenu className="text-[25px] " />
                    </div>
                }
                <div className="text-[30px] font-bold hover:cursor-pointer " >
                    <img
                        src={logo}
                        className="h-[40px] ml-4"
                    />
                </div>
                <div className="flex items-center " >

                    <div className="w-[30px] h-[30px] bg-slate-400 flex items-center justify-center rounded-md mr-4" >

                        <AiOutlineBell className="
                        text-white text-[20px]
                        " />

                    </div>

                    <div
                        className=" relative
                        min-w-[100px] bg-[#c0bfbf] h-[35px]
                        rounded flex  justify-between items-center hover:cursor-pointer  medium:hidden 
                        "
                        onClick={onState}
                    >
                        <div className="mx-1  font-bold text-white font-ath " >Peter Oti</div>
                        <img
                            src={img}
                            className="w-[40px] h-[40px] mb-[-1px] rounded-md object-cover border border-slate-500  "
                        />
                    </div>
                    {
                        state ? <div className={`
                        absolute top-16 rounded transition-all duration-500 right-2 
                        `}
                            style={{
                                boxShadow: " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                            }}
                        >
                            <DropDownProfile state={state} setState={setState}
                            />
                        </div> : <div className={`
                        absolute top-16 rounded transition-all duration-500 right-[-100%]
                        `}
                            style={{
                                boxShadow: " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                            }}
                        >
                            <DropDownProfile state={state} setState={setState} />
                        </div>
                    }
                    {
                        !toggleLeft ? <div className={`
                        absolute top-16 rounded transition-all duration-500 left-2 
                        `}
                            style={{
                                boxShadow: " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                            }}
                        >
                            <LeftDropSider />
                        </div> : <div className={`
                        absolute top-16 rounded transition-all duration-500 left-[-100%]
                        `}
                            style={{
                                boxShadow: " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                            }}
                        >
                            <LeftDropSider />
                        </div>
                    }
                </div>
            </div>

        </div>

    )
}

export default Header