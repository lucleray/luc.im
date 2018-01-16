import styled from 'styled-components'
import Link from 'next/link'

const AComp = ({ newtab, link, href, children, className }) => {
  const a = newtab
    ? <a className={className} target='_blank' rel='noopener norefferer' href={href}>{children}</a>
    : <a className={className} href={href}>{children}</a>

  if (link) {
    return <Link href={link} passHref>{a}</Link>
  }
  return a
}

const A = styled(AComp)`
  color: ${p => p.white ? p.theme.bg : p.theme.lightBlue};
  border-bottom: 1px solid ${p => p.white ? p.theme.bg : p.theme.lightBlue};
  text-decoration: none;
  // transition: all 0.2s ease-in;

  ${p => p.newtab && `
    margin-right: 0.1em;
  
    &::after {
      content: " ↗";
      font-size: 0.6em;
      opacity: 0.5;
    }
  `}

  &:hover {
    border-color: transparent !important;
  }
`

export default A
