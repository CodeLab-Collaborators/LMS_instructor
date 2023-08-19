import { Outlet } from 'react-router-dom'
import Header from '../static/Header'
import SideBar from '../static/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { onToggleLeft } from '../../global/globalState'

const Layout = () => {
    const dispatch = useDispatch()
    const toggle = useSelector((state: any) => state.toggle)
    return (
        <div className='font-ath ' >
            {/* <Header /> */}

            <div className='flex h-[100vh] ' >
                <SideBar />

                <div
                    className='flex flex-col w-full items-end '
                >
                    <Header />

                    <div className={`w-[${toggle ? "calc(100vw-200px)" : "calc(100vw-80px)"}] pl-8 medium:w-full medium:pl-0 medium:ml-[0px] duration-300 transition-all mt-24`}

                        onClick={() => {
                            dispatch(onToggleLeft(true))
                        }} >
                        <Outlet />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Layout