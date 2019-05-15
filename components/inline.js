import styled from 'styled-components/macro'

const LightText = styled.span`
  color: ${p => p.theme.light.lightFg};
  font-size: 0.8em;
  line-height: 3px;

  body.dark & {
    color: ${p => p.theme.dark.lightFg};
  }
`

const InlineCode = styled.span`
  font-family: Hack, 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,
    Courier, monospace;
  background: ${p => p.theme.light.lightBlue2};
  padding: 5px;
  margin: -5px;

  body.dark & {
    background: ${p => p.theme.dark.lightBlue2};
  }
`

export { LightText, InlineCode }
