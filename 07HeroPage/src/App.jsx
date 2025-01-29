import Navbar from "./Components/Navbar"
import Content from "./Components/Content"
import Card from "./Components/cards"

function App() {

  return (
    <>
      <header id="header" className="h-screen overflow-hidden bg-[url(https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80)] bg-cover bg-center">
        {/* navbar */}
        <div id="nav-container" className="w-250 py-5 px-10">
          <Navbar />
        </div>

        {/* content */}
        <Content />

        {/* cards */}
        <div id="cards" className="500 w-full gap-5  mt-25 flex px-5">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </header>
    </>
  )
}

export default App
