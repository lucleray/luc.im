import styled, { css, createGlobalStyle } from 'styled-components/macro'
import { A } from './a'
import { Container, Footer } from './container'
import { theme } from './theme'
import Head from 'next/head'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Inter UI";
    font-style: normal;
    font-weight: 400;
    src: 
      local("Inter UI"), 
      url("/assets/font/Inter-Regular.woff2") format("woff2"),
      url("/assets/font/Inter-Regular.woff") format("woff");
    font-display: swap;
  }

  body {
    font-family: ${theme.font};
    color: ${theme.light.fg};
    background: ${theme.light.bg};
    font-size: 18px;
    line-height: 27px;
    margin: 3.8em 0 3.9em 0;
  }

  body.dark {
    color: ${theme.dark.fg};
    background: ${theme.dark.bg};
  }

  ::selection {
    background: ${theme.light.blue};
    color: ${theme.light.bg};
  }

  body.dark ::selection {
    background: ${theme.dark.blue};
    color: ${theme.dark.bg};
  }
`

const LayoutDiv = styled.div`
  width: 84%;
  padding: 0 8%;
  margin: 40px ${p => (p.center ? 'auto' : '0')};

  ${p =>
    !p.wide &&
    css`
      @media only screen and (min-width: 700px) {
        width: 550px;
      }
    `}
`

const Layout = props => {
  return (
    <>
      <Head>
        <title>{props.meta.title}</title>
      </Head>
      <GlobalStyle />
      <LayoutDiv {...props}>
        <Container>{props.children}</Container>
        <Footer>
          Made with next.js and styled components ・{' '}
          <A href="https://github.com/lucleray/luc.im">Code on Github</A>
        </Footer>
      </LayoutDiv>
    </>
  )
}

export { Layout }
