import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { Projects } from "./components/Projects/Projects"

function App() {

  return (
    <>
      <main className="pt-35 md:pt-24">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
