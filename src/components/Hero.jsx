import React, { useState, useEffect } from 'react'
import '../styles/Hero.css'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = "Full Stack Developer"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-name">
            Hi, I'm <span className="highlight">Anshu</span>
          </h1>
          <h2 className="hero-title">
            {displayText}<span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Final-year B.Tech student at IIIT Kota with a passion for building scalable full-stack applications, AI-powered products, and solving challenging problems.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn-primary"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className="btn-secondary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
            <a className="btn-download" href="https://drive.google.com/file/d/1u1Wfgwzt_1s7olh24UjRdRLVLrmmxbl1/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <span className="download-icon">↗</span>
              View Resume
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="spider-hanger-scene" aria-label="Spider-Man hanging upside down from a web">
            <div className="spider-hanger">
              <svg viewBox="0 0 360 500" role="img" aria-labelledby="spider-title spider-desc">
                <title id="spider-title">Spider-Man hanging upside down</title>
                <desc id="spider-desc">A small red and blue Spider-Man figure gently swinging from a web.</desc>
                <defs>
                  <linearGradient id="suit-red" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#f04b55" />
                    <stop offset="1" stopColor="#a80e26" />
                  </linearGradient>
                  <linearGradient id="suit-blue" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#247cc0" />
                    <stop offset="1" stopColor="#10294c" />
                  </linearGradient>
                </defs>
                <path className="spider-web-line" d="M140 0v48" />
                <path className="spider-web-knot" d="M134 47q6-8 12 0q-6 8-12 0Z" />
                <g transform="rotate(180 180 250)" stroke="#101b2b" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                  <path fill="url(#suit-blue)" d="M156 307q-18 20-19 52l-4 66q-1 21 15 23 15 1 18-19l14-67 14 67q4 20 19 18 15-3 12-24l-8-66q-3-32-23-50Z" />
                  <path fill="url(#suit-red)" d="M133 413q17 10 33 2l-3 26q-2 14-20 14-15 0-13-17Zm72 2q16 8 32-2l4 25q2 15-13 17-18 0-20-14Z" />
                  <path fill="none" stroke="#d7e8f7" strokeOpacity=".55" strokeWidth="3" d="M137 421q13 7 28 2m40 0q15 5 29-2" />
                  <path fill="url(#suit-blue)" d="M128 183q-24 2-38-20l-26-42q-9-15 4-24 12-8 22 7l31 34 20-13 20 25Z" />
                  <path fill="url(#suit-blue)" d="M232 183q24 2 38-20l26-42q9-15-4-24-12-8-22 7l-31 34-20-13-20 25Z" />
                  <path fill="url(#suit-red)" d="M66 119q-15-4-22-18-5-12 6-18 10-5 20 7l17 22Zm228 0q15-4 22-18 5-12-6-18-10-5-20 7l-17 22Z" />
                  <path fill="url(#suit-blue)" d="M139 166q41-21 82 0l19 108q-60 44-120 0Z" />
                  <path fill="url(#suit-red)" d="M145 171q35 16 70 0l12 45q-41 25-94 0Z" />
                  <path fill="url(#suit-red)" d="M139 264q41 19 82 0l12 19q-46 33-106 0Z" />
                  <path fill="none" stroke="#341421" strokeOpacity=".75" strokeWidth="2" d="M143 178q37 24 74 0m-79 13q42 26 84 0m-81 13q38 24 77 0m-66 11v-13m22 23v-19m22 19v-19m22 13v-13M140 270q40 28 80 0" />
                  <path fill="url(#suit-red)" d="M146 187q34 11 68 0l18 9 5 78q-55 39-114 0l5-78Z" />
                  <g fill="#17243a" stroke="none">
                    <ellipse cx="180" cy="232" rx="5" ry="14" />
                    <path d="m177 224-14-12-8 2 13 13-13 1 3 6 14-3-8 13 6 3 10-18 10 18 6-3-8-13 14 3 3-6-13-1 13-13-8-2-14 12Z" />
                  </g>
                  <path fill="url(#suit-red)" d="M134 104q-1-60 46-67 47 7 46 67l-8 75q-38 27-76 0Z" />
                  <path fill="none" stroke="#421523" strokeOpacity=".8" strokeWidth="2" d="M180 64v103m0-103-28 14m28-14 28 14m-28-14-44-3m44 3 44-3m-44-3-62 10m62-10 62 10m-62-10-43 39m43-39 43 39m-43-39-16 78m16-78 16 78m-46-43q30 20 60 0m-67 17q37 21 74 0m-70 16q33 18 66 0" />
                  <path fill="#f8fbff" stroke="#17243a" strokeWidth="5" d="M143 85q15-16 32 1l-16 17Zm74 0q-15-16-32 1l16 17Z" />
                  <path fill="none" stroke="#17243a" strokeWidth="3" d="M180 93v43" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero
