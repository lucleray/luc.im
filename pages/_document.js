import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components/macro'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
            key="viewport"
          />
          <meta
            name="description"
            content="Software engineer with a passion for machine learning"
            key="description"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="static/favicon-16x16.png"
          />
          <meta
            property="og:image"
            content="https://lucleray.me/static/cover.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://lucleray.me/static/cover.png"
          />
          {this.props.styleTags}
          <script
            async
            type="text/javascript"
            src="https://plausible.io/js/analytics.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
