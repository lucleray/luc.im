import Head from 'next/head'
import Link from 'next/link'

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
        <p className="h1" key={link.id}>
          {link.external ? (
            <a target="_blank" rel="noreferrer" href={link.url}>
              {link.title}
            </a>
          ) : (
            <Link href={link.url}>
              <a>{link.title}</a>
            </Link>
          )}

          <br />
          <span className="fweight0">{link.date}</span>
        </p>
      ))}
    </main>
    <Footer2 />
  </div>
)
