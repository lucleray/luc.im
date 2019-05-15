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
  background: rgba(32, 89, 246, 0.06);
  padding: 5px;
  margin: -5px;
`

export { LightText, InlineCode }
