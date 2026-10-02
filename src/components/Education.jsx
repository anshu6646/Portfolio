import React, { useEffect, useRef } from 'react'
import '../styles/Education.css'

const Education = () => {
  const sectionRef = useRef(null)

  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      years: "2023 - 2027",
      field: "Electronics & Communication Engineering",
      institution: "Indian Institute of Information Technology, Kota",
      grade: "Currently pursuing",
      status: "ongoing"
    },
    {
      id: 2,
      degree: "Senior Secondary",
      years: "2022",
      field: "Mathematics (PCM)",
      institution: "Sunrise Maa Bharti Sr Sec School, Bijoliya",
      grade: "Percentage: 91.60%",
      status: "completed"
    },
    {
      id: 3,
      degree: "Secondary School",
      years: "2020",
      field: "All Subjects",
      institution: "Sunrise Maa Bharti Sr Sec School, Bijoliya",
      grade: "Percentage: 94.17%",
      status: "completed"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
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
    <section id="education" className="education" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {education.map((item, index) => (
            <div key={item.id} className="education-item">
              <div className="education-marker">
                <div className={`status-indicator ${item.status}`}></div>
              </div>
              <div className="education-content">
                <div className="education-header">
                  <h3 className="education-degree">{item.degree}</h3>
                  <span className="education-year">{item.years}</span>
                </div>
                <h4 className="education-field">{item.field}</h4>
                <h5 className="education-institution">{item.institution}</h5>
                <div className="education-grade">{item.grade}</div>
                <div className={`education-status ${item.status}`}>
                  {item.status === 'ongoing' ? 'Currently Pursuing' : 'Completed'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
