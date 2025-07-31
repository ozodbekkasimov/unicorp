import VsCode from '@/components/cards/vs-code'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

function Hero() {
	const [show, setShow] = useState(false)
	useEffect(() => {
		const timer = setTimeout(() => setShow(true), 100)
		return () => clearTimeout(timer)
	}, [])
	return (
		<section id='home' className='w-[100%] h-screen mt-[100px]'>
			<div className='h-[15%] max-sm:h-[20%] w-full flex items-center justify-center overflow-hidden'>
				<p
					className={cn(
						'text-[60px] text-blue-500 text-shadow-[0_0_20px_#2c4cff] transition duration-2000',
						show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
					)}
				>
					UniCorp
				</p>
			</div>
			<div className='flex justify-center items-center sm:h-[20%] h-[15%]'>
				<div className='lg:w-[50%] w-full gap-y-4 flex items-center flex-col sm:text-[14px] max-sm:text-[10px]'>
					<p className='text-center'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
						quibusdam praesentium voluptas modi officiis quasi, aut facilis!
						Natus placeat rerum, dignissimos libero nesciunt veritatis.
						Consequatur facere autem a iusto excepturi!
					</p>
					<Button className='w-[100px] cursor-pointer text-white'>
						Contact Us
					</Button>
				</div>
			</div>
			<VsCode />
		</section>
	)
}

export default Hero
