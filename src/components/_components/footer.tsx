import { contacts, footerLinks, icons } from '@/constants'
import type { IContact, IDescription, IFooterLink } from '@/types'
import parse from 'html-react-parser'
import FourPointStar from '../shared/four-point-star'

function Footer() {
	const generateStar = (key: number) => {
		const left = Math.floor(Math.random() * 100) // %
		const top = Math.floor(Math.random() * 100) // %
		const size = Math.floor(Math.random() * 10) + 5 // px (min 5px to 20px)

		return (
			<div
				key={key}
				className='absolute'
				style={{
					left: `${left}%`,
					top: `${top}%`,
				}}
			>
				<FourPointStar size={size} />
			</div>
		)
	}
	return (
		<section className='w-full bg-[#0d0e1c] relative'>
			<div className='w-full md:px-16 px-10 max-lg:py-10 grid grid-cols-5 lg:h-[40vh] max-lg:space-y-10'>
				<div className='col-span-2  max-lg:col-span-3 max-md:col-span-5 flex items-center justify-start'>
					<div className='relative z-1 space-y-4'>
						<p className='text-[24px] font-bold inter'>Logo</p>
						<p className='relative z-1 w-[70%] text-[16px] leading-[24px] tracking-[1px] text-white font-normal max-sm:w-full'>
							<span className='text-amber-300'>Lorem Ipsum</span> is simply
							dummy text of the printing and typesetting industry. Lorem Ipsum
							has been the industry's standard dummy text ever since the 1500s
						</p>
						<div className='flex gap-[24px] '>
							{icons.map((icon: string) => (
								<div
									key={icon}
									className='bg-[#005AFF] size-[34px] flex items-center justify-center rounded-full'
								>
									<img
										key={icon}
										src={icon}
										alt='icon'
										className='size-[20px]'
									/>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className='col-span-1 max-md:col-span-5 flex items-center justify-center'>
					<div className='flex md:items-center md:justify-center h-full md:space-y-[24px] md:flex-col max-md:space-x-10 max-md:flex-wrap max-md:space-y-2'>
						{footerLinks.map((link: IFooterLink) => (
							<div className='w-[70px]' key={link.route}>
								<a
									href={`#${link.route}`}
									className='leading-[24px] tracking-[1px] active:font-semibold'
								>
									{link.title}
								</a>
							</div>
						))}
					</div>
				</div>

				<div className='flex justify-end items-center col-span-2 max-lg:justify-start max-lg:col-span-5 '>
					<div className='space-y-6 max-lg:flex max-lg:space-x-10 max-md:flex-col'>
						{contacts.map((contact: IContact) => (
							<div className='space-y-[12px]' key={contact.title}>
								<p className='font-normal text-[16px] leading-[20px] tracking-[1px]'>
									{contact.title}:
								</p>

								<div className='space-y-[12px]'>
									{contact.description.map((descr: IDescription) => (
										<div
											className='flex space-x-[16px] items-center'
											key={descr.value}
										>
											<img
												src={descr.icon}
												alt='icon'
												className='size-[24px]'
											/>
											<p className='text-[#005AFF] clash-display font-[600] text-[16px] leading-[24px]'>
												{parse(descr.value)}
											</p>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='absolute inset-0 cover pointer-events-none '>
				<img src='/bg/footer.png' className='h-full' />
			</div>
			<div
				className='absolute inset-0 pointer-events-none z-0 overflow-hidden'
				style={{
					overflow: 'hidden',
				}}
			>
				{Array.from({ length: 50 }).map((_, index) => generateStar(index))}
			</div>
		</section>
	)
}

export default Footer
