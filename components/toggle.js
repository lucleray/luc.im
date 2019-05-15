import React from 'react'
import Toggle from 'react-toggle'

export default function ToggleDarkMode() {
  return (
    <>
      <Toggle
        id="toggle-darkmode"
        defaultChecked={
          typeof window === 'undefined' ? false : window.__darkMode
        }
        icons={false}
        onChange={() => window.__toggleDarkMode()}
      />
    </>
  )
}
