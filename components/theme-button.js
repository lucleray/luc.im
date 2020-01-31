import { useRef } from 'react'
import styled, { css } from 'styled-components/macro'
import { theme } from './system/theme'

const ThemeButtonStyled = styled.button`
  background: ${theme.light.bg};
  color: ${theme.light.blue};
  font-size: inherit;
  line-height: 1em;
  cursor: pointer;

  &:hover {
    box-shadow: ${theme.light.lightFg2} 0px 0px 90px;
  }

  padding: 5px;
  border-radius: 2px;
  color: ${theme.light.lightFg};
  border: 1px solid ${theme.light.lightFg2};

  body.dark & {
    background: ${theme.dark.bg};
    color: ${theme.dark.lightFg};
    border: 1px solid ${theme.dark.lightFg2};

    &:hover {
      box-shadow: ${theme.dark.lightFg} 0px 0px 90px;
    }
  }

  ${p =>
    p.symbol &&
    css`
      &::after {
        content: " ${p => p.symbol}";
        opacity: 0.5;
      }
    `}

  body.dark &.button-set-light {
    display: inline-block;
  }

  body.dark &.button-set-dark,
  body &.button-set-light {
    display: none;
  }
`

export default function ThemeButton() {
  const darkButton = useRef()
  const lightButton = useRef()

  return (
    <>
      <ThemeButtonStyled
        ref={darkButton}
        symbol="☾"
        className="button-set-dark"
        onClick={() => {
          window.__toggleDarkMode()
          lightButton.current.focus()
        }}
      >
        Dark mode
      </ThemeButtonStyled>
      <ThemeButtonStyled
        ref={lightButton}
        symbol="☀︎"
        className="button-set-light"
        onClick={() => {
          window.__toggleDarkMode()
          darkButton.current.focus()
        }}
      >
        Light mode
      </ThemeButtonStyled>
    </>
  )
}
