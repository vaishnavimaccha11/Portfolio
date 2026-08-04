import { useEffect, useState } from 'react'

import { navigationItems } from '../../data/navigation'

function Navbar() {
  const [activeSection, setActiveSection] =
    useState('home')


  useEffect(() => {
    const sectionElements = navigationItems
      .map((item) =>
        item.href.replace('#', ''),
      )
      .map((id) =>
        document.getElementById(id),
      )
      .filter(
        (
          section,
        ): section is HTMLElement =>
          section !== null,
      )

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter(
            (entry) =>
              entry.isIntersecting,
          )
          .sort(
            (
              firstEntry,
              secondEntry,
            ) =>
              secondEntry.intersectionRatio -
              firstEntry.intersectionRatio,
          )[0]

        if (visibleSection) {
          setActiveSection(
            visibleSection.target.id,
          )
        }
      },
      {
        rootMargin:
          '-35% 0px -55% 0px',
        threshold: [
          0.05,
          0.2,
          0.5,
        ],
      },
    )

    sectionElements.forEach(
      (section) => {
        observer.observe(section)
      },
    )

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <header className="navbar-wrapper">
      <nav
        className="navbar-icon-container"
        aria-label="Main navigation"
      >
        {navigationItems.map(
          (item) => {
            const Icon = item.icon

            const sectionId =
              item.href.replace(
                '#',
                '',
              )

            const isActive =
              activeSection ===
              sectionId

            return (
              <a
                key={item.href}
                href={item.href}
                className={`navbar-icon-link ${
                  isActive
                    ? 'navbar-icon-link-active'
                    : ''
                }`}
                aria-label={item.label}
                data-tooltip={
                  item.label
                }
              >
                <Icon
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </a>
            )
          },
        )}
      </nav>
    </header>
  )
}

export default Navbar