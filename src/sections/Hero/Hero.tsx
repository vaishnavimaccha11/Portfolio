import {
  ArrowDown,
  Send,
} from 'lucide-react'

import Prism from '../../components/Prism'
import RotatingText from '../../components/RotatingText'

import './Hero.css'

function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
      aria-labelledby="hero-heading"
    >
      <Prism />

      <div
        className="hero-shade"
        aria-hidden="true"
      />

      <div className="page-shell hero-content">
        <p className="hero-introduction">
          Hello, I&apos;m
        </p>

        <h1
          id="hero-heading"
          className="hero-name"
        >
          Vaishnavi Maccha
        </h1>

        <div className="hero-role">
          <RotatingText />
        </div>

        <p className="hero-description">
          Engineering scalable web applications and
          AI-powered solutions with modern technologies,
          clean architecture, and a focus on creating
          meaningful digital experiences.
        </p>

        <div className="hero-actions">
          <a
            href="#featured-work"
            className="hero-button hero-button-primary"
          >
            <span>View My Work</span>
          </a>

          <a
            href="#contact"
            className="hero-button hero-button-secondary"
          >
            <Send
              size={18}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            <span>Get In Touch</span>
          </a>
        </div>
      </div>

      <a
        href="#about-me"
        className="hero-scroll-arrow"
        aria-label="Scroll to About Me"
      >
        <ArrowDown
          size={27}
          strokeWidth={1.7}
          aria-hidden="true"
        />
      </a>
    </section>
  )
}

export default Hero