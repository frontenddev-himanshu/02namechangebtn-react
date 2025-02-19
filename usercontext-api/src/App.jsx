import Login from "./components/Login"
import Profile from "./components/profile"
import UserContextProvider from "./usercontext/UserContextProvider"

const App = () => {
  return (

    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App