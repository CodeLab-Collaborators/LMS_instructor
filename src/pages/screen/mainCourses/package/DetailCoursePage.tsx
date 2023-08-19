

import pix from "../../../../assets/pi.jpg"

const DetailCoursePage = () => {
    return (
        <div className='flex w-[96%]  ' >
            {/* Left Side */}

            <div className='w-[250px] h-[60vh] bg-[#f1f1f1] fixed overflow-x-scroll p-3 rounded' >
                <button className='text-[12px] p-1 bg-[#E86D2A] text-[white] pt-2 px-2 rounded hover:cursor-pointer mb-8 ' >Back to Course</button>

                <div className='text-[30px] leading-none mb-3 font-ath3' >Animation and VFX</div>

                <div className="w-[70%] h-1 mb-1 bg-[#e2e2e2] relative" >
                    <div className={`
                            w-[60%] h-1 bg-[#E86D2A] absolute
                            `} />

                </div>
                <div className="text-[10px] mr-7 " >0% Completed</div>
                <div className="text-[10px] mr-7 mb-4 " >0/17 Steps</div>

                <hr />

                <div className='mt-4' >
                    <div className='flex w-full justify-between items-center' >
                        <div>Introduction</div>
                        <div className='text-[11px] text-[#6e6e6e] '>4 Topics</div>
                    </div>
                    <div className='m-1 text-[14px]'>
                        <div className='m-1' >course1</div>
                        <div className='m-1' >course1</div>
                    </div>
                </div>

                <div className='mt-4' >
                    <div className='flex w-full justify-between items-center' >
                        <div>Introduction</div>
                        <div className='text-[11px] text-[#6e6e6e] '>4 Topics</div>
                    </div>
                    <div className='m-1 text-[14px]'>
                        <div className='m-1' >course1</div>
                        <div className='m-1' >course1</div>
                    </div>
                </div>

                <div className='mt-4' >
                    <div className='flex w-full justify-between items-center' >
                        <div>Introduction</div>
                        <div className='text-[11px] text-[#6e6e6e] '>4 Topics</div>
                    </div>
                    <div className='m-1 text-[14px]'>
                        <div className='m-1' >course1</div>
                        <div className='m-1' >course1</div>
                    </div>
                </div>

                <div className='mt-4' >
                    <div className='flex w-full justify-between items-center' >
                        <div>Introduction</div>
                        <div className='text-[11px] text-[#6e6e6e] '>4 Topics</div>
                    </div>
                    <div className='m-1 text-[14px]'>
                        <div className='m-1' >course1</div>
                        <div className='m-1' >course1</div>
                    </div>
                </div>


            </div>

            {/* Right Side */}
            <div className='w-[100vw] flex justify-end '  >
                <div className=' w-[calc(100%-270px)] min-h-[100vh] bg-white 
                p-4 rounded-md
                '
                    style={{
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                    }}
                >
                    <div className='text-[12px] mb-6 ' >Animation and VFX  Introduction to Animation</div>

                    <hr />


                    <div className='text-[40px] font-ath3 mt-4 mb-1 '>Introduction to Animation</div>

                    <div className='flex items-center mb-10' >
                        <img
                            src={pix}
                            className='w-[60px] h-[60px] rounded-[50%] object-cover mr-2'
                        />
                        <div>name</div>
                        <div className='w-[5px] h-[5px] rounded-[50%] bg-black mx-4' />
                        <div>2023</div>
                    </div>

                    <div>
                        Animation has historically been produced in two ways. The first is by artists creating a succession of cartoon frames, which are then combined into a film. A second method is by using physical models, e.g. King Kong, which are positioned, the image recorded, then the model is moved, the next image is recorded, and this process is continued.
                        <br />
                        <br />
                        Computer animation can be produced by using a rendering machine to produce successive frames wherein some aspect of the image is varied. For a simple animation this might be just moving the camera or the relative motion of rigid bodies in the scene. This is analogous to the second technique described above, i.e., using physical models. More sophisticated computer animation can move the camera and/or the objects in more interesting ways, e.g. along computed curved paths, and can even use the laws of Physics to determine the behavior of objects.
                    </div>
                    {/* https://youtu.be/oJM7v0Jpn3E  https://www.youtube.com/watch?v=CQ8kAIGAZxA */}
                    <div className='w-full flex justify-center mt-6'>
                        <div className='w-[500px] h-[300px] bg-fuchsia-900'>
                            <iframe
                                className='w-full h-full'
                                src={`https://www.youtube.com/embed/CQ8kAIGAZxA`}
                            />
                        </div>
                    </div>

                    {/* <button className='text-[15px] p-4 mt-6 bg-[#E86D2A] text-[white]  rounded hover:cursor-pointer mb-8 duration-300 transition-all hover:scale-[1.02] ' >Mark Completed</button> */}



                    <div className='mt-8'>
                        <button
                            className="animate-ping absolute  bg-purple-700 text-white  rounded hover:cursor-pointer hover:scale-[1.04] duration-300 transition-all 
                                    w-[90px] h-[40px] items-center justify-center opacity-75 inline-flex mt-[6px] ml-[30px]
                                    "
                        ></button>
                        <button
                            className=" bg-purple-700 text-white  rounded hover:cursor-pointer hover:scale-[1.04] duration-300 transition-all text-[15px]
                                    w-[145px] h-[55px] items-center justify-center relative inline-flex "
                        >Mark Completed</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DetailCoursePage