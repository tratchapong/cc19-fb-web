import React, { useState } from 'react'
import { FacebookTitle } from '../icons'
import Register from './Register'
import { toast } from 'react-toastify'
import axios from 'axios'

function Login() {
	const [input,setInput] = useState({
		identity : '',
		password: ''
	})

	const hdlChange = e => {
		setInput( prv => ({...prv, [e.target.name] : e.target.value}))
	}

	const hdlLogin = async e => {
	try {
		const {identity, password} = input
		e.preventDefault()
		// validation
		if(!identity.trim() || !password.trim()) {
			return toast.error('Please fiil all inputs')
		}
		const rs = await axios.post('http://localhost:8899/auth/login', input)
		toast.success(`Login successful, welcome ${rs.data.user.firstName}`)
	}catch(err) {
		const errMsg = err.response?.data?.error || err.message
		console.log(err)
		toast.error(errMsg)
	}


	}
	return (
		<>
			<div className="h-[700px] pt-20 pb-28 bg-[#f2f4f7]">
				<div className="p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-between  ">
					<div className="flex flex-col gap-4 mt-20 basis-3/5">
						<div className="text-4xl">
							<FacebookTitle className="-ms-3" />
							<h2 className='text-[30px] leading-8 mt-3 w-[514px] '>
								Fakebook helps you connect and share with the people.
							</h2>
							<p className="text-sm text-red-500">
								*** This is not real Facebook site ***
							</p>
						</div>

					</div>
					<div className="flex flex-1">
						<div className="card bg-base-100 w-full h-[350px] shadow-xl mt-8">
							<form onSubmit={hdlLogin}>
								<div className="card-body gap-3 p-4">
									<input
										type="text"
										className='input input-bordered w-full'
										placeholder='E-mail or Phone number'
										name='identity'
										value={input.identity}
										onChange={hdlChange}
									/>
									<input
										type="password"
										className='input input-bordered w-full'
										placeholder='password'
										name='password'
										value={input.password}
										onChange={hdlChange}
									/>
									<button className='btn btn-primary text-xl'>Login</button>
									<p className="text-center cursor-pointer opacity-70">
										Forgotten password?
									</p>
									<div className="divider my-0"></div>
									<button className='btn btn-secondary text-lg text-white mx-auto'
										type='button'
										onClick={()=>document.getElementById('register-form').showModal()}
									>
										Create new account</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<dialog id="register-form" className="modal">
				<div className="modal-box">
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
						onClick={ ()=> document.getElementById('register-form').close()}
					>✕</button>
					<Register />		
				</div>
			</dialog>
		</>
	)
}

export default Login