import { useEffect, useState } from "react"

function App() {

  const [range, setRange] = useState(0)
  const [numCheck, setNumCheck] = useState(false)
  const [charCheck, setCharCheck] = useState(false)
  const [pasKey, setPass] = useState('')
  const [isOpen, setIsOpen] = useState(false)



  let open = () => {

    setIsOpen(prevState => !prevState);
    window.navigator.clipboard.writeText(pasKey)
  }

  const password = () => {

    let pass = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numCheck) {
      str += "1234567890"
    }

    if (charCheck) {
      str += "!@#$%&*"
    }

    for (let i = 1; i <= range; i++) {

      let ranPass = Math.round(Math.random() * str.length + 1)

      pass += str.charAt(ranPass)

    }

    setPass(pass)

  }

  useEffect(() => {
    password()
  }, [range, numCheck, charCheck])

  return (
    <>
      <div className="wrapper">
        <h1 className="heading">useEffect</h1>

        <div className="strWrap">
          <input className="str" type="text" readOnly value={pasKey} />
          <button className="copyBtn"
            onClick={open}
          >Copy</button>
        </div>

        <div className="rangeWrap">
          <input className="range" type="range" min={0} max={30} value={range}
            onChange={(e) => { setRange(e.target.value) }} />
          <p className="length">Length : {range}</p>
        </div>

        <div className="addNumWrap">
          <input className="check" type="checkbox"
            onChange={() => {
              setNumCheck((prev) => !prev)
            }} />
          <p className="p">Add Numbers</p>
        </div>

        <div className="addCharWrap">
          <input className="check" type="checkbox"
            onChange={() => {
              setCharCheck((prev) => !prev)
            }} />
          <p className="p">Add Characters</p>
        </div>

        <div className={`popup-wrapper ${isOpen ? 'open' : ''}`}>
          <i className="fa-regular fa-copy"></i>
          <h5 className="popup-head">Text Copied</h5>
        </div>
      </div>
    </>
  )
}

export default App
