import { services } from '../../constants/index.ts'
import ServiceCard from '../cards/service-card.tsx'
import Title from '@/components/shared/title.tsx'
import type { IService } from '@/types/index.ts'
const Services = () => {
	return (
		<section
			id='services'
			className='max-w-7xl mx-auto max-md:px-6 space-y-6 scroll-smooth max-xl:px-6 max-lg:mt-10'
		>
			<Title title={'Service'} icon={'/title/service.svg'} />
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-6 gap-4'>
				{services.map((service: IService, index) => (
					<ServiceCard
						key={index}
						title={service.title}
						image={service.image}
						className={service.className}
						hoverColor={service.hoverColor}
					/>
				))}
			</div>
		</section>
	)
}

export default Services
