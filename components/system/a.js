import styled, { css } from 'styled-components/macro'
import Link from 'next/link'
import { theme } from './theme'

const AStyled = styled.a.attrs(
  ({ color = 'blue', underline = true, symbol = true }) => ({
    color,
    underline,
    symbol
  })
)`
  text-decoration: none;

  ${p =>
    p.color &&
    css`
      color: ${p => theme.light[p.color]};
      body.dark & {
        color: ${p => theme.dark[p.color]};
      }
    `}

  ${p =>
    p.underline &&
    css`
      border-bottom: 1px solid ${p => theme.light[p.color]};
      body.dark & {
        border-bottom: 1px solid ${p => theme.dark[p.color]};
      }
    `}

  &:hover {
    border-color: transparent !important;
  }

  ${p =>
    p.external &&
    p.symbol &&
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
