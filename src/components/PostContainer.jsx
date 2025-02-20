import React, { useEffect, useState } from 'react'
import CreatePost from './CreatePost'
import PostItem from './PostItem'
import usePostStore from '../stores/postStore'
import useUserStore from '../stores/userStore'
import PostFormEdit from './PostFormEdit'

function PostContainer() {
	const posts = usePostStore(state => state.posts)
	const getAllPosts = usePostStore(state => state.getAllPosts)
	const token = useUserStore(state => state.token)
	const currentPost = usePostStore(state => state.currentPost)
	const setCurrentPost = usePostStore(state => state.setCurrentPost)


	useEffect(() => {
		getAllPosts(token)
	}, [])

	return (
		<>
			<div className='w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg'>
				<CreatePost />
				{/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
				{posts.map(post => (
					<PostItem key={post.id} post={post} />
				))}
			</div>
			<dialog id='editform-modal' className='modal' onClose={()=>setCurrentPost(null)}>
				<div className="modal-box">
					<button type='button'
						className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
						onClick={()=>document.getElementById('editform-modal').close()}
					>x</button>
					{currentPost && <PostFormEdit />}
				</div>
			</dialog>
		</>
	)
}

export default PostContainer