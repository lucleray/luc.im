import styled from 'styled-components/macro'

const H1 = styled.h1``

const H2 = styled.h2`
  font-size: 1.8em;
  text-align: center;
  color: ${p => p.theme.light.blue};
  margin-bottom: 0.7em;

  body.dark & {
    color: ${p => p.theme.dark.blue};
  }
`

const H3 = styled.h3`
  text-align: center;
  color: ${p => p.theme.light.blue};
  opacity: 0.4;
  margin-top: 0.7em;
  margin-bottom: 4em;

  body.dark & {
    color: ${p => p.theme.dark.blue};
  }
`

const Card = styled.div`
  margin: 0 0 0.4em 0;
  background: ${p => (p.highlight ? p.theme.light.blue : p.theme.light.bg)};
  border-radius: 10px;
  padding: 0.4em 2em;
  color: ${p => (p.highlight ? p.theme.light.bg : p.theme.light.fg)};
  transform: rotate(${p => Math.floor(Math.random() * 6 - 3) + 'deg'});
  border: ${p => (p.highlight ? '0px' : '1px')} solid
    ${p => p.theme.light.border};
  transition: transform 0.2s ease 0.1s;

  body.dark & {
    background: ${p => (p.highlight ? p.theme.dark.blue : p.theme.dark.bg)};
    color: ${p => (p.highlight ? p.theme.dark.bg : p.theme.dark.fg)};
    border: ${p => (p.highlight ? '0px' : '1px')} solid
      ${p => p.theme.dark.border};
  }

  &:hover {
    transform: translateX(20px)
      rotate(${p => Math.floor(Math.random() * 6 - 3) + 'deg'});
  }
`

export { H1, H2, H3, Card }
