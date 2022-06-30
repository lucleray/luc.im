import Head from 'next/head'

import { Footer2 } from '../components/footer2'
import { Nav2 } from '../components/nav2'

import projects from '../lib/projects'

export default function WorkPage() {
  return (
    <div className="layout spread">
      <Head>
        <title>Luc Leray - Work</title>
      </Head>

      <Nav2 />

      <header>
        <h1>Work highlights</h1>
      </header>

      <main>
        {projects.map(link => (
          <p className="h1" key={link.id}>
            <a target="_blank" rel="noreferrer" href={link.url}>
              {link.title}
            </a>
            <br />
            <span className="fweight0">{link.date}</span>
          </p>
        ))}
      </main>

      <Footer2 />
    </div>
  )
}
