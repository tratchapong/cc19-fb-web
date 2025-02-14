import {createBrowserRouter, Navigate, Outlet, RouterProvider} from 'react-router'

const guestRouter = createBrowserRouter([
	{ path : '/', element : <p>Login</p> },
	{ path : '*', element : <Navigate to='/' />}
])

const userRouter = createBrowserRouter([
	{ path : '/', element : <>
		<p>Header</p>
		<Outlet />
	</>,
		children : [
			{ path : '', element: <p>Sidebar + Posts</p>},
			{ path : 'friends', element : <p>Friends Page</p>},
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
