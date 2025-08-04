import { navLinks } from '@/constants'
import { Button } from '../ui/button'
import type { ILink } from '@/types'
import Mobile from './mobile'

function Navbar() {
	return (
		<>
			<div className='w-full fixed px-10 max-md:px-4 flex items-center justify-center backdrop-blur-[10px] z-[1000]'>
				<div className='md:w-[80%] w-full h-[100px] flex items-center gap-x-10 z-[1000]'>
					<div className='w-full h-[80%] flex items-center justify-between rounded-[64px] bg-[#17191C] px-8 relative'>
						<p className='text-[20px]'>Logo</p>
						<ul className='flex gap-4 max-md:hidden lg:absolute lg:left-1/2 lg:-translate-x-1/2'>
							{navLinks.map((nav: ILink) => (
								<li
									key={nav.name}
									className='text-[16px] text-secondary-foreground'
								>
									<a href={`#${nav.route}`}>{nav.name}</a>
								</li>
							))}
						</ul>
						<div className='md:hidden absolute right-[150px]'>
							<Mobile />
						</div>

						<div className='md:space-x-4'>
							<Button className='text-white'>Contact Us</Button>
							<Button
								variant='ghost'
								className='max-md:hidden bg-[#17191C] shadow-[0_0_40px_1px_#0A3375] h-full px-2'
							>
								<img src='/browser.png' width={'14px'} height={'14px'} />
								<p>Eng</p>
							</Button>

							<div className='absolute w-full h-full rounded-full blur-[220px] bg-[#0A3375]'></div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
