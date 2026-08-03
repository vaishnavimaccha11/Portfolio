import { useEffect, useState } from 'react'

const roles = [
  'Software Engineer',
  'Full-Stack Developer',
  'AI Engineer',
]

const typingSpeed = 75
const deletingSpeed = 42
const completedRolePause = 1500
const nextRolePause = 320

function RotatingText() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]

    let delay = isDeleting
      ? deletingSpeed
      : typingSpeed

    if (!isDeleting && displayedText === currentRole) {
      delay = completedRolePause
    }

    if (isDeleting && displayedText === '') {
      delay = nextRolePause
    }

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting) {
        if (displayedText === currentRole) {
          setIsDeleting(true)
          return
        }

        setDisplayedText(
          currentRole.slice(0, displayedText.length + 1),
        )

        return
      }

      if (displayedText === '') {
        setIsDeleting(false)

        setRoleIndex(
          (currentIndex) =>
            (currentIndex + 1) % roles.length,
        )

        return
      }

      setDisplayedText(
        currentRole.slice(0, displayedText.length - 1),
      )
    }, delay)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [displayedText, isDeleting, roleIndex])

  return (
    <span
      className="rotating-text"
      aria-live="polite"
      aria-label={roles[roleIndex]}
    >
      <span>{displayedText}</span>

      <span
        className="rotating-text-cursor"
        aria-hidden="true"
      >
        |
      </span>
    </span>
  )
}

export default RotatingText