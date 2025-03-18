import { create } from 'zustand'
import { createComment, createLike, createPost, deletePost, getAllPosts, updatePost } from '../api/postApi'

const usePostStore = create((set, get) => ({
	posts: [],
	currentPost: null,
	loading: false,
	createPost: async (body, token, user) => {
		const rs = await createPost(body, token)
		console.log(rs.data)
		set(state => ({
			posts: [{ ...rs.data.result, user, likes: [], comments: [] }, ...state.posts]
		}))
	},
	getAllPosts: async (token) => {
		set({ loading: true })
		const rs = await getAllPosts(token)
		set({ posts: rs.data.posts, loading: false })
	},
	deletePost: async (postId, token) => {
		const rs = await deletePost(postId, token)
		set(state => ({
			posts: state.posts.filter(post => post.id !== postId)
		}))
	},
	updatePost: async (postId, token, body) => {
		const rs = await updatePost(postId, token, body)
	},
	createComment: async (body, token) => {
		const rs = await createComment(body, token)
	},
	createLike: async (body, token) => {
		const rs = await createLike(body, token)
	},
	unLike: async (token, id) => {
		const rs = await unLike(token, id)
	},
	setCurrentPost: (post) => set({ currentPost: post }),
}))

export default usePostStore