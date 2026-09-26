import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import CreateRecipe from "./pages/CreateRecipe"

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-recipe" element={<CreateRecipe/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
  )
}

export default App
