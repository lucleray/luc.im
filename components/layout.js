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

const ReactToggleStyle = createGlobalStyle`
.react-toggle {
  touch-action: pan-x;

  display: inline-block;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;

  margin-bottom: -3px;
  margin-left: 5px;
}

.react-toggle-screenreader-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.react-toggle--disabled {
  cursor: not-allowed;
  opacity: 0.5;
  -webkit-transition: opacity 0.25s;
  transition: opacity 0.25s;
}

.react-toggle-track {
  width: 35px;
  height: 20px;
  padding: 0;
  border-radius: 30px;
  background-color: #ddd;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

.react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
  background-color: #bbb;
}

body.dark .react-toggle-track {
  background-color: #19ab27;
}

.react-toggle--checked:hover:not(.react-toggle--disabled)
  .react-toggle-track {
  background-color: #128d15;
}

.react-toggle-track-check {
  position: absolute;
  width: 14px;
  height: 10px;
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  left: 8px;
  opacity: 0;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

body.dark .react-toggle-track-check {
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

.react-toggle-track-x {
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  right: 10px;
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -moz-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease;
}

body.dark .react-toggle-track-x {
  opacity: 0;
}

.react-toggle-thumb {
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border: 1px solid #aaa;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.8);

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  transition: all 0.25s ease;
}

body.dark .react-toggle-thumb {
  left: 16px;
  border-color: #19ab27;
}

.react-toggle--focus .react-toggle-thumb {
  -webkit-box-shadow: 0px 0px 3px 2px #0099e0;
  -moz-box-shadow: 0px 0px 3px 2px #0099e0;
  box-shadow: 0px 0px 2px 3px #0099e0;
}

.react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {
  -webkit-box-shadow: 0px 0px 5px 5px #0099e0;
  -moz-box-shadow: 0px 0px 5px 5px #0099e0;
  box-shadow: 0px 0px 5px 5px #0099e0;
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
    <ReactToggleStyle />
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
