import {
  type FormEvent,
  useState,
} from 'react'

import {
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'

import {
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa'

import Reveal from '../../components/Reveal'

import './Contact.css'

const contactDetails = {
  email: 'vaishnavimaccha11@gmail.com',
  phoneDisplay: '+91 70320 42314',
  phoneLink: '+917032042314',
  location: 'Hyderabad, Telangana, India',
  linkedinUrl:'https://www.linkedin.com/in/vaishnavimaccha',
  githubUrl:'https://github.com/vaishnavimaccha11',
}

type FormStatus =
  | 'idle'
  | 'sending'
  | 'success'
  | 'error'

function Contact() {
  const [messageLength, setMessageLength] =
    useState(0)

  const [formStatus, setFormStatus] =
    useState<FormStatus>('idle')

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setFormStatus('sending')

    try {
      const response = await fetch(
        'https://formspree.io/f/xeeybyrq',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        },
      )

      if (!response.ok) {
        throw new Error('Unable to send message')
      }

      form.reset()
      setMessageLength(0)
      setFormStatus('success')
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="page-shell contact-container">
        <Reveal direction="up">
          <header className="contact-header">
            <h2
              id="contact-heading"
              className="contact-heading"
            >
              Get in Touch
            </h2>

            <div
              className="contact-heading-divider"
              aria-hidden="true"
            />

            <p className="contact-introduction">
              Open to Software Engineering, Full-Stack
              Development, and AI Engineering opportunities.
            </p>
          </header>
        </Reveal>

        <div className="contact-layout">
          <Reveal direction="left">
            <div className="contact-information">
              <div className="contact-information-header">
                <h3>Let&apos;s Connect</h3>

                <p>
                  Whether you have an opportunity, a project
                  to discuss, or simply want to connect, feel
                  free to reach out directly.
                </p>
              </div>

              <div className="contact-details">
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="contact-detail"
                >
                  <span className="contact-detail-icon">
                    <Mail
                      size={19}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="contact-detail-content">
                    <small>Email</small>

                    <strong>
                      {contactDetails.email}
                    </strong>
                  </span>
                </a>

                <a
                  href={`tel:${contactDetails.phoneLink}`}
                  className="contact-detail"
                >
                  <span className="contact-detail-icon">
                    <Phone
                      size={19}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="contact-detail-content">
                    <small>Phone</small>

                    <strong>
                      {contactDetails.phoneDisplay}
                    </strong>
                  </span>
                </a>

                <div className="contact-detail">
                  <span className="contact-detail-icon">
                    <MapPin
                      size={19}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </span>

                  <span className="contact-detail-content">
                    <small>Location</small>

                    <strong>
                      {contactDetails.location}
                    </strong>
                  </span>
                </div>
              </div>

              <div className="contact-social-area">
                <p>Social</p>

                <div className="contact-socials">
                  <a
                    href={contactDetails.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    aria-label="Open Vaishnavi Maccha's GitHub profile"
                  >
                    <FaGithub
                      size={19}
                      aria-hidden="true"
                    />
                  </a>

                  <a
                    href={contactDetails.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-link"
                    aria-label="Open Vaishnavi Maccha's LinkedIn profile"
                  >
                    <FaLinkedinIn
                      size={18}
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal
            direction="right"
            delay={120}
          >
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form-row">
                <label className="contact-form-field">
                  <span>Name</span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="contact-form-field">
                  <span>Email</span>

                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label className="contact-form-field">
                <span>Subject</span>

                <input
                  type="text"
                  name="subject"
                  placeholder="Project Discussion"
                  required
                />
              </label>

              <label className="contact-form-field">
                <span>Message</span>

                <textarea
                  name="message"
                  placeholder="Tell me about your opportunity or project..."
                  maxLength={500}
                  rows={6}
                  required
                  onChange={(event) => {
                    setMessageLength(
                      event.currentTarget.value.length,
                    )

                    if (
                      formStatus === 'success' ||
                      formStatus === 'error'
                    ) {
                      setFormStatus('idle')
                    }
                  }}
                />

                <small className="contact-message-count">
                  {messageLength}/500
                </small>
              </label>

              <button
                type="submit"
                className="contact-submit-button"
                disabled={formStatus === 'sending'}
              >
                {formStatus === 'success' ? (
                  <CheckCircle2
                    size={19}
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />
                ) : (
                  <Send
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                )}

                <span>
                  {formStatus === 'sending'
                    ? 'Sending...'
                    : formStatus === 'success'
                      ? 'Message Sent!'
                      : 'Send Message'}
                </span>
              </button>

              {formStatus === 'error' && (
                <p
                  className="contact-form-status contact-form-status-error"
                  role="status"
                >
                  Something went wrong while sending your
                  message. Please contact me directly by
                  email.
                </p>
              )}

              {formStatus === 'success' && (
                <div
                  className="contact-form-success"
                  role="status"
                >
                  <CheckCircle2
                    size={25}
                    strokeWidth={1.9}
                    aria-hidden="true"
                  />

                  <div>
                    <strong>Message Sent!</strong>

                    <p>
                      Thank you for reaching out. I&apos;ll
                      get back to you as soon as possible.
                    </p>
                  </div>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact