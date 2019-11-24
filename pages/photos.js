import styled, { css } from 'styled-components/macro'
import { Layout, H1, A, Spacer, theme, Toggle } from '../components/system'
import photos from '../lib/photos'
import * as countries from 'country-emoji'
import color from 'color'
import { useState } from 'react'

const StyledSvg = styled.svg`
  & rect {
    fill: ${p => theme.light[p.color || 'blue']};
  }

  body.dark & rect {
    fill: ${p => theme.dark[p.color || 'blue']};
  }
`

const SmallGridSvg = props => {
  const rAxis = [
    Math.random() * 7,
    Math.random() * 5 - 2,
    Math.random() * 2 - 1
  ]

  const x = [40, 80, 120]
  const y = [40, 80, 120, 160, 200, 240]

  return (
    <StyledSvg viewBox="0 0 180 300" {...props}>
      {x.map(x =>
        y.map(y => (
          <rect
            x={x}
            y={y}
            width="20"
            height="20"
            style={{
              transform: `rotate3d(
    ${rAxis.join(',')},
    ${Math.random() * 12 + 5}deg
  )
  scale(1)`
            }}
          />
        ))
      )}
    </StyledSvg>
  )
}

const BigGridSvg = props => {
  const rAxis = [
    Math.random() * 7,
    Math.random() * 5 - 2,
    Math.random() * 2 - 1
  ]

  const y = [40, 100, 160, 220]

  return (
    <StyledSvg viewBox="0 0 180 300" {...props}>
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
scale(1)`
          }}
        />
      ))}
    </StyledSvg>
  )
}

const RotCard = styled.div`
  position: relative;
  display: inline-block;
  z-index: ${() => ~~(Math.random() * 1000)};
  transition: transform 0.2s ease 0.1s

  ${p =>
    p.small
      ? css`
          width: 130px;

          @media only screen and (min-width: 700px) {
            width: 350px;
          }
        `
      : css`
          width: 100%;
        `}


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
      scale(${p => (p.small ? '1.5' : '0.9')});
  }

  @media only screen and (min-width: 700px) {
    &:hover {
      transform: rotate3d(
          ${p => p.rAxis.join(',')},
          ${() => Math.random() * 12 + 5}deg
        )
        scale(${p => (p.small ? '1.5' : '1.2')});
      z-index: 1000;
    }
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
  const [, setCount] = useState(0)
  const rerender = () => setCount(count => count + 1)

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
      onClick={rerender}
    >
      <img
        src={`/assets/photos/${props.file}`}
        alt={alt}
        style={{ width: '100%' }}
      />
      {!props.small && (
        <>
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
        </>
      )}
    </RotCard>
  )
}

export default () => {
  const [small, setSmall] = useState(true)

  return (
    <Layout center wide={small} meta={{ title: 'Photos' }}>
      <H1>photos</H1>

      <Spacer v={1} />

      <div style={{ textAlign: 'center' }}>
        <span
          onClick={() => setSmall(small => !small)}
          style={{ cursor: 'pointer', opacity: 1 }}
        >
          {!small ? <SmallGridSvg width="25" /> : <BigGridSvg width="25" />}
        </span>
      </div>

      <Spacer v={8} />

      <div style={{ textAlign: 'center' }}>
        {photos.map(photo => (
          <Img small={small} key={photo.file} {...photo} />
        ))}
      </div>

      <Spacer v={5} />

      <p>
        <A href="/">← back to homepage</A>
      </p>
    </Layout>
  )
}
