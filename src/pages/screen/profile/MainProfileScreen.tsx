import img from "../../../assets/pix.webp"
import { AiFillYoutube, AiFillTwitterCircle } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"

const MainProfileScreen = () => {
    return (
        <div >
            <div className='w-full bg-white rounded-md h-[480px] overflow-hidden relative medium:ml-[5px] small:text-[12px] medium:w-full small:w-[100%] '

                style={{
                    boxShadow: " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                }}>
                <img src={img}
                    className="w-full h-[250px] object-cover "
                />

                <div className="mt-[-150px] z-10 absolute  flex flex-col items-center w-full  " >
                    <img
                        className="w-[200px] h-[200px] rounded-[50%] border-4 border-white object-cover "

                        src={img}
                    />
                    <div className=" text-white bg-purple-600 px-2 py-1 text-[13px] rounded mt-[-20px] " >student</div>

                    <div className="mt-3 text-[25px] " >Name</div>

                    <div className=" text-[15px] flex items-center text-[silver] " >
                        <div>@Name</div>
                        <div className="w-[5px] mx-2 h-[5px] rounded-[50%] bg-[silver] " />
                        <div> Joined: date</div>
                    </div>

                    <div className=" text-[15px] flex items-center text-[silver] " >
                        <div><strong>2</strong> Tracks Done</div>
                        <div className="w-[5px] mx-2 h-[5px] rounded-[50%] bg-[silver] " />
                        <div> on-going track</div>
                    </div>

                    <div className=" text-[15px] flex items-center text-[black] " >
                        <BsFacebook className="text-[30px] hover:text-purple-700 hover:cursor-pointer mt-4 mr-2 duration-300 transition-all hover:scale-[1.12] " />
                        <AiFillYoutube className="text-[30px] hover:text-purple-700 hover:cursor-pointer mt-4 mr-2 duration-300 transition-all  hover:scale-[1.12] " />
                        <AiFillTwitterCircle className="text-[30px] hover:text-purple-700 hover:cursor-pointer mt-4 mr-2 duration-300 transition-all hover:scale-[1.12] " />
                    </div>
                </div>
            </div>

            {/* <div className="h-[130vh] text-[20px] ">Content</div> */}

            <div className='w-full bg-white rounded-md h-250px] overflow-hidden mt-4 p-10 mb-4  small:w-[100%] ml-[5px]  '
                style={{
                    boxShadow: " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                }}
            >


                <div className="flex items-center justify-between mb-6 " >
                    <div className="text-[20px] l " >General Information</div>
                    <button className="bg-[#dfdfdf] py-2 px-6 rounded hover:cursor-pointer hover:scale-[1.05] duration-300 transition-all border-2 border-purple-900 " >Edit</button>
                </div>

                <hr />

                <div className="text-[14px] small:text-[12px]" >

                    <div className="mt-4 flex items-center small:flex-col small:items-start" >

                        <div className="w-[150px] text-[#a7a7a7] small:mb-2" >First Name</div>
                        <div>Peter</div>
                    </div>

                    <div className="mt-4 flex items-center small:flex-col small:items-start" >

                        <div className="w-[150px] text-[#a7a7a7] small:mb-2" >Last Name</div>
                        <div>Peter</div>
                    </div>

                    <div className="mt-4 flex items-center small:flex-col small:items-start" >

                        <div className="w-[150px] text-[#a7a7a7] small:mb-2" >userName</div>
                        <div>Peter</div>
                    </div>

                    <div className="mt-4 flex items-center small:flex-col small:items-start" >

                        <div className="w-[150px] text-[#a7a7a7] small:mb-2" >Date of Birth</div>
                        <div>Peter</div>
                    </div>

                    <div className="mt-4 flex items-center small:flex-col small:items-start" >

                        <div className="w-[150px] text-[#a7a7a7] small:mb-2" >Gender</div>
                        <div>Peter</div>
                    </div>





                    <div className="text-[14px] small:text-[12px]" >



                    </div>
                </div>


            </div>

            <div className='w-full bg-white rounded-md h-250px] overflow-hidden mt-4 p-10 mb-4  small:w-[100%] ml-[5px]  '
                style={{
                    boxShadow: " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                }}
            >
                <div className="flex items-center justify-between mb-6 " >
                    <div className="text-[20px] l " >Work Experience</div>
                    <button className="bg-[#dfdfdf] py-2 px-6 rounded hover:cursor-pointer hover:scale-[1.05] duration-300 transition-all border-2 border-purple-900 " >Edit</button>
                </div>

                <hr />
                <div className="text-[14px] small:text-[12px]" >

                    <div className="mt-4 flex items-center small:flex-col small:items-start" >
                        <div className="w-[150px] text-[#a7a7a7] small:mb-2" >Title</div>
                        <div>Manager</div>
                    </div>

                </div>
            </div>

            <div className='w-full bg-white rounded-md h-250px] overflow-hidden mt-4 p-10 mb-4  small:w-[100%] ml-[5px]  '
                style={{
                    boxShadow: " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                }}
            >
                <div className="flex items-center justify-between mb-6 " >
                    <div className="text-[20px] l " >Biography</div>
                    <button className="bg-[#dfdfdf] py-2 px-6 rounded hover:cursor-pointer hover:scale-[1.05] duration-300 transition-all border-2 border-purple-900 " >Edit</button>
                </div>

                <hr />
                <div className="text-[14px] small:text-[12px]" >

                    <div className="mt-4 flex items-center small:flex-col small:items-start" >
                        <div className="w-[150px] text-[#a7a7a7] small:mb-2 small:l-0 " >Biography</div>
                        <div >Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me.</div>
                    </div>

                </div>
            </div>

            {/* <div className='w-full bg-white rounded-md h-250px] overflow-hidden mt-4 p-10 mb-4 small:w-[95%] ml-[5px] ' >
                <div className="flex items-center justify-between mb-6 " >
                    <div className="text-[20px]" >Work Experience</div>
                    <button className="bg-[#dfdfdf] py-2 px-6 rounded hover:cursor-pointer hover:scale-[1.05] duration-300 transition-all border-2 border-purple-900 " >Edit</button>
                </div>

                <hr />
                <div className="text-[14px] small:text-[12px]" >

                    <div className="mt-4 flex items-center" >
                        <div className="w-[200px] text-[#a7a7a7]" >Job Title</div>
                        <div>Manager</div>
                    </div>

                </div>
            </div> */}

            {/* <div className='w-full bg-white rounded-md h-250px] overflow-hidden mt-4 p-10 mb-4 small:w-[95%] ml-[5px] ' >
                <div className="flex items-center justify-between mb-6 " >
                    <div className="text-[20px]" >Biography</div>
                    <button className="bg-[#dfdfdf] py-2 px-6 rounded hover:cursor-pointer hover:scale-[1.05] duration-300 transition-all border-2 border-purple-900 " >Edit</button>
                </div>

                <hr />
                <div className="text-[14px]" >

                    <div className="mt-4 flex items-center" >
                        <div className="w-[200px] text-[#a7a7a7]  " >Biography</div>
                        <div className="small:text-[12px] " >Teaching is a very noble profession that shapes the character, caliber, and future of an individual. If the people remember me as a good teacher, that will be the biggest honour for me.</div>
                    </div>

                </div>
            </div> */}
        </div>
    )
}

export default MainProfileScreen