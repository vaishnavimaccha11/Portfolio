import {
  useEffect,
  useRef,
  useState,
} from 'react'

import type {
  CSSProperties,
  ReactNode,
} from 'react'

import './Reveal.css'

type RevealDirection =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'scale'

type RevealProps = {
  children: ReactNode
  className?: string
  direction?: RevealDirection
  delay?: number
  threshold?: number
  once?: boolean
}

function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  threshold = 0.14,
  once = true,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -45px 0px',
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [once, threshold])

  const revealStyle = {
    '--reveal-delay': `${delay}ms`,
  } as CSSProperties

  return (
    <div
      ref={elementRef}
      className={[
        'reveal',
        `reveal-${direction}`,
        isVisible ? 'reveal-visible' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={revealStyle}
    >
      {children}
    </div>
  )
}

export default Reveal