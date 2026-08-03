import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Layout,
  Server,
  Wrench,
} from 'lucide-react'

import './Skills.css'
import Reveal from '../../components/Reveal'

const skillGroups = [
  {
    title: 'Programming Languages',
    icon: Code2,
    accent: 'blue',
    skills: [
      'Python',
      'JavaScript',
      'TypeScript',
      'Java',
      'SQL',
      'C++',
    ],
  },
  {
    title: 'Frontend Development',
    icon: Layout,
    accent: 'violet',
    skills: [
      'React.js',
      'Next.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Redux',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    accent: 'green',
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'GraphQL',
      'JWT',
      'RBAC',
      'WebSockets',
      'Microservices',
    ],
  },
  {
    title: 'Databases & Data',
    icon: Database,
    accent: 'orange',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'PGVector',
      'SQL',
      'Data Pipelines',
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    accent: 'purple',
    skills: [
      'OpenAI GPT-4o',
      'LangChain',
      'RAG Pipelines',
      'Prompt Engineering',
      'TensorFlow',
      'Keras',
      'PyTorch',
      'Scikit-learn',
      'SMOTE',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    accent: 'cyan',
    skills: [
      'AWS',
      'Azure',
      'Docker',
      'GitHub Actions',
      'CI/CD',
      'AWS ECS',
      'AWS S3',
      'AWS RDS',
    ],
  },
  {
    title: 'Tools & Practices',
    icon: Wrench,
    accent: 'blue',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'VS Code',
      'Cursor',
      'GitHub Copilot',
      'Agile',
      'Scrum',
      'Clean Code',
    ],
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="skills-section"
      aria-labelledby="skills-heading"
    >
      <div className="page-shell skills-container">
      <Reveal direction="up">
        <header className="skills-header">
          <h2
            id="skills-heading"
            className="skills-heading"
          >
            Skills
          </h2>

          <div
            className="skills-heading-divider"
            aria-hidden="true"
          />

          <p className="skills-introduction">
            A collection of technologies I use to build modern web
            applications, AI-powered software, and scalable backend
            systems.
          </p>
        </header>
      </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon

            return (
            <Reveal

                key={group.title}

                direction="up"

                delay={(index % 2) * 90}
            >
              <article
                key={group.title}
                className={`skill-card skill-card-${group.accent}`}
              >
                <div className="skill-card-header">
                  <div className="skill-card-icon">
                    <Icon
                      size={25}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="skill-card-title-area">
                    <h3>{group.title}</h3>

                    <span className="skill-count">
                      {group.skills.length}{' '}
                      {group.skills.length === 1
                        ? 'Technology'
                        : 'Technologies'}
                    </span>
                  </div>
                </div>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills