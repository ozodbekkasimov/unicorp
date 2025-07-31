import { useContext } from 'react'
import { EditorContext } from '../providers/context-provider'
import type { IActiveBarIcon } from '@/types'
import SidebarTitle from './sidebar-title'
import SidebarFolder from './sidebar-folder'
import { cn } from '@/lib/utils'

export default function Sidebar() {
	const { activeBarIcons } = useContext(EditorContext)

	const generateClass = () => {
		return activeBarIcons.map(icon =>
			icon.isActive === 'blur' ? 'hidden' : ''
		)
	}

	return (
		<div
			className={cn(
				`absolute lg:left-[4%] left-[10%] max-sm:left-[14%] top-[10%] bg-[#181A1FB2] lg:w-[20%] w-full max-sm:w-[86%] h-[90%]`,
				generateClass()
			)}
		>
			<div className='lg:w-[100%] sm:w-[50%] w-full inset-[100] h-full bg-[#131619B2]'>
				{activeBarIcons.map((icon: IActiveBarIcon) => {
					if (icon.isActive) {
						return (
							<div key={icon.id}>
								<SidebarTitle title={icon.title} />
								{icon.id === 1 && <SidebarFolder />}
							</div>
						)
					}

					return null
				})}
			</div>
		</div>
	)
}
