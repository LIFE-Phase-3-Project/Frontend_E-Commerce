import Wave from '../../assets/images/wave-flipped.png'
import DarkWave from '../../assets/images/dark-wave-flipped.png'
import Secure from '../../assets/images/svg/secure.svg'
import DarkSecure from '../../assets/images/svg/dark-secure.svg'
import { useSelector } from "react-redux";
import { RegisterForm } from "../../components/auth/register/RegisterForm";
import { motion } from 'framer-motion';
import { useEffect } from 'react';


export const Register = () => {
    const isDarkTheme = useSelector(state => state.darkTheme.darkMode)

    useEffect(() => {
        document.body.style.overflow = "hidden"
    }, [])

    return (
        <motion.div
            initial={{ width: "50%", opacity: 0 }}
            animate={{ width: "100%", opacity: 1 }}
            exit={{ x: "100%",opacity: 0.75 }}
            transition={{ duration: 0.45, ease: "easeInOut" }} 
            className="h-screen flex justify-center items-center"
        >

            <div className="w-12/12 md:w-6/12 relative h-full flex items-center justify-center xl:justify-end z-20">
                <RegisterForm />
            </div>
            <div className="w-0/12 md:w-6/12 h-screen flex md:relative justify-center">
                <img className="absolute h-screen top-0 left-40 right-0 z-0" src={isDarkTheme ? DarkWave : Wave} alt="icon" />
                <img className="hidden md:block z-20" src={isDarkTheme ? DarkSecure : Secure} alt="icon" width={300} style={{ transform: "scaleX(-1)" }} />
            </div>
        </motion.div>
    )
}