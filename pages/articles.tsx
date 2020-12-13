import { Footer2 } from '../components/footer2'
import { Nav2 } from '../components/nav2'

import articles from '../lib/articles'

export default () => (
  <div className="layout">
    <Nav2 />

    <main>
      {articles.map(link => (
        <h1 key={link.id}>
          <a href={link.url}>{link.title}</a>
          <br />
          <span className="fweight0">{link.date}</span>
        </h1>
      ))}
    </main>

    <Footer2 />
  </div>
)
