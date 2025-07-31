import { cn } from '@/lib/utils'
import type { IPortfolio } from '@/types'

function PortfolioCard({ portfolio }: { portfolio: IPortfolio }) {
	return (
		<div className=' object-cover space-y-6 z-[10] relative'>
			<div className='overflow-hidden h-[70%] flex items-center justify-center rounded-2xl relative group'>
				<img
					src={portfolio.img}
					alt='Asosiy rasm'
					className='w-full rounded-2xl'
				/>
				<div
					className={cn(
						`absolute bottom-0 left-0 w-full h-1/2 p-4 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-500 z-10 flex items-end justify-start`,
						portfolio.classes
					)}
				>
					<p className='text-cyan-300 capitalize'>{portfolio.title}</p>
				</div>
			</div>
			<div className='absolute top-[50%] right-0 size-[100px] bg-blue-500 blur-[300px]'></div>

			<div className='flex items-center'>
				<div className='size-[40px] rounded-full'>
					<img
						src='/portfolio/vector1.svg'
						alt='vector1'
						className=' size-[30px] absolute'
					/>
					<img
						src='/portfolio/vector2.svg'
						alt='vector2'
						className=' size-[30px] absolute'
					/>
				</div>
				<p className='text-[18px] text-white sf-pro-display'>
					{portfolio.title}
				</p>
			</div>
		</div>
	)
}

export default PortfolioCard
