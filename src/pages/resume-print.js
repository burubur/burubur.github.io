import React from "react"
import workExperienceData from "./../data/work-experience.json"
import resumeData from "./../data/resume-data.json"
import "./../styles/resume-print.css"

export default function ResumePrint() {
  const { experiences } = workExperienceData
  const { personal, summary, skills, education, certifications, languages } = resumeData

  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1 className="resume-name">{personal.name}</h1>
        <h2 className="resume-title">{personal.title}</h2>
        <div className="resume-contact">
          <span>{personal.location}</span>
          <span> | </span>
          <span>{personal.email}</span>
          <span> | </span>
          <span>{personal.website}</span>
        </div>
        <div className="resume-links">
          <span>{personal.linkedin}</span>
          <span> | </span>
          <span>{personal.github}</span>
        </div>
      </div>

      <div className="resume-section">
        <h3 className="resume-section-title">Professional Summary</h3>
        <p className="resume-summary">{summary}</p>
      </div>

      <div className="resume-section">
        <h3 className="resume-section-title">Work Experience</h3>
        {experiences.map((exp) => (
          <div key={exp.id} className="resume-experience">
            <div className="resume-exp-header">
              <div>
                <strong className="resume-exp-title">{exp.title}</strong>
                <span className="resume-exp-company"> | {exp.company}</span>
              </div>
              <div className="resume-exp-duration">{exp.duration}</div>
            </div>
            <div className="resume-exp-location">{exp.location}</div>
            <p className="resume-exp-description">{exp.description}</p>
            {exp.achievements && exp.achievements.length > 0 && (
              <ul className="resume-exp-achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="resume-section">
        <h3 className="resume-section-title">Technical Skills</h3>
        <div className="resume-skills">
          <div className="resume-skill-group">
            <strong>Languages:</strong> {skills.languages.join(", ")}
          </div>
          <div className="resume-skill-group">
            <strong>Technologies:</strong> {skills.technologies.join(", ")}
          </div>
          <div className="resume-skill-group">
            <strong>Specializations:</strong> {skills.specializations.join(", ")}
          </div>
        </div>
      </div>

      <div className="resume-section">
        <h3 className="resume-section-title">Education</h3>
        {education.map((edu, idx) => (
          <div key={idx} className="resume-education">
            <div className="resume-edu-header">
              <div>
                <strong>{edu.degree}</strong> - {edu.field}
              </div>
              <div>{edu.period}</div>
            </div>
            <div>{edu.institution}</div>
          </div>
        ))}
      </div>

      <div className="resume-section">
        <h3 className="resume-section-title">Certifications</h3>
        {certifications.map((cert, idx) => (
          <div key={idx} className="resume-certification">
            <strong>{cert.name}</strong> - {cert.issuer} ({cert.date})
          </div>
        ))}
      </div>

      <div className="resume-section">
        <h3 className="resume-section-title">Languages</h3>
        <div className="resume-languages">
          {languages.map((lang, idx) => (
            <span key={idx}>
              <strong>{lang.language}:</strong> {lang.proficiency}
              {idx < languages.length - 1 && " | "}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
