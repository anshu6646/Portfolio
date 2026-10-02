import React, { useEffect, useRef } from 'react'
import '../styles/Skills.css'

const Skills = () => {
  const sectionRef = useRef(null)

  const skillCategories = [
    {
      title: "Languages",
      icon: "💻",
      skills: ["C++", "C", "Java", "Python", "JavaScript", "SQL"]
    },
    {
      title: "Frontend",
      icon: "🎨", 
      skills: ["React.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT", "Passport.js"]
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: ["MongoDB", "Mongoose", "MySQL"]
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      skills: ["Git", "GitHub", "Docker", "Docker Compose"]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          
          const skillItems = entry.target.querySelectorAll('.skill-item')
          skillItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('skill-animate')
            }, index * 100)
          })
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="skills-subtitle">Technologies and tools I work with to bring ideas to life</p>
        
        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-glow"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="floating-particles">
          {Array.from({ length: 20 }, (_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
