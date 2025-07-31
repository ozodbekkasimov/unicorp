import Title from '@/components/shared/title'
import parse from 'html-react-parser'

import { team } from '@/constants'
import type { IPerson } from '@/types'

function Team() {
	return (
		<div className='max-w-7xl mx-auto max-xl:px-6 py-10'>
			<Title title={'Team'} icon={'/title/users.svg'} />

			<div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-w-7xl mt-10 gap-4 '>
				{team.map((person: IPerson, index) => (
					<div key={index} className='pl-1 lg:basis-1/2 z-[10] bg-background'>
						<div className='relative bg-white/10'>
							<div className='flex flex-col aspect-[13/16] max-sm:aspect-square p-6 overflow-hidden relative'>
								<p className='text-[#005AFF] text-[18px] max-[400px]:text-[16px]'>{person.name}</p>
								<h1 className='text-[30px] max-[400px]:text-[22px]'>{parse(person.job)}</h1>
								<img
									src={person.img}
									alt='portrait'
									className='absolute bg-transparent bottom-0 right-0 lg:w-[80%] min-[400px]:w-[70%] w-[60%]'
								/>
								<div className='absolute bottom-0 right-0 w-20 h-20 blur-[100px] bg-[#699EFF]'></div>
								<div className='absolute top-20 left-0 w-20 h-20 blur-[100px] bg-[#1C55E0]'></div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Team
