import { HomeStoreLeft } from "./HomeStoreLeft"
import { HomeStoreRightBottom } from "./HomeStoreRightBottom"
import { HomeStoreRightTop } from "./HomeStoreRightTop"

export const HomeStore = () => {
    return (
        <div className="home-store flex flex-col mt-48 p-2
                        lg:flex-row lg:px-24 lg:py-12">
                    
            <HomeStoreLeft />

            <div className="home-store-right">
                <HomeStoreRightTop />
                <HomeStoreRightBottom />
            </div>

        </div>
    )
}