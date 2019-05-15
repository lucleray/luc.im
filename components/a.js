import styled from 'styled-components/macro'
import Link from 'next/link'

const AComp = ({ newtab, link, ...props }) => {
  const a = newtab ? (
    <a target="_blank" rel="noreferer noopener" {...props} />
  ) : (
    <a {...props} />
  )

  if (link) {
    return (
      <Link href={link} passHref>
        {a}
      </Link>
    )
  }
  return a
}

const A = styled(AComp)`
  color: ${p => (p.white ? p.theme.light.bg : p.theme.light.blue)};
  border-bottom: 1px solid
    ${p => (p.white ? p.theme.light.bg : p.theme.light.lightBlue)};
  text-decoration: none;
  // transition: all 0.2s ease-in;

  body.dark & {
    color: ${p => (p.white ? p.theme.dark.bg : p.theme.dark.blue)};
    border-bottom: 1px solid
      ${p => (p.white ? p.theme.dark.bg : p.theme.dark.lightBlue)};
  }

  ${p =>
    p.newtab &&
    `
    margin-right: 0.1em;
  
    &::after {
      content: " ↗";
      font-size: 0.6em;
      opacity: 0.5;
    }
  `} &:hover {
    border-color: transparent !important;
  }
`

export default A
