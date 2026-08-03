import {
  Award,
  BriefcaseBusiness,
  Code2,
  FileText,
  House,
  Mail,
  UserRound,
} from 'lucide-react'

import type { LucideIcon } from 'lucide-react'

export type NavigationItem = {
  label: string
  href: string
  icon: LucideIcon
}

export const navigationItems: NavigationItem[] = [
  {
    label: 'Home',
    href: '#home',
    icon: House,
  },
  {
    label: 'About Me',
    href: '#about-me',
    icon: UserRound,
  },
  {
    label: 'Featured Work',
    href: '#featured-work',
    icon: BriefcaseBusiness,
  },
  {
    label: 'Certifications',
    href: '#certifications',
    icon: Award,
  },
  {
    label: 'Skills',
    href: '#skills',
    icon: Code2,
  },
  {
    label: 'Contact',
    href: '#contact',
    icon: Mail,
  },
]

export const resumeNavigationItem: NavigationItem = {
  label: 'Resume',
  href: '#resume',
  icon: FileText,
}