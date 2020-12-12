import { Nav2 } from '../components/nav2'
import { Footer2 } from '../components/footer2'

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

    <Footer2 />
  </main>
)
