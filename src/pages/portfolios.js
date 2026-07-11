import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import Layout from "./../components/layout"
import portfolioData from "./../data/portfolio.json"

export default function Portfolio({ pageContext = {} }) {
    const { projects, summary } = portfolioData
    const initialProject = projects.find(
        (project) => project.id === pageContext.selectedProjectId
    )
    const [selectedProject, setSelectedProject] = useState(initialProject || null)
    const isViewMode = Boolean(selectedProject)
    const openProject = (project) => {
        setSelectedProject(project)
        navigate(`/portfolios/view/${project.id}`)
    }
    const closeProject = () => {
        setSelectedProject(null)
        navigate("/portfolios")
    }

    useEffect(() => {
        if (!isViewMode) return undefined

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeProject()
            }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [isViewMode])

    return (
        <Layout>
            <div className={`content portfolio-page${isViewMode ? " portfolio-page-view-mode" : ""}`}>
                <div className="portfolio-header">
                    <h1 className="portfolio-title">{summary.title}</h1>
                    <p className="portfolio-summary">
                        {summary.description}
                    </p>
                </div>
                {isViewMode ? (
                    <div className="portfolio-view-layout">
                        <ProjectView
                            project={selectedProject}
                            onBack={closeProject}
                        />
                        <PortfolioMinimap
                            projects={projects}
                            selectedProject={selectedProject}
                            onSelect={openProject}
                            onBack={closeProject}
                        />
                    </div>
                ) : (
                    <div className="experience-timeline portfolio-list" style={{ marginTop: "2rem" }}>
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onOpen={openProject}
                            />
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    )
}

function ProjectCard({ project, onOpen }) {
    const {
        year,
        name,
        brief,
        url,
        type,
        image,
        imageAlt,
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
        <div className={`experience-card portfolio-card${image ? " portfolio-card-with-image" : ""}`} style={{ marginBottom: "1.5rem", padding: "1.5rem", border: "1px solid #eaeaea", borderRadius: "8px" }}>
            <div className="portfolio-card-body">
                <div className="experience-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                    <div className="experience-title-section">
                        <h2 className="experience-title" style={{ margin: 0, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            {url ? (
                                <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
                                    {name}
                                </a>
                            ) : (
                                name
                            )}
                            <span style={{ color: "#888", fontSize: "0.9rem", fontWeight: "normal" }}>({year})</span>
                        </h2>
                    </div>
                    <br />
                    <div>
                        <span style={typeBadgeStyle}>{type}</span>
                    </div>
                </div>
                <button
                    type="button"
                    className="portfolio-description-button experience-description"
                    onClick={() => onOpen(project)}
                >
                    {brief}
                </button>
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
            {image && (
                <button
                    type="button"
                    className="portfolio-card-image-button"
                    onClick={() => onOpen(project)}
                >
                    <img
                        className="portfolio-card-image"
                        src={image}
                        alt={imageAlt || `${name} preview`}
                        loading="lazy"
                    />
                </button>
            )}
        </div>
    )
}

function ProjectView({ project, onBack }) {
    const {
        name,
        brief,
        image,
        imageAlt,
        techStack,
        type,
        year
    } = project

    return (
        <article className="portfolio-view">
            <button
                type="button"
                className="portfolio-view-close"
                aria-label="Close View Mode and return to portfolio list"
                onClick={onBack}
            >
                ×
            </button>
            <div className="portfolio-view-scroll">
                {image && (
                    <img
                        className="portfolio-view-image"
                        src={image}
                        alt={imageAlt || `${name} preview`}
                    />
                )}
                <div className="portfolio-view-header">
                    <div>
                        <h2>{name}</h2>
                        <div className="portfolio-view-meta">
                            <span>{year}</span>
                            <span>{type}</span>
                        </div>
                    </div>
                </div>
                <p>{brief}</p>
                <div className="portfolio-view-placeholder">
                    Detailed project notes will go here.
                </div>
                {techStack && techStack.length > 0 && (
                    <div className="portfolio-view-tags">
                        {techStack.map((tech) => (
                            <span key={tech}>{tech}</span>
                        ))}
                    </div>
                )}
            </div>
        </article>
    )
}

function PortfolioMinimap({ projects, selectedProject, onSelect, onBack }) {
    return (
        <aside className="portfolio-minimap" aria-label="Portfolio items">
            <button
                type="button"
                className="portfolio-minimap-close"
                aria-label="Close View Mode and return to portfolio list"
                onClick={onBack}
            >
                ×
            </button>
            <div className="portfolio-minimap-scroll">
                {projects.map((item) => {
                    const active = item.id === selectedProject.id

                    return (
                        <button
                            key={item.id}
                            type="button"
                            className={`portfolio-minimap-item${active ? " is-active" : ""}`}
                            onClick={() => onSelect(item)}
                        >
                            {item.image && (
                                <img
                                    src={item.image}
                                    alt=""
                                    aria-hidden="true"
                                />
                            )}
                            <span>
                                <strong>{item.name}</strong>
                                <small>{item.year}</small>
                            </span>
                        </button>
                    )
                })}
            </div>
        </aside>
    )
}
