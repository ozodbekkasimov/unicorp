import { cn } from '@/lib/utils'

interface PageProps {
	title: string
	image: string
	className?: string
	hoverColor?: string
}
const ServiceCard = ({
	title,
	image,
	className = '',
	hoverColor = '',
}: PageProps) => {
	return (
		<div
			className={`relative rounded-xl group transition duration-1000 ease-in-out cursor-pointer ${className} overflow-hidden bg-background z-10`}
		>
			<img
				src={image}
				alt={title}
				className='relative w-full h-full object-cover rounded-xl'
			/>
			<div className='absolute inset-0 bg-gradient-to-r from-black/30 to-black/20 rounded-xl' />
			<div
				className={cn(
					`absolute bottom-0 left-0 w-full h-2/3 opacity-0 group-hover:opacity-70 translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-gradient-to-t`,
					hoverColor
				)}
			/>
			<div className='absolute top-4 left-4 text-white text-3xl sm:text-xl md:text-2xl font-semibold leading-tight'>
				{title}
			</div>
		</div>
	)
}

export default ServiceCard
