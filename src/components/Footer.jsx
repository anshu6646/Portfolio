import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Anshu</h3>
            <p>Full Stack Developer</p>
            <p>Indian Institute of Information Technology, Kota</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/anshu6646" target="_blank" rel="noopener noreferrer" className="social-link">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/anshu-dhaker-15119630b" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn
            </a>
            <a href="mailto:anshudhaker3238@gmail.com" className="social-link">
              Email
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Anshu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
