import React from 'react'
import phone from '../assets/phone.png'

const BranchSection = ({img, name, location, number}) => {
	return (
		<div>
			<div className='mt-6 rounded-xl group cursor-pointer'>
				<div className='h-[270px] overflow-hidden'>
					<img
						className='rounded-t-xl transition-all ease-linear group-hover:scale-110 w-[356px] h-[270px] object-cover'
						alt='branch'
						src={img}
					/>
				</div>
				<div className='pl-1'>
					<h1 className='notosans text-lg mt-2 font-bold'>{name}</h1>

					<p className='text-xs w-[40ch]'>{location}</p>
					<div className='flex items-center mt-2 gap-1'>
						<img
							className='h-5'
							alt='phone'
							src={phone}
						/>
						<p className='text-sm'>{number}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BranchSection
