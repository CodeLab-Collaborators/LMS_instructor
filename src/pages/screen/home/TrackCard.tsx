import pix from "../../../assets/pi.jpg"
import phone from "../../../assets/p.png"

const TrackCard = () => {
    return (
        <div>
            <div className="w-[220px] min-h-[400px] bg-[#fefcf3] border-1 border-[silver] rounded-t-xl flex flex-col items-center m-2 "
                style={{
                    boxShadow: " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                }}
            >
                <div className="mt-3 mb-1 text-[20px] font-ath3 px-2 text-center leading-none " >Full Stack Software Engineering</div>
                <div
                    className="leading-snug px-3 text-[12px] my-3 text-[#6d6d6d]"
                >In this Track you'd Learning everything neccessary to get you started in your Journing of being a fullStack software Engineer.</div>
                <img
                    src={phone}
                    className="w-[80%] h-[220px] object-cover rounded-t-xl "

                    style={{
                        boxShadow: " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                    }}
                />

                <div className="w-full my-[20px] px-4 items-center justify-between " >
                    <div>
                        <div className="flex items-center " >
                            <img
                                src={pix}
                                className="w-[40px] h-[40px] border-2 border-white object-cover rounded-[50%] "
                            />
                            <div className="ml-1" >
                                <div>name</div>
                                <div className="leading-none text-[12px] text-[#636363] " >@userName</div>
                                <div className="leading-snug text-[12px] text-[#636363] " >Full Stack Engineer</div>
                            </div>

                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between mt-4 ">
                        <div>
                            <div className="text-[11px]" >students in this track</div>
                            <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-3.5">
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

                        <div className="flex items-center flex-col" >
                            <p className="text-[11px]">ratings</p>
                            <p className="text-[13px] font-bold font-ath3 " >4.5</p>
                        </div>
                    </div>

                    <div className="flex items-center w-full mt-5 justify-between" >
                        <span>
                            <div>cost</div>
                            <div className="font-ath3 leading-none " >₦20,000</div>
                        </span>
                        <div>
                            <button
                                className="animate-ping absolute  bg-purple-700 text-white  rounded hover:cursor-pointer hover:scale-[1.04] duration-300 transition-all 
                                    w-[60px] h-[30px] items-center justify-center opacity-75 inline-flex mt-[5px] ml-[20px]
                                    "
                            ></button>
                            <button
                                className=" bg-purple-700 text-white  rounded hover:cursor-pointer hover:scale-[1.04] duration-300 transition-all 
                                    w-[100px] h-[40px] items-center justify-center relative inline-flex "
                            >Start Track</button>
                        </div>


                    </div>



                </div>
            </div>
        </div>
    )
}

export default TrackCard