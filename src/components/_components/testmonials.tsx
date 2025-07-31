import TestmonialCard from '@/components/cards/testmonial-card'
import { testmonials } from '@/constants'
import type { ITestmonial } from '@/types'

function Testmonials() {
	return (
		<div className='w-full md:px-16 px-6 space-y-6'>
			<p className='text-[#FFA500] leading-[60px] text-[48px] max-[540px]:text-[36px] max-[415px]:text-[30px] max-[350px]:text-[26px] clash-display font-bold z-10'>
				What Our Client Say
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[32px]'>
				{testmonials.map((item: ITestmonial, index) => (
					<TestmonialCard key={index} testmonial={item} />
				))}
			</div>
		</div>
	)
}

export default Testmonials
