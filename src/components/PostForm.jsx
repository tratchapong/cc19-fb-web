import React, { useState } from 'react'
import Avatar from '../components/Avatar'
import useUserStore from '../stores/userStore'
import { PhotoIcon2 } from '../icons'
import { toast } from 'react-toastify'
import AddPicture from './AddPicture'
import usePostStore from '../stores/postStore'

function PostForm(props) {
	const {closePostForm} = props
	const user = useUserStore(state=>state.user)
	const token = useUserStore(state=>state.token)
	const createPost = usePostStore(state => state.createPost)
	const [message, setMessage] = useState('')
	const [addPic, setAddPic] = useState(false)
	const [file, setFile] = useState(null)

	const hdlCreatePost = async () => {
		try {
			const body = new FormData()
			body.append('message', message)
			if(file) {
				body.append('image', file)
			}
			// ยิง api 
			await createPost(body, token, user)
			toast('Create Post done')
			closePostForm()
		}catch(err) {
			const errMsg = err.response?.data?.error || err.message
			console.log(err)
			toast.error(errMsg)
		}
	}

	return (
		<div className='flex flex-col gap-2'>
			<h3 className="text-xl text-center">Create post</h3>
			<div className="divider mt-1 mb-0"></div>
			<div className="flex gap-2">
				<Avatar className='w-11 h-11 rounded-full'
					imgSrc={user.profileImage}
				/>
				<div className="flex flex-col">
					<div className="text-sm">{user.firstName} {user.lastName}</div>
					<select className='select bg-slate-200 select-xs w-full max-w-xs'>
						<option disabled>who can see?</option>
						<option>public</option>
						<option>friends</option>
					</select>
				</div>
			</div>
			<textarea className='textarea textarea-ghost'
				placeholder={`what do you think? ${user.firstName}`}
				value={message}
				onChange={e=>setMessage(e.target.value)}
				rows={message.split('\n').length}
			></textarea>
			{ addPic && 
				<AddPicture file={file} setFile={setFile}  />
			}
			<div className="flex border rounded-lg p-2 justify-between items-center">
				<p>add with your post</p>
				<div className="flex justify-center items-center w-10 h-10 rounded-full bg-slate-100 
					hover:bg-slate-200 active:scale-110"
					onClick={()=>setAddPic(prv=>!prv)}
				>
					<PhotoIcon2 className='w-7'/>
				</div>
			</div>
			<button className='btn btn-sm btn-primary'
				onClick={hdlCreatePost}	
				disabled={message.trim().length === 0 && !file}
			>Create Post</button>
		</div>
	)
}

export default PostForm