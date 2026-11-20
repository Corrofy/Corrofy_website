import { useEffect, useRef } from "react";
import styles from "./customRoundedCursor.module.css"

export function CustomRoundedCursor() {

    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        if (!cursor) return; // if no element in ref return

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e; // get mouse's x and y position

            // move the styling by xpx, ypx and 0px (Z axis)
            cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
            // here translate(-50%, -50% ) is there because
            // by default center = top left corener
            // - 50% x = horizontally center
            // - 50% y = vertically center 
            // thus makes it exactly center

        }; //handler handleMouseMove();

        const handleMouseHide = () => {
            cursor.style.opacity = "0";  // 0% opacity
        }; // handler : handleMouseHide();

        const handleMouseShow = () => {
            cursor.style.opacity = "1";
        }; // handler: handleMouseShow();


        // assign those event listeners to the window.
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseHide);
        window.addEventListener("mousedown", handleMouseHide);
        window.addEventListener("mouseup", handleMouseShow);


        //cleanup : remove those event listeners:
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseHide);
            window.removeEventListener("mousedown", handleMouseHide);
            window.removeEventListener("mouseup", handleMouseShow);
        };
    }, []); // useEffect for loading and unloading mouse Event handlers;


    return <div ref={cursorRef} className={styles.customRoundedCursor} />;
}