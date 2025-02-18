import React from 'react'
import { FacebookLogo, FriendsIcon, HomeIcon, MarketIcon, MenuIcon, MessengerIcon, NotificationIcon, PlayIcon, SearchIcon } from '../icons'
import useUserStore from '../stores/userStore'

function Header() {
	const logout = useUserStore(state => state.logout)
	return (
		<header className='flex justify-between px-3 h-14 w-full shadow-lg bg-white fixed top-0 z-10'>
			{/* Search bar */}
			<div className='flex-1  flex gap-2 items-center'>
				<FacebookLogo className='w-12' />
				<label className="input input-bordered flex items-center gap-2 w-64 h-10 rounded-full">
					<input type="text" className="grow" placeholder="Search" />
					<SearchIcon className='w-4 opacity-60' />
				</label>
			</div>
			{/* Center icon menu */}
			<div className='flex-1 flex gap-2 justify-center '>
				<div className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900">
					<HomeIcon className='w-1/2' />
				</div>
				<div className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900">
					<PlayIcon className='w-1/2' />
				</div>
				<div className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900">
					<MarketIcon className='w-1/2 opacity-80' fill="#050505" />
				</div>
				<div className="flex justify-center w-20 hover:border-b-2 hover:border-blue-900">
					<FriendsIcon className='w-2/3' />
				</div>
			</div>
			{/* Right menu + drop down */}
			<div className='flex-1 flex gap-3 justify-end '>
				<div className="avatar justify-center items-center">
					<div className="w-10 h-10 rounded-full !flex justify-center items-center
					 bg-gray-300 hover:bg-gray-400">
						<MenuIcon className='w-5' />
					</div>
				</div>
				<div className="avatar justify-center items-center">
					<div className="w-10 h-10 rounded-full !flex justify-center items-center
					 bg-gray-300 hover:bg-gray-400">
						<MessengerIcon className='w-5' />
					</div>
				</div>
				<div className="avatar justify-center items-center">
					<div className="w-10 h-10 rounded-full !flex justify-center items-center
					 bg-gray-300 hover:bg-gray-400">
						<NotificationIcon className='w-5' />
					</div>
				</div>
				<div className="dropdown dropdown-end">
					<div tabIndex={0} role="button" className="btn m-1">Click</div>
					<ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
						<li><a>Profile</a></li>
						<div className="divider my-0"></div>
						<li onClick={logout} ><a>Logout</a></li>
					</ul>
				</div>

			</div>


		</header>
	)
}

export default Header