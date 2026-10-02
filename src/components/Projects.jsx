import React, { useEffect, useRef } from 'react'
import '../styles/Projects.css'

const Projects = () => {
  const sectionRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: 'CareerPrep AI',
      description: 'An AI-powered interview preparation platform that analyzes resumes and generates personalized job-match scores, interview questions, skill-gap analysis, and study plans using Gemini. Includes secure authentication and AI-powered resume generation.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini'],
      github: 'https://github.com/anshu6646/Job_preparation_ai',
      live: 'https://careerprep-ai-frontend.onrender.com/'
    },
    {
      id: 2,
      title: 'Snappy',
      description: 'A real-time MERN chat application for instant messaging through persistent WebSocket connections, with chat history stored in MongoDB.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Docker'],
      github: 'https://github.com/anshu6646/chat-app',
      live: 'https://chat-app-4h6f.vercel.app/'
    },
    {
      id: 3,
      title: 'Wanderlust',
      description: 'A full-stack travel listing platform to create, manage, and explore listings with images, reviews, category filtering, and interactive maps. Includes authentication, Cloudinary uploads, and location-based features.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Leaflet.js'],
      github: 'https://github.com/anshu6646/wanderlust',
      live: null
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-actions">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <span>GitHub</span>
                </a>
                {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link primary"><span>Live Demo ↗</span></a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
