const skillCategories = [
    {
        icon: "💻",
        title: "Languages",
        skills: ["Swift", "Objective-C", "Python", "C/C++", "Java", "TypeScript", "Golang"],
    },
    {
        icon: "🗄️",
        title: "Databases",
        skills: ["MySQL", "SQLite", "PostgreSQL", "MongoDB"],
    },
    {
        icon: "🖥️",
        title: "Operating Systems",
        skills: ["Linux", "macOS"],
    },
    {
        icon: "🛠️",
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
        icon: "☁️",
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
        icon: "📡",
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
