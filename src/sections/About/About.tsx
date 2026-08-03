import {
  Code2,
  Sparkles,
} from 'lucide-react'

import './About.css'
import Reveal from '../../components/Reveal'

function About() {
  return (
    <section
      id="about-me"
      className="about-section"
      aria-labelledby="about-heading"
    >
      <div className="page-shell about-container">
      <Reveal direction="up">
        <header className="about-header">
          <h2
            id="about-heading"
            className="about-heading"
          >
            About Me
          </h2>

          <div
            className="about-heading-divider"
            aria-hidden="true"
          />
        </header>
      </Reveal>

      <Reveal

         direction="up"

        delay={120}

      >
        <div className="about-copy">
          <p>
            I recently completed my B.Tech in Computer Science
            and Engineering at Bharat Institute of Engineering
            and Technology, Hyderabad, graduating with a CGPA of
            8.02.
          </p>

          <p>
            I have designed and developed two major projects from
            scratch. DevAssist AI is an AI-powered developer
            platform built using React, TypeScript, Node.js,
            LangChain, PostgreSQL and OpenAI APIs to enhance
            developer productivity through intelligent AI
            workflows. Deep Learning with SMOTE for Improved Skin
            Lesion Classification is a research-driven project
            developed using Python, TensorFlow, Keras, OpenCV and
            Scikit-learn to improve skin lesion classification
            through deep learning.
          </p>

          <p>
            These projects strengthened my understanding of
            full-stack development, artificial intelligence and
            machine learning while giving me practical experience
            in designing scalable applications and solving
            real-world problems.
          </p>

          <p>
            I am currently looking for opportunities where I can
            contribute, continue learning, and grow as a Software
            Engineer while working alongside experienced
            professionals to build impactful and innovative
            products.
          </p>

          <p>
            I believe that creativity, curiosity, and meaningful
            conversations play an important role in continuous
            learning and personal growth.
          </p>
        </div>
      </Reveal>

      <Reveal

         direction="up"

         delay={220}

      >
        <div
          className="about-roles"
          aria-label="Professional focus areas"
        >
          <div className="about-role-pill">
            <Code2
              size={21}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            <span>Full-Stack Developer</span>
          </div>

          <div className="about-role-pill about-role-pill-ai">
            <Sparkles
              size={21}
              strokeWidth={1.8}
              aria-hidden="true"
            />

            <span>AI / GenAI Engineer</span>
          </div>
        </div>
      </Reveal>
      </div>
    </section>
  )
}

export default About