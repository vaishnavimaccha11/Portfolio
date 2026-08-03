import {
  useState,
  type KeyboardEvent,
} from 'react'

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Play,
} from 'lucide-react'

import { FaGithub } from 'react-icons/fa'

import Reveal from '../../components/Reveal'
import {
  projects,
  type Project,
  type ProjectImage,
} from '../../data/projects'

import './FeaturedWork.css'

type ProjectGalleryProps = {
  project: Project
}

function ProjectGallery({
  project,
}: ProjectGalleryProps) {
  const galleryImages: ProjectImage[] =
    project.images && project.images.length > 0
      ? project.images
      : project.image
        ? [
            {
              src: project.image,
              alt:
                project.imageAlt ??
                `${project.title} project preview`,
              caption: project.shortTitle,
            },
          ]
        : []

  const [activeImageIndex, setActiveImageIndex] =
    useState(0)

  const hasMultipleImages =
    galleryImages.length > 1

  const activeImage =
    galleryImages[activeImageIndex]

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === 0
        ? galleryImages.length - 1
        : currentIndex - 1,
    )
  }

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) =>
      currentIndex === galleryImages.length - 1
        ? 0
        : currentIndex + 1,
    )
  }

  const handleGalleryKeyboard = (
    event: KeyboardEvent<HTMLDivElement>,
  ) => {
    if (!hasMultipleImages) {
      return
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showPreviousImage()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      showNextImage()
    }
  }

  if (!activeImage) {
    return (
      <div className="project-image-frame project-image-missing">
        <p>Project preview coming soon</p>
      </div>
    )
  }

  return (
    <div
      className="project-gallery"
      tabIndex={hasMultipleImages ? 0 : -1}
      onKeyDown={handleGalleryKeyboard}
      aria-label={`${project.title} screenshot gallery`}
    >
      <div className="project-image-frame">
        <img
          key={activeImage.src}
          src={activeImage.src}
          alt={activeImage.alt}
          className="project-image"
          loading="lazy"
        />

        <div
          className="project-image-overlay"
          aria-hidden="true"
        />

        {hasMultipleImages && (
          <>
            <button
              type="button"
              className="project-gallery-arrow project-gallery-arrow-left"
              onClick={showPreviousImage}
              aria-label={`Show previous ${project.title} screenshot`}
            >
              <ArrowLeft
                size={20}
                strokeWidth={1.9}
                aria-hidden="true"
              />
            </button>

            <button
              type="button"
              className="project-gallery-arrow project-gallery-arrow-right"
              onClick={showNextImage}
              aria-label={`Show next ${project.title} screenshot`}
            >
              <ArrowRight
                size={20}
                strokeWidth={1.9}
                aria-hidden="true"
              />
            </button>
          </>
        )}

        <div className="project-gallery-counter">
          {activeImageIndex + 1} / {galleryImages.length}
        </div>
      </div>

      <div className="project-gallery-footer">
        <p className="project-gallery-caption">
          {activeImage.caption}
        </p>

        {hasMultipleImages && (
          <div
            className="project-gallery-indicators"
            aria-label="Choose project screenshot"
          >
            {galleryImages.map((image, imageIndex) => (
              <button
                key={image.src}
                type="button"
                className={`project-gallery-indicator ${
                  activeImageIndex === imageIndex
                    ? 'project-gallery-indicator-active'
                    : ''
                }`}
                onClick={() => {
                  setActiveImageIndex(imageIndex)
                }}
                aria-label={`Show screenshot ${imageIndex + 1}: ${image.caption}`}
                aria-current={
                  activeImageIndex === imageIndex
                    ? 'true'
                    : undefined
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function FeaturedWork() {
  return (
    <section
      id="featured-work"
      className="featured-work-section"
      aria-labelledby="featured-work-heading"
    >
      <div className="page-shell featured-work-container">
        <Reveal direction="up">
          <header className="featured-work-header">
            <h2
              id="featured-work-heading"
              className="featured-work-heading"
            >
              Featured Work
            </h2>

            <div
              className="featured-work-underline"
              aria-hidden="true"
            />

            <p className="featured-work-introduction">
              Projects that reflect my interest in building
              intelligent software and solving real-world
              problems.
            </p>
          </header>
        </Reveal>

        <div className="featured-projects">
          {projects.map(
            (project, projectIndex) => {
              const isReverse =
                projectIndex % 2 === 1

              return (
                <Reveal
                  key={project.id}
                  direction={
                    projectIndex % 2 === 0
                      ? 'left'
                      : 'right'
                  }
                  delay={100}
                >
                  <article
                    className={`featured-project ${
                      isReverse
                        ? 'featured-project-reverse'
                        : ''
                    }`}
                  >
                    <div className="featured-project-visual">
                      <ProjectGallery
                        project={project}
                      />
                    </div>

                    <div className="featured-project-content">
                      <div className="featured-project-meta">
                        <span className="featured-project-number">
                          {project.number}
                        </span>

                        <span>{project.category}</span>
                      </div>

                      <h3>{project.title}</h3>

                      <p className="featured-project-subtitle">
                        {project.shortTitle}
                      </p>

                      <p className="featured-project-description">
                        {project.description}
                      </p>

                      {project.metrics && (
                        <div className="featured-project-metrics">
                          {project.metrics.map(
                            (metric) => (
                              <div
                                key={metric.label}
                                className="featured-project-metric"
                              >
                                <strong>
                                  {metric.value}
                                </strong>

                                <span>
                                  {metric.label}
                                </span>
                              </div>
                            ),
                          )}
                        </div>
                      )}

                      <div className="featured-project-features">
                        {project.features.map(
                          (feature) => (
                            <div
                              key={feature}
                              className="featured-project-feature"
                            >
                              <span className="featured-project-check">
                                <Check
                                  size={14}
                                  strokeWidth={2.2}
                                  aria-hidden="true"
                                />
                              </span>

                              <p>{feature}</p>
                            </div>
                          ),
                        )}
                      </div>

                      <div className="featured-project-technologies">
                        {project.technologies.map(
                          (technology) => (
                            <span key={technology}>
                              {technology}
                            </span>
                          ),
                        )}
                      </div>

                      {(project.liveUrl ||
                        project.githubUrl) && (
                        <div className="featured-project-actions">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              className="project-action project-action-primary"
                              aria-label={`Open ${project.title} live demo`}
                              target={
                                project.liveUrl === '#'
                                  ? undefined
                                  : '_blank'
                              }
                              rel={
                                project.liveUrl === '#'
                                  ? undefined
                                  : 'noreferrer'
                              }
                              onClick={(event) => {
                                if (
                                  project.liveUrl ===
                                  '#'
                                ) {
                                  event.preventDefault()
                                }
                              }}
                            >
                              <Play
                                size={17}
                                strokeWidth={1.9}
                                aria-hidden="true"
                              />

                              <span>Live Demo</span>

                              <ArrowUpRight
                                size={16}
                                strokeWidth={1.8}
                                aria-hidden="true"
                              />
                            </a>
                          )}

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              className="project-action"
                              aria-label={`Open ${project.title} GitHub repository`}
                              target={
                                project.githubUrl === '#'
                                  ? undefined
                                  : '_blank'
                              }
                              rel={
                                project.githubUrl === '#'
                                  ? undefined
                                  : 'noreferrer'
                              }
                              onClick={(event) => {
                                if (
                                  project.githubUrl ===
                                  '#'
                                ) {
                                  event.preventDefault()
                                }
                              }}
                            >
                              <FaGithub
                                size={18}
                                aria-hidden="true"
                              />

                              <span>GitHub</span>
                            </a>
                          )}
                        </div>
                      )}
                    </div>
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

export default FeaturedWork