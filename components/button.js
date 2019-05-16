import styled from 'styled-components/macro'
import { theme } from './theme'

const Button = styled.button`
  margin-top: 1em;
  color: ${theme.light.bg};
  border-radius: 5px;
  border: 0;
  background: ${theme.light.lightBlue};
  font-weight: bold;
  padding: 0.5em;
  font-size: 0.9em;
  cursor: pointer;

  body.dark & {
    color: ${theme.dark.bg};
    background: ${theme.dark.lightBlue};
  }
`

export default Button
