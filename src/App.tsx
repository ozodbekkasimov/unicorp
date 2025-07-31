import { Toaster } from 'sonner'
import Navbar from './components/shared/navbar'
import About from './components/_components/about'
import Hero from './components/_components/hero'
import Services from './components/_components/services'
import Team from './components/_components/team'
import Portfolio from './components/_components/portfolio'
import Testmonials from './components/_components/testmonials'
import Partners from './components/_components/partners'
import Contact from './components/_components/contact'
import Footer from './components/_components/footer'
import { bgImages } from './constants'
import type { IBgImage } from './types'
function App() {
	return (
		<div className='w-full bg-background scroll-smooth transition duration-300 overflow-x-hidden'>
			<div className='md:px-16 px-6 flex justify-center '>
				<Navbar />
				<Hero />
			</div>
			<div className='w-full'>
				<About />
				<div className='relative'>
					<Services />
					<Team />
				</div>
				<Portfolio />
				<div className='space-y-10'>
					<Testmonials />
					<Partners />
				</div>
				<Contact />

				{bgImages.map((img: IBgImage) => (
					<img
						key={img.classes}
						src={img.url}
						alt={img.url}
						className={img.classes}
					/>
				))}
				<Footer />
			</div>
			<Toaster theme='dark' position='top-center' />
		</div>
	)
}
export default App
