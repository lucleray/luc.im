import Head from 'next/head'
import * as countries from 'country-emoji'

import { Nav2 } from '../components/nav2'
import { Footer2 } from '../components/footer2'

import photos from '../lib/photos'

function BigGridSvg() {
  const rAxis = [
    Math.random() * 7,
    Math.random() * 5 - 2,
    Math.random() * 2 - 1
  ]

  const y = [40, 100, 160, 220]

  return (
    <svg width="25" viewBox="0 0 180 300">
      {y.map(y => (
        <rect
          x={30}
          y={y}
          width="40"
          height="40"
          style={{
            transform: `rotate3d(
${rAxis.join(',')},
${Math.random() * 12 + 5}deg
)
scale(1)`,
            fill: 'var(--color)'
          }}
        />
      ))}
    </svg>
  )
}

function Img(props: {
  file: string
  date: string
  country: string
  place?: string
}) {
  const rAxis = [
    Math.random() * 7,
    Math.random() * 5 - 2,
    Math.random() * 115 - 50
  ]

  const countryName = countries.name(props.country)
  const countryFlag = countries.flag(countryName)

  const alt = `${props.place ? `${props.place}, ` : ''}${countryName}`

  return (
    <div
      style={
        {
          '--zi': ~~(Math.random() * 1000),
          '--rp': rAxis.join(','),
          '--ra': `${Math.random() * 12 + 5}deg`,
          '--rah': `${Math.random() * 8 - 1}deg`
        } as React.CSSProperties
      }
      className="rotation-card"
    >
      <img
        src={`/assets/photos/${props.file}`}
        alt={alt}
        style={{ width: '100%' }}
      />
      <div className="image-side top">
        <span>{props.date}</span>
      </div>
      <div className="image-side bottom">
        <span>
          <a
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              alt
            )}`}
          >
            <span className="fweight1">{props.place}</span> {countryFlag}
          </a>
        </span>
      </div>
    </div>
  )
}

export default function PhotosPage() {
  return (
    <div className="layout">
      <Head>
        <title>Luc Leray - Photos</title>
      </Head>

      <Nav2 />

      <header>
        <h1>A collection of photos I have taken between 2016 and 2020</h1>
      </header>

      <p className="center">
        <BigGridSvg />
      </p>

      {photos.map(photo => (
        <Img key={photo.file} {...photo} />
      ))}

      <Footer2 />
    </div>
  )
}
