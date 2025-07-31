import { useEffect, useState } from 'react'

const ScrollProgressBar = () => {
	const [scrollTop, setScrollTop] = useState(0)

	const onScroll = () => {
		const winScroll = document.documentElement.scrollTop
		const height =
			document.documentElement.scrollWidth -
			document.documentElement.clientWidth
		const scrolled = (winScroll / height) * 100
		setScrollTop(scrolled)
	}

	useEffect(() => {
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<div className='absolute left-[6%] top-[16%] w-1 h-[70%]  bg-transparent'>
			<div
				className='h-full bg-blue-500 transition-all duration-75 ease-linear'
				style={{ height: `${scrollTop}%` }}
			/>
		</div>
	)
}

export default ScrollProgressBar
