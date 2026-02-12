import { About } from "./components/About/About"
import { Header } from "./components/Header/Header"
import { Hero } from "./components/Hero/Hero"
import { Projects } from "./components/Projects/Projects"

function App() {

  return (
    <>
      <main>
        <Header />
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  )
}

export default App
