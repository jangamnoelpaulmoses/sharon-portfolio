const skillCategories = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
        ),
        title: "Languages",
        skills: ["Swift", "Objective-C", "Python", "C/C++", "Java", "TypeScript", "Golang"],
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
        ),
        title: "Databases",
        skills: ["MySQL", "SQLite", "PostgreSQL", "MongoDB"],
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
        ),
        title: "Operating Systems",
        skills: ["Linux", "macOS"],
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
        ),
        title: "Development & AI Tools",
        skills: [
            "Git",
            "GitHub Actions",
            "Docker",
            "Kubernetes",
            "Claude Code",
            "Cursor",
            "Roo Code",
            "Protocol Buffers",
            "REST APIs",
        ],
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
            </svg>
        ),
        title: "Cloud & Infrastructure",
        skills: [
            "Microservices",
            "CI/CD",
            "Cloud-Native",
            "Heroku",
            "Telemetry",
        ],
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                <line x1="12" y1="20" x2="12.01" y2="20"></line>
            </svg>
        ),
        title: "Telecom & Networking",
        skills: [
            "5G Core (AMF, SMF, UDM, UDR)",
            "4G (MME, SGW)",
            "PFCP Protocol",
            "eSIM",
            "Wireshark",
        ],
    },
];

export default function Skills() {
    return (
        <section className="section" id="skills">
            <div className="container">
                <span className="section-label">Technical Arsenal</span>
                <h2 className="section-title">
                    Skills & <span className="gradient-text">Technologies</span>
                </h2>
                <p className="section-subtitle">
                    A versatile toolkit honed across systems programming, cloud
                    infrastructure, and modern AI-driven development.
                </p>

                <div className="skills-grid">
                    {skillCategories.map((cat, i) => (
                        <div className="skill-category glass-card" key={i}>
                            <div className="skill-category-icon">{cat.icon}</div>
                            <h3 className="skill-category-title">{cat.title}</h3>
                            <div className="skill-tags">
                                {cat.skills.map((skill, j) => (
                                    <span className="skill-tag" key={j}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
