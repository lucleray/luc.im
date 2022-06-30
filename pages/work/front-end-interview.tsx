import Head from 'next/head'

import { Footer2 } from '../../components/footer2'
import { Nav2 } from '../../components/nav2'

export default function FrontEndInterviewPage() {
  return (
    <div className="layout" style={{ maxWidth: '800px' }}>
      <Head>
        <title>Luc Leray - Front-end job interview</title>
      </Head>

      <Nav2 />

      <main>
        <h3 className="center">Sept 2017</h3>

        <h1 className="center">
          Take-away project for a "front-end" job interview
        </h1>

        <p>
          During my work at Supahands, I wrote a simple take-home project
          intended to assess candidates for the <em>Front-end Developer</em> job
          position.
        </p>

        <p>I wanted to assess 3 main things :</p>

        <p>
          <ol>
            <li>
              <b>Skills:</b> is the candidate able to write clear code to solve
              a simple problem ?
            </li>
            <li>
              <b>Motivation:</b> is the candidate ready to spend around 1 hour
              of work for us ?
            </li>
            <li>
              <b>Autonomy:</b> does the candidate ask relevant questions ?
            </li>
          </ol>
        </p>

        <p>I sent them an email :</p>

        <blockquote>
          <p>Hi,</p>
          <p>I would like to challenge you with a small take-home project.</p>
          <p>
            Build a simple web page displaying the data of this json file :{' '}
            <a
              target="_blank"
              rel="noreferrer"
              href="/assets/articles/restaurants.json"
            >
              restaurants.json
            </a>
          </p>
          <p>Display the content of the file in a table</p>
          <ol>
            <li>Add buttons to filter the list by type of cuisine</li>
            <li>Display the number of the restaurants displayed</li>
            <li>You can start with this jsfiddle.</li>
          </ol>
          <p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://jsfiddle.net/Lvu938b4/"
            >
              You can start with this jsfiddle.
            </a>
          </p>
          <p>Don't spend too much time, just do as much as you can :)</p>
          <p>If you have any questions, let me know.</p>
          <p>Good luck !</p>
        </blockquote>

        <p>
          I made a jsfiddle because I wanted candidates to spend as little time
          as possible on the task. At the end of the day, the aim is only to
          know if the candidate has a <b>basic level of javascript</b>.
        </p>

        <p>
          The jsfiddle already contains the structure of the html, because I
          believe anyone who can use jquery properly knows html.
        </p>

        <br />
        <br />
      </main>

      <Footer2 />
    </div>
  )
}
