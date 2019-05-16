import { MDXProvider } from '@mdx-js/react'
import A from './a'
import { H1, H2, H3 } from './paragraphs'
import { InlineCode } from './inline'

import styled from 'styled-components/macro'
import { theme } from './theme'

const HR = styled.hr`
  height: 1px;
  background: ${theme.light.lightBlue2};
  border: 0;
  margin: 2em 0;
`

const components = {
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  inlineCode: InlineCode,
  hr: HR
}

export default function Markdown(props) {
  return <MDXProvider components={components}>{props.children}</MDXProvider>
}
