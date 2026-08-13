import { useEffect, useState } from 'react'

import { navigationItems } from '../../data/navigation'

function Navbar() {
  const [activeSection, setActiveSection] =
    useState('home')

  useEffect(() => {
    function updateActiveSection() {
      const sections = navigationItems
        .map((item) => {
          const id = item.href.replace('#', '')
          const element =
            document.getElementById(id)

          return {
            id,
            element,
          }
        })
        .filter(
          (
            section,
          ): section is {
            id: string
            element: HTMLElement
          } => section.element !== null,
        )

      const activationPoint =
        window.innerHeight * 0.35

      let currentSection = sections[0]?.id ?? 'home'

      sections.forEach(({ id, element }) => {
        const rect =
          element.getBoundingClientRect()

        if (rect.top <= activationPoint) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
    }

    updateActiveSection()

    window.addEventListener(
      'scroll',
      updateActiveSection,
      {
        passive: true,
      },
    )

    window.addEventListener(
      'resize',
      updateActiveSection,
    )

    return () => {
      window.removeEventListener(
        'scroll',
        updateActiveSection,
      )

      window.removeEventListener(
        'resize',
        updateActiveSection,
      )
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