import { MDXProvider } from '@mdx-js/react'
import A from './a'
import { H1, H2, H3 } from './paragraphs'
import { InlineCode } from './inline'
import HR from './hr'

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
