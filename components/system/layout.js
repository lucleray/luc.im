import styled, { css, createGlobalStyle } from 'styled-components/macro'
import { A } from './a'
import { Container, Footer } from './container'
import { theme } from './theme'
import Head from 'next/head'
import ThemeButton from '../theme-button'
import FontStyle from './font'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.font};
    color: ${theme.light.fg};
    background: ${theme.light.bg};
    font-size: 18px;
    line-height: 27px;
    margin: 3.8em 0 3.9em 0;
    overflow-x: hidden;
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
  margin: 40px ${p => (p.center ? 'auto' : '0')};

  ${p =>
    !p.wide &&
    css`
      @media only screen and (min-width: 700px) {
        width: 660px;
      }
    `}
`

const LayoutPaddingDiv = styled.div`
  padding: 0 50px;
`

const Layout = props => {
  return (
    <>
      <Head>
        <title>{props.meta.title}</title>
      </Head>
      <GlobalStyle />
      <FontStyle />
      <LayoutDiv {...props}>
        <LayoutPaddingDiv>
          <Container>{props.children}</Container>
          <Footer>
            <ThemeButton /> ・{' '}
            <A href="https://github.com/lucleray/luc.im">Code</A> ・{' '}
            <A href="https://plausible.io/luc.im">Stats</A>
          </Footer>
        </LayoutPaddingDiv>
      </LayoutDiv>
    </>
  )
}

export { Layout }
