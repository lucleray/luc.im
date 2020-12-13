import Head from 'next/head'

import { Footer2 } from '../components/footer2'
import { Nav2 } from '../components/nav2'

import articles from '../lib/articles'

export default () => (
  <div className="layout">
    <Head>
      <title>Luc Leray - Articles</title>
    </Head>

    <Nav2 />
    <main>
      {articles.map(link => (
        <p key={link.id}>
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
