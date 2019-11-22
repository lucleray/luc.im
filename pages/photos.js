import styled from 'styled-components/macro'
import { Layout, H1, A, Spacer, theme, Toggle } from '../components/system'
import photos from '../lib/photos'
import * as countries from 'country-emoji'
import color from 'color'
import { useState } from 'react'

const RotCard = styled.div`
  position: relative;
  float: left;
  z-index: ${() => ~~(Math.random() * 1000)};
  width: ${p => (p.small ? '350px' : '100%')};
  transition: transform 0.2s ease 0.1s;

  transform-origin: 55% 43%;
  transform: rotate3d(
      ${p => p.rAxis.join(',')},
      ${() => Math.random() * 12 + 5}deg
    )
    scale(1);

  &:hover {
    transform: rotate3d(
        ${p => p.rAxis.join(',')},
        ${() => Math.random() * 12 + 5}deg
      )
      scale(${p => (p.small ? '1.5' : '1.2')});
    z-index: 1000;
  }
`

const Label = styled.span`
  background: ${color(theme.light.bg)
    .fade(0.5)
    .string()};
  background-blend-mode: overlay;
  padding: 3px 7px;
  border-radius: 3px;

  body.dark & {
    background: ${color(theme.dark.bg)
      .fade(0.1)
      .string()};
  }
`

const ImgSide = styled.div`
  position: absolute;
  text-align: ${p => (p.where === 'top' ? 'right' : 'left')};
  padding-top: 5px;
  width: 100%;
  left: 0;
  top: 0;
  transform: rotate(-90deg);
  transform-origin: 100% 0;
  font-size: 14px;
  opacity: 0;

  .rotation-card:hover & {
    opacity: 0.75;
  }
`

const Img = props => {
  const rAxis = [
    Math.random() * 7,
    Math.random() * 5 - 2,
    Math.random() * 115 - 50
  ]

  const countryName = countries.name(props.country)
  const countryFlag = countries.flag(countryName)

  const alt = `${props.place ? `${props.place}, ` : ''}${countryName}`

  return (
    <RotCard
      className="rotation-card"
      rAxis={rAxis}
      small={props.small}
      onClick={() => props.setSmall(small => !small)}
    >
      <img
        src={`/assets/photos/${props.file}`}
        alt={alt}
        style={{ width: '100%' }}
      />
      <ImgSide where="top">
        <Spacer h={1} />
        <Label>{props.date}</Label>
        <Spacer h={1} />
      </ImgSide>
      <ImgSide where="bottom">
        <Spacer h={1} />
        <Label>
          <A
            symbol={false}
            color="fg"
            underline={false}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              alt
            )}`}
          >
            <b>{props.place}</b> {countryFlag}
          </A>
        </Label>
      </ImgSide>
    </RotCard>
  )
}

export default () => {
  const [small, setSmall] = useState(false)

  return (
    <Layout center wide={small} meta={{ title: 'Photos' }}>
      <H1>photos</H1>

      <Spacer v={3} />

      <Spacer v={8} />

      {photos.map(photo => (
        <Img small={small} setSmall={setSmall} key={photo.file} {...photo} />
      ))}

      <Spacer v={5} />

      <p>
        <A href="/">← back to homepage</A>
      </p>
    </Layout>
  )
}
