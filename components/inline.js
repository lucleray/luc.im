import styled from 'styled-components/macro'
import { theme } from './theme'

const LightText = styled.span`
  color: ${theme.light.lightFg};
  font-size: 0.8em;
  line-height: 3px;

  body.dark & {
    color: ${theme.dark.lightFg};
  }
`

const InlineCode = styled.span`
  font-family: Hack, 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,
    Courier, monospace;
  background: ${theme.light.lightBlue2};
  padding: 5px;
  margin: -5px;

  body.dark & {
    background: ${theme.dark.lightBlue2};
  }
`

export { LightText, InlineCode }
