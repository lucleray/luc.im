import styled, { css } from 'styled-components/macro'

const Spacer = styled.div`
  ${p =>
    p.v &&
    css`
      height: ${p.v * 16}px;
      clear: both;
    `}

  ${p =>
    p.h &&
    css`
      display: inline-block;
      width: ${p.h * 16}px;
    `}
`

export { Spacer }
