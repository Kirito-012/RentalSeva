import React from 'react'
import steps from '../assets/steps.png'
import commitment from '../assets/commitment.png'
import ownership from '../assets/ownership.png'
import secure from '../assets/secure.png'

const Steps = () => {
	return (
		<>
			<div className='flex'>
				<div className='w-[49vw] pl-60 bg-[#D4CEC7] flex flex-col justify-center'>
					<h1 className='poppins font-bold leading-10 text-[#5B5B5B] text-[32px] max-w-[20ch]'>
						List or Find a property in 3 easy steps
					</h1>
					<div className='flex gap-3 pl-1 pt-3'>
						<div className='bg-[#727272] w-[2px]'></div>
						<p className='text-[#5B5B5B] max-w-[50ch] text-[14px] poppins'>
							Lorem ipsum odor amet, consectetuer adipiscing elit. Magnis
							hendrerit imperdiet; senectus quis tristique adipiscing. Ac purus
							porta consequat facilisis elementum, sapien integer proin in.
							Semper luctus nascetur eleifend
						</p>
					</div>
				</div>
				<div className='w-[50vw]'>
					<img
						src={steps}
						alt='steps'
					/>
				</div>
			</div>

			<div className='flex flex-col justify-center items-center mt-20 mb-20'>
				<h1 className='poppins font-bold leading-10 text-[#5B5B5B] text-[32px] max-w-[20ch]'>
					Our Values
				</h1>
				<div className='flex mt-14 select-none gap-20'>
					<div className='w-80 h-72 flex flex-col justify-center items-center rounded-sm transition-all ease-linear values_shadow'>
						<img
							className='h-20 aspect-square'
							alt='commitment'
							src={commitment}
						/>
						<h1 className='poppins mt-14 font-semibold text-[22px]'>
							Commitment
						</h1>
						<p className='w-64 mt-2 text-[#727272] text-sm text-center'>
							We are truly committed to going above and beyond traditional
							working scenarios. This ensures excellent growth and maximized
							ROI.
						</p>
					</div>
					<div className='w-80 h-72 flex flex-col justify-center items-center rounded-sm transition-all ease-linear values_shadow'>
						<img
							className='h-20 aspect-square'
							alt='ownership'
							src={ownership}
						/>
						<h1 className='poppins mt-14 font-semibold text-[22px]'>
							Commitment
						</h1>
						<p className='w-64 mt-2 text-[#727272] text-sm text-center'>
							We are truly committed to going above and beyond traditional
							working scenarios. This ensures excellent growth and maximized
							ROI.
						</p>
					</div>
					<div className='w-80 h-72 flex flex-col justify-center items-center rounded-sm transition-all ease-linear values_shadow'>
						<img
							className='h-20 aspect-square'
							alt='secure'
							src={secure}
						/>
						<h1 className='poppins mt-14 font-semibold text-[22px]'>
							Commitment
						</h1>
						<p className='w-64 mt-2 text-[#727272] text-sm text-center'>
							We are truly committed to going above and beyond traditional
							working scenarios. This ensures excellent growth and maximized
							ROI.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Steps