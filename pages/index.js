import Head from 'next/head'

import Layout from '../components/layout'
import {
  Container,
  ContentContainer,
  BottomContainer
} from '../components/container'
import Button from '../components/button'
import A from '../components/a'
import { H2, Card } from '../components/paragraphs'
import { LightText, InlineCode } from '../components/inline'

const mywork = [
  {
    id: 'next-size',
    date: 'November 2018',
    title: [
      <InlineCode>next-size</InlineCode>,
      ' - next.js plugin to print browser assets sizes'
    ],
    url: 'https://github.com/lucleray/next-size'
  },
  {
    id: 'emoji-machine',
    date: 'October 2018',
    title: '🎰Emoji Machine, emoji suggestions for your thoughts',
    url: 'http://emoji-machine.now.sh/'
  },
  {
    id: 'babel-macro-styled-components',
    date: 'October 2018',
    title: [
      <InlineCode>styled-components/macro</InlineCode>,
      ' - a babel macro for styled-components'
    ],
    url: 'https://www.styled-components.com/docs/tooling#babel-macro'
  },
  {
    id: 'sql',
    date: 'August 2018',
    title: [
      <InlineCode>sql</InlineCode>,
      ' - javascript tag to format SQL template literals'
    ],
    url: 'https://github.com/sequencework/sql'
  },
  {
    id: 'terminal-markdown',
    date: 'June 2018',
    title: [
      <InlineCode>terminal-markdown</InlineCode>,
      ' - markdown in your terminal'
    ],
    url: 'https://github.com/lucleray/terminal-markdown'
  },
  {
    id: 'next-purgecss',
    date: 'April 2018',
    title: [
      <InlineCode>next-purgecss</InlineCode>,
      ' - next.js + purgecss for faster websites'
    ],
    url: 'https://github.com/lucleray/next-purgecss'
  },
  {
    id: 'next-progressbar',
    date: 'April 2018',
    title: [
      <InlineCode>next-progressbar</InlineCode>,
      ' - add a progress bar to next.js'
    ],
    url: 'https://github.com/lucleray/next-progressbar'
  },
  {
    id: 'hyper-opacity',
    date: 'March 2018',
    title: [
      <InlineCode>hyper-opacity</InlineCode>,
      ' - set the opacity of your hyper terminal'
    ],
    url: 'https://hyper.is/plugins/hyper-opacity'
  },
  {
    id: 'personal-website',
    date: 'December 2017',
    title: [<InlineCode>lucleray.me</InlineCode>, ' - my personal website'],
    url: 'https://github.com/lucleray/lucleray.me'
  },
  {
    id: 'front-end-job-interview',
    date: 'Sept 2017',
    title: 'Take-away project for a "front-end" job interview',
    link: 'work/front-end-interview'
  },
  {
    id: 'ocr-neural-network',
    date: 'May 2013',
    title: [
      <InlineCode>perceptron</InlineCode>,
      ' - an introduction to perceptrons with a demo'
    ],
    url: 'https://github.com/lucleray/perceptron'
  },
  {
    id: 'ocr-neural-network',
    date: 'Jan to April 2013',
    title: 'OCR with Artificial Neural Networks (in french)',
    url: 'https://drive.google.com/file/d/0B9XryYiAipZ_a0w0b25BYkE4cTg/view'
  },
  {
    id: 'electric-guitar',
    date: '2010',
    title: 'Understanding how an electric guitar work (in french)',
    url: 'http://sculsnay.free.fr/tpe/index.html'
  }
]

