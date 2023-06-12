import React from 'react'
import Link from 'next/link'

export const navLinks = [
  { title: 'Work', href: '/work' },
  { title: 'Articles', href: '/articles' },
  { title: 'Photos', href: '/photos' },
  { title: 'Links', href: '/links' },
]

export function Nav2() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Luc Leray</Link>
        </li>
        <li className="expand" />

        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>

      <br />
      <br />
    </nav>
  )
}
