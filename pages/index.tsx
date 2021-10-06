import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { Canvas } from '../components/canvas'
import { navLinks } from '../components/nav2'
import { Footer2 } from '../components/footer2'

export default () => (
  <Canvas>
    <Head>
      <title>Luc Leray</title>
    </Head>

    <div className="layout">
      <header>
        <h1>Hi, I'm Luc</h1>
      </header>

      <main>
        <p className="h1">
          I'm a french software engineer working at{' '}
          <a target="_blank" rel="noreferrer" href="https://vercel.com">
            ▲Vercel
          </a>
          .
        </p>
        <p className="h1">
          I started building websites{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="http://lu.leray.free.fr/acceuil.html"
          >
            15 years ago
          </a>{' '}
          with XHTML, Notepad++ and EasyPHP. fdsfdsfsfsdfdsf
        </p>
        <p className="h1">
          Previously, I cofounded{' '}
          <a target="_blank" rel="noreferrer" href="https://sequence.work">
            Sequence
          </a>{' '}
          and worked at{' '}
          <a target="_blank" rel="noreferrer" href="https://supahands.com">
            Supahands
          </a>
          ,{' '}
          <a target="_blank" rel="noreferrer" href="https://worldline.com/">
            Worldline
          </a>{' '}
          and{' '}
          <a target="_blank" rel="noreferrer" href="https://contentsquare.com">
            Content-Square
          </a>
          .
        </p>
      </main>

      <nav>
        <p className="h1">
          More:
          {navLinks.map(link => (
            <React.Fragment key={link.href}>
              <br />
              <Link href={link.href}>
                <a>{link.title}</a>
              </Link>
            </React.Fragment>
          ))}
        </p>
      </nav>

      <Footer2 />
    </div>
  </Canvas>
)
