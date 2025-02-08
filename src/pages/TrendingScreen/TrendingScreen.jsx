import trending_animated from "../../assets/images/trending_animated.webp";
import Categories from "./components/Categories/Categories";
import VideoList from "./components/VideoList/VideoList";
import useTrendingScreen from "./useTrendingScreen";

const Trending = () => {

    const {
        categoryId,
    } = useTrendingScreen();

    return (
        <div className="w-full h-full">
            <div className="flex items-center gap-5 px-10 pt-6 pb-1">
                <img src={trending_animated} alt="Trending Logo" className="size-[72px]"/>
                <p className="font-bold text-4xl">Thịnh hành</p>
            </div>

            <div className="border-b-1 border-gray-300">
                <Categories />
            </div>

            <div className="px-10 mt-8">
                <VideoList categoryId={categoryId}/>
            </div>
            
        </div>
    );
};

export default Trending;