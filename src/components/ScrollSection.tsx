"use client";

import { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function ScrollSection({
    children,
    className = "",
    id,
}: ScrollSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const elements = sectionRef.current.querySelectorAll(
            ".section-label, .section-title, .section-subtitle, .glass-card, .about-image-container, .about-content, .experience-item, .education-card, .contact-info"
        );

        gsap.set(elements, { opacity: 0, y: 50 });

        elements.forEach((el, i) => {
            gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    end: "top 60%",
                    toggleActions: "play none none none",
                },
                delay: i * 0.05,
            });
        });

        const section = sectionRef.current;
        return () => {
            ScrollTrigger.getAll().forEach((st) => {
                if (
                    st.trigger &&
                    section &&
                    section.contains(st.trigger)
                ) {
                    st.kill();
                }
            });
        };
    }, []);

    return (
        <section ref={sectionRef} className={`section ${className}`} id={id}>
            {children}
        </section>
    );
}
