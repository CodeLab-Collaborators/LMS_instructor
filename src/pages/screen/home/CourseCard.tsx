import pix from "../../../assets/pi.jpg"

interface iProps {
    title?: string;
}

const CourseCard: React.FC<iProps> = ({ title }) => {
    return (

        <div>
            <div className="w-[250px] min-h-[180px] bg-white rounded-t-md overflow-hidden m-2 "
                style={{
                    boxShadow: " rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                }}
            >
                <img
                    className="w-full h-[240px] object-cover"
                    src={pix}
                />
                <div className="p-2">
                    <div className="font-ath3 text-[20px] " >{title}</div>
                    <p className="text-[14px] leading-tight text-[#6e6e6e] mb-4 " >This course will take you through server side development, using NodeJS and Express</p>

                    <hr />

                    <div className="mb-4" />

                    <div className="mb-[10px]">
                        <div className="mb-[15px] " >Some what you'd Learn</div>

                        <div className="flex items-center w-full" >
                            <div className="w-[5px] h-[5px] rounded-[50%] bg-black mr-[10px]" />
                            <div className="font-ath3">HTTP Server</div>
                        </div>
                        <div className="flex items-center w-full" >
                            <div className="w-[5px] h-[5px] rounded-[50%] bg-black mr-[10px]" />
                            <div className="font-ath3">CRUD Functionality</div>
                        </div>
                        <div className="flex items-center w-full" >
                            <div className="w-[5px] h-[5px] rounded-[50%] bg-black mr-[10px]" />
                            <div className="font-ath3">DataBase Administration</div>
                        </div>
                        <div className="flex items-center w-full" >
                            <div className="w-[5px] h-[5px] rounded-[50%] bg-black mr-[10px]" />
                            <div className="font-ath3">Bi-Directional Server call</div>
                        </div>
                        <div className="flex items-center w-full" >
                            <div className="w-[5px] h-[5px] rounded-[50%] bg-black mr-[10px]" />
                            <div className="font-ath3">webRTC: chats and video calls</div>
                        </div>
                        <div className="flex items-center w-full" >
                            <div className="w-[5px] h-[5px] rounded-[50%] bg-black mr-[10px]" />
                            <div className="font-ath3">Deployment/Integration</div>
                        </div>
                        <div className="flex items-center w-full" >
                            <div className="w-[5px] h-[5px] rounded-[50%] bg-black mr-[10px]" />
                            <div className="font-ath3">And lot more...</div>
                        </div>
                    </div>

                    <hr />
                    <div className="mb-4" />
                    <div>
                        <div className="flex items-center " >
                            <img
                                src={pix}
                                className="w-[40px] h-[40px] border-2 border-white object-cover rounded-[50%] "
                            />
                            <div className="ml-1" >
                                <div>name</div>
                                <div className="leading-none text-[12px] text-[#636363] " >@userName</div>
                                <div className="leading-snug text-[12px] text-[#636363] " >BackEnd  Engineer</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CourseCard