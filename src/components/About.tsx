"use client";

import Image from "next/image";
import ScrollRevealText from "./ScrollRevealText";

export default function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <span className="section-label">About Me</span>
                <h2 className="section-title">
                    Passionate about building{" "}
                    <span className="gradient-text">impactful software</span>
                </h2>

                <div className="about-grid">
                    <div className="about-image-container">
                        <div className="about-image-card glass-card" style={{ padding: 0, overflow: "hidden" }}>
                            <Image
                                src="/images/sharon-graduation.jpg"
                                alt="Sharon Moses Jangam - Graduation"
                                width={500}
                                height={500}
                                style={{ width: "100%", height: "500px", objectFit: "cover" }}
                            />
                            <span className="about-image-caption">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 6 }}>
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                                </svg>
                                MS Computer Science, CU Boulder
                            </span>
                        </div>
                    </div>

                    <div className="about-content">
                        <ScrollRevealText
                            text="I'm a Software Engineer currently at Apple, where I engineer core components for next-generation user data migration platforms. My expertise spans building secure, high-speed cross-platform systems in collaboration with tech giants like Google and Samsung."
                            className="about-text"
                        />
                        <ScrollRevealText
                            text="With deep roots in telecommunications, I've architected cloud-native 5G Core Network Functions and microservices at RadiSys and Samsung, working extensively with C++, Swift, Protocol Buffers, Docker, and Kubernetes. I thrive at the intersection of systems engineering and modern AI-driven development."
                            className="about-text"
                        />

                        <div className="about-highlights">
                            <div className="about-highlight">
                                <div className="about-highlight-icon" style={{ padding: 4 }}>
                                    <Image src="/apple.png" alt="Apple" width={28} height={28} style={{ filter: "invert(1)" }} />
                                </div>
                                <div>
                                    <div className="about-highlight-text">Apple</div>
                                    <div className="about-highlight-sub">Current Role</div>
                                </div>
                            </div>
                            <div className="about-highlight">
                                <div className="about-highlight-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <div className="about-highlight-text">5G Core Expert</div>
                                    <div className="about-highlight-sub">AMF, SMF, UDM</div>
                                </div>
                            </div>
                            <div className="about-highlight">
                                <div className="about-highlight-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 21h18"></path>
                                        <rect x="5" y="7" width="14" height="14" rx="2"></rect>
                                        <path d="M5 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2"></path>
                                    </svg>
                                </div>
                                <div>
                                    <div className="about-highlight-text">Cloud Native</div>
                                    <div className="about-highlight-sub">Docker & K8s</div>
                                </div>
                            </div>
                            <div className="about-highlight">
                                <div className="about-highlight-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                                        <circle cx="12" cy="5" r="3"></circle>
                                        <line x1="12" y1="8" x2="12" y2="11"></line>
                                        <line x1="9" y1="14" x2="9.01" y2="14"></line>
                                        <line x1="15" y1="14" x2="15.01" y2="14"></line>
                                    </svg>
                                </div>
                                <div>
                                    <div className="about-highlight-text">AI-Driven Dev</div>
                                    <div className="about-highlight-sub">Claude, Cursor, Roo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
