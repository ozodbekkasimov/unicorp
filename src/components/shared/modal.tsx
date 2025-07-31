import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Check, ClipboardList, Maximize2, Minimize2 } from 'lucide-react'
import { Button } from '../ui/button'
import { codeLines } from '@/constants/code-priview.ts'
import parse from 'html-react-parser'
import type { ICode } from '@/types'
interface Props {
	copyStatus: string
	onCopy: () => void
}
function Modal({ onCopy, copyStatus }: Props) {
	return (
		<Dialog>
			<DialogTrigger>
				<Button size={'icon'} variant={'ghost'} className='cursor-pointer'>
					<Maximize2 className='size-4 max-[420px]:size-3' />
				</Button>
			</DialogTrigger>
			<DialogContent showCloseButton={false}>
				<DialogHeader>
					<div className='md:w-[100%] md:h-[550px] rounded-md object-cover bg-[#0D0E1C] p-4 relative'>
						<div className='flex gap-2'>
							<div
								className={`flex-col font-code-pro leading-[17px] max-sm:leading-[13px]`}
							>
								{codeLines.map((line: ICode) => (
									<p
										className='text-white/20 md:text-[13px] min-[400px]:text-[10px] text-[8px]'
										key={line.lineNum}
									>
										{line.lineNum}
									</p>
								))}
							</div>

							<div className='flex-col font-code-pro leading-[17px] max-sm:leading-[13px]'>
								{codeLines.map((line: ICode) => (
									<p
										key={line.lineNum}
										className='prose dark:prose-invert md:text-[13px] min-[400px]:text-[10px] text-[8px] text-start'
									>
										{parse(line.lineCode)}
									</p>
								))}
							</div>
						</div>
						<div className='absolute top-0 right-0 flex'>
							<Button
								size={'icon'}
								variant={'ghost'}
								className='absolute right-10 min-[350px]:top-2 cursor-pointer transition-[1s]'
								onClick={onCopy}
								disabled={copyStatus === 'success'}
							>
								{copyStatus === 'blur' ? <ClipboardList className='size-4 max-[420px]:size-3' /> : <Check className='size-4 max-[420px]:size-3' />}
							</Button>
							<DialogClose>
								<Button
									size={'icon'}
									variant={'ghost'}
									className='absolute right-2 min-[350px]:top-2  cursor-pointer'
								>
									<Minimize2 className='size-4 max-[420px]:size-3' />
								</Button>
							</DialogClose>
						</div>
					</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export default Modal
