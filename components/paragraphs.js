import styled from 'styled-components'

const H1 = styled.h1``

const H2 = styled.h2`
  font-size: 1.8em;
  text-align: center;
  color: ${p => p.theme.blue};
  margin-bottom: 0.7em;
`

const H3 = styled.h3`
  text-align: center;
  color: ${p => p.theme.blue};
  opacity: 0.4;
  margin-top: 0.7em;
  margin-bottom: 4em;
`

const Card = styled.div`
  margin: 0 0 0.4em 0;
  background: ${p => p.highlight ? p.theme.blue : p.theme.bg};
  border-radius: 10px;
  padding: 0.4em 2em;
  transition: 0.2s;
  color: ${p => p.highlight ? p.theme.bg : p.theme.fg};
  transform: rotate(${p => Math.floor(Math.random() * 6 - 3) + 'deg'});
  border: ${p => p.highlight ? '0px' : '1px'} solid ${p => p.theme.border};
  /* background: linear-gradient(to bottom right, #fff, #fbfbfb); */

  &:hover {
    transform: translateX(20px) rotate(${p => Math.floor(Math.random() * 6 - 3) + 'deg'});
  }
`

export {
  H1,
  H2,
  H3,
  Card
}
