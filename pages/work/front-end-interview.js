import Head from 'next/head'
import Layout from '../../components/layout'
import { Container, BottomContainer } from '../../components/container'
import { Card, H2, H3 } from '../../components/paragraphs'
import A from '../../components/a'

export default () => (
  <Layout>
    <Head>
      <title>Front-end job interview - Luc Leray</title>
    </Head>

    <Container>
      <H2>Take-away project for a "front-end" job interview</H2>
      <H3>Sept 2017</H3>

      <p>
        During my work at Supahands, I wrote a simple take-home project intended
        to assess candidates for the <i>Front-end Developer</i> job position.
      </p>

      <p>I wanted to assess 3 main things :</p>

      <Card>
        <ol>
          <li>
            Skills : is the candidate able to write clear code to solve a simple
            problem ?
          </li>
          <li>
            Motivation : is the candidate ready to spend around 1 hour of work
            for us ?
          </li>
          <li>Autonomy : does the candidate ask relevant questions ?</li>
        </ol>
      </Card>

      <p>I sent them an email :</p>

      <Card>
        <p>Hi,</p>

        <p>I would like to challenge you with a small take-home project.</p>

        <p>
          Build a simple web page displaying the data of this json file :{' '}
          <A newtab href="/static/articles/restaurants.json">
            restaurants.json
          </A>
        </p>

        <p>Display the content of the file in a table</p>

        <ol>
          <li>Add buttons to filter the list by type of cuisine</li>
          <li>Display the number of the restaurants displayed</li>
          <li>You can start with this jsfiddle.</li>
        </ol>

        <p>
          <A newtab href="https://jsfiddle.net/Lvu938b4/">
            You can start with this jsfiddle.
          </A>
        </p>

        <p>Don't spend too much time, just do as much as you can :)</p>

        <p>If you have any questions, let me know.</p>

        <p>Good luck !</p>
      </Card>

      <p>
        I made a jsfiddle because I wanted candidates to spend as little time as
        possible on the task. At the end of the day, the aim is only to know if
        the candidate has a <b>basic level of javascript</b>.
      </p>

      <p>
        The jsfiddle already contains the structure of the html, because I
        believe anyone who can use jquery properly knows html.
      </p>

      <p>
        <script async src="//jsfiddle.net/Lvu938b4/embed/html,js,result/" />
      </p>
    </Container>

    <BottomContainer>
      <p>
        <A link="/">← back to homepage</A>
      </p>
    </BottomContainer>
  </Layout>
)
