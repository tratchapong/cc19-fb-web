import {createBrowserRouter, Navigate, Outlet, RouterProvider} from 'react-router'
import App from '../App'
import Login from '../pages/Login'
import Friends from '../pages/Friends'

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
			{ path : '*', element : <Navigate to='/' />}
		]
	},
])

export default function AppRouter() {
	const user = null
	const finalRouter = user ? userRouter : guestRouter
	return (
		<RouterProvider router={finalRouter}/>
	)
}
