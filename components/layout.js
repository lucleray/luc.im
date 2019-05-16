import styled, { createGlobalStyle } from 'styled-components/macro'
import { Container, BottomContainer } from './container'
import { LightText } from './inline'
import A from './a'
import Head from 'next/head'
import { theme } from './theme'
import Markdown from './markdown'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Inter UI";
    font-style: normal;
    font-weight: 400;
    src: 
      local("Inter UI"), 
      url("/static/font/Inter-Regular.woff2") format("woff2"),
      url("/static/font/Inter-Regular.woff") format("woff");
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
  margin: 40px 8%;

  @media only screen and (min-width: 700px) {
    width: 550px;
  }
`

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.meta.title}</title>
      </Head>
      <GlobalStyle />
      <LayoutDiv>
        <Container>
          <Markdown>{props.children}</Markdown>
        </Container>
        <BottomContainer align="center">
          <LightText>
            Made with next.js and styled components ・{' '}
            <A newtab href="https://github.com/lucleray/lucleray.me">
              Code on Github
            </A>
          </LightText>
        </BottomContainer>
      </LayoutDiv>
    </>
  )
}
