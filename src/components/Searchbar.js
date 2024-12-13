import React from 'react'
import down_arrow from '../assets/down_arrow.png'
import search from '../assets/search.png'

const Searchbar = () => {
	return (
		<div>
			<div className='flex justify-center items-center'>
				<div className='flex justify-between items-center searchbar_shadow mt-96 bg-[#EBEBEB] w-[910px] h-[64px] rounded-[8px] shadow-2xl '>
					<div className='pl-10 flex items-center gap-7'>
						<div className='px-2 w-[190px] border-[#858585] border-b-[1.75px] flex justify-around items-center'>
							<input
								className='w-[160px] notosans text-[14px] font-normal outline-none'
								placeholder='Apartment'></input>
							<img
								className=' cursor-pointer px-2 h-4'
								src={down_arrow}
							/>
						</div>
						<div className='px-2 w-[100px] border-[#858585] border-b-[1.75px] flex justify-around items-center'>
							<input
								className='w-[70px] notosans text-[14px] font-normal outline-none'
								placeholder='Buy/Rent'></input>
							<img
								className='cursor-pointer px-2 h-4'
								src={down_arrow}
							/>
						</div>
						<div className='px-2 w-[130px] border-[#858585] border-b-[1.75px] flex justify-around items-center'>
							<input
								className='w-[100px] notosans text-[14px] font-normal outline-none'
								placeholder='State'></input>
							<img
								className=' cursor-pointer px-2 h-4'
								src={down_arrow}
							/>
						</div>
						<div className='px-2 w-[130px] border-[#858585] border-b-[1.75px] flex justify-around items-center'>
							<input
								className='w-[100px] notosans text-[14px] font-normal outline-none'
								placeholder='District'></input>
							<img
								className=' cursor-pointer px-2 h-4'
								src={down_arrow}
							/>
						</div>
					</div>
					<div className='flex cursor-pointer group justify-center items-center w-[170px] gap-3 rounded-r-[7px] h-full bg-[#0a3981]'>
						<img
							className='h-6 group-hover:h-7 transition-all ease-linear aspect-square'
							src={search}
						/>
						<h1 className='font-semibold text-white notosans text-[17px] tracking-[1px] transition-all ease-linear group-hover:tracking-[2px]'>
							SEARCH
						</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Searchbar
