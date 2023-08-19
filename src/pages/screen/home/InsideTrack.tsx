import CourseCard from "./CourseCard"


const InsideTrack = () => {
    return (
        <div>
            <div className='flex items-center mb-[50px] medium:flex-col ' >
                <div>Viewing Full stack Software Engineering Track</div>
                <button
                    className="ml-[10px] bg-purple-700 text-white  rounded hover:cursor-pointer hover:scale-[1.04] duration-300 transition-all 
                                    w-[150px] h-[40px] items-center justify-center relative inline-flex "
                >Proceed Payment</button>
            </div>

            <div className='flex items-center mb-[50px] flex-wrap justify-center '  >
                <CourseCard title="BackEnd Development" />
                <CourseCard title="FrontEnd Development" />
                <CourseCard title="UI/UX Development" />
                <CourseCard title="Design Thinking" />
            </div>

        </div>
    )
}

export default InsideTrack