"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Only run on client-side and devices with fine pointers
        if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) {
            return;
        }

        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        // Hide default cursor
        document.body.style.cursor = "none";

        const onMouseMove = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        const onMouseEnterLink = () => setIsHovering(true);
        const onMouseLeaveLink = () => setIsHovering(false);

        document.addEventListener("mousemove", onMouseMove);

        // Add listeners to clickable elements
        const links = document.querySelectorAll("a, button, .cursor-hover");
        links.forEach((link) => {
            link.addEventListener("mouseenter", onMouseEnterLink);
            link.addEventListener("mouseleave", onMouseLeaveLink);
        });

        // MutationObserver to handle dynamically added elements
        const observer = new MutationObserver(() => {
            const newLinks = document.querySelectorAll("a, button, .cursor-hover");
            newLinks.forEach((link) => {
                link.removeEventListener("mouseenter", onMouseEnterLink);
                link.removeEventListener("mouseleave", onMouseLeaveLink);
                link.addEventListener("mouseenter", onMouseEnterLink);
                link.addEventListener("mouseleave", onMouseLeaveLink);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            document.body.style.cursor = "auto";
            document.removeEventListener("mousemove", onMouseMove);
            links.forEach((link) => {
                link.removeEventListener("mouseenter", onMouseEnterLink);
                link.removeEventListener("mouseleave", onMouseLeaveLink);
            });
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (cursor && follower) {
            if (isHovering) {
                // Subtle change only - no big expansion
                gsap.to(cursor, { scale: 1, duration: 0.3 });
                gsap.to(follower, { scale: 1, opacity: 1, backgroundColor: "transparent", mixBlendMode: "difference", duration: 0.3 });
            } else {
                gsap.to(cursor, { scale: 1, duration: 0.3 });
                gsap.to(follower, { scale: 1, opacity: 1, backgroundColor: "transparent", mixBlendMode: "difference", duration: 0.3 });
            }
        }
    }, [isHovering]);

    return (
        <>
            <div ref={cursorRef} className="custom-cursor-dot" />
            <div ref={followerRef} className="custom-cursor-ring" />
        </>
    );
}
