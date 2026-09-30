import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import CreateRecipe from "./pages/CreateRecipe"
import RecipeDetail from "./pages/RecipeDetail"

function App() {

  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-recipe" element={<CreateRecipe/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/recipe/recipeDetail" element={<RecipeDetail/>} />
      </Routes>
    
  )
}

export default App
