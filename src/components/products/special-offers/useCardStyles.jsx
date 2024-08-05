import { useMemo } from "react";

export const useCardStyles = (mousePosition) => {
    return useMemo(() => {
        const { x, y } = mousePosition;
        const xRotation = (y / 5).toFixed(2);
        const yRotation = (x / 5).toFixed(2);
        
        return {
            transform: `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
        };
    }, [mousePosition]);
};