const links = [
  {
    id: 'internals-of-postgres',
    title: 'The Internals of PostgreSQL',
    url: 'http://www.interdb.jp/pg/',
    about: ''
  },
  {
    id: 'node-js-http',
    title: 'Node.js Fundamentals: Web Server Without Dependencies',
    url: 'https://blog.bloomca.me/2018/12/22/writing-a-web-server-node.html',
    about: <span>All the knowledge about nodejs{"'"} <InlineCode>http</InlineCode> condensed in one article</span>
  },
  {
    id: 'aws-incremental-scaling',
    title: 'Scaling Up to Your First 10 Million Users',
    url: 'https://www.youtube.com/watch?v=vg5onp8TU6Q',
    about: 'Incremental steps to scale a system on the cloud'
  },
  {
    id: 'marketing-engineering',
    title:
      'Why Marketing is Too important to be left to the Marketing Department',
    url: 'https://www.youtube.com/watch?v=XDHnGNc-3LM',
    about: ''
  },
  {
    id: 'react-fibers-algebraic-effects',
    title: 'Algebraic Effects, Fibers, Coroutines... - Brandon Dail',
    url: 'https://www.youtube.com/watch?v=cWY1QzyFhfk',
    about:
      'Clear explanation of how algebraic effects and fibers work and how they are used by React'
  },
  {
    id: 'open-source-enterprise',
    title: 'Building software : The lessons from open source',
    url:
      'https://www.slideshare.net/icecrime/building-software-the-lessons-from-open-source',
    about: 'Applying open-source learnings to the enterprise'
  },
  {
    id: 'unit-of-value',
    title: 'Designing very large (JavaScript) applications',
    url:
      'https://medium.com/@cramforce/designing-very-large-javascript-applications-6e013a3291a3',
    about: ''
  },
  {
    id: 'esmodules',
    title: 'ES modules: A cartoon deep-dive',
    url: 'https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/',
    about: 'ES Modules are coming soon to all major browsers.'
  },
  {
    id: 'the-best-ux-is-no-ui',
    title: 'The Best UX is No User Interface at All',
    url: 'https://css-tricks.com/best-ux-no-user-interface/',
    about: 'The future of UX might be AI.'
  },
  {
    id: 'human-centered-machine-learning',
    title: 'Human-Centered Machine Learning',
    url:
      'https://medium.com/google-design/human-centered-machine-learning-a770d10562cd',
    about: 'AI to help build great products and not the other way around.'
  },
  {
    id: 'nine-states-of-design',
    title: 'The Nine Stages of Design',
    url: 'https://medium.com/swlh/the-nine-states-of-design-5bfe9b3d6d85',
    about: 'The ideal state of an interface is just the tip of the iceberg.'
  },
  {
    id: 'critical-thinking-software-development',
    title: 'Critical thinking in software development',
    url:
      'https://hackernoon.com/critical-thinking-in-software-development-the-word-should-and-why-you-shouldn-t-listen-to-563090144331',
    about: 'Making better decisions.'
  },
  {
    id: 'react-performance',
    title: 'React performance',
    url: 'http://blog.vjeux.com/2013/javascript/react-performance.html',
    about: 'Some explanation on what makes React faster (2013).'
  },
  {
    id: 'what-is-a-blockchain',
    title: 'Everything You Wanted To Know About Blockchains',
    url: 'https://unwttng.com/what-is-a-blockchain',
    about: 'Simple and visual explanation of the blockchain.'
  },
  {
    id: 'submithub',
    title: 'Submithub on IndieHackers',
    url: 'https://www.indiehackers.com/businesses/submithub',
    about:
      'I always wanted to build something related to music. I think this idea is brilliant.'
  },
  {
    id: 'visited-hack',
    title: 'I know what you :visited by Pierre Reimertz',
    url: 'https://www.youtube.com/watch?v=LHu8rwLK5sA',
    about: 'Cool hack.'
  },
  {
    id: 'spotify-brand',
    title: 'My work with Spotify by Rasmus Andersson',
    url: 'https://rsms.me/about/spotify/',
    about:
      'Rasmus Andersson explains how he created the first version of the Spotify brand.'
  }
]

export default () => (
  <Layout>
    <Head>
      <title>Luc Leray</title>
    </Head>

    <ContentContainer>
      <H2>☻ hi</H2>

      <Card>
        I'm Luc. I'm a french software engineer working in Kuala Lumpur,
        Malaysia.
      </Card>

      <Card>
        I am cofounder and CTO at{' '}
        <A newtab href="https://sequence.work">
          Sequence.work
        </A>
        , a platform helping data scientists outsource manual and repetitive
        tasks to the crowd.
      </Card>

      <Card>
        I started learning about websites{' '}
        <A newtab href="http://lu.leray.free.fr/acceuil.html">
          13 years ago
        </A>{' '}
        with XHMTL,{' '}
        <A newtab href="https://notepad-plus-plus.org/">
          Notepad++
        </A>{' '}
        and{' '}
        <A newtab href="http://www.easyphp.org/">
          EasyPHP
        </A>
        .
      </Card>

      <Card>
        Previously, I worked on Front-end, Back-end and Data Analysis at{' '}
        <A newtab href="https://www.supahands.com/">
          Supahands
        </A>
        ,{' '}
        <A newtab href="https://worldline.com/">
          Worldline
        </A>{' '}
        and{' '}
        <A newtab href="https://www.contentsquare.com/">
          Content-Square
        </A>
        . You can read more in my <A href="static/resume-luc-leray.pdf">CV</A>{' '}
        ✍.
      </Card>

      <Card>
        I am on <A href="https://twitter.com/lucleray">Twitter</A>,{' '}
        <A href="https://github.com/lucleray">Github</A> and{' '}
        <A href="https://www.linkedin.com/in/lucleray/">LinkedIn</A>.
      </Card>
    </ContentContainer>

    <ContentContainer>
      <H2>projects</H2>
      {mywork.map(work => (
        <Card key={work.id}>
          {work.date} ∙{' '}
          <A newtab={!!work.url} href={work.url} link={work.link}>
            {work.title}
          </A>
        </Card>
      ))}
      {/* <Container align='center'>
        <Button>Read more</Button>
      </Container> */}
    </ContentContainer>

    <ContentContainer>
      <H2>links I like</H2>
      {links.map(link => (
        <Card key={link.id}>
          <A newtab href={link.url}>
            {link.title}
          </A>{' '}
          {link.about}
        </Card>
      ))}
      {/* <Container align='center'>
        <Button>Read more</Button>
      </Container> */}
    </ContentContainer>
  </Layout>
)
