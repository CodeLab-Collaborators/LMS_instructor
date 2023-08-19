import MainProfileScreen from './MainProfileScreen'
import SidedScreen from './SidedScreen'

const ProfileScreen = () => {
    return (
        <div className='flex w-full' >

            <div className='flex-[0.8] mr-4  medium:flex-1 medium:justify-center medium:flex medium:w-full ' >
                <MainProfileScreen />
            </div>
            <div className='flex-[0.3]  mr-8 medium:hidden ' >
                <SidedScreen />
            </div>
        </div>
    )
}

export default ProfileScreen