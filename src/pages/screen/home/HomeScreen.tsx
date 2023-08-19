import TrackCard from "./TrackCard"




const HomeScreen = () => {
    return (
        <div className='h-[150vh] flex flex-wrap w-full justify-center ' >
            <TrackCard />
            <TrackCard />
        </div>
    )
}

export default HomeScreen