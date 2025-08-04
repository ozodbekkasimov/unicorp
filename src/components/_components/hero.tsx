import VsCode from '@/components/cards/vs-code'
import { Button } from '@/components/ui/button'
import { heroStats } from '@/constants'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

function Hero() {
	const [showTitle, setShowTitle] = useState(false)
	const [showText, setShowText] = useState(false)
	useEffect(() => {
		const timer = setTimeout(() => setShowTitle(true), 100)
		return () => clearTimeout(timer)
	}, [])
	useEffect(() => {
		const timer = setTimeout(() => setShowText(true), 2100)
		return () => clearTimeout(timer)
	}, [])
	return (
		<section id='home' className='md:w-[100%] min-h-screen mt-[100px] relative'>
			<div className='h-[15%] max-sm:h-[20%] flex items-center justify-center flex-col'>
				<div className='md:leading-[80px] leading-[70px] w-full flex items-center justify-center overflow-hidden'>
					<p
						className={cn(
							'relative z-100 sf-pro-display font-[600] md:text-[60px] text-[40px] text-blue-500 text-shadow-[0_0_20px_#2c4cff] transition duration-2000',
							showTitle
								? 'translate-y-0 opacity-100'
								: 'translate-y-full opacity-0'
						)}
					>
						UniCorp
					</p>
				</div>
				<div className='text-center md:leading-[40px] leading-[30px]'>
					<p
						className={cn(
							`relative z-100 sf-pro-display font-semibold md:text-[50px] text-[25px] transition duration-2000`,
							showText
								? 'translate-y-0 opacity-100'
								: 'translate-y-full opacity-0'
						)}
					>
						For those who will
					</p>
				</div>
			</div>
			<div className='flex justify-center items-center sm:h-[20%] h-[15%]'>
				<div className='lg:w-[50%] w-full gap-y-4 flex items-center flex-col sm:text-[14px] max-sm:text-[10px] '>
					<p className='text-center relative z-100'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
						quibusdam praesentium voluptas modi officiis quasi, aut facilis!
						Natus placeat rerum, dignissimos libero nesciunt veritatis.
						Consequatur facere autem a iusto excepturi!
					</p>
					<Button className='w-[100px] cursor-pointer text-white relative z-100'>
						Contact Us
					</Button>
				</div>
			</div>
			<VsCode />
			<div className='hidden md:flex justify-center items-start gap-6 px-10 py-10 -mt-25'>
				{heroStats.map(item => (
					<div
						key={item.title}
						className='bg-[#0D0E1C] text-white rounded-[30px] h-[120px] w-full md:w-1/3 text-center content-center backdrop-blur-sm border border-white/10 shadow-md z-100 px-2'
					>
						<h3 className='text-2xl font-bold mb-2 text-blue-500'>
							{item.title}
						</h3>
						<p className='text-sm opacity-80 leading-snug'>{item.descr}</p>
					</div>
				))}
			</div>

			<div className='flex flex-col md:hidden px-6 py-6 gap-6 -mt-20 max-[340px]:-mt-15 items-center'>
				{heroStats.map(stats => (
					<div className='md:w-[80%] w-full max-[340px]:py-2 bg-[#0D0E1C] text-white rounded-[30px] p-6 text-center backdrop-blur-sm border border-white/10 shadow-md z-100'>
						<h3 className='text-xl font-bold mb-2 text-blue-500'>
							{stats.title}
						</h3>
						<p className='text-sm max-[340px]:text-[12px] opacity-80'>
							{stats.descr}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Hero
