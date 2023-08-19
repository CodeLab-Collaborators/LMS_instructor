import pix from "../../../assets/pi.jpg"


const MainCourse = () => {
    return (
        <div>
            <div>Course Activated</div>
            <div>
                <div className='w-[200px] min-h-[200px] bg-[#f3f9fb] m-4 rounded-t-md overflow-hidden '
                    style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                    }}
                >
                    <img
                        className="w-full h-[200px] object-cover mb-3"
                        src={pix}
                    />
                    <div className="p-2" >
                        <p className="text-[10px] text-[#838383] w-full flex justify-end " >6 Lesson</p>
                        <p className="text-[12px] text-[#3e3e3e] mt-2" >A Part of BackEnd Course</p>
                        <h3
                            className="text-[25px] leading-none font-ath3 "
                        >Advanced JS: Games and Visualization</h3>

                        <div className="flex my-[20px] items-center " >
                            <img
                                className="w-[40px] h-[40px] object-cover border-2 border-white rounded-[50%] mr-2 "
                                src={pix}
                            />
                            <p>name</p>
                        </div>

                        <div className="w-full h-1 bg-[#d1d1d1] relative" >
                            <div className={`
                            w-[60%] h-1 bg-[#fe8585] absolute
                            `} />
                        </div>

                        <p className="text-[12px] mt-1 " >60% completed</p>
                        <p className="text-[10px] mt-1 text-[#818181] ">Last Activity: February 17, 2023</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MainCourse