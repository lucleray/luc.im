import styled, { css } from 'styled-components/macro'
import Link from 'next/link'
import { theme } from './theme'

const AStyled = styled.a`
  color: ${p => (p.white ? theme.light.bg : theme.light.blue)};
  border-bottom: 1px solid
    ${p => (p.white ? theme.light.bg : theme.light.lightBlue)};
  text-decoration: none;

  body.dark & {
    color: ${p => (p.white ? theme.dark.bg : theme.dark.blue)};
    border-bottom: 1px solid
      ${p => (p.white ? theme.dark.bg : theme.dark.lightBlue)};
  }

  &:hover {
    border-color: transparent !important;
  }

  ${p =>
    p.external &&
    css`
      margin-right: 0.1em;

      &::after {
        content: ' ↗';
        font-size: 0.6em;
        opacity: 0.5;
      }
    `}
`

const A = props => {
  if (props.external || (props.href || '').substring(0, 4) === 'http') {
    return <AStyled external target="_blank" rel="noreferrer" {...props} />
  }

  return (
    <Link href={props.href}>
      <AStyled {...props} />
    </Link>
  )
}

export { A }
