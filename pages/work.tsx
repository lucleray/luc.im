import { Nav2 } from '../components/nav2'

import projects from '../lib/projects'

export default () => (
  <main>
    <Nav2 />

    {projects.map(link => (
      <h1 key={link.id}>
        <a href={link.url}>{link.title}</a>
        <br />
        <span className="fweight0">{link.date}</span>
      </h1>
    ))}

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
)
