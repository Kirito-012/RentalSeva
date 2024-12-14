import React from 'react'
import Searchbar from '../components/Searchbar'
import HomeNavbar from '../components/HomeNavbar'
import FIrstSection from '../components/FIrstSection'
import OurBranches from '../components/OurBranches'
import Steps from '../components/Steps'
import Footer from '../components/Footer'

const Home = () => {
	return (
		<div>
			<div className='bg_nav'>
				<HomeNavbar />
				<Searchbar />
				<FIrstSection />
				<Steps />
				<OurBranches />
				<Footer />
			</div>
		</div>
	)
}

export default Home
