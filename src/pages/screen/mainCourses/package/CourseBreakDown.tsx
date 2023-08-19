import pix1 from "../../../../assets/start.jpg"
import pix2 from "../../../../assets/image.jpg"
import pix from "../../../../assets/pi.jpg"

import { BsFillPencilFill } from "react-icons/bs"
import { AiFillBook } from "react-icons/ai"
import { GrCertificate } from "react-icons/gr"
import { MdTopic, MdQuiz } from "react-icons/md"

const CourseBreakDown = () => {
    return (
        <div className='h-[50vh]  w-[98%] justify-center ml-2 ' >
            <div
                className="w-full min-h-[60vh] relative pb-[30px]   "
                style={{
                    backgroundImage: `url(${pix2})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                }}
            >
                <div className="absolute w-full h-full bg-[black] z-10 opacity-80 " />

                <div className="text-white z-20 absolute p-10 h-[100vh]" >

                    <div className="text-[40px] font- mb-[30px] " >Animation and VFX</div>
                    <div className="w-[60%] medium:w-full  " >Animation is more pervasive than many people realise. Apart from short films, feature films, animated gifs and other media dedicated to the display of moving images, animation is also heavily used for video games, motion graphics and special effects. Animation is also prevalent in information technology interfaces.</div>

                    <div className="flex items-center mt-10 " >
                        <img
                            className="w-[40px] h-[40px] rounded-[50%] object-cover mr-2 "
                            src={pix}
                        />
                        <div>name</div>
                        <div className="text-[20px] mx-2 w-[5px] h-[5px] rounded-[50%] bg-white " />
                        <div>created: 2023</div>
                    </div>


                </div>
            </div>

            <div className="flex w-full" >
                <div className="w-[70%] min-h-[120vh] medium:w-full  " >
                    <div className="w-full justify-center flex my-[30px]" >
                        <div className="w-[70%] min-h-[100px] bg-slate-100 flex items-center justify-center rounded-sm " >
                            <div className="text-[12px] mr-7 " >0% Completed</div>
                            <div className="w-[70%] h-1 bg-[#d1d1d1] relative" >
                                <div className={`
                            w-[60%] h-1 bg-[#fe8585] absolute
                            `} />
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center" >
                        <div className="w-[80%] flex flex-col medium:w-full ">

                            <div className=" bg-white p-4 rounded "
                                style={{
                                    boxShadow: " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                                }}
                            >

                                <div>
                                    JavaScript is now the language powering databases and many more applications. It’s even possible to develop embedded applications, mobile apps, TV sets apps and much more. What started as a tiny language inside the browser is now the most popular language in the world.
                                    <br />
                                    <br />

                                    Using advanced javascript can help in gamifying user experience. This course is a primer to how to develop a grasp over Gaming and data visualisation.
                                </div>

                                <div className="my-[20px] text-[25px] font-ath3 " >
                                    Course Content
                                </div>

                                <div>

                                    <div className=" mt-6 flex py-4 bg-slate-200 px-3 items-center justify-between rounded " >
                                        <div className="text-[20px]" >Introduction to JS</div>
                                        <div className="text-[#888888]" >1 Topic</div>
                                    </div>

                                    <div className="mt-4" >
                                        <div>Lesson Content</div>

                                        <div className="flex items-center w-[95%] justify-between mt-3 ml-2" >
                                            <div className="flex items-center ">
                                                <BsFillPencilFill className="mr-3" />
                                                <div>Introduction to Types</div>

                                            </div>
                                            <div>done</div>
                                        </div>
                                    </div>

                                </div>

                                <div>

                                    <div className=" mt-6 flex py-4 bg-slate-200 px-3 items-center justify-between rounded " >
                                        <div className="text-[20px]" >Introduction to JS</div>
                                        <div className="text-[#888888]" >1 Topic</div>
                                    </div>

                                    <div className="mt-4" >
                                        <div>Lesson Content</div>

                                        <div className="flex items-center w-[95%] justify-between mt-3 ml-2" >
                                            <div className="flex items-center ">
                                                <BsFillPencilFill className="mr-3" />
                                                <div>Introduction to Types</div>

                                            </div>
                                            <div>done</div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div
                                className="bg-white mt-6 p-4 rounded mb-6"
                                style={{
                                    boxShadow: " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                                }}
                            >
                                <div>
                                    About Intructor
                                </div>

                                <div className="mt-8 flex items-center" >
                                    <img
                                        src={pix}
                                        className="w-[60px] h-[60px] rounded-[50%] object-cover mr-2"
                                    />
                                    <div  >
                                        <div>name</div>
                                        <div className="text-[12px] text-[#777777] " >9 course created</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* continue */}
                </div>


                {/* Right Side */}

                <div className="w-[30%] h-[200px] relative medium:hidden " >
                    <div className="w-[280px] min-h-[400px] bg-white fixed mt-[-300px] ml-[-0px] z-30 rounded-md overflow-hidden "
                        style={{
                            boxShadow: " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                        }}
                    >
                        <img
                            className="w-full h-[190px] object-cover "
                            src={pix1}
                        />

                        <div className="flex flex-col items-center my-2 " >
                            <div className="text-[11px]" >students in this track</div>
                            <div className="flex sm:justify-start lg:justify-end xl:justify-start -space-x-3.5">
                                <img
                                    src={pix}
                                    className="w-[30px] h-[30px] border-2 border-white object-cover rounded-[50%] "
                                />
                                <img
                                    src={pix}
                                    className="w-[30px] h-[30px] border-2 border-white object-cover rounded-[50%] "
                                />
                                <img
                                    src={pix}
                                    className="w-[30px] h-[30px] border-2 border-white object-cover rounded-[50%] "
                                />
                                <img
                                    src={pix}
                                    className="w-[30px] h-[30px] border-2 border-white object-cover rounded-[50%] "
                                />
                                <div className="w-[30px] h-[30px] border-2 border-white  rounded-[50%] flex items-center justify-center text-[12px] bg-[#757575] text-white pt-[3px] ">+9</div>
                            </div>
                        </div>

                        <div className="my-4 " >
                            <hr />
                        </div>

                        <div className="p-2" >
                            <div>This Course Includes</div>

                            <div className="flex items-center m-4" >
                                <AiFillBook className="text-[23px]" />
                                <div className="ml-2" >4 Lessons</div>
                            </div>
                            <div className="flex items-center m-4" >
                                <MdTopic className="text-[23px]" />
                                <div className="ml-2" >12 Topics</div>
                            </div>
                            <div className="flex items-center m-4" >
                                <MdQuiz className="text-[23px]" />
                                <div className="ml-2" >3 Quizzes</div>
                            </div>
                            <div className="flex items-center m-4" >
                                <GrCertificate className="text-[23px]" />
                                <div className="ml-2" >Course Certificate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseBreakDown