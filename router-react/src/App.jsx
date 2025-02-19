import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/about"
import Blog from "./components/Blog"
import Contact from "./components/Contact"


const App = () => {
  return (
    <>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Blog" element={<Blog />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
    </>
  )
}

export default App