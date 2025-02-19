import { useContext, useState } from "react";
import UserContext from "../usercontext/Usercontext";




const Login = () => {

  const [email, setEmail] = useState("")
  const { user, setUser } = useContext(UserContext)

  const clickBtn = () => {

    setUser(email)
  }

  return (
    <>
      <div id="container" className="w-full mt-20 flex items-center justify-center">
        <input className="h-10 w-100 bg-red-200 outline-none pl-5" type="text" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />

        <button className="w-50 h-10 bg-red-200 ml-5 cursor-pointer active:scale-98 duration-200" onClick={clickBtn}>
          Submit
        </button>
      </div>

    </>
  )
}

export default Login