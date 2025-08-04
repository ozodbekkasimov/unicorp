import { Button } from '../ui/button'

function AboutRight() {
	return (
		<div className='lg:w-[40%] box-border bg-transparent flex flex-col gap-2 px-6'>
			<div className='flex gap-x-2 items-center'>
				<span className='w-[60px] h-[8px] max-sm:w-[50px] max-sm:h-[6px] bg-[#005AFF]'></span>
				<p className='text-[20px] max-sm:text-[16px]'>Name</p>
			</div>
			<p className='text-yellow-500 text-[30px] max-sm:text-[26px]'>
				About Company
			</p>
			<p className='text-white/50 text-[16px] leading-8 max-sm:text-[14px]'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam eius
				possimus temporibus quia vitae voluptates dolorum eum, et magni fuga
				dignissimos quos nesciunt expedita non incidunt obcaecati quas explicabo
				mollitia dolore magnam commodi. Beatae perspiciatis facilis vero ratione
				impedit eum cupiditate aut quibusdam commodi inventore, voluptate
				necessitatibus sint atque nisi!
			</p>
			<div className=' w-full h-[60px] flex gap-x-6 max-sm:gap-x-2 mt-4'>
				<Button className='bg-background border-3 border-[#005AFF] text-white hover:bg-background w-[40%] h-[100%] z-10 max-sm:w-[48%]'>
					<img src='/about/service.png' width={'16px'} />
					<p>Quality Services</p>
				</Button>
				<Button
					variant={'default'}
					className='text-white w-[40%] h-[100%] max-sm:w-[48%]'
				>
					<img src='/about/stars.png' width={'16px'} />

					<p>Unusel Projects</p>
				</Button>
			</div>
			<Button
				variant={'default'}
				size={'lg'}
				className='text-white mt-4 w-[40%] h-[40px]'
			>
				Contact Us
			</Button>
		</div>
	)
}

export default AboutRight
