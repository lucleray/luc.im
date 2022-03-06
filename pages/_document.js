import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components/macro'

const darkModeCode = `(function() {

  function setDarkMode(v) {
    window.__darkMode = v
    localStorage.setItem('dark', v ? 'yes' : 'no');
    document.body.className = v ? 'dark' : 'light';
  }

  var q = window.matchMedia('(prefers-color-scheme: dark)');
  q.addListener(function(e) { setDarkMode(e.matches); });

  var darkLS
  try { darkLS = localStorage.getItem('dark'); }
  catch (err) { }
  setDarkMode(darkLS ? darkLS === 'yes' : q.matches);

  window.__toggleDarkMode = function() {
    setDarkMode(!window.__darkMode);
  }

})();`

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
          <link
            rel="preload"
            href="/assets/font/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
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
          {this.props.styleTags}
        </Head>
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: darkModeCode
            }}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
