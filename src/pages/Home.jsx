import { FindJoy } from "../components/home/find-joy/FindJoy"
import { HomeScroll } from "../components/home/home-scroll/HomeScroll"
import { HomeHead } from "../components/home/HomeHead"
import { HomeStore } from "../components/home/store/HomeStore"

export const Home = () => {
    return (
        <div className="home">
            <HomeHead />
            <FindJoy />
            <HomeScroll />
            <HomeStore />
        </div>
    )
}