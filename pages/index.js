import Layout from '../components/layout'
import { H1, H2, Card } from '../components/paragraphs'
import A from '../components/a'
import ToggleDarkMode from '../components/toggle-dark-mode'
import articles from '../lib/articles'
import projects from '../lib/projects'
import links from '../lib/links'

const Presentation = () => (
  <section aria-labelledby="presentation-title">
    <H1 id="presentation-title">hi, i'm luc</H1>
    <Card>I'm a french software engineer working in Paris, France.</Card>
    <Card>
      I am cofounder and CTO at{' '}
      <A href="https://sequence.work">Sequence.work</A>, a platform kjhkjhkhj gdfgdf helping data
      scientists outsource manual and repetitive tasks to the crowd.
    </Card>
    <Card>
      I started learning about websites{' '}
      <A href="http://lu.leray.free.fr/acceuil.html">15 years ago</A> with
      XHMTL, <A href="https://notepad-plus-plus.org/">Notepad++</A> and{' '}
      <A href="http://www.easyphp.org/">EasyPHP</A>.
    </Card>
    <Card>
      Previously, I worked on Front-end, Back-end and Data Analysis at{' '}
      <A href="https://www.supahands.com/">Supahands</A>,{' '}
      <A href="https://worldline.com/">Worldline</A> and{' '}
      <A href="https://www.contentsquare.com/">Content-Square</A>. You can read
      more in my <A href="static/resume-luc-leray.pdf">CV</A> ✍.
    </Card>
    <Card>
      I am on <A href="https://twitter.com/lucleray">Twitter</A>,{' '}
      <A href="https://github.com/lucleray">Github</A> and{' '}
      <A href="https://www.linkedin.com/in/lucleray/">LinkedIn</A>.
    </Card>
    <div style={{ textAlign: 'center', marginTop: '3em' }}>
      <label htmlFor="toggle-dark-mode" style={{ cursor: 'pointer' }}>
        Do you prefer to browse this website in Dark Mode?&nbsp;&nbsp;
      </label>
      <ToggleDarkMode id="toggle-dark-mode" />
    </div>
  </section>
)

const Articles = () => (
  <section aria-labelledby="articles-title">
    <H2 id="articles-title">articles</H2>
    <div>
      {articles.map(article => (
        <Card key={article.id}>
          <span>{article.date}</span> –{' '}
          <A href={article.url}>{article.title}</A> {article.about}
        </Card>
      ))}
    </div>
  </section>
)

const Projects = () => (
  <section aria-labelledby="projects-title">
    <H2 id="projects-title">projects ghfg</H2>
    <div>
      {projects.map(project => (
        <Card key={project.id}>
          <span>{project.date}</span> –{' '}
          <A href={project.url}>
            {project.title} {project.about && ` – ${project.about}`}
          </A>
        </Card>
      ))}
    </div>
  </section>
)

const Links = () => (
  <section aria-labelledby="links-title">
    <H2 id="links-title">links</H2>
    <div>
      {links.map(link => (
        <Card key={link.id}>
          <A href={link.url}>{link.title}</A> {link.about}
        </Card>
      ))}
    </div>
  </section>
)

export default () => (
  <Layout meta={{ title: 'Luc L' }}>
    <main>
      <Presentation />
      <Articles />
      <Projects />
      <Links />
    </main>
  </Layout>
)
