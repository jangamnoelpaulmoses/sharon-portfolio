const projects = [
    {
        icon: "🔀",
        title: "Passthru",
        subtitle: "A Protocol Omni-multiplexer",
        description:
            "Implemented the Layer 4 (TCP) demultiplexer using Golang, leveraging the language's capabilities to efficiently sniff application data and reroute connections to appropriate targets.",
        tech: [
            "TypeScript",
            "Next.js",
            "Node.js",
            "PostgreSQL",
            "REST API",
            "SendGrid",
            "Google OAuth",
            "Golang",
        ],
    },
    {
        icon: "💪",
        title: "FitLife",
        subtitle: "Empowering Your Fitness",
        description:
            "Led the development of an innovative fitness and health tracker empowering users to monitor and enhance well-being. Utilized Heroku, ReactJS, Python3/Flask, MongoDB, Prometheus, and REST APIs to create a robust, scalable application with efficient event collaboration via RabbitMQ.",
        tech: [
            "Python",
            "ReactJS",
            "Flask",
            "MongoDB",
            "Selenium",
            "RabbitMQ",
            "Prometheus",
            "GitHub Actions",
        ],
    },
];

export default function Projects() {
    return (
        <section className="section" id="projects">
            <div className="container">
                <span className="section-label">Featured Work</span>
                <h2 className="section-title">
                    Personal <span className="gradient-text">Projects</span>
                </h2>
                <p className="section-subtitle">
                    Side projects that showcase versatility across different tech stacks
                    and problem domains.
                </p>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <div className="project-card glass-card" key={i}>
                            <div className="project-card-header">
                                <div className="project-icon">{project.icon}</div>
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-subtitle">{project.subtitle}</p>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.tech.map((t, j) => (
                                    <span className="project-tech-tag" key={j}>
                                        {t}
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
