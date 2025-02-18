import React from 'react'
import useUserStore from '../stores/userStore'

function Profile() {
	const user = useUserStore(state => state.user)
	return (
		<div>
			<div className="text-4xl">{user.firstName} {user.lastName}</div>
			<img src={user.profileImage} alt="profile" />
		</div>
	)
}

export default Profile