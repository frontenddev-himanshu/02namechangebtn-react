import Button from "./Components/Button"

function App() {

  return (
    <>
      <div id="container" className="bg-red-500 w-full h-screen flex justify-center items-center">
        <div id="wrap" className="bg-gray-800 w-full h-50 flex justify-center items-center gap-50">
          <Button btn={"Git Hub"} link={"https://github.com/frontenddev-himanshu?tab=repositories"} />
          <Button btn={"YouTube"} link={"https://www.youtube.com/"} />
          <Button btn={"Pixels"} link={"https://www.pexels.com/"} />
          <Button btn={"Css Comp"} link={"https://www.devui.in/"} />
        </div>
      </div>
    </>
  )
}

export default App
