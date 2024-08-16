import Toggle from './components/Toggle'
import About from './container/About/About'
import Contact from './container/Contact/Contact'
import Skill from './container/Skill/Skill'
import Hero from './container/Hero/Hero'
import Projects from './container/Projects/Projects'
import Experience from './container/Experience/Experience'

function App() {

  return (
    <>
      <Toggle />
      <Hero />
      <About />
      <Projects />
      <Experience/>
      <Skill />
      <Contact />
    </>
  );
}

export default App
