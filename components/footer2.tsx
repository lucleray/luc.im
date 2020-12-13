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
        style={{ cursor: 'pointer' }}
        onClick={() => {
          // @ts-ignore
          window.__toggleDarkMode()
        }}
      >
        Switch Light/Dark
      </a>
    </p>
  </footer>
)
