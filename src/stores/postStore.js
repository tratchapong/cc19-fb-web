import axios from 'axios'
import {create} from 'zustand'

const usePostStore = create( (set, get)=> ({
	posts : [],
	currentPost : null,
	loading : false,
	createPost : async (body, token, user) => {
		const rs = await axios.post('http://localhost:8899/post',body,{
			headers : { Authorization : `Bearer ${token}` }
		})
		console.log(rs.data)
		set(state => ({
			posts: [ {...rs.data.result, user, likes :[], comments:[]}, ...state.posts ]
		}))
	
		
	},
	getAllPosts : async (token) => {
		set({loading: true})
		const rs = await axios.get('http://localhost:8899/post',{
			headers : { Authorization : `Bearer ${token}` }
		})
		set({posts : rs.data.posts, loading: false} )
	},
	deletePost : async (postId, token) => {
		const rs = await axios.delete(`http://localhost:8899/post/${postId}`,{
			headers : { Authorization : `Bearer ${token}`}
		})
	}
}) )

export default usePostStore