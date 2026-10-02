import React, { useEffect, useRef } from 'react'
import '../styles/About.css'
import pfp from '../assets/pfp.jpg'

const About = () => {
  const sectionRef = useRef(null)

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
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
Hey, I’m Anshu 👋 I’m a final-year Electronics and Communication Engineering student at IIIT Kota who enjoys turning ideas into things people can actually use. I started with an interest in programming and gradually got drawn toward web development, backend systems, and AI-powered applications.            </p>
            <p>
Most of my learning happens by building. From creating an AI-powered interview preparation platform to developing real-time chat and travel applications, I like understanding how things work behind the scenes and then putting them together into something useful.            </p>
            <p>When I’m not building projects, you’ll probably find me solving DSA problems, exploring new technologies, or experimenting with ideas that I can turn into my next project.</p>
            <p>I’m currently looking forward to opportunities where I can keep learning, build meaningful products, and grow as a software developer.</p>
  
          </div>
          <div className="about-visual">
            <div className="profile-placeholder">
             <img src={pfp} alt="Profile" className="profile-img" />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
