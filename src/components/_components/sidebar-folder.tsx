import { useContext, useState } from 'react'
import { EditorContext } from '../providers/context-provider'
import { Button } from '../ui/button'
import { files } from '@/constants/vscode'
import type { IFile } from '@/types'
import { cn } from '@/lib/utils'

function SidebarFolder() {
	const [showFiles, setShowFiles] = useState<boolean>(true)
	const { editorFiles, setEditorFiles, setActiveBarIcons } =
		useContext(EditorContext)

	const toggleSidebar = () => {
		if (window.innerWidth < 800) {
			setActiveBarIcons(prev =>
				prev.map(icon =>
					icon.isActive === true
						? {
								...icon,
								isActive: 'blur',
						  }
						: icon
				)
			)
		}
	}

	const toggleActive = (id: string) => {
		const updatedFiles = editorFiles.map(file => ({
			...file,
			isActive: file.id === id ? true : false,
		}))
		setEditorFiles(updatedFiles)
		toggleSidebar()
	}

	return (
		<>
			<div className='w-full flex h-[15%] items-center justify-start'>
				<Button
					size={'icon'}
					variant={'ghost'}
					onClick={() => setShowFiles(prev => !prev)}
				>
					<img
						src={'/vscode/resize.svg'}
						alt='resize'
						className={!showFiles ? 'rotate-180' : ''}
					/>
				</Button>
				<p className='inter font-semibold uppercase text-[14px] max-sm:text-[12px]'>
					Calculator
				</p>
			</div>
			{showFiles && (
				<div className='w-full h-[30%] px-5 '>
					{files.map((file: IFile) => (
						<div
							className='flex w-full h-1/3 gap-x-2 items-center'
							key={file.id}
							onClick={() => toggleActive(file.id)}
						>
							<span className={cn(file.classes)}>{file.icon}</span>
							<p className='text-[#ebebeb] font-semibold inter cursor-pointer max-sm:text-[12px]'>
								{file.name}
							</p>
						</div>
					))}
				</div>
			)}
		</>
	)
}

export default SidebarFolder
