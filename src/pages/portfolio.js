import React from "react"
import Layout from "./../components/layout"
import portfolioData from "./../data/portfolio.json"

export default function Portfolio() {
    const { projects, summary } = portfolioData

    return (
        <Layout>
            <div className="content">
                <div className="portfolio-header">
                    <h1 className="portfolio-title">{summary.title}</h1>
                    <p className="portfolio-summary">
                        {summary.description}
                    </p>
                </div>
                <div className="experience-timeline" style={{ marginTop: "2rem" }}>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

function ProjectCard({ project }) {
    const {
        year,
        name,
        brief,
        url,
        type,
        techStack
    } = project

    // Style the badge based on whether it's personal or company
    const isPersonal = type.toLowerCase().includes("personal")
    const typeBadgeStyle = {
        display: "inline-block",
        padding: "0.25rem 0.5rem",
        borderRadius: "4px",
        fontSize: "0.75rem",
        fontWeight: "bold",
        backgroundColor: isPersonal ? "#e0f2fe" : "#fef08a",
        color: isPersonal ? "#0369a1" : "#854d0e",
        textTransform: "uppercase"
    }

    return (
        <div className="experience-card" style={{ marginBottom: "1.5rem", padding: "1.5rem", border: "1px solid #eaeaea", borderRadius: "8px" }}>
            <div className="experience-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                <div className="experience-title-section">
                    <h2 className="experience-title" style={{ margin: 0, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        {url ? (
                            <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                                {name}
                            </a>
                        ) : (
                            name
                        )}
                        <span style={{ color: "#888", fontSize: "0.9rem", fontWeight: "normal" }}>({year})</span>
                    </h2>
                </div>
                <div>
                    <span style={typeBadgeStyle}>{type}</span>
                </div>
            </div>
            <p className="experience-description" style={{ marginTop: "0.5rem", lineHeight: 1.6, color: "#444" }}>
                {brief}
            </p>
            {techStack && techStack.length > 0 && (
                <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {techStack.map((tech, idx) => (
                        <span key={idx} style={{ padding: "0.2rem 0.5rem", backgroundColor: "#f3f4f6", color: "#374151", borderRadius: "12px", fontSize: "0.8rem", fontWeight: "500" }}>
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}
