import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      <div className="w-[70%] mx-auto" >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

      </div>
    </>
  );
}

export default App;
