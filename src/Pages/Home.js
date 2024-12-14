import React from 'react'
import Searchbar from '../components/Searchbar'
import HomeNavbar from '../components/HomeNavbar'
import FIrstSection from '../components/FIrstSection'
import OurBranches from '../components/OurBranches'
import Steps from '../components/Steps'
import Footer from '../components/Footer'

const Home = () => {
	return (
		<div className='overflow-hidden'>
			<div className='bg_nav'>
				<HomeNavbar />
				<Searchbar />
			</div>
			<FIrstSection />
			<Steps />
			<OurBranches />
			<Footer />
		</div>
	)
}

export default Home
