import styled, { createGlobalStyle } from 'styled-components/macro'
import { BottomContainer } from './container'
import { LightText } from './inline'
import A from './a'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter UI';
    font-style: normal;
    font-weight: 400;
    src: local('Inter UI'), local('Inter-UI-Regular'), url(../static/font/Inter-UI-Regular.woff2) format('woff2');
  }

  * {
    transition: 0.2s;
  }

  body {
    font-family: ${p => p.theme.font};
    color: ${p => p.theme.light.fg};
    background: ${p => p.theme.light.bg};
    font-size: 18px;
    line-height: 27px;
    margin: 3.8em 0 3.9em 0;
  }

  body.dark {
    color: ${p => p.theme.dark.fg};
    background: ${p => p.theme.dark.bg};
  }

  ::selection {
    background: ${p => p.theme.light.blue};
    color: ${p => p.theme.light.bg};
  }

  body.dark ::selection {
    background: ${p => p.theme.dark.blue};
    color: ${p => p.theme.dark.bg};
  }
`

const Layout = styled.div`
  width: 84%;
  margin: 40px 8%;
  /* margin: 40px auto; */

  @media only screen and (min-width: 700px) {
    width: 550px;
    /* margin: 40px 80px; */
  }
`

export default props => (
  <Layout>
    <GlobalStyle />
    {props.children}
    <BottomContainer align="center">
      <LightText>
        Made with next.js and styled components ・{' '}
        <A newtab href="https://github.com/lucleray/lucleray.me">
          Code on Github
        </A>
      </LightText>
    </BottomContainer>
  </Layout>
)
