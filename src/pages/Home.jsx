import { FindJoy } from "../components/home/find-joy/FindJoy"
import { HomeScroll } from "../components/home/home-scroll/HomeScroll"
import { HomeHead } from "../components/home/HomeHead"
import { HomeStore } from "../components/home/store/HomeStore"
import { motion } from "framer-motion"

export const Home = () => {
    return (
        <motion.div 
            className="home"
            initial={{ width: "120%",opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            exit={{ width: "80%", x: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            
            <HomeHead />
            <FindJoy />
            <HomeScroll />
            <HomeStore />
        </motion.div>
    )
}