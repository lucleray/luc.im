import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import color from 'color'

const themes = {
  global: {
    font: 'Inter UI, Helvetica Neue, Helvetica, sans-serif'
  },
  blue: {
    fg: '#111',
    bg: '#fff',
    border: 'rgba(32,89,246,0.2)',
    blue: '#2059f6'
  },
  light: {
    fg: '#888',
    bg: '#fff',
    border: '#ddd',
    red: '#ff1c1c',
    blue: '#000',
    green: '#00BB66'
  },
  dark: {
    fg: '#999',
    bg: '#000',
    border: '#444',
    blue: '#fff'
  }
}

const theme = Object.assign({}, themes.global, themes.blue)

theme.lightFg = color(theme.fg).fade(0.5).string()
theme.lightBlue = color(theme.blue).fade(0.1).string()

injectGlobal`
  @font-face {
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 400;
    src: local('Inter UI'), local('Inter-UI-Regular'), url(../static/font/Inter-UI-Regular.woff2) format('woff2');
  }

  body {
    font-family: ${theme.font};
    color: ${theme.fg};
    background: ${theme.bg};
    font-size: 18px;
    line-height: 27px;
    margin: 3.8em 0 3.9em 0;
  }
`

const Layout = styled.div`
  width: 84%;
  margin: 40px 8%;

  @media only screen and (min-width: 700px) {
    width: 550px;
    margin: 40px 80px;
  }
`

export default (props) => (
  <ThemeProvider theme={theme}>
    <Layout>{props.children}</Layout>
  </ThemeProvider>
)
