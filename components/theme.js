import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import color from 'color'

const lightMainColor = '#111'
const lightSecondaryColor = '#2059f6'

const darkMainColor = '#999'
const darkSecondaryColor = '#fff'

const light2MainColor = '#888'
const light2SecondaryColor = '#000'

export const theme = {
  font:
    'Inter UI,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
  light: {
    fg: lightMainColor,
    lightFg: color(lightMainColor)
      .fade(0.4)
      .string(),
    lightFg2: color(lightMainColor)
      .fade(0.7)
      .string(),
    bg: '#fff',
    border: 'rgba(32,89,246,0.2)',
    blue: lightSecondaryColor,
    lightBlue: color(lightSecondaryColor)
      .fade(0.1)
      .string(),
    lightBlue2: 'rgba(32, 89, 246, 0.06)'
  },
  dark: {
    fg: darkMainColor,
    lightFg: color(darkMainColor)
      .fade(0.4)
      .string(),
    lightFg2: color(darkMainColor)
      .fade(0.7)
      .string(),
    bg: '#000',
    border: '#444',
    blue: darkSecondaryColor,
    lightBlue: color(darkSecondaryColor)
      .fade(0.1)
      .string(),
    lightBlue2: 'rgba(255, 255, 255, 0.06)'
  },
  light2: {
    fg: light2MainColor,
    lightFg: color(light2MainColor)
      .fade(0.4)
      .string(),
    lightFg2: color(light2MainColor)
      .fade(0.7)
      .string(),
    bg: '#fff',
    border: '#ddd',
    blue: light2SecondaryColor,
    lightBlue: color(light2SecondaryColor)
      .fade(0.1)
      .string(),
    lightBlue2: 'rgba(0, 0, 0, 0.06)'
  }
}

export function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
