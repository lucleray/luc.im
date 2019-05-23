import styled from 'styled-components/macro'
import { theme } from './theme'

const Container = styled.div`
  text-align: ${p => (p.align ? p.align : 'left')};
`

const ContentContainer = styled(Container)`
  margin-bottom: 10em;
`

const Footer = styled.footer`
  margin: 4em 0 2em 0;
  text-align: center;
  color: ${theme.light.lightFg};
  font-size: 0.8em;
  line-height: 3px;

  body.dark & {
    color: ${theme.dark.lightFg};
  }
`

export { Container, ContentContainer, Footer }
