import React from 'react'
import MenuItem from './MenuItem'
import { BookmarkIcon, ClockIcon, FriendsIcon_2, GroupIcon, HomeIcon, MoreIcon, PlayIcon } from '../icons'
import useUserStore from '../stores/userStore'
import Avatar from '../components/Avatar'
import { Link } from 'react-router'

function SidebarMenu() {
	const user = useUserStore(state => state.user)
	return (
		<div 
		className='fixed top-14 h-full w-[350px] pt-2 overflow-auto flex flex-col gap-2 min-w-[220px] 
			max-xl:w-[220px] max-lg:hidden'>
			<Link to='/profile'>
				<MenuItem icon={Avatar} text={`${user.firstName} ${user.lastName}`}
				className="w-11 h-11 rounded-full bg-slate-200"
				imgSrc={user.profileImage}
			/>
			</Link>
			<Link to='/friends'>
				<MenuItem icon={FriendsIcon_2} text="Friends" className='w-11'/>
			</Link>

			<MenuItem icon={ClockIcon} text="Memories" className='w-8 me-2'/>
			<MenuItem icon={BookmarkIcon} text="Save" className='w-10'/>
			<MenuItem icon={GroupIcon} text="Group" className='w-10'/>
			<MenuItem icon={PlayIcon} text="Video" className='w-10'/>
			<MenuItem icon={MoreIcon} text="More.." 
				className='w-10 p-2 border border-gray-500 rounded-full'
			/>
		</div>
	)
}

export default SidebarMenu