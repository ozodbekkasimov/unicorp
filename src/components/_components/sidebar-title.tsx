import { Button } from '../ui/button'

export default function SidebarTitle({ title }: { title: string }) {
	return (
		<div className='w-full h-[15%] flex items-center justify-between px-4'>
			<p className='text-[#ccc] sf-pro-display font-[500] text-[13px]'>
				{title}
			</p>
			<Button size={'icon'} variant={'ghost'}>
				<img src='/vscode/menu.svg' alt='Menu' className='size-[15px]' />
			</Button>
		</div>
	)
}
