import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import color from 'color'

const themes = {
  global: {
    font: 'Inter UI, Helvetica Neue, Helvetica, sans-serif'
  },
  blue: {
    fg: '#111',
    bg: '#fff',
    border: 'rgba(32,89,246,0.2)',
    blue: '#2059f6'
  },
  light: {
    fg: '#888',
    bg: '#fff',
    border: '#ddd',
    red: '#ff1c1c',
    blue: '#000',
    green: '#00BB66'
  },
  dark: {
    fg: '#999',
    bg: '#000',
    border: '#444',
    blue: '#fff'
  }
}

const lightMainColor = '#111'
const lightSecondaryColor = '#2059f6'
const darkMainColor = '#999'
const darkSecondaryColor = '#fff'

const theme = {
  font: 'Inter UI, Helvetica Neue, Helvetica, sans-serif',
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
      .string()
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
      .string()
  }
}

export function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
