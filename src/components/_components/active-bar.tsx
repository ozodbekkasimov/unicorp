// import { activeBarIcons } from '@/constants/vscode'
import { Button } from '../ui/button'
import type { IActiveBarIcon } from '@/types'
import { cn } from '@/lib/utils'
import { useContext } from 'react'
import { EditorContext } from '../providers/context-provider'

export default function ActiveBar() {
	const { activeBarIcons, setActiveBarIcons } = useContext(EditorContext)
	const toggleActive = (id: number) => {
		setActiveBarIcons(prev =>
			prev.map(icon => {
				if (icon.id === id) {
					if (icon.isActive === true) {
						return { ...icon, isActive: 'blur' }
					}
					return { ...icon, isActive: true }
				}
				return { ...icon, isActive: false }
			})
		)
	}
	return (
		<div className='absolute w-[4%] max-lg:w-[10%] max-sm:w-[14%] h-[90%] bg-[#181A1FB2] top-[10%] flex flex-col items-center  justify-start '>
			{activeBarIcons.map((icon: IActiveBarIcon) => (
				<Button
					key={icon.id}
					size={'icon'}
					variant={'ghost'}
					className={cn(
						`w-full h-[20%] cursor-pointer flex items-center justify-center rounded-none relative`,
						icon.isActive === true && 'bg-[#fff]/20'
					)}
					onClick={() => toggleActive(icon.id)}
				>
					<img src={icon.url} className='size-6 max-sm:size-4' alt='icon' />
					{icon.isActive === true && (
						<span className='absolute w-0.5 h-full bg-white left-0' />
					)}
				</Button>
			))}
		</div>
	)
}
