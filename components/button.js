import styled from 'styled-components'

const Button = styled.button`
  margin-top: 1em;
  color: ${p => p.theme.bg};
  border-radius: 5px;
  border: 0;
  background: ${p => p.theme.lightBlue};
  font-weight: bold;
  padding: 0.5em;
  font-size: 0.9em;
  cursor: pointer;
`

export default Button
