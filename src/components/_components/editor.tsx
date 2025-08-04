import { useContext } from 'react'
import { EditorContext } from '../providers/context-provider'
import type { ICode, IEditorFile } from '@/types'
import { Button } from '../ui/button'
import parse from 'html-react-parser'
import { cn } from '@/lib/utils'

export default function Editor() {
	const { editorFiles, setEditorFiles } = useContext(EditorContext)
	const { activeBarIcons } = useContext(EditorContext)

	const handleActivate = () => {
		setEditorFiles(prevFiles =>
			prevFiles.map(file => ({
				...file,
				isActive: false,
			}))
		)
	}

	const hasBlur = activeBarIcons.some(icon => icon.isActive === 'blur')
	const positionClass = hasBlur
		? 'lg:left-[4%] lg:w-[96%] left-[10%] max-sm:left-[14%] w-[90%] max-sm:w-[86%]'
		: 'lg:left-[24%] lg:w-[76%] left-[30%] w-[70%] max-lg:blur-sm max-lg:-z-50'

	const isNothingActive = editorFiles.every(file => file.isActive === false)

	return (
		<div className={cn(`absolute top-[10%] h-[90%]`, positionClass)}>
			<div className='w-full h-[15%] bg-[#131619B2] flex justify-between '>
				<div className='w-full h-full '>
					{editorFiles.map(
						(file: IEditorFile) =>
							file.isActive && (
								<div
									key={file.id}
									className='w-[170px] max-sm:w-[130px] h-full bg-[#181A1FCC] flex items-center justify-center relative'
								>
									<p className='font-[600] inter w-[80%] text-center max-sm:text-[14px]'>
										{file.name}
									</p>
									<img
										src='/vscode/close.svg'
										alt='close'
										className='absolute right-2 size-3 max-sm:size-2 cursor-pointer'
										onClick={handleActivate}
									/>
								</div>
							)
					)}
				</div>

				<div className='flex h-full items-center'>
					{[
						'/vscode/replace.svg',
						'/vscode/sidebar.svg',
						'/vscode/ellipsis.svg',
					].map((url: string) => (
						<Button
							key={url}
							size={'icon'}
							variant={'ghost'}
							className='max-sm:size-6'
						>
							<img src={url} alt={url} />
						</Button>
					))}
				</div>
			</div>
			<div className='w-full h-[85%] py-2 bg-[#181A1FCC] overflow-y-auto'>
				{isNothingActive ? (
					<div className='h-full flex items-center justify-center object-cover  max-md:flex-col text-center'>
						<img src='/vscode/vscode.png' alt='vscode' className='h-[80%]' />
						<p className='text-white/40'>Click to open the file.</p>
					</div>
				) : (
					<div className='min-w-max w-fit'>
						{editorFiles.map(
							(file: IEditorFile) =>
								file.isActive &&
								file.codes.map((code: ICode) => (
									<div key={code.lineNum} className='flex w-full'>
										<p className='text-[13px] max-sm:text-[10px] menlo font-normal w-[20px] min-w-[20px] text-white/70 text-end pr-2 bg-[#181A1FCC] sticky left-0 z-10 backdrop-blur-2xl'>
											{code.lineNum}
										</p>

										<p className='text-[13px] max-sm:text-[10px] font-[600] menlo whitespace-pre'>
											{parse(code.lineCode)}
										</p>
									</div>
								))
						)}
					</div>
				)}
			</div>
		</div>
	)
}
