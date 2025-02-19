import { useContext } from "react"
import UserContext from "../usercontext/Usercontext"

const Profile = () => {
  const { user } = useContext(UserContext)

  return (


    <>
      <div id="profile" className="mt-5">
        <h5 className="text-center font-semibold text-2xl">User Name is : {user} </h5>
      </div>
    </>
  )
}

export default Profile