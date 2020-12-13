import React from 'react'
import Link from 'next/link'

import { Canvas } from '../components/canvas'
import { navLinks } from '../components/nav2'

export default () => (
  <Canvas>
    <main>
      <h1>Hi, I'm Luc</h1>
      <h1>
        I'm a french software engineer working at{' '}
        <a target="_blank" rel="noreferrer" href="https://vercel.com">
          ▲Vercel
        </a>
        .
      </h1>
      <h1>
        I started building websites 15 years ago with XHTML, Notepad++ and
        EasyPHP.
      </h1>
      <h1>
        Previously, I cofounded{' '}
        <a target="_blank" rel="noreferrer" href="https://sequence.work">
          Sequence.work
        </a>{' '}
        and worked at{' '}
        <a target="_blank" rel="noreferrer" href="https://sequence.work">
          Supahands
        </a>
        ,{' '}
        <a target="_blank" rel="noreferrer" href="https://sequence.work">
          Worldline
        </a>{' '}
        and{' '}
        <a target="_blank" rel="noreferrer" href="https://sequence.work">
          Content-Square
        </a>
        .
      </h1>

      <h1>
        More:
        {navLinks.map(link => (
          <React.Fragment key={link.href}>
            <br />
            <Link href={link.href}>
              <a>{link.title}</a>
            </Link>
          </React.Fragment>
        ))}
      </h1>
      <h1>
        Find me on{' '}
        <a
          className="color"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/lucleray"
        >
          Twitter
        </a>
        .
      </h1>
    </main>
  </Canvas>
)
