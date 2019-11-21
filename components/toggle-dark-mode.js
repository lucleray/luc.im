import styled from 'styled-components/macro'
import { useState, useEffect, useRef } from 'react'
import { theme } from './system'

const Toggle = styled.div`
  display: inline-block;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .track {
    width: 26px;
    height: 14px;
    position: relative;
    cursor: pointer;
    border-radius: 16px;
    background: ${theme.light.lightFg2};
    display: inline-block;
  }

  .thumb {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 12px;
    height: 12px;
    position: relative;
    border-radius: 14px;
    background: ${theme.light.bg};
    box-shadow: ${theme.light.lightFg2} 0px 1px 2px 0px;
    transition: left 0.28s cubic-bezier(0, 0, 0.2, 1) 0s;
  }

  body.dark & .track {
    background: ${theme.dark.blue};
  }

  body.dark & .thumb {
    background: ${theme.dark.bg};
    box-shadow: none;
    left: 13px;
  }

  &.focus .thumb,
  body.dark &.focus .thumb {
    box-shadow: 0px 0px 2px 3px #0099e0;
  }
`

export default function ToggleDarkMode(props) {
  const [dark, setDark] = useState(false)
  const [focus, setFocus] = useState(false)
  const input = useRef(null)

  useEffect(() => {
    setDark(window.__darkMode)
  }, [])

  return (
    <Toggle
      onClick={() => {
        input.current.focus()
        input.current.click()
      }}
      className={focus ? 'focus' : ''}
    >
      <input
        type="checkbox"
        ref={input}
        checked={dark}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={() => {
          window.__toggleDarkMode()
          setDark(window.__darkMode)
        }}
        {...props}
      />
      <div className="track">
        <div className="thumb" />
      </div>
    </Toggle>
  )
}
