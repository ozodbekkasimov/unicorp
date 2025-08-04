import ActiveBar from '../_components/active-bar'
import Editor from '../_components/editor'
import Sidebar from '../_components/sidebar'

function VsCode() {
	return (
		<div className='relative w-full h-[52%] max-sm:h-[40%] flex items-center justify-center max-sm:mt-[18%]'>
			<div className='w-full flex justify-center items-center relative h-full overflow-y-scroll overflow-x-hidden rounded-t-4xl scrollbar border-[#26263E] border-8 border-b-0'>
				<div className='w-full absolute object-cover rounded-t-4xl bottom-0 top-0 inset-0 z-[100]'>
					<div className='absolute w-full h-[10%] flex items-center justify-start bg-[#131619B2] px-4 gap-2 z-100'>
						{['bg-[#F23B2A]', 'bg-[#F5B028]', 'bg-[#3BD027]'].map(
							(color: string) => (
								<div
									key={color}
									className={`size-4 max-sm:size-3 ${color} rounded-full`}
								></div>
							)
						)}
					</div>

					<ActiveBar />
					<Sidebar />
					<Editor />
				</div>
				<div className='absolute w-[110%] h-full blur-[150px] bg-[#0A337540]/25'></div>
			</div>
			<div className='absolute size-full rounded-full blur-[200px] bg-[#0A3375]'></div>
		</div>
	)
}

export default VsCode
