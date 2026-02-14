import Image from "next/image";
import { useRef, useEffect } from "react";
import LiquidButton from "./LiquidButton";

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-inner">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="hero-badge-dot" />
                        Open to Opportunities
                    </div>

                    <h1 className="hero-name">
                        Sharon Moses
                        <br />
                        <span className="gradient-text">Jangam</span>
                    </h1>

                    <p className="hero-title">
                        Software Engineer at{" "}
                        <strong style={{ color: "var(--text-primary)" }}>Apple</strong>
                    </p>

                    <p className="hero-description">
                        Seasoned Software Engineer with 6.5+ years building systems,
                        cloud-native services, and intelligent software products across
                        Apple, Samsung &amp; RadiSys.
                    </p>

                    <div className="hero-buttons">
                        <LiquidButton href="#contact" className="btn-primary">
                            Get in Touch
                        </LiquidButton>
                        <a href="#experience" className="btn-secondary">
                            View My Work
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <div className="hero-stat-value">6.5+</div>
                            <div className="hero-stat-label">Years Exp.</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-value">4</div>
                            <div className="hero-stat-label">Companies</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-value">5G</div>
                            <div className="hero-stat-label">Core Expert</div>
                        </div>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="hero-image-wrapper">
                        <Image
                            src="/images/sharon-headshot.png"
                            alt="Sharon Moses Jangam"
                            width={380}
                            height={380}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
