const educationData = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
        ),
        degree: "Master of Science – Computer Science",
        specialization: "Network Engineering",
        school: "University of Colorado Boulder",
        location: "Boulder, CO",
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
        ),
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
