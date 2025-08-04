import CodePriview from '@/components/cards/code-preview'
import AboutRight from '@/components/shared/about-right'

function About() {
	return (
		<section
			id='about'
			className='w-full lg:h-screen md:min-h-[100%]  md:mt-0 min-[340px]:mt-60 mt-40 bg-backround flex content-center relative'
		>
			<div className='w-full flex items-center justify-around md:px-10 px-6 lg:pt-10 max-lg:flex-col-reverse max-lg:gap-y-10'>
				<CodePriview />
				<AboutRight />
			</div>

			<div className='absolute w-20 h-20 left-10 blur-[150px] top-[5%] bg-[#005AFF]'></div>
			<div className='absolute w-50 h-50 right-10 blur-[300px] bottom-[5%] bg-[#005AFF]'></div>
		</section>
	)
}

export default About
