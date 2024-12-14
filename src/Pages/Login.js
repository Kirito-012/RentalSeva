import React from 'react'
import logo from '../assets/logo.png'
import file from '../assets/file.png'
import {Link} from 'react-router-dom'

const Login = () => {
	return (
		<div className='flex h-screen'>
			<div className='w-[30vw] h-screen bg-[#1F509A] flex justify-center items-center'>
				<img
					className='h-[500px]'
					src={file}
					alt='heroimg'
				/>
			</div>
			<div className='flex flex-col w-[70vw] mt-[-100px] justify-center items-center'>
				<Link to='/'>
					<img
						alt='logo'
						src={logo}
					/>
				</Link>
				<div className='w-[600px] px-5 rounded-2xl mt-8 pt-12 login_box_shadow'>
					<h1 className='poppins font-bold text-center text-[30px] text-[#1F509A]'>
						LOGIN
					</h1>

					<div className='mt-10'>
						<h1 className='poppins text-[15px] font-medium'>Email</h1>
						<input
							className='mt-1 outline-none px-2 py-1 poppins text-[#666666] text-[15px]'
							placeholder='Enter your email'
						/>
						<h1 className='mt-4 poppins text-[15px] font-medium'>Password</h1>
						<input
							className='mt-1 outline-none px-2 py-1 poppins text-[#666666] text-[15px]'
							placeholder='Your password'
						/>
					</div>
					<div className='flex flex-col items-center justify-center pb-12'>
						<button className='login_button_shadow transition-all ease-linear mt-12 hover:tracking-wide font-medium border-none rounded-sm px-10 py-3 text-white text-[18px] poppins'>
							Login
						</button>
						<p className='poppins text-[13px] font-light mt-3'>
							Haven't signed up yet?{' '}
							<Link to='/signup'>
								<span className='cursor-pointer text-[#0A3981] font-medium poppins hover:underline'>
									Sign up
								</span>{' '}
							</Link>
							here
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
