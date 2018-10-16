import styled from 'styled-components/macro'

const Container = styled.div`
  text-align: ${p => (p.align ? p.align : 'left')};
`

const ContentContainer = styled(Container)`
  margin-bottom: 10em;
`

const BottomContainer = styled(Container)`
  margin: 4em 0 2em 0;
`

export { Container, ContentContainer, BottomContainer }
