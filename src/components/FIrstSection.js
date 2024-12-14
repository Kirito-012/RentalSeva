import React from 'react'
import hero_img from '../assets/hero_img.jpg'
import hero_img2 from '../assets/aboutus_image.webp'

const FIrstSection = () => {
	return (
		<>
			{/* first */}
			<div className='mt-20 flex'>
				<div className='w-[49vw] flex flex-col justify-center pl-40'>
					<h1 className='text-[#242424] poppins text-[37px] font-bold'>
						Welcome To Rental Seva
					</h1>
					<h1 className='textorange text-[26px] font-bold dancing'>
						#Aur Kitna Sochoge
					</h1>
					<div className='flex gap-3 pl-1 pt-2'>
						<div className='bg-[#727272] w-[2px]'></div>
						<p className='w-[400px] text-[#565656] xl:w-[500px] text-[14px] notosans'>
							RentalSeva.in is one of the Products of Tagore Ji Computers. It’s
							a unique platform itself to exchange the real estate’s
							information. Rental Seva offline platform, where sellers, buyers,
							property owner and tenants fulfill the gap which is among them.
							Already having many online platform in real estate sector for
							property information but at ground level these are not effective.
							Rental Seva has research on ground level and then prepare this
							platform as per the need of customer and user.
						</p>
					</div>
					<div className='mt-3'>
						<button className='w-36 h-14 rounded-sm text-white py-4 transition-all ease-linear hover:font-semibold poppins text-base bg-[#e38e49]'>
							Read More
						</button>
					</div>
				</div>
				<div className='w-[49vw]'>
					<img
						className='w-full object-cover aspect-square'
						src={hero_img}
						alt='heroimage'
					/>
				</div>
			</div>

			{/* second */}
			<div className='flex'>
				<div className='w-[49vw]'>
					<img
						className='w-full aspect-square'
						src={hero_img2}
						alt='heroimage'
					/>
				</div>
				<div className='w-[50vw] flex flex-col justify-center pl-20'>
					<h1 className='textorange text-[14px] poppins font-semibold'>
						About Us
					</h1>
					<h1 className='text-[#242424] text-[37px] poppins leading-10 font-bold'>
						The Most Convenient Rental Website
					</h1>
					<div className='flex gap-3 pl-1 pt-5'>
						<div className='bg-[#727272] w-[2px]'></div>
						<div>
							<p className='w-[400px] text-[#565656] xl:w-[500px] text-[14px] notosans'>
								The website RentalSeva.in is one of the products of Tagore Ji
								Computers. RentalSeva.in is owned, hosted and operated bye the
								Tagore Ji Computers. Tagore Ji Computers is a Sole
								Proprietorship. The Registered office of RentalSeva.in & Tagore
								Ji Computers is 1st Floor, Palika Bazar, Thanesar, Kurukshetra.
							</p>
							<p className='w-[400px] text-[#565656] xl:w-[500px] text-[14px] notosans'>
								The RentalSeva.in can modify and amend terms & condition at any
								time of rental seva services. If any modification and amendment
								happened in terms & condition then Rentalseva.in will update it
								immediately on website. The user periodically can review terms &
								condition. If user continually accessing Rentalseva.in website
								then it deemed to be that user is aware about the amended terms
								& conditions.
							</p>
						</div>
					</div>
					<div className='mt-3'>
						<button className='w-36 h-14 rounded-sm text-white py-4 transition-all ease-linear hover:font-semibold poppins text-base bg-[#e38e49]'>
							Read More
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default FIrstSection
