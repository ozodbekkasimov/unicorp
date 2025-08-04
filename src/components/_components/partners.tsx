function Partners() {
	return (
		<div className='relative w-full md:px-16 px-6 space-y-6'>
			<div className='flex items-center justify-center flex-wrap gap-4  '>
				{Array(8)
					.fill({ name: 'epam' })
					.map((partner: { name: string }, idx) => (
						<div className='size-36 relative' key={idx}>
							<img
								src='/partners/hexagon.svg'
								alt='hexagon'
								className='absolute inset-0 z-10 bg-transparent'
							/>
							<p className='absolute inset-[25%] text-[30px] font-[700] text-[#938C8C] chivo-mono z-10'>
								{partner.name}
							</p>
						</div>
					))}
			</div>
		</div>
	)
}

export default Partners
