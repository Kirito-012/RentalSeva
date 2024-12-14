import React from 'react'
import bg from '../assets/footer_bg.png'
const Footer = () => {
	return (
		<>
			<div className='bg_footer h-[20rem] mt-14'>
				<div className='flex gap-28 mx-40 pt-14'>
					<div>
						<h1 className='notosans font-bold text-lg'>ABOUT</h1>
						<div className='flex w-[10rem] flex-col gap-1 mt-2'>
							<p className='notosans text-sm transition-all ease-linear duration-200 cursor-pointer hover:text-[#e38e49] hover:font-semibold'>
								Privacy Policy
							</p>
							<p className='notosans text-sm transition-all ease-linear duration-200 cursor-pointer hover:text-[#e38e49] hover:font-semibold'>
								About Us
							</p>
							<p className='notosans text-sm transition-all ease-linear duration-200 cursor-pointer hover:text-[#e38e49] hover:font-semibold'>
								Contact Us
							</p>
							<p className='notosans text-sm transition-all ease-linear duration-200 cursor-pointer hover:text-[#e38e49] hover:font-semibold'>
								Terms & Conditions
							</p>
							<p className='notosans text-sm transition-all ease-linear duration-200 cursor-pointer hover:text-[#e38e49] hover:font-semibold'>
								List your property
							</p>
						</div>
					</div>
					<div>
						<h1 className='notosans font-bold text-lg'>NEWSLETTER</h1>
						<div className='flex bg-transparent searchbar_shadow pl-3 rounded-md mt-3'>
							<input
								className='notosans text-[#5B5B5B] text-sm w-56 bg-transparent outline-none'
								placeholder='Enter your email'
							/>
							<button className='text-white bg-[#0A3981] py-3 px-5 poppins tracking-wide font-semibold'>
								SUBMIT
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer
