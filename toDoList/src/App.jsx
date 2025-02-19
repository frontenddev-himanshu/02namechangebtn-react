import { useState } from "react"


function App() {

  const [toDoMsg, setToDoMsg] = useState('')
  const [mainToDo, setMainToDo] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(toDoMsg);


    setMainToDo([...mainToDo, { toDoMsg }])

    setToDoMsg("")

  }

  let allToDos = <h2>No List</h2>

  if (mainToDo.length > 0) {
    allToDos = mainToDo.map((t, i) => {

      return (
        <div className="list" key={i}>
          <h3>{t.toDoMsg}</h3>

          <button className="delBtn" onClick={() => {
            deleteHandler(i)
          }}>
            Remove
          </button>
        </div>
      )
    })
  }

  const deleteHandler = (i) => {
    let copymainToDo = [...mainToDo]
    copymainToDo.splice(i, 1)
    setMainToDo(copymainToDo)
  }


  return (
    <>
      <div id="wrapper">
        <h1 className="heading">My toDoList</h1>

        <form className="form" action="" onSubmit={submitHandler}>
          <input className="toDoInput" value={toDoMsg} type="text" required
            onChange={(e) => {
              setToDoMsg(e.target.value)
            }}
          />

          <button className="addBtn">Add ToDo</button>
        </form>

        <ul>
          {allToDos}
        </ul>
      </div>
    </>
  )
}

export default App
