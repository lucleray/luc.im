import React from 'react'

export const Footer2: React.FC = () => (
  <footer>
    <p>
      Find me on{' '}
      <a
        className="color"
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/lucleray"
      >
        Twitter
      </a>
      .
    </p>

    <p>
      <a
        role="button"
        tabIndex={0}
        style={{ cursor: 'pointer' }}
        onClick={() => {
          // @ts-ignore
          window.__toggleDarkMode()
        }}
        onKeyUp={event => {
          // @ts-ignore
          if (['Enter', ' '].includes(event.key)) window.__toggleDarkMode()
        }}
      >
        Switch Light/Dark
      </a>
    </p>
  </footer>
)
