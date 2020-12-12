import { Nav2 } from '../components/nav2'

import links from '../lib/links'

export default () => (
  <main>
    <Nav2 />

    <h1>A collection of links that inspired my work</h1>

    {links.map(link => (
      <h1 key={link.id}>
        <a href={link.url}>{link.title}</a>
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
