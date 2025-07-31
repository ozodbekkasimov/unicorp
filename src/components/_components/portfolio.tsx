import PortfolioCard from '@/components/cards/portfolio-card'
import Title from '@/components/shared/title'
import { portfolies, tags } from '@/constants'
import type { IPortfolio, ITag } from '@/types'

function Portfolio() {
	return (
		<section
			id='portfolio'
			className='min-h-screen max-w-7xl mx-auto space-y-6 scroll-smooth max-xl:px-6 z-50 relative'
		>
			<Title title={'Portfolio'} icon={'/title/portfolio.svg'} />
			<div className='w-full h-[50px] max-[483px]:h-[40px] gap-[12px] flex flex-wrap'>
				{tags.map((tag: ITag) => (
					<div
						className={`cursor-pointer z-10 flex flex-wrap items-center justify-center w-[100px]  max-[483px]:w-[70px] max-[364px]:w-[50px] max-[483px]:rounded-2xl h-full rounded-full bg-[#0D0E1C] p-[8px] font-normal sf-pro-display border-[1px] border-[#37393C] text-[16px]  ${
							tag.isActive ? 'bg-[#1A1C3C]' : ''
						}`}
						key={tag.id}
					>
						<p className='max-[483px]:text-[14px]'>{tag.title}</p>
					</div>
				))}
			</div>
			<div className='container sm:mx-auto sm:px-8 md:px-4 md:py-8 flex items-center justify-center'>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6'>
					{portfolies.map((portfolio: IPortfolio) => (
						<PortfolioCard key={portfolio.title} portfolio={portfolio} />
					))}
				</div>
			</div>
			<div className='absolute bottom-[50%] right-0 bg-blue-500 size-[350px] blur-[400px]'></div>
		</section>
	)
}

export default Portfolio
