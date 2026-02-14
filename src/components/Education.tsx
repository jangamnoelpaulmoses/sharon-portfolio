const educationData = [
    {
        icon: "🎓",
        degree: "Master of Science – Computer Science",
        specialization: "Network Engineering",
        school: "University of Colorado Boulder",
        location: "Boulder, CO",
    },
    {
        icon: "📚",
        degree: "Bachelor of Technology – Computer Science",
        specialization: "",
        school: "VNR VJIET",
        location: "Hyderabad, India",
    },
];

export default function Education() {
    return (
        <section className="section" id="education">
            <div className="container">
                <span className="section-label">Academic Background</span>
                <h2 className="section-title">
                    <span className="gradient-text">Education</span>
                </h2>

                <div className="education-grid">
                    {educationData.map((edu, i) => (
                        <div className="education-card glass-card" key={i}>
                            <div className="education-icon">{edu.icon}</div>
                            <h3 className="education-degree">{edu.degree}</h3>
                            {edu.specialization && (
                                <p
                                    style={{
                                        fontSize: "0.92rem",
                                        color: "var(--accent-cyan)",
                                        fontWeight: 500,
                                        marginBottom: "8px",
                                    }}
                                >
                                    Specialization: {edu.specialization}
                                </p>
                            )}
                            <p className="education-school">{edu.school}</p>
                            <p className="education-location">{edu.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
