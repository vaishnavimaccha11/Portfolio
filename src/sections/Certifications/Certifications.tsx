import {
  Award,
  BadgeCheck,
  Braces,
  BrainCircuit,
  Database,
  ExternalLink,
  Server,
  Workflow,
} from 'lucide-react'

import Reveal from '../../components/Reveal'

import './Certifications.css'

type Certification = {
  title: string
  level: string
  issuer: string
  issuedDate: string
  credentialUrl: string
  icon: typeof Award
  skills: string[]
}

const certifications: Certification[] = [
  {
    title: 'Software Engineer',
    level: 'Role Certification',
    issuer: 'HackerRank',
    issuedDate: 'July 2026',
    credentialUrl:
      'https://www.hackerrank.com/certificates/64247f925847',
    icon: Award,
    skills: [
      'Software Engineering',
      'Problem Solving',
      'SQL',
    ],
  },
  {
    title: 'JavaScript',
    level: 'Intermediate',
    issuer: 'HackerRank',
    issuedDate: 'August 2026',
    credentialUrl:
      'https://www.hackerrank.com/certificates/5f768816dfc5',
    icon: Braces,
    skills: [
      'JavaScript',
      'ES6+',
      'Asynchronous Programming',
    ],
  },
  {
    title: 'Node.js',
    level: 'Intermediate',
    issuer: 'HackerRank',
    issuedDate: 'August 2026',
    credentialUrl:
      'https://www.hackerrank.com/certificates/26df30f70f9c',
    icon: Server,
    skills: [
      'Node.js',
      'Backend Development',
      'APIs',
    ],
  },
  {
    title: 'Problem Solving',
    level: 'Intermediate',
    issuer: 'HackerRank',
    issuedDate: 'August 2026',
    credentialUrl:
      'https://www.hackerrank.com/certificates/900684948c1f',
    icon: BrainCircuit,
    skills: [
      'Data Structures',
      'Algorithms',
      'C++',
    ],
  },
  {
    title: 'REST API',
    level: 'Intermediate',
    issuer: 'HackerRank',
    issuedDate: 'August 2026',
    credentialUrl:
      'https://www.hackerrank.com/certificates/57365fb3db78',
    icon: Workflow,
    skills: [
      'REST APIs',
      'HTTP',
      'Backend Integration',
    ],
  },
  {
    title: 'SQL',
    level: 'Advanced',
    issuer: 'HackerRank',
    issuedDate: 'August 2026',
    credentialUrl:
      'https://www.hackerrank.com/certificates/cc2824d95d26',
    icon: Database,
    skills: [
      'Advanced SQL',
      'Queries',
      'Database Management',
    ],
  },
]

function Certifications() {
  return (
    <section
      id="certifications"
      className="certifications-section"
      aria-labelledby="certifications-heading"
    >
      <div className="page-shell certifications-container">
        <Reveal direction="up">
          <header className="certifications-header">
            <p className="certifications-eyebrow">
              Verified credentials
            </p>

            <h2
              id="certifications-heading"
              className="certifications-heading"
            >
              Certifications
            </h2>

            <div
              className="certifications-underline"
              aria-hidden="true"
            />

            <p className="certifications-introduction">
              Industry-recognized credentials validating my
              software engineering, backend development,
              problem-solving, API, and database skills.
            </p>
          </header>
        </Reveal>

        <div className="certifications-grid">
          {certifications.map(
            (certification, index) => {
              const Icon = certification.icon

              return (
                <Reveal
                  key={`${certification.title}-${certification.level}`}
                  direction="up"
                  delay={index * 70}
                >
                  <article className="certification-card">
                    <div className="certification-card-top">
                      <div className="certification-icon">
                        <Icon
                          size={25}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </div>

                      <span className="certification-verified">
                        <BadgeCheck
                          size={15}
                          strokeWidth={2}
                          aria-hidden="true"
                        />

                        Verified
                      </span>
                    </div>

                    <div className="certification-content">
                      <p className="certification-level">
                        {certification.level}
                      </p>

                      <h3>{certification.title}</h3>

                      <div className="certification-meta">
                        <span>
                          Issued by {certification.issuer}
                        </span>

                        <span aria-hidden="true">•</span>

                        <span>
                          {certification.issuedDate}
                        </span>
                      </div>

                      <div className="certification-skills">
                        {certification.skills.map(
                          (skill) => (
                            <span key={skill}>
                              {skill}
                            </span>
                          ),
                        )}
                      </div>
                    </div>

                    <a
                      href={certification.credentialUrl}
                      className="certification-link"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${certification.title} ${certification.level} credential`}
                    >
                      <span>View Credential</span>

                      <ExternalLink
                        size={17}
                        strokeWidth={1.9}
                        aria-hidden="true"
                      />
                    </a>
                  </article>
                </Reveal>
              )
            },
          )}
        </div>
      </div>
    </section>
  )
}

export default Certifications