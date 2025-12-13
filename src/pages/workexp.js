import React from "react"
import { Link } from "gatsby"
import Layout from "./../components/layout"
import workExperienceData from "./../data/work-experience.json"

export default function Portfolio() {
  const { experiences, summary } = workExperienceData

  return (
    <Layout>
      <div className="content">
        <div className="portfolio-header">
          <h1 className="portfolio-title">Work Experience</h1>
          <p className="portfolio-summary">
            {summary.totalYearsOfExperience}+ years of experience in software engineering
          </p>
          <div className="resume-buttons">
            <Link to="/resume-print" target="_blank" className="view-resume-btn">
              👁️ View Resume
            </Link>
            <a href="/resume.pdf" download="Burhan_Mubarok_Resume.pdf" className="download-resume-btn">
              📥 Download Resume
            </a>
          </div>
        </div>
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

function ExperienceCard({ experience }) {
  const {
    title,
    company,
    companyUrl,
    location,
    duration,
    description,
    projects,
    current,
  } = experience

  return (
    <div className={`experience-card ${current ? "current" : ""}`}>
      <div className="experience-header">
        <div className="experience-title-section">
          <h2 className="experience-title">{title}</h2>
          {companyUrl ? (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="experience-company"
            >
              {company}
            </a>
          ) : (
            <span className="experience-company">{company}</span>
          )}
        </div>
        {current && <span className="current-badge">Current</span>}
      </div>
      <div className="experience-meta">
        <span className="experience-duration">{duration}</span>
        <span className="experience-location">{location}</span>
      </div>
      <p className="experience-description">{description}</p>
      {projects && projects.length > 0 && (
        <div className="experience-projects">
          <strong>Projects:</strong>
          <ul className="projects-list">
            {projects.map((project, idx) => (
              <li key={idx}>{project}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
