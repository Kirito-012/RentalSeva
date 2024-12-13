import React from 'react'
import Home_navbar from './Home_navbar'
import Searchbar from './Searchbar'
import hero_img from '../assets/hero_img.jpg'

const Home = () => {
	return (
		<div>
			<div className='bg_nav'>
				<Home_navbar />
				<Searchbar />
				<div className='mt-20 flex justify-center gap-16 xl:gap-32'>
					<div>
						<h1 className='text-[#0A3981] text-[30px] font-medium'>
							Welcome To Rental Seva
						</h1>
						<h1 className='textorange text-[26px] font-bold dancing'>
							#Aur Kitna Sochoge
						</h1>
						<p className='w-[400px] xl:w-[500px] text-[14px] font-medium notosans'>
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
					<img
						className='w-[450px] xl:w-[500px]'
						src={hero_img}
					/>
				</div>
			</div>
		</div>
	)
}

export default Home
