import Head from 'next/head'

import { Nav2 } from '../components/nav2'
import { Footer2 } from '../components/footer2'

import links from '../lib/links'

export default () => (
  <div className="layout">
    <Head>
      <title>Luc Leray - Links</title>
    </Head>

    <Nav2 />

    <header>
      <h1>A collection of links that inspired my work</h1>
    </header>

    {links.map(link => (
      <p className="h1" key={link.id}>
        <a target="_blank" rel="noreferrer" href={link.url}>
          {link.title}
        </a>
      </p>
    ))}

    <Footer2 />
  </div>
)
