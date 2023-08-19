
const SidedScreen = () => {
    return (
        <div className='w-full ' >
            <div className='w-[22%] min-h-[40vh] fixed rounded p-4 '>
                <div className='w-full items-center flex flex-col  bg-white rounded-md py-4 '

                    style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" }}
                >

                    <div>Complete Your Profile</div>
                    <div className='w-[150px] h-[150px] rounded-[50%] border-8 border-green-500 flex items-center justify-center mt-4  ' >
                        <div>75% done</div>
                    </div>

                </div>
                <div className='w-full items-center flex flex-col  bg-white rounded-md py-4 mt-4 '

                    style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px" }}
                >

                    <div>Complete Your Profile</div>
                    <div className='w-[150px] h-[150px] rounded-[50%] border-8 border-green-500 flex items-center justify-center mt-4  ' >
                        <div>75% done</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SidedScreen