import Head from 'next/head'
import styled from 'styled-components/macro'
import * as countries from 'country-emoji'

import { Nav2 } from '../components/nav2'
import { Footer2 } from '../components/footer2'

import photos from '../lib/photos'

const BigGridSvg = () => {
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

const RotCard = styled.div`
  position: relative;
  display: inline-block;
  z-index: ${() => ~~(Math.random() * 1000)};
  transition: transform 0.2s ease 0.1s;
  width: 90%;
  font-size: 20px;
  line-height: 1.3em;

  transform-origin: 55% 43%;
  transform: rotate3d(
      ${p => p.rAxis.join(',')},
      ${() => Math.random() * 12 + 5}deg
    )
    scale(1);

  &:hover {
    transform: rotate3d(
        ${p => p.rAxis.join(',')},
        ${() => Math.random() * 8 - 1}deg
      )
      scale(0.97);
    z-index: 1000;
  }

  @media only screen and (min-width: 700px) {
    font-size: 20px;
    line-height: 1.3em;

    &:hover {
      transform: rotate3d(
          ${p => p.rAxis.join(',')},
          ${() => Math.random() * 12 + 5}deg
        )
        scale(1.2);
    }
  }
`

const ImgSide = styled.div`
  position: absolute;
  text-align: ${p => (p.where === 'top' ? 'right' : 'left')};
  width: 100%;
  left: 0;
  top: 0;
  transform: rotate(-90deg);
  transform-origin: 100% 0;
  font-size: 0.6em;
  opacity: 0;

  .rotation-card:hover & {
    opacity: 0.75;
  }
`

const Label = styled.span`
  background: var(--bg);
  background-blend-mode: overlay;
  padding: 0.2em 0.4em;
  border-radius: 3px;
`

const Img: React.FC<{
  file: string
  date: string
  country: string
  place?: string
}> = props => {
  const rAxis = [
    Math.random() * 7,
    Math.random() * 5 - 2,
    Math.random() * 115 - 50
  ]

  const countryName = countries.name(props.country)
  const countryFlag = countries.flag(countryName)

  const alt = `${props.place ? `${props.place}, ` : ''}${countryName}`

  return (
    <RotCard className="rotation-card" rAxis={rAxis}>
      <img
        src={`/assets/photos/${props.file}`}
        alt={alt}
        style={{ width: '100%' }}
      />
      <ImgSide where="top">
        <Label>{props.date}</Label>
      </ImgSide>
      <ImgSide where="bottom">
        <Label>
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
        </Label>
      </ImgSide>
    </RotCard>
  )
}

export default () => (
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
