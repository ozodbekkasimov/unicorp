import Modal from '@/components/shared/modal'
import { Button } from '@/components/ui/button'

import { copyText } from '@/constants'
import { codeLines } from '@/constants/code-priview'
import type { ICode } from '@/types'
import parse from 'html-react-parser'
import { Check, ClipboardList } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

function CodePriview() {
	const [copyStatus, setCopyStatus] = useState('blur')

	const onCopy = () => {
		navigator.clipboard
			.writeText(copyText)
			.then(() => {
				setCopyStatus('success')
				setTimeout(() => setCopyStatus('blur'), 3000)
				toast.success('Copied to Clipboard')
			})
			.catch(() => {
				setCopyStatus('error')
				toast.error('Something went wrong')
			})
	}

	return (
		<div>
			<div className='md:w-[600px] md:h-[550px] rounded-md object-cover bg-[#0D0E1C] p-4 relative z-10'>
				<div className='flex gap-2'>
					<div className={`flex-col font-code-pro leading-[17px] max-sm:leading-[13px]`}>
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
								className='prose dark:prose-invert md:text-[13px] min-[400px]:text-[10px] text-[8px]'
							>
								{parse(line.lineCode)}
							</p>
						))}
					</div>
				</div>
				<div className='absolute w-18 h-10 right-0 min-[350px]:top-2 top-1 flex'>
					<Button
						size={'icon'}
						variant={'ghost'}
						className='cursor-pointer transition-[1s]'
						onClick={onCopy}
						disabled={copyStatus === 'success'}
					>
						{copyStatus === 'blur' ? <ClipboardList className='size-4 max-[420px]:size-3' /> : <Check className='size-4 max-[420px]:size-3' />}
					</Button>
					<Modal copyStatus={copyStatus} onCopy={onCopy} />
				</div>
				<div className='absolute left-[25%] top-[25%] w-[250px] h-[250px]  bg-[#005AFF] blur-[350px] z-0'></div>
			</div>
		</div>
	)
}

export default CodePriview
