import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'

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
    background: ${p => p.theme.light.fg};
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
    background: ${p => p.theme.light.bg};
    box-shadow: ${p => p.theme.light.fg} 0px 1px 3px 0px;
    transition-duration: 0.28s;
    transition-property: left;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }

  body.dark & .track {
    background: ${p => p.theme.dark.blue};
  }

  body.dark & .thumb {
    background: ${p => p.theme.dark.bg};
    box-shadow: none;
    left: 13px;
  }
`

export default function ToggleDarkMode() {
  const [dark, setDark] = useState(null)

  useEffect(() => {
    setDark(window.__darkMode)
  }, [])

  return (
    <Toggle
      onClick={() => {
        window.__toggleDarkMode()
        setDark(window.__darkMode)
      }}
    >
      <input type="checkbox" checked={dark} />
      <div className="track">
        <div className="thumb" />
      </div>
    </Toggle>
  )
}
