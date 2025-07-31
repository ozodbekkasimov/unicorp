interface Props {
	title: string
	icon: string
}

function Title({ icon, title }: Props) {
	return (
		<div className='relative z-10 group cursor-pointer flex items-center justify-center  gap-2 rounded-2xl w-[150px] h-[60px] bg-[#0D0E1C] border-[3px] border-[#2E2E2E]'>
			<img src={icon} alt='icon' className='w-[20px] ' />
			<p className='text-[18px]'>{title}</p>
			<div className='absolute inset-0 size-[200px] blur-[300px] bg-blue-500'></div>
		</div>
	)
}

export default Title
