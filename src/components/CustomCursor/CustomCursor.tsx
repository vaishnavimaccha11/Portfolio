import { useEffect, useRef, useState } from 'react'

import './CustomCursor.css'

function CustomCursor() {
  const cursorDotRef = useRef<HTMLSpanElement | null>(null)
  const cursorRingRef = useRef<HTMLSpanElement | null>(null)

  const [isInteractive, setIsInteractive] =
    useState(false)

  const [isPressed, setIsPressed] =
    useState(false)

  useEffect(() => {
    const handleMouseMove = (
      event: MouseEvent,
    ) => {
      const x = event.clientX
      const y = event.clientY

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform =
          `translate3d(${x}px, ${y}px, 0)`
      }

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform =
          `translate3d(${x}px, ${y}px, 0)`
      }

      const target =
        event.target as HTMLElement | null

      setIsInteractive(
        Boolean(
          target?.closest(
            'a, button, input, textarea, select, [role="button"]',
          ),
        ),
      )
    }

    const handleMouseDown = () => {
      setIsPressed(true)
    }

    const handleMouseUp = () => {
      setIsPressed(false)
    }

    const handleMouseLeave = () => {
      document.body.classList.add(
        'custom-cursor-hidden',
      )
    }

    const handleMouseEnter = () => {
      document.body.classList.remove(
        'custom-cursor-hidden',
      )
    }

    window.addEventListener(
      'mousemove',
      handleMouseMove,
    )

    window.addEventListener(
      'mousedown',
      handleMouseDown,
    )

    window.addEventListener(
      'mouseup',
      handleMouseUp,
    )

    document.addEventListener(
      'mouseleave',
      handleMouseLeave,
    )

    document.addEventListener(
      'mouseenter',
      handleMouseEnter,
    )

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove,
      )

      window.removeEventListener(
        'mousedown',
        handleMouseDown,
      )

      window.removeEventListener(
        'mouseup',
        handleMouseUp,
      )

      document.removeEventListener(
        'mouseleave',
        handleMouseLeave,
      )

      document.removeEventListener(
        'mouseenter',
        handleMouseEnter,
      )
    }
  }, [])

  return (
    <>
      <span
        ref={cursorDotRef}
        className={`custom-cursor-dot ${
          isPressed
            ? 'custom-cursor-dot-pressed'
            : ''
        }`}
        aria-hidden="true"
      />

      <span
        ref={cursorRingRef}
        className={`custom-cursor-ring ${
          isInteractive
            ? 'custom-cursor-ring-interactive'
            : ''
        } ${
          isPressed
            ? 'custom-cursor-ring-pressed'
            : ''
        }`}
        aria-hidden="true"
      />
    </>
  )
}

export default CustomCursor