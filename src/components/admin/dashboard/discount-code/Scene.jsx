import { useEffect, useRef } from "react";
import { useWindow } from "./useWindow";
import { useSelector } from "react-redux";

export const Scene = () => {
    const { dimension } = useWindow();
    const canvas = useRef(null);
    const prevPosition = useRef(null);
    const darkTheme = useSelector(state => state.darkTheme.darkMode);

    useEffect(() => {
        if (dimension.width > 0 && canvas.current) {
            init();
        }
    }, [dimension]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { left, top } = canvas.current.getBoundingClientRect();
            const canvasX = clientX - left;
            const canvasY = clientY - top;
            const nbOfCircles = Math.max(Math.abs(e.movementX), Math.abs(e.movementY)) / 10;

            if (prevPosition.current != null) {
                const { x, y } = prevPosition.current;
                for (let i = 0; i < nbOfCircles; i++) {
                    const targetX = lerp(x, canvasX, (1 / nbOfCircles) * i);
                    const targetY = lerp(y, canvasY, (1 / nbOfCircles) * i);
                    draw(targetX, targetY, 50);
                }
            }

            prevPosition.current = { x: canvasX, y: canvasY };
        };

        const lerp = (x, y, a) => x * (1 - a) + y * a;

        const draw = (x, y, radius) => {
            const ctx = canvas.current.getContext("2d");
            if (ctx) {
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, 2 * Math.PI);
                ctx.globalCompositeOperation = "destination-out";
                ctx.fill();
            }
        };

        const canvasElement = canvas.current;
        if (canvasElement) {
            canvasElement.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            if (canvasElement) {
                canvasElement.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, [dimension]);

    const init = () => {
        const ctx = canvas.current.getContext("2d");
        if (ctx) {
            ctx.fillStyle = darkTheme ? "#263352" : "#3F9469";
            ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);
            ctx.globalCompositeOperation = "destination-out";
        }
    };

    useEffect(() => {
        if (canvas.current) {
            canvas.current.width = dimension.width;
            canvas.current.height = dimension.height;
            init();
        }
    }, [dimension, darkTheme]);

    return (
        <div className="relative z-90">
            <canvas ref={canvas} />
        </div>
    );
};
