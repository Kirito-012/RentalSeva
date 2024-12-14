import React from 'react'
import img1 from '../assets/branch1.jpg'
import img2 from '../assets/branch2.webp'
import img3 from '../assets/branch3.jpg'
import img4 from '../assets/branch4.jpg'
import img5 from '../assets/branch5.jpg'
import img6 from '../assets/branch6.jpg'
import Branch_section from './BranchSection'

const OurBranches = () => {
	return (
		<>
			<div className='flex flex-col mt-20 justify-center items-center'>
				<h1 className='text-[#242424] poppins text-[37px] font-bold'>
					Our Branches
				</h1>
				<div className='flex mx-40 gap-5 justify-center flex-wrap mb-20'>
					<Branch_section
						img={img1}
						name='TAGORE JI COMPUTERS'
						location='1st Floor, Palika Bazar, Near SBI ATM Thanesar, Kurukshetra'
						number='70156-03892'
					/>
					<Branch_section
						img={img2}
						name='PARI ONLINE SERVICES'
						location='Main Bazar, Near ISKCON Mandir Thanesar, Kurukshetra'
						number='99968-34308'
					/>
					<Branch_section
						img={img3}
						name='SK ONLINE & GENERAL STORE'
						location='Shanti Nagar, Near Mata Mandir, Thanesar, Kurukshetra'
						number=' 97293-02838'
					/>
					<Branch_section
						img={img4}
						name='TAGORE JI COMPUTERS'
						location='1st Floor, Palika Bazar, Near SBI ATM Thanesar, Kurukshetra'
						number='70156-03892'
					/>
					<Branch_section
						img={img5}
						name='PARI ONLINE SERVICES'
						location='Main Bazar, Near ISKCON Mandir Thanesar, Kurukshetra'
						number='99968-34308'
					/>
					<Branch_section
						img={img6}
						name='SK ONLINE & GENERAL STORE'
						location='Shanti Nagar, Near Mata Mandir, Thanesar, Kurukshetra'
						number=' 97293-02838'
					/>
				</div>
			</div>
		</>
	)
}

export default OurBranches
