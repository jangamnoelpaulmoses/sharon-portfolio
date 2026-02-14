"use client";

import ScrollRevealText from "./ScrollRevealText";

const experiences = [
    {
        role: "Software Engineer",
        company: "Apple",
        period: "June 2024 – Present",
        bullets: [
            "Engineered core components for the next-generation user data migration platform, enabling secure, high-speed transfers across Apple and Android ecosystems in collaboration with Google and Samsung.",
            "Implemented secure bidirectional user data migration system in Swift using Protocol Buffers and RESTful APIs, enabling cross-platform migrations between iOS and Android.",
            "DRI for 60% of data class modules within migration system, ensuring reliability for cross-device transfers.",
            "Built telemetry and diagnostic frameworks to collect real-time health metrics for eSIM Standalone and Full Data Transfer flows, improving observability and issue traceability.",
            "Collaborated with 18+ iOS, QA and platform teams across Software Engineering, Apple Services orgs to finalize specifications, architect and implement data class modules and external facing APIs.",
            "Leveraged AI development tools, including Claude Code and Roo Code to optimize developer productivity.",
        ],
    },
    {
        role: "Software Engineer Intern",
        company: "Apple",
        period: "May 2023 – September 2023",
        bullets: [
            "Applied C programming and design skills to improve the quality of cellular protocol stack software for Apple's wireless products.",
            "Performed comprehensive trace logging for two key modules within the cellular protocol stack software, drastically increasing the debugging capabilities.",
            "Introduced a bug clustering methodology streamlining troubleshooting, reducing resolution time for similar crashes leveraging Python.",
        ],
    },
    {
        role: "Senior Software Engineer",
        company: "Radisys",
        period: "January 2021 – August 2024",
        bullets: [
            "Engineered microservices-based cloud-native 5G Core Network Functions: AMF, SMF using C++, Protobufs, Docker, and Kubernetes.",
            "Developed Watch-DB microservices in C++, MongoDB, and CTest to monitor user data and notify Core Network Functions.",
            "Boosted stateful UDM performance by 23%, transforming it into a stateless, platform-agnostic node using microservices and MongoDB.",
            "Received the 'Gone Extra Mile' award for reducing debugging effort by 7 hours/week through CI/CD automation.",
            "Developed stateless cloud-native 5G Network Node, UDR to provision user auth and subscription data using C++, MongoDB.",
        ],
    },
    {
        role: "Senior Software Engineer",
        company: "Global Edge Soft Ltd (Client: Samsung Research Institute)",
        period: "September 2018 – December 2020",
        bullets: [
            "Spearheaded design, development and deployment of microservices-based cloud-native 4G network node – MME, using C++, Protobufs, Docker, and K8s in a team of 8.",
            "Awarded Samsung S.P.O.T award for outstanding contributions.",
            "Coded a discrete-event network simulator to evaluate the behavior and performance of 3 major 5G cloud-native network functions - AMF, SMF, and NG-RAN.",
        ],
    },
    {
        role: "Software Engineer",
        company: "Global Edge Soft Ltd",
        period: "January 2017 – September 2018",
        bullets: [
            "Introduced CUPS architecture to SGW, a 4G Core network node, through 6 Sx Node and Session related messages using PFCP protocol.",
            "Implemented proprietary PFCP dissector plugin in Wireshark based on TS 29.244 and TS 23.214.",
            "Awarded Global Edge Young Turk for technical expertise in C, Data Structures, Linux Kernel internals, and Computer Networks.",
        ],
    },
];

export default function Experience() {
    return (
        <section className="section" id="experience">
            <div className="container">
                <span className="section-label">Career Journey</span>
                <h2 className="section-title">
                    Professional <span className="gradient-text">Experience</span>
                </h2>
                <p className="section-subtitle">
                    Building systems and cloud-native services across industry-leading
                    companies.
                </p>

                <div className="experience-timeline">
                    {experiences.map((exp, i) => (
                        <div className="experience-item" key={i}>
                            <div className="experience-dot" />
                            <div className="experience-card glass-card">
                                <div className="experience-header">
                                    <div>
                                        <h3 className="experience-role">{exp.role}</h3>
                                        <p className="experience-company">{exp.company}</p>
                                    </div>
                                    <span className="experience-period">
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <rect
                                                x="3"
                                                y="4"
                                                width="18"
                                                height="18"
                                                rx="2"
                                                ry="2"
                                            />
                                            <line x1="16" y1="2" x2="16" y2="6" />
                                            <line x1="8" y1="2" x2="8" y2="6" />
                                            <line x1="3" y1="10" x2="21" y2="10" />
                                        </svg>
                                        {exp.period}
                                    </span>
                                </div>
                                <div className="experience-bullets">
                                    {i === 0 ? (
                                        // First Apple role gets the scroll reveal treatment
                                        exp.bullets.map((bullet, j) => (
                                            <div className="experience-bullet" key={j}>
                                                <ScrollRevealText
                                                    text={bullet}
                                                    className="experience-bullet-text"
                                                />
                                            </div>
                                        ))
                                    ) : (
                                        exp.bullets.map((bullet, j) => (
                                            <div className="experience-bullet" key={j}>
                                                {bullet}
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
