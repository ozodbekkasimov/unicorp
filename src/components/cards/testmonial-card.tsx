import type { ITestmonial } from '@/types'

function TestmonialCard({ testmonial }: { testmonial: ITestmonial }) {
	return (
		<div className='p-[32px] rounded-[45px] bg-[#0D0E1C] border-[1px] border-[#37393C] drop-shadow-[#1F2D3D/10%] backdrop-blur-[12px] space-y-4 z-10'>
			<div className='flex gap-2'>
				{Array(testmonial.rate)
					.fill('/star.svg')
					.map((url: string, idx) => (
						<img key={idx} src={url} alt={url} className='size-[24px]' />
					))}
			</div>
			<p className='text-[16px] leading-[24px] inter text-white'>
				{testmonial.descr}
			</p>
			<div className='flex gap-4 items-center'>
				<div className='size-[40px] flex items-center justify-center bg-white rounded-full'>
					<p className='text-[#005AFF] text-[16px] font-[600] inter'>
						{testmonial.profile.name.split(' ').map(name => name.charAt(0))}
					</p>
				</div>
				<div className='flex-col'>
					<p className='text-white inter text-[18px] leading-[24px] font-[700]'>
						{testmonial.profile.name}
					</p>
					<p className='text-white/60 inter text-[18px] leading-[24px] font-[400]'>
						{testmonial.profile.job}
					</p>
				</div>
			</div>
		</div>
	)
}

export default TestmonialCard
