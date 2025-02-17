import { Outlet } from "react-router"
import useUserStore from "./stores/userStore"


function App() {
  const user = useUserStore(state => state.user)
  const logout = useUserStore(state => state.logout)
  return (
    <>
    		<p>Header Menu</p>
        <p className="text-blue-700">Welcome, {user?.firstName}</p>
        <button className="btn btn-accent" onClick={logout}>Logout</button>
        <Outlet />
    </>
  )
}

export default App
