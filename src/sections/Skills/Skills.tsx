import {
  BrainCircuit,
  Code2,
  Database,
  Layout,
  Server,
  Wrench,
  Blocks,
} from 'lucide-react'

import Reveal from '../../components/Reveal'

import './Skills.css'

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
      'Tailwind CSS',
      'HTML5',
      'CSS3',
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
      'JWT Authentication',
    ],
  },

  {
    title: 'Data & Databases',
    icon: Database,
    accent: 'orange',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'SQL',
      'Vector Databases',
      'PG Vector',
    ],
  },

  {
    title: 'AI & Machine Learning',
    icon: BrainCircuit,
    accent: 'purple',
    skills: [
      'OpenAI GPT-4o',
      'Anthropic Claude',
      'LangChain',
      'RAG Pipelines',
      'Retrieval Systems',
      'Agentic Workflows',
      'AI APIs',
      'Prompt Engineering',
      'TensorFlow',
      'PyTorch',
    ],
  },

  {
    title: 'Developer Tools',
    icon: Wrench,
    accent: 'cyan',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Vercel',
      'Render',
      'Claude Code',
    ],
  },

  {
    title: 'Other Technologies',
    icon: Blocks,
    accent: 'blue',
    skills: [
      'Automation',
      'Blockchain Fundamentals',
      'High-Level System Design',
      'Computer Networks',
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
              Technologies and tools I have learned and
              applied across full-stack development,
              artificial intelligence, machine learning,
              blockchain and software engineering.
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
                      <span key={skill}>
                        {skill}
                      </span>
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