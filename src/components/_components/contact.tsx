function Contact() {
	return (
		<section
			id='contact'
			className='xl:h-screen flex items-center justify-start xl:px-16 px-10 w-full relative max-xl:flex-col space-y-4 py-10'
		>
			<div className='xl:w-2/6 md:w-4/6 w-full bg-[#0D0E1C] md:space-y-[40px] shadow-lg rounded-2xl z-100 p-6'>
				<h2 className='xl:text-[44px]  clash-display font-[600] h-[54px] text-center md:text-[35px] min-[350px]:text-[25px] text-[20px]'>
					Contact With Us
				</h2>
				<form className='space-y-6'>
					<input
						type='text'
						placeholder='Name'
						className='max-[350px]:h-[40px] w-full br-[10px] transition-colors duration-1000 ease-in-out border-[#37393C] border-2 border-b-0 border-r-1 border-l-1 rounded-t-md  px-[16px] py-[10px] active:border-b-none focus:outline focus:border-b-0 focus:rounded-md'
					/>
					<input
						type='tel'
						placeholder='Phone Number'
						className='max-[350px]:h-[40px] w-full br-[10px] border-[#37393C] border-2 border-b-0 border-r-1 border-l-1 rounded-t-md  px-[16px] py-[10px] active:border-b-none focus:outline focus:border-b-0 focus:rounded-md'
					/>
					<input
						type='search'
						placeholder='Type of Services'
						className='max-[350px]:h-[40px] w-full br-[10px] border-[#37393C] border-2 border-b-0 border-r-1 border-l-1 rounded-t-md  px-[16px] py-[10px] active:border-b-none focus:outline focus:border-b-0 focus:rounded-md'
					/>
					<input
						type='text'
						placeholder='Your Aim'
						className='max-[350px]:h-[40px] w-full br-[10px] border-[#37393C] border-2 border-b-0 border-r-1 border-l-1 rounded-t-md  px-[16px] py-[10px] active:border-b-none focus:outline focus:border-b-0 focus:rounded-md'
					/>

					<button
						type='submit'
						className='max-[350px]:h-[40px] cursor-pointer w-full bg-[#005AFF] text-white py-3 rounded-lg'
					>
						Send
					</button>
				</form>
			</div>

			<div className='xl:absolute xl:w-[70%] xl:h-[75%] left-[25%] w-full rounded-md overflow-hidden max-xl:h-[400px] max-md:h-[300px] z-10'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d689.9077290462584!2d69.30901365024752!3d41.32515361055294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef554e0e30ac5%3A0x63dea647b9d813be!2sNuovo%20Boutique%20Hotel!5e0!3m2!1sen!2s!4v1753080244379!5m2!1sen!2s'
					width='100%'
					height='100%'
					loading='lazy'
				></iframe>
			</div>
		</section>
	)
}

export default Contact
