"use client";

import { useState, useEffect } from "react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleLinkClick = () => {
        setMobileOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="navbar-inner">
                <a href="#" className="navbar-logo">
                    SM<span style={{ opacity: 0.6 }}>.</span>
                </a>

                <div className={`navbar-links ${mobileOpen ? "open" : ""}`}>
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} onClick={handleLinkClick}>
                            {link.label}
                        </a>
                    ))}
                    <a href="#contact" className="navbar-cta" onClick={handleLinkClick}>
                        Contact
                    </a>
                </div>

                <button
                    className="mobile-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation"
                >
                    <span
                        style={
                            mobileOpen
                                ? { transform: "rotate(45deg) translate(5px, 5px)" }
                                : {}
                        }
                    />
                    <span style={mobileOpen ? { opacity: 0 } : {}} />
                    <span
                        style={
                            mobileOpen
                                ? { transform: "rotate(-45deg) translate(5px, -5px)" }
                                : {}
                        }
                    />
                </button>
            </div>
        </nav>
    );
}
