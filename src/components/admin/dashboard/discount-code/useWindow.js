import { useEffect, useState } from "react";

export const useWindow = () => {
    const [dimension, setDimension] = useState({ width: window.innerWidth, height: window.innerHeight });

    const resize = () => {
        setDimension({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    return { dimension };
};
