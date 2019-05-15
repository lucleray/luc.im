import styled from 'styled-components/macro'

const Button = styled.button`
  margin-top: 1em;
  color: ${p => p.theme.light.bg};
  border-radius: 5px;
  border: 0;
  background: ${p => p.theme.light.lightBlue};
  font-weight: bold;
  padding: 0.5em;
  font-size: 0.9em;
  cursor: pointer;

  body.dark & {
    color: ${p => p.theme.dark.bg};
    background: ${p => p.theme.dark.lightBlue};
  }
`

export default Button
