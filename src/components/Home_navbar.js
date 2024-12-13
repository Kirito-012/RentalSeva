import React, {useState} from 'react'
import logo from '../assets/logo.png'
import user from '../assets/user.png'
import menu from '../assets/menu.png'
import {Link} from 'react-router-dom'

const Home_navbar = () => {
	const [isUser, setIsUser] = useState(false)
	return (
		<>
			<div className='px-20 flex justify-between items-center pt-8 z-10'>
				<Link to='/'>
					<img
						className='w-44'
						src={logo}
					/>
				</Link>
				<div className='flex items-center justify-center gap-14'>
					<h1 className='notosans cursor-pointer font-bold textorange text-sm'>
						HOME
					</h1>
					<h1 className='transition-all ease-linear duration-200 hover:text-[#E38E49] notosans cursor-pointer font-semibold text-white text-sm'>
						ABOUT US
					</h1>
					<h1 className='transition-all ease-linear duration-200 hover:text-[#E38E49] notosans cursor-pointer font-semibold text-white text-sm'>
						CONTACT US
					</h1>
					<h1 className='transition-all ease-linear duration-200 hover:text-[#E38E49] notosans cursor-pointer font-semibold text-white text-sm'>
						OUR BRANCH
					</h1>
				</div>
				<div className='flex gap-5'>
					<img
						onClick={() => {
							setIsUser(!isUser)
						}}
						className='h-7 cursor-pointer aspect-square'
						src={user}
					/>
					<img
						className='h-7 cursor-pointer invert aspect-square'
						src={menu}
					/>
				</div>
			</div>

			<div
				className={`absolute w-[190px] top-20 text-[14px] overflow-hidden right-12 bg-white transition-all ease-linear duration-200 ${
					isUser ? 'h-[74px]' : 'h-0'
				}`}>
				<Link to='/login'>
					<h1 className='py-2 px-3 notosans font-semibold transition-all ease-linear duration-200 hover:bg-[#0a3981] hover:text-white'>
						LOGIN
					</h1>
				</Link>
				<Link to='/signup'>
					<h1 className='py-2 px-3 notosans font-semibold transition-all ease-linear duration-200 hover:bg-[#0a3981] hover:text-white'>
						SIGNUP
					</h1>
				</Link>
			</div>
		</>
	)
}

export default Home_navbar
