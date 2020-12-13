import React from 'react'

export const Footer2: React.FC = () => (
  <>
    <h1>
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
    </h1>

    <h1>
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
    </h1>
  </>
)
