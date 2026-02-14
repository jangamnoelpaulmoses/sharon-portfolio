"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealTextProps {
    text: string;
    className?: string;
    highlightColor?: string;
    dimColor?: string;
}

export default function ScrollRevealText({
    text,
    className = "",
    highlightColor = "#f5f5f5",
    dimColor = "rgba(255, 255, 255, 0.15)",
}: ScrollRevealTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const words = containerRef.current.querySelectorAll(".sr-word");

        gsap.set(words, { color: dimColor });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 40%",
                scrub: 1,
            },
        });

        words.forEach((word, i) => {
            tl.to(
                word,
                {
                    color: highlightColor,
                    duration: 0.3,
                    ease: "none",
                },
                i * 0.05
            );
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach((st) => {
                if (st.trigger === containerRef.current) st.kill();
            });
        };
    }, [text, highlightColor, dimColor]);

    const words = text.split(" ");

    return (
        <div ref={containerRef} className={`scroll-reveal-text ${className}`}>
            {words.map((word, i) => (
                <span key={i} className="sr-word">
                    {word}
                    {i < words.length - 1 ? " " : ""}
                </span>
            ))}
        </div>
    );
}
