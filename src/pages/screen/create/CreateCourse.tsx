import React, { useEffect, useState } from 'react'
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { useQuill } from "react-quilljs"
import "quill/dist/quill.snow.css"
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"
import pix from "../../../assets/pix.webp"
import pix1 from "../../../assets/pi.jpg"

const CreateCourse = () => {
    const [parent] = useAutoAnimate()
    const { quill, quillRef } = useQuill()


    const [bullet, setBullet] = useState<Array<{ point: string }>>([
        { point: "" },
    ])

    const [info, setInfo] = useState<string>("")
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")

    const [image, setImage] = useState<string>("")
    const [imageLocal, setImageLocal] = useState<string>(pix1)

    const [imageCover, setImageCover] = useState<string>("")
    const [imageCoverLocal, setImageCoverLocal] = useState<string>(pix)

    const [imageBest, setImageBest] = useState<string>("")
    const [imageBestLocal, setImageBestLocal] = useState<string>(pix1)


    const onImage = (e: any) => {
        const file = e.target.files[0]
        const save = URL.createObjectURL(file)
        setImageLocal(save)
        setImage(file)
    }

    const onImageCover = (e: any) => {
        const file = e.target.files[0]
        const save = URL.createObjectURL(file)
        setImageCoverLocal(save)
        setImageCover(file)
    }

    const onImageBest = (e: any) => {
        const file = e.target.files[0]
        const save = URL.createObjectURL(file)
        setImageBestLocal(save)
        setImageBest(file)
    }



    const addInput = () => {
        setBullet([...bullet, { point: "" }])
    }

    const removeInput = (i: number) => {
        let data: any = [...bullet]
        data.splice(i, 1)
        setBullet(data)
    }

    const onHandleText = (e: any, i: number) => {
        const { value, name } = e.target
        let data: any = [...bullet]
        data[i][name] = value
        setBullet(data)
    }


    useEffect(() => {
        if (quill) {
            quill.on("text-change", () => {
                setInfo(quillRef.current.firstChild.innerHTML)
            })
        }
    }, [quill])

    const onSubmitData = () => {

        const formData = new FormData()

        formData.append("title", title)
        formData.append("description", description)
        formData.append("info", info)
        formData.append("image", image)
        formData.append("imageCover", imageCover)
        formData.append("imageBest", imageBest)

        console.log("reading: ", { title, description, info, imageBest, image, imageCover, bullet })

        console.log("appended: ", formData)

    }

    return (
        <div>
            <div>Create Course</div>
            <div className='w-[95%] mt-[30px] min-h-[30vh] justify-center flex ' >
                <div className='w-[600px] bg-white rounded border border-[silver] justify-center flex items-center flex-col mb-[20px] medium:w-[96%] overflow-hidden ' >
                    <div className='flex flex-col items-center w-full' >
                        <img
                            className='w-full h-[200px] bg-slate-300 border-none object-cover'
                            src={imageCoverLocal}
                        />
                        <label className='p-2 bg-purple-500 rounded text-white shadow-md hover:cursor-pointer hover:scale-[1.02] duration-300 transition-all mt-[-20px] mb-[30px]' htmlFor='cover' >upload course cover image</label>
                        <input id="cover" className='hidden'
                            type='file'
                            accept='image/png, image/jpg, image/jpeg'
                            onChange={onImageCover}
                        />
                    </div>



                    <div className='flex justify-center w-[90%] small:flex-col  ' >
                        <div className='flex flex-col items-center justify-center m-2 ' >
                            <img className='w-[200px] h-[150px] rounded object-cover small:w-full '
                                src={imageLocal}
                            />
                            <label className='p-2 bg-green-500 rounded text-white text-[12px] mt-[-10px] hover:cursor-pointer hover:scale-[1.02] duration-300 transition-all shadow-md ' htmlFor='image' >course image</label>
                            <input
                                type='file'
                                accept='image/png, image/jpg, image/jpeg'
                                className='hidden'
                                onChange={onImage}
                                id='image'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center m-2 ' >
                            <img className='w-[200px] h-[150px] rounded object-cover small:w-full '
                                src={imageBestLocal}
                            />
                            <label className='p-2 bg-red-500 rounded text-white text-[12px] mt-[-10px] hover:cursor-pointer hover:scale-[1.02] duration-300 transition-all shadow-md ' htmlFor='best'>course inner image</label>

                            <input
                                type='file'
                                accept='image/png, image/jpg, image/jpeg'
                                className='hidden'
                                onChange={onImageBest}
                                id='best'
                            />
                        </div>

                    </div>
                    <hr />

                    <div className='my-6 flex w-[95%] small:flex-col ' >
                        <div className='w-full'>
                            <div ref={parent}>
                                <div className='font-bold text-[12px]' >Course Title</div>
                                <input
                                    placeholder='Select your Date'
                                    className='text-[12px] px-2 py-2 mt-1 border w-full'
                                    value={title}
                                    onChange={(e) => {
                                        setTitle(e.target.value)
                                    }}
                                />
                                <div className=' border-b border-[#d4d4d4] my-[20px] ' />
                                <div className='font-bold text-[12px] ' >Things to Learn in this Course(Bullet):</div>

                                {
                                    bullet?.map((props: any, index: number) => (
                                        <div className='flex items-center ' key={index} >
                                            <input
                                                onChange={(e: any) => {
                                                    onHandleText(e, index)
                                                }}
                                                name='point'
                                                placeholder='Select your Date'
                                                className='text-[12px] px-2 py-2 mt-1 border w-full'
                                            />
                                            <div className='flex items-center' >
                                                {
                                                    bullet.length < 6 && <div className='w-[32px] h-[32px] bg-green-400 text-white flex items-center justify-center m-0 hover:cursor-pointer hover:scale-[1.05] duration-300 transition-all font-ath3 mt-1 ml-1'
                                                        onClick={addInput}
                                                    >
                                                        +
                                                    </div>
                                                }
                                                {
                                                    bullet.length > 1 && <div className='w-[32px] h-[32px] bg-red-400 text-white flex items-center justify-center m-0 hover:cursor-pointer hover:scale-[1.05] duration-300 transition-all font-ath3 mt-1 ml-1'
                                                        onClick={() => {
                                                            removeInput(index)
                                                        }}
                                                    >
                                                        -
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='w-full ml-2 small:mt-4 small:w-full small:ml-0'>
                            <div className='font-bold text-[12px]' >Course Description</div>
                            <textarea
                                placeholder='Select your Date'
                                className='text-[12px] px-2 py-2 mt-1 border w-full resize-none h-[150px]  '

                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value)
                                }}
                            />
                        </div>

                    </div>

                    <div
                        className='w-[98%] m-0 small:w-[96%] '
                    >
                        <div className='border rounded-b text-[12px]'
                            ref={quillRef}
                        />
                    </div>


                    <br />
                    <br />
                    <br />


                    <button className='w-[98%] bg-purple-700 h-[45px] rounded text-white font-bold mt-2 mb-4'
                        onClick={() => {
                            onSubmitData()
                            // console.log(bullet)
                        }}
                    >Upload</button>

                </div>
            </div>
        </div>
    )
}

export default CreateCourse                              