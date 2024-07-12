import { useCallback } from "react";

export const useHandleMouseMove = (setMousePosition) => {
    return useCallback((e) => {
        const { clientX: x, clientY: y } = e;
        const rect = document.documentElement.getBoundingClientRect();
        
        const xPos = (x - rect.left - rect.width / 2) / 10;
        const yPos = (y - rect.top - rect.height / 2) / 10;
     
        setMousePosition({ x: xPos, y: yPos });
    }, [setMousePosition]);
};
