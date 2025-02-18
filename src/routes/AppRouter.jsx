import {createBrowserRouter, Navigate, Outlet, RouterProvider} from 'react-router'
import App from '../App'
import Login from '../pages/Login'
import Friends from '../pages/Friends'
import useUserStore from '../stores/userStore'
import Profile from '../pages/Profile'

const guestRouter = createBrowserRouter([
	{ path : '/', element : <Login /> },
	{ path : '*', element : <Navigate to='/' />}
])

const userRouter = createBrowserRouter([
	{ path : '/', element : <App />,
		children : [
			// { path : '', element: <p>Sidebar + Posts</p>},
			{ index: true, element: <p>Sidebar + Posts</p>},
			{ path : 'friends', element : <Friends />},
			{ path : 'profile', element : <Profile />},
			{ path : '*', element : <Navigate to='/' />}
		]
	},
])

export default function AppRouter() {
	const user = useUserStore(state => state.user)
	const finalRouter = user ? userRouter : guestRouter
	return (
		<RouterProvider key={user?.id} router={finalRouter}/>
	)
}
