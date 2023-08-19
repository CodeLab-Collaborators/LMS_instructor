import pix from "/images/1.webp"
import pix1 from "/images/2.webp"
import pix2 from "/images/3.webp"
import pix3 from "/images/4.webp"
import logo from "/images/logo.png"

const ResponseScreen = () => {
    return (
        <div>
            <div className={` relative w-full h-[100vh]
              flex flex-col items-center justify-center bg
            `}
            // style={{
            //     backgroundImage: `url(${pix})`,
            //     backgroundPosition: "top left, top right, bottom right, bottom left",

            //     backgroundPositionX: "left, right, right, left", backgroundPositionY: "top, top, bottom, bottom",

            //     backgroundRepeat: "no-repeat",

            //     height: "100vh",
            //     width: "100%",
            //     boxSizing: "border-box"
            // }}
            >
                <img
                    src={pix2}
                    className=" absolute top-0 left-0  w-[40%] object-contain "
                />
                <img
                    src={pix1}
                    className=" absolute bottom-0 right-0  w-[40%] object-contain "
                />
                <img
                    src={pix}
                    className=" absolute bottom-0 left-0  w-[40%] object-contain "
                />
                <img
                    src={pix3}
                    className=" absolute top-0 right-0  w-[40%] object-contain "
                />

                <div className="align-center flex flex-col items-center " >
                    <div className="text-[30px] font-bold " >
                        <div className="flex items-center" >
                            <img
                                src={logo}
                                className="h-[80px] mr-4 "
                            />
                            <div className="font-ath3" >Project Name</div>
                        </div>
                    </div>
                    <div className="text-[50px] mt-[40px] font-athletics font-bold  "
                        style={{ fontFamily: "athletics", fontWeight: "600" }}
                    >Confirm Registration</div>
                    <div
                        className="font-ath w-[500px] text-center "
                    >An Email has been sent to your Email, Please check it to Verify your account to continue!!!</div>
                </div>
            </div>
        </div>
    )
}

export default ResponseScreen


// background - position: top left, top right, bottom right, bottom left;

// background - position - x: left, right, right, left;
// backgroundPositionY: "top, top, bottom, bottom";