import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Video from '../../assets/videos/home-video.webm';

export const HomeVideo = () => {
    const controls = useAnimation();
    const videoRef = useRef(null);

    useEffect(() => {
        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    controls.start({
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 1 }
                    });
                } else {
                    controls.start({
                        opacity: 0,
                        scale: 0.8,
                        transition: { duration: 1 }
                    });
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, {
            threshold: 0.5,
        });

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, [controls]);

    return (
        <div className="relative w-full">
            <motion.div
                ref={videoRef}
                initial={{ opacity: 0.5, scale: 0.35 }}
                animate={controls}
                className="w-full h-auto"
                id="home-video"
            >
                <video autoPlay loop muted className="w-full h-auto">
                    {/* https://www.shutterstock.com/shutterstock/videos/1111987491/preview/stock-footage-black-woman-using-virtual-reality-headset-for-online-shopping-browsing-through-stylish-dresses-and.webm */}
                    <source src={Video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 pointer-events-none"></div>
            </motion.div>
        </div>
    );
};
