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
                                🎓 MS Computer Science, CU Boulder
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
                                <div className="about-highlight-icon">🌐</div>
                                <div>
                                    <div className="about-highlight-text">5G Core Expert</div>
                                    <div className="about-highlight-sub">AMF, SMF, UDM</div>
                                </div>
                            </div>
                            <div className="about-highlight">
                                <div className="about-highlight-icon">🏗️</div>
                                <div>
                                    <div className="about-highlight-text">Cloud Native</div>
                                    <div className="about-highlight-sub">Docker & K8s</div>
                                </div>
                            </div>
                            <div className="about-highlight">
                                <div className="about-highlight-icon">🤖</div>
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
